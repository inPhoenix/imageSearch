import React, { useState } from "react";
import { number, func } from "prop-types";

const Pagination = ({ imagesPerPage, totalPosts, paginate }) => {
  const [page, setPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.round(totalPosts / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePaginate = number => {
    paginate(number);
    setPage(number);
  };

  const classname = number =>
    ["page-item", page === number ? "selected" : ""].join(" ");

  return (
    <nav>
      <ul className="page-container">
        {pageNumbers.map(number => (
          <li
            key={number}
            className={classname(number)}
            onClick={() => handlePaginate(number)}
          >
            <div>{number}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  imagesPerPage: number.isRequired,
  totalPosts: number.isRequired,
  paginate: func.isRequired
};

export default Pagination;
