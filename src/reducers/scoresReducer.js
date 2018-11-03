function scoresReducer(state = {
    answersGiven: [], 
    score: 0
}, action) {
    console.log(action.id, action.text, action.result)
    switch (action.type) {
        case 'INCREASE_SCORE':
            return Object.assign({}, state, {
                score: state.score + 1, 
                answersGiven: [...state.answersGiven, { answerId:action.id, answerGiven:action.answer, result:action.result }]
            });
        case 'DECREASE_SCORE':
            return Object.assign({}, state, {score: state.score - 1} );
        default:
            return state;
    }
}

export default scoresReducer;