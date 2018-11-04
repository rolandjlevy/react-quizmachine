import React from 'react';
import { decode } from "he";

class Question extends React.Component { 

    constructor(props) {
        super(props);
        this.state = { timer: 5 };
    }
    componentDidMount () {
        // console.log(`Step 1: calling fetchQuestion`);
        this.props.fetchQuestion();
    }

    decrementClock () {
        if (this.state.timer > 0) {    
            this.setState((prevstate) => ({ timer: prevstate.timer-1 }));
        }
    };

    loadNextQuestion () {
        setTimeout(() => this.props.fetchQuestion(), 5000);
        // this.setState({timer: 5});
        this.clockCall = setInterval(() => {
          this.decrementClock();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.clockCall);
    }

    render () {
        const questionObject = this.props.question;
        return (
            !!questionObject &&
            (<article>
                <div>
                {this.state.timer}{" "}{decode(questionObject.question)}
                </div>
                <ul className="answers">
                    {questionObject.answersArray.map(answer => {
                        return  <li 
                                    className="answers__option" 
                                    key={answer}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        this.props.receiveAnswer(answer, questionObject);
                                        this.loadNextQuestion();
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