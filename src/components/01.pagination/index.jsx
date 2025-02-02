import React from "react";

const Pagination = ({ currentPage, totalPages = 10, onPageChange }) => {
  const generationNoOfPages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <>
      <div className="pagination">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="pagination-btn"
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {generationNoOfPages().map((pageNo) => (
          <button
            className={`pagination-btn ${
              currentPage === pageNo ? "acitve" : ""
            }`}
            key={pageNo}
            onClick={() => onPageChange(pageNo)}
          >
            {pageNo}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="pagination-btn"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
