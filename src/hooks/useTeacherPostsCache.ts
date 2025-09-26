import { useState, useEffect, useCallback, useRef } from "react";
import { FeedArticle } from "@/types/feed.interface";
import {
  teacherPostsCache,
  CACHE_LIFETIME,
  clearTeacherPostsCache,
} from "@/lib/teacher-posts-cache";

interface ApiResponse {
  posts: FeedArticle[];
  hasMore: boolean;
  currentPage: number;
  totalCount: number;
}

interface CachedData {
  posts: FeedArticle[];
  hasMore: boolean;
  currentPage: number;
  totalCount: number;
  timestamp: number;
}

export function useTeacherPostsCache(teacherId: string) {
  const [posts, setPosts] = useState<FeedArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const observerRef = useRef<HTMLDivElement>(null);

  const getCachedData = useCallback((teacherId: string): CachedData | null => {
    const cached = teacherPostsCache.get(teacherId);
    return cached || null;
  }, []);

  const setCachedData = useCallback(
    (teacherId: string, data: Omit<CachedData, "timestamp">) => {
      teacherPostsCache.set(teacherId, {
        ...data,
        timestamp: Date.now(),
      });
    },
    []
  );

  const fetchPosts = useCallback(
    async (pageNum: number, append: boolean = false) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `/api/teacher/${teacherId}/posts?page=${pageNum}&limit=5`
        );

        if (!response.ok) {
          throw new Error("Помилка завантаження постів");
        }

        const data: ApiResponse = await response.json();

        if (append) {
          setPosts((prevPosts) => {
            const newPosts = [...prevPosts, ...data.posts];
            return newPosts;
          });
        } else {
          setPosts(data.posts);
        }

        setHasMore(data.hasMore);
        setPage(pageNum);

        if (pageNum === 1) {
          setCachedData(teacherId, {
            posts: data.posts,
            hasMore: data.hasMore,
            currentPage: data.currentPage,
            totalCount: data.totalCount,
          });
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err instanceof Error ? err.message : "Сталася помилка");
      } finally {
        setLoading(false);
      }
    },
    [teacherId, setCachedData]
  );

  const loadMore = useCallback(() => {
    if (hasMore && !loading) {
      fetchPosts(page + 1, true);
    }
  }, [hasMore, loading, page, fetchPosts]);

  useEffect(() => {
    const cachedData = getCachedData(teacherId);

    if (cachedData) {
      setPosts(cachedData.posts);
      setHasMore(cachedData.hasMore);
      setPage(cachedData.currentPage);
      setLoading(false);
    } else {
      fetchPosts(1, false);
    }
  }, [teacherId, getCachedData, fetchPosts]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentObserverRef = observerRef.current;
    if (currentObserverRef) {
      observer.observe(currentObserverRef);
    }

    return () => {
      if (currentObserverRef) {
        observer.unobserve(currentObserverRef);
      }
    };
  }, [hasMore, loading, loadMore]);

  const retry = useCallback(() => {
    fetchPosts(1, false);
  }, [fetchPosts]);

  return {
    posts,
    loading,
    hasMore,
    error,
    observerRef,
    retry,
  };
}
