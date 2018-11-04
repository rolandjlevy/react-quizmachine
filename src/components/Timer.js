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
    constructor () {
        super()
        this.state = {
            elapsed: 0
        }
    }

    componentDidMount (){
        this.timer = setInterval(this.tick, 50);
    }

    componentWillUnmount (){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({elapsed: new Date() - this.props.start});
    }

    render() {
        const elapsed = Math.round(this.state.elapsed / 100);
        const seconds = (elapsed / 10).toFixed(1);    
        return (
            <div>
                Time: {seconds}
            </div>
        )
    }
};

export default Timer;