import React from 'react';
import { decode } from "he";

class Question extends React.Component { 

    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.props.fetchQuestion(this.props.difficulty);
    }

    render () {
        const questionObject = this.props.question;
        return (
            !!questionObject &&
            (<article>
                <h2>
                    {decode(questionObject.question)}
                </h2>
                <ul className="answers">
                    {questionObject.answersArray.map(answer => {
                        return  <li 
                                    className="answers__option" 
                                    key={answer}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        this.props.receiveAnswer(answer, questionObject);
                                        this.props.fetchQuestion(this.props.difficulty);
                                    }}
                                >
                                    {decode(answer)}
                                </li>
                    })}
                </ul>
            </article>) || null
        )
    }
}

export default Question;