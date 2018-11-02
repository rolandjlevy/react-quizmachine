function scoresReducer(state = {
    answers: {}, 
    score: 0
}, action) {
    switch (action.type) {
        case 'INCREASE_SCORE':
            return Object.assign({}, state, {score: state.score + 1} )
        case 'DECREASE_SCORE':
            return Object.assign({}, state, {score: state.score - 1} )
        default:
            return state
    }
}

export default scoresReducer;