import React from 'react';
import { decode } from "he";

class Question extends React.Component { 

    constructor(props) {
        super(props);
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
                    Difficulty: {questionObject.difficulty}
                </div>
                <div>
                    {decode(questionObject.question)}
                </div>
                <ul className="answers">
                    {questionObject.answersArray.map(answer => {
                        return  <li 
                                    className="answers__option" 
                                    key={answer}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        this.props.receiveAnswer(answer, questionObject);
                                        this.props.fetchQuestion();
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