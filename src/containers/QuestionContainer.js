import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestion } from '../actions';

const mapStateToProps = state => {
    console.log(`Step 6 - calling mapStateToProps`)
    return {
        question: state.question.question
    }
}

const mapDispatchToProps = dispatch => {
    console.log(`Step 2: getting action creator`)
    return {
        fetchQuestion: () => dispatch(fetchQuestion())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question)
