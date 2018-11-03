import { connect } from 'react-redux';
import Score from '../components/Score';
// import { displayScore } from '../actions';

const mapStateToProps = state => {
    return {
        score: state.score.points
    }
}

export default connect(
    mapStateToProps
)(Score)