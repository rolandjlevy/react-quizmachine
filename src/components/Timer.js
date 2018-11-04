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
        this.state = { timer: 10 };
    }

    componentDidMount () {
        this.startTimer();
    }
      
    startTimer () {
        this.timerCall = setInterval(() => { this.runTimer() }, 1000);
    }

    runTimer () {
        if (this.state.timer > 1) {    
            this.setState(prevstate => ({ timer: prevstate.timer - 1 }));
        } else {
            this.setState({ timer: 10 });
        }
    };

    render() {  
        return (
            <div>
                 Time: {this.state.timer}
            </div>
        )
    }
};

export default Timer;