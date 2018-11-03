import { connect } from 'react-redux';
import Questions from '../components/Questions.js';
import { fetchQuestionFromAPI, updateScore } from '../actions';

// call questionsReceivedReducer
const mapStateToProps = state => {
    console.log(`Calling mapStateToProps from QuestionContainer`, state)
    return {
        questions: state.questionsReceivedReducer
    }
}

// receives fetchQuestionFromAPI() from Question.js component
const mapDispatchToProps = dispatch => {
    // console.log(`Step 2: getting action creator`);
    return {
        fetchQuestionFromAPI: () => dispatch(fetchQuestionFromAPI()),
        updateScore: (id, answer, result) => dispatch(updateScore(id, answer, result))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions)