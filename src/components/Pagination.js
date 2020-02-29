import React from "react";

const Pagination = ({ imagesPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.round(totalPosts / imagesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li
                        key={number}
                        style={{ display: 'flex', padding: '10px', }}
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
