import React from "react";

function Pagination({ totalPages, page, setPage }) {
  const selectePageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  const renderPageKey = (currPage, key) => {
    return (
      <span
        key={key}
        className={page === currPage ? "pagination__selected" : null}
        onClick={() => selectePageHandler(currPage)}
      >
        {currPage}
      </span>
    );
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(renderPageKey(i, i));
    }
    return pageNumbers;
  };
  return (
    <div className="pagination-container">
      {totalPages > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectePageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            ◀️
          </span>
          {renderPageNumbers()}
          <span
            onClick={() => selectePageHandler(page + 1)}
            className={page < totalPages ? "" : "pagination__disable"}
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  );
}

export default Pagination;
