import React from 'react';

class Timer extends React.Component{ 
    constructor() {
        super()
    }

    componentDidMount() {
        this.timerCall = setInterval(() => { this.props.runTimer(10) }, 1000);
    }

    componentWillUpdate () {
        if (this.props.timer === 1) {
            // this.props.receiveAnswer('PASS', this.props.question);
            this.props.fetchQuestion(this.props.difficulty);
            clearInterval(this.timerCall);
            this.timerCall = setInterval(() => { this.props.runTimer(10) }, 1000);
        }
    }

    render () {
        return(
            <div>
                Time: {this.props.timer}
            </div>
        )
    }
}

export default Timer;