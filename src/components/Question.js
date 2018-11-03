import React from 'react';
// import { decode } from "he";

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
                    Question: {questionObject.question}
                </div>
                <div>
                    <ul>
                    Answers: {questionObject.answersArray.map(item => {
                        return <li key={item}>{item}</li>
                    })}
                    </ul>
                </div>
            </article>)
        )
    }
}

export default Question;