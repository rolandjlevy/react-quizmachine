import React from 'react';

function Next({ currentQuestion, nextQuestion, fetchQuestion }) {
    const nextButton = 
    (<button onClick={() => {
        nextQuestion();
        fetchQuestion();
        }}>
        Next question &raquo;
    </button>)
    return(
        <div>
            <p>Question: {currentQuestion}</p>
        </div>
    )
}

export default Next;