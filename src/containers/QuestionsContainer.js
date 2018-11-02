import { connect } from 'react-redux';
import Questions.js from '../components/Questions.js'
import {  } from '../actions';

function mapStateToProps(state) {
    return {
        questions: state.questions
    }
}

export default connect(
    mapStateToProps
)(Questions)