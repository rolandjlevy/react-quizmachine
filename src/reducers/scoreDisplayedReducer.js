function scoreDisplayedReducer (state = { 
    display: '' 
}, action) {
    switch (action.type) {
        case 'DISPLAY_SCORE':
            return Object.assign({}, state, { 
                display: `Question ${state.currentQuestion}`
            }) 
        default:
            return state
    }
}

export default scoreDisplayedReducer;