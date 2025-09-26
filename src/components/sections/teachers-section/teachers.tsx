"use client";

import TeachersCard from "./teachers-card";
import { useTeachers } from "@/hooks/useTeachers";
import CustomPagination from "@/components/ui/custom-pagination";
import TeachersCardSkeleton from "./teachers-card-skeleton";

export default function TeachersSection() {
  const { teachers, loading, error, currentPage, totalPages, fetchTeachers } =
    useTeachers();

  const handlePageChange = (page: number) => {
    fetchTeachers(page);
  };

  if (error) {
    return (
      <div className="max-w-[850px] xl:max-w-[1140px] mx-auto px-4">
        <div className="text-center py-10">
          <p className="text-red-500">Помилка завантаження: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[850px] xl:max-w-[1140px] mx-auto px-4">
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
          {Array.from({ length: 5 }).map((_, index) => (
            <TeachersCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
            {teachers.map((teacher) => (
              <TeachersCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center pb-10">
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                paginationItemsToDisplay={5}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
