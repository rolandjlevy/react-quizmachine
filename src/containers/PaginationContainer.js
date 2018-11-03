import { connect } from 'react-redux';
import Pagination from '../components/Pagination.js';
import { nextQuestion } from '../actions';

// call nextQuestionReducer
const mapStateToProps = state => {
    // console.log('mapStateToProps: ', state)
    return {
        currentQuestion: state.nextQuestionReducer
    }
}

// dispatch actions to reducers
const mapDispatchToProps = dispatch => {
    return {
        nextQuestion: () => dispatch(nextQuestion())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)