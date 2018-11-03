import { connect } from 'react-redux';
import Pagination from '../components/Pagination.js';
import { nextQuestion } from '../actions';

const mapStateToProps = state => {
    console.log('mapStateToProps: ', state)
    return {
        currentQuestion: state.nextQuestionReducer
    }
}

// receives nextQuestion() from Pagination.js component
const mapDispatchToProps = dispatch => {
    return {
        nextQuestion: () => dispatch(nextQuestion())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)