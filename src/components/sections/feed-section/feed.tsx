"use client";

import FeedCard from "./feed-card";
import FeedCardSkeleton from "./feed-card-skeleton";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

export default function FeedSection() {
  const { posts, loading, hasMore, error, observerRef, retry } =
    useInfiniteScroll();

  return (
    <div className="max-w-[850px] xl:max-w-[1140px] mx-auto px-4">
      <h2 className="text-lg font-semibold">Останні публікації</h2>
      <div className="grid grid-cols-1 gap-8 py-10">
        {posts.length > 0
          ? posts.map((post) => <FeedCard key={post.id} post={post} />)
          : !loading && (
              <div className="text-center py-10 text-muted-foreground">
                <p>Поки що немає публікацій</p>
              </div>
            )}

        {loading && (
          <div className="space-y-8">
            <FeedCardSkeleton />
            <FeedCardSkeleton />
          </div>
        )}

        {error && (
          <div className="text-center py-8 text-red-500">
            <p>Помилка завантаження: {error}</p>
            <button
              onClick={retry}
              className="mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Спробувати знову
            </button>
          </div>
        )}

        {hasMore && !loading && <div ref={observerRef} className="h-4" />}
      </div>
    </div>
  );
}
