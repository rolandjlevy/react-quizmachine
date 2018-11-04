import React from 'react';

function Next({ currentQuestion, nextQuestion, fetchQuestion, difficulty }) {
    const nextButton = 
    (<button onClick={() => {
        nextQuestion();
        fetchQuestion(difficulty);
        }}>
        Next question &#187;
    </button>)
    return(
        <div>
            Q:{currentQuestion}
        </div>
    )
}

export default Next;