import React from 'react';

function Pagination ({ nextQuestion }) {
    return (
        <button onClick={(event) => {
            event.preventDefault();
            nextQuestion();
        }}>
            Next &raquo;
        </button>
    )
}

export default Pagination;