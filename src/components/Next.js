import React from 'react';

function Next({ currentQuestion, nextQuestion, fetchQuestion, category }) {
    const nextButton = 
    (<button onClick={() => {
        nextQuestion();
        fetchQuestion(category);
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