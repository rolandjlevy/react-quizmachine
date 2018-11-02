import React from 'react';

function Question ({ question, id, updateScore }) {

    function handleSubmit(event) {
        event.preventDefault();
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
                                        onClick={(event) => {
                                            event.preventDefault();
                                            updateScore(question.id, answer.type);
                                        }}
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