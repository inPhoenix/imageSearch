import React from "react";

const Pagination = ({ imagesPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.round(totalPosts / imagesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='page-container'>
                {pageNumbers.map(number => (
                    <li
                        key={number}
                        className="page-item"
                        onClick={() => paginate(number)}
                    >
                        <div>{number}</div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
