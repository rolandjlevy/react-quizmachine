import Timer from '../components/Timer';
import { startTimer, runTimer, resetTimer, fetchQuestion } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        timer: state.timer.timer,
        difficulty: state.difficulty
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startTimer: () => dispatch(startTimer()),
        runTimer: () => dispatch(runTimer()),
        resetTimer: () => dispatch(resetTimer()),
        fetchQuestion: (difficulty) => dispatch(fetchQuestion(difficulty))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer)
