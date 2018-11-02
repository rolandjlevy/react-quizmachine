import React from 'react';

function Question ({ question, id, updateScore }) {

    function handleSubmit(event) {
        event.preventDefault();
    }

    function selectAnswer(event, id) {
        event.preventDefault();
        if (event.target.id === 'correct') {
            // console.log(`Question ${id} is correct`);
            updateScore(id, 'correct');
        } else {
            // console.log(`Question ${id} is incorrect`);
            updateScore(id, 'incorrect');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Question {question.id}</h2>
            <p>{question.question}</p>
            <h3>Answers</h3>
                <ul className="answers">
                    {  question.all_answers.map((answer, index) => {
                        return (<li key={answer.text}>
                                    <div 
                                        onClick={(event, id) => selectAnswer(event, question.id)} 
                                        id={answer.type}
                                        className="answers__option"
                                    >{answer.text}</div>
                                </li>)
                        })
                    }
                </ul>
        </form>
    )
}

export default Question;