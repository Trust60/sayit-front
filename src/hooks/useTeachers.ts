import { useState, useEffect } from "react";
import { Teacher } from "@/types/teacher.interface";

interface TeachersResponse {
  teachers: Teacher[];
  hasMore: boolean;
  currentPage: number;
  totalCount: number;
}

interface UseTeachersReturn {
  teachers: Teacher[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
  totalCount: number;
  fetchTeachers: (page: number) => Promise<void>;
}

export function useTeachers(): UseTeachersReturn {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const fetchTeachers = async (page: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/teachers?page=${page}&limit=5`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: TeachersResponse = await response.json();

      setTeachers(data.teachers);
      setCurrentPage(data.currentPage);
      setHasMore(data.hasMore);
      setTotalCount(data.totalCount);
      setTotalPages(Math.ceil(data.totalCount / 5));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error fetching teachers:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers(1);
  }, []);

  return {
    teachers,
    loading,
    error,
    currentPage,
    totalPages,
    hasMore,
    totalCount,
    fetchTeachers,
  };
}
