import Timer from '../components/Timer';
import { startTimer, runTimer } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        currentTime: state.timer.currentTime
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startTimer: (max) => dispatch(startTimer(max)),
        runTimer: () => dispatch(runTimer())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer)
