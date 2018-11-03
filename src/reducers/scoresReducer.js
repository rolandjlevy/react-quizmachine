function scoresReducer(state = {
    answersGiven: [], 
    score: 0
}, action) {
    const answersGiven = [...state.answersGiven, { 
        questionId: action.id, 
        answerGiven: action.answer, 
        result: action.result 
    }]
    switch (action.type) {
        case 'INCREASE_SCORE':
            return Object.assign({}, state, {
                score: state.score + 1, 
                answersGiven
            });
        case 'DECREASE_SCORE':
            return Object.assign({}, state, {
                score: state.score - 1,
                answersGiven
            });
        default:
            return state;
    }
}

export default scoresReducer;