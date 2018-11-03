import { connect } from 'react-redux';
import Questions from '../components/Questions.js';
import { fetchQuestionFromAPI, updateScore } from '../actions';

// call questionsReceivedReducer
const mapStateToProps = state => {
    return {
        questions: state.questionsReceivedReducer
    }
}

// dispatch actions to reducers
const mapDispatchToProps = dispatch => {
    return {
        fetchQuestionFromAPI: () => dispatch(fetchQuestionFromAPI()),
        updateScore: (id, answer, result) => dispatch(updateScore(id, answer, result))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions)