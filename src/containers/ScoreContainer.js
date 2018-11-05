import { connect } from 'react-redux';
import Score from '../components/Score';

const mapStateToProps = state => {
    return {
        points: state.score.points,
        result: state.score.result
    }
}

export default connect(
    mapStateToProps
)(Score)