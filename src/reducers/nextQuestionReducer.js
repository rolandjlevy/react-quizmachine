function nextQuestionReducer (state = {
    currentQuestion: 0
}, action) {
    switch (action.type) {
        case 'NEXT_QUESTION':
        return Object.assign({}, state, {
            currentQuestion: state.currentQuestion + 1
        });
    default:
        return state;
    }
}

export default nextQuestionReducer;