// import React from 'react';

// function Timer({ currentTime }) {
//     return(
//         <div>
//             <p>Time: {currentTime}</p>
//         </div>
//     )
// }

// export default Timer;

import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { timer: 30 };
    }
      
    startTimer () {
        this.timerCall = setInterval(() => {
            this.runTimer();
        }, 1000);
    }
      
    runTimer () {  
        if (this.state.timer === 0) clearInterval(this.timerCall)
        this.setState((prevstate) => ({ timer: prevstate.timer-1 }));
    };
      
    componentWillUnmount() {
        clearInterval(this.timerCall);
    }

    render() {  
        return (
            <div>
                <button onClick={this.startTimer}>Start</button>
                 {this.state.timer === 0 ? 'Times Up!' : this.state.timer }
            </div>
        )
    }
};

export default Timer;