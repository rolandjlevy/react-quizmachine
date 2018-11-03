import { connect } from 'react-redux';
import ScoreDisplay from '../components/ScoreDisplay.js';
import { displayScore } from '../actions';

// call scoreDisplayedReducer
const mapStateToProps = state => {
    // console.log(`ScoreDisplayContainer > mapStateToProps: `, state)
    return {
        display: state.scoreDisplayedReducer
    }
}

// dispatch actions to reducers
const mapDispatchToProps = dispatch => {
    return {
        displayScore: (content) => dispatch(displayScore(content))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScoreDisplay)






