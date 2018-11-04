import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestion, receiveAnswer } from '../actions';

const mapStateToProps = state => {
    // console.log(`Step 6 - calling mapStateToProps`)
    console.log(`mapStateToProps > state: `, state)
    return {
        question: state.question.question,
        difficulty: state.difficulty
    }
}

const mapDispatchToProps = dispatch => {
    // console.log(`Step 2: getting action creator`)
    return {
        fetchQuestion: (difficulty) => dispatch(fetchQuestion(difficulty)),
        receiveAnswer: (answer, question) => dispatch(receiveAnswer(answer, question))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question)
