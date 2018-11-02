import React from 'react';
import { decode } from 'he';

function Question ({ question, updateScore }) {

    return (
        <form>
            <h2>Question {question.id}</h2>
            <p>{question.question}</p>
            <h3>Answers</h3>
                <ul className="answers">
                    {  question.all_answers.map((answer) => {
                        return (<li key={answer.text}>
                                    <div 
                                        onClick={(event) => {
                                            event.preventDefault();
                                            updateScore(question.id, answer.type);
                                        }}
                                        className="answers__option"
                                    >{decode(answer.text, { 'isAttributeValue': true })}</div>                            
                                </li>)
                        })
                    }
                </ul>
        </form>
    )
}

export default Question;