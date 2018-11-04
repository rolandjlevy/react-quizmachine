import { connect } from 'react-redux';
import Score from '../components/Score';
// import { receiveAnswer } from '../actions';

const mapStateToProps = state => {
    return {
        points: state.score.points,
        result: state.score.result
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         receiveAnswer: dispatch(receiveAnswer());
//     }
// }

export default connect(
    mapStateToProps
    // ,mapDispatchToProps
)(Score)