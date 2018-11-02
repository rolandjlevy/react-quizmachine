function scoresReducer(state = {
    correctAnswersId: {}, 
    score: 0
}, action) {
    // console.log("action from scoresReducer: ", {action})
    switch (action.type) {
        case 'INCREASE_SCORE':
            return Object.assign({}, state, {
                score: state.score + 1, 
                correctAnswersId: Object.assign({}, state.correctAnswersId, { correctAnswersId: action.id })
            });
        case 'DECREASE_SCORE':
            return Object.assign({}, state, {score: state.score - 1} );
        default:
            return state;
    }
}

export default scoresReducer;