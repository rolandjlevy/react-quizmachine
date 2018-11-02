import { connect } from 'react-redux';
import Questions from '../components/Questions.js';
import { fetchQuestionFromAPI, updateScore } from '../actions';

// call questionsOutput from questionsOutput reducer
const mapStateToProps = state => {
    console.log(`Calling mapStateToProps from QuestionContainer`, state)
    return {
        questions: state.questionsOutput
    }
}

// receives fetchQuestionFromAPI() from Question.js component
const mapDispatchToProps = dispatch => {
    // console.log(`Step 2: getting action creator`);
    return {
        fetchQuestionFromAPI: () => dispatch(fetchQuestionFromAPI()),
        updateScore: (id, result) => dispatch(updateScore(id, result))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions)