import { connect } from 'react-redux';
import CategorySelector from "../components/CategorySelector";
import { setCategory } from "../actions";

const mapStateToProps = state => {
    // console.log(`mapStateToProps: `, state)
    return {
        category: state.categorySelector
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setCategory: category => dispatch(setCategory(category))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategorySelector)