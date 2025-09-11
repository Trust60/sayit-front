import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function FeedCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 bg-card p-4 rounded-2xl shadow-md">
      <div className="flex items-center gap-4">
        <Skeleton className="size-10 rounded-full" />
        <div>
          <Skeleton className="h-5 w-32 mb-1" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      <Skeleton className="w-full h-64 rounded-lg" />

      <div>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>

      <Separator />

      <div className="flex items-center gap-2">
        <Skeleton className="h-5 w-5" />
        <Skeleton className="h-4 w-8" />
      </div>
    </div>
  );
}
