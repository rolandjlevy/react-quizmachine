import React from 'react';
import { decode } from 'he';

function Question ({ question, updateScore }) {
    const questionDecoded = decode(question.question);
    return (
        <form>
            <h2>Question {question.id}</h2>
            <p>{questionDecoded}</p>
            <h3>Answers</h3>
                <ul className="answers">
                    {  question.all_answers.map((answer) => {
                        const decodedAnswer = decode(answer.text);
                        return (<li key={answer.text}>
                                    <div 
                                        onClick={(event) => {
                                            event.preventDefault();
                                            updateScore(question.id, answer.type);
                                        }}
                                        className="answers__option"
                                    >{decodedAnswer}</div>                            
                                </li>)
                        })
                    }
                </ul>
                <hr />
        </form>
    )
}

export default Question;