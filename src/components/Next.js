import React from 'react';

function Next({ currentQuestion, nextQuestion, fetchQuestion }) {
    return(
        <div>
            <p>Question: {currentQuestion}
            <button onClick={() => {
                nextQuestion();
                fetchQuestion();
                }}>
                Next question &raquo;
            </button> </p>
        </div>
    )
}

export default Next;