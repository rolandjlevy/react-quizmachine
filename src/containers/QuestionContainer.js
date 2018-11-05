import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestion, receiveAnswer, startTimer } from '../actions';

const mapStateToProps = state => {
    return {
        question: state.question.question,
        difficulty: state.difficulty
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchQuestion: (difficulty) => dispatch(fetchQuestion(difficulty)),
        receiveAnswer: (answer, question) => dispatch(receiveAnswer(answer, question)),
        startTimer: () => dispatch(startTimer())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question)
