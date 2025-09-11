import { usePagination } from "../../hooks/usePagination";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  paginationItemsToDisplay?: number;
  onPageChange?: (page: number) => void;
};

export default function CustomPagination({
  currentPage,
  totalPages,
  paginationItemsToDisplay = 5,
  onPageChange,
}: PaginationProps) {
  const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
    currentPage,
    totalPages,
    paginationItemsToDisplay,
  });

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous page button */}
        <PaginationItem>
          <PaginationPrevious
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50 cursor-pointer"
            onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
            aria-disabled={currentPage === 1 ? true : undefined}
          />
        </PaginationItem>

        {/* Left ellipsis (...) */}
        {showLeftEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Page number links */}
        {pages.map((page: number) => (
          <PaginationItem key={page}>
            <PaginationLink
              className="cursor-pointer"
              onClick={() => onPageChange?.(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Right ellipsis (...) */}
        {showRightEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next page button */}
        <PaginationItem>
          <PaginationNext
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50 cursor-pointer"
            onClick={() =>
              currentPage < totalPages && onPageChange?.(currentPage + 1)
            }
            aria-disabled={currentPage === totalPages ? true : undefined}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
