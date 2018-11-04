import React from 'react';

function Next({ currentQuestion, nextQuestion, fetchQuestion, difficulty }) {
    const nextButton = 
    (<button onClick={() => {
        nextQuestion();
        fetchQuestion(difficulty);
        }}>
        Next question &raquo;
    </button>)
    return(
        <div>
            Question: {currentQuestion}
        </div>
    )
}

export default Next;