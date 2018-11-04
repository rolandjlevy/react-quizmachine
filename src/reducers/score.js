function score (state = {
    points : 0,
    result: []
}, action) {
    const correct = action.type === 'CORRECT_ANSWER' ? 'YES' : 'NO';
    const question = !!action.question ? action.question.question : null;
    const result = [...state.result, { question, answer: action.answer, correct}];
    switch (action.type) {
        case 'CORRECT_ANSWER':
            return {
                points: state.points + 1,
                result
            }
        case 'INCORRECT_ANSWER':
            return {
               points: state.points,
               result
            } 
        default:
            return state;
    }
}

export default score;