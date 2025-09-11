import { useState, useEffect, useCallback, useRef } from "react";
import { FeedArticle } from "@/types/feed.interface";

interface ApiResponse {
  posts: FeedArticle[];
  hasMore: boolean;
  currentPage: number;
  totalCount: number;
}

export function useInfiniteScroll() {
  const [posts, setPosts] = useState<FeedArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const observerRef = useRef<HTMLDivElement>(null);

  const fetchPosts = useCallback(
    async (pageNum: number, append: boolean = false) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/feed?page=${pageNum}&limit=5`);

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
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err instanceof Error ? err.message : "Сталася помилка");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const loadMore = useCallback(() => {
    if (hasMore && !loading) {
      fetchPosts(page + 1, true);
    } else {
      console.log(`Not loading more: hasMore=${hasMore}, loading=${loading}`);
    }
  }, [hasMore, loading, page, fetchPosts]);

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

  useEffect(() => {
    fetchPosts(1, false);
  }, []);

  return {
    posts,
    loading,
    hasMore,
    error,
    observerRef,
    retry: () => fetchPosts(1, false),
  };
}
