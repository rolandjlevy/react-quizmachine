function scoreDisplayedReducer (state = { 
    display: '' 
}, action) {
    switch (action.type) {
        case 'DISPLAY_SCORE':
            return Object.assign({}, state, { 
                display: `Question ${action.display}`
            }) 
        default:
            return state
    }
}

export default scoreDisplayedReducer;