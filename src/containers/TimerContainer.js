import Timer from '../components/Timer';
import { startTimer, runTimer, resetTimer, fetchQuestion, receiveAnswer } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        timer: state.timer.timer,
        difficulty: state.difficulty,
        question: state.question.question
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startTimer: () => dispatch(startTimer()),
        runTimer: (max) => dispatch(runTimer(max)),
        resetTimer: () => dispatch(resetTimer()),
        fetchQuestion: (difficulty) => dispatch(fetchQuestion(difficulty)),
        receiveAnswer: (answer, question) => dispatch(receiveAnswer(answer, question))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer)
