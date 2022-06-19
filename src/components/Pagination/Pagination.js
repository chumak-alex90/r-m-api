import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNum, setPageNum }) => {
  return (
    <ReactPaginate
      pageCount={info?.pages}
      forcePage={pageNum === 1 ? 0 : pageNum - 1}
      className="pagination justify-content-center gap-4 my-4 "
      previousLabel="Prev"
      nextLabel="Next"
      nextClassName="btn btn-light"
      previousClassName="btn btn-light"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setPageNum(data.selected + 1);
      }}
    />
  );
};

export default Pagination;
