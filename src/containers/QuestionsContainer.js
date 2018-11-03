import { connect } from 'react-redux';
import Questions from '../components/Questions.js';
import { fetchQuestionFromAPI, updateScore } from '../actions';

// call questionsReceivedReducer
const mapStateToProps = state => {
    console.log(`QuestionContainer > mapStateToProps: `, state)
    return {
        questions: state.questionsReceivedReducer
    }
}

// receives fetchQuestionFromAPI() from Question.js component
const mapDispatchToProps = dispatch => {
    // dispatch actions to reducers
    return {
        fetchQuestionFromAPI: () => dispatch(fetchQuestionFromAPI()),
        updateScore: (id, answer, result) => dispatch(updateScore(id, answer, result))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions)