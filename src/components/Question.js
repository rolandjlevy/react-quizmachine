import React from 'react';
import { decode } from "he";

class Question extends React.Component { 
    constructor() {
        super()
    }

    componentDidMount () {
        // console.log(`Step 1: calling fetchQuestion`);
        this.props.fetchQuestion();
    }

    render () {
        const questionObject = this.props.question;
        return (
            !!questionObject &&
            (<article>
                <div>
                    Question: {decode(questionObject.question)}
                </div>
                <ul className="answers">
                    Answers: {questionObject.answersArray.map(answer => {
                        return  <li 
                                    className="answers__option" 
                                    key={answer}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        this.props.receiveAnswer(answer, questionObject);
                                    }}
                                >
                                    {decode(answer)}
                                </li>
                    })}
                </ul>
            </article>)
        )
    }
}

export default Question;