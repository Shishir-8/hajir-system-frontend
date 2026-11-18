
"use client";

import { PaginatedResponse } from "@/types/common";

type PaginationProps<T> = {
  data: PaginatedResponse<T>;
  onPageChange: (page: number) => void;
};

const GenericPagination = <T,>({
  data,
  onPageChange,
}: PaginationProps<T>) => {
  
  const { total_pages, count, current_page, next, previous, results } = data;

  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        Showing {results.length} of {count} records
      </p>

      <div className="flex items-center justify-end gap-2">
        {/* Previous */}
        <button
          type="button"
          aria-label="Previous"
          onClick={() => onPageChange(current_page - 1)}
          disabled={!previous}
          className="mr-2 disabled:opacity-30"
        >
          <svg width="9" height="16" viewBox="0 0 12 18" fill="none">
            <path
              d="M11 1L2 9.24242L11 17"
              stroke="currentColor"
              strokeOpacity="0.7"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-2">
          {Array.from({ length: total_pages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                disabled={page === current_page}
                className={`flex h-9 w-9 items-center justify-center rounded-md text-sm transition-all ${
                  page === current_page
                    ? "bg-primary text-white"
                    : "border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>

        {/* Next */}
        <button
          type="button"
          aria-label="Next"
          onClick={() => onPageChange(current_page + 1)}
          disabled={!next}
          className="ml-2 disabled:opacity-30"
        >
          <svg width="9" height="16" viewBox="0 0 12 18" fill="none">
            <path
              d="M1 1L10 9.24242L1 17"
              stroke="currentColor"
              strokeOpacity="0.7"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GenericPagination;
