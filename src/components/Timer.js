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
        this.state = { 
            timer: 10,
            status: "Ready..."
        };
    }

    componentDidMount () {
        this.startTimer();
    }
      
    componentWillUnmount() {
        clearInterval(this.timerCall);
    }
      
    startTimer () {
        this.timerCall = setInterval(() => {
            this.runTimer();
        }, 1000);
    }

    runTimer () {
        if (this.state.timer > 1) {    
            this.setState(prevstate => ({ 
                timer: prevstate.timer - 1,
                status: ""
            }));
        } else {
            this.setState({
                timer: 10,
                status: "Time up! Next question..."
            });
        }
    };

    render() {  
        return (
            <h2>
                 Time: {this.state.timer}  {this.state.status}
            </h2>
        )
    }
};

export default Timer;