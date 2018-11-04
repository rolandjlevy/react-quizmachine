import { connect } from 'react-redux';
import Next from '../components/Next';
import { nextQuestion, fetchQuestion } from '../actions'

const mapStateToProps = state => {
    return {
        currentQuestion: state.next.currentQuestion
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nextQuestion: () => dispatch(nextQuestion()),
        fetchQuestion: (difficulty) => dispatch(fetchQuestion(difficulty))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Next)