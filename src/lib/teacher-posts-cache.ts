interface CachedData {
  posts: any[];
  hasMore: boolean;
  currentPage: number;
  totalCount: number;
  timestamp: number;
}

export const teacherPostsCache = new Map<string, CachedData>();

export const CACHE_LIFETIME = Infinity;

export function clearTeacherPostsCache(teacherId: string): void {
  teacherPostsCache.delete(teacherId);
}

export function clearAllTeacherPostsCache(): void {
  teacherPostsCache.clear();
}

export function clearExpiredCache(): void {
  const now = Date.now();
  for (const [teacherId, data] of teacherPostsCache.entries()) {
    if (now - data.timestamp > CACHE_LIFETIME) {
      teacherPostsCache.delete(teacherId);
    }
  }
}

export function getCacheSize(): number {
  return teacherPostsCache.size;
}

export function hasCachedData(teacherId: string): boolean {
  const cached = teacherPostsCache.get(teacherId);
  return cached !== undefined && Date.now() - cached.timestamp < CACHE_LIFETIME;
}
