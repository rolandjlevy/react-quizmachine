import React from 'react';

function Next({ currentQuestion, nextQuestion, fetchQuestion }) {
    return(
        <div>
            <p>Current question: {currentQuestion} </p>
            <button onClick={() => {
                nextQuestion();
                fetchQuestion();
                }}>
                Next question &raquo;
            </button>
        </div>
    )
}

export default Next;