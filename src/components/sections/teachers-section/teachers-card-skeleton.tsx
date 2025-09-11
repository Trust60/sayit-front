import { Skeleton } from "@/components/ui/skeleton";

export default function TeachersCardSkeleton({ key }: { key: number }) {
  return (
    <div
      key={key}
      className="flex flex-col gap-4 bg-card rounded-2xl shadow-md p-1"
    >
      <div className="flex items-center relative">
        <Skeleton className="h-[200px] w-[350px]" />
      </div>
      <div className="px-4 space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}
