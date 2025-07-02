'use client';

interface ProductsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function ProductsPagination({
  currentPage,
  totalPages,
  onPageChange
}: ProductsPaginationProps) {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta);
         i <= Math.min(totalPages - 1, currentPage + delta);
         i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="join">
        {/* Previous Button */}
        <button
          className={`join-item btn ${currentPage === 1 ? 'btn-disabled' : ''}`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Page Numbers */}
        {getVisiblePages().map((page, index) => (
          <button
            key={index}
            className={`join-item btn ${
              page === currentPage ? 'btn-active btn-primary' : ''
            } ${page === '...' ? 'btn-disabled' : ''}`}
            onClick={() => typeof page === 'number' ? onPageChange(page) : null}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          className={`join-item btn ${currentPage === totalPages ? 'btn-disabled' : ''}`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
} 