import { connect } from 'react-redux';
import Difficulty from "../components/Difficulty";
import { setDifficulty } from "../actions";

const mapStateToProps = state => {
    // console.log(`mapStateToProps: `, state)
    return {
        difficulty: state.difficulty
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setDifficulty: difficulty => dispatch(setDifficulty(difficulty))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Difficulty)