import React from 'react';

function Pagination ({ nextQuestion }) {
    return (
        <button onClick={(event) => {
            event.preventDefault();
            nextQuestion();
        }}>
        Next question &raquo;
        </button>
    )
}

export default Pagination;