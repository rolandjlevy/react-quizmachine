function difficulty(state = "easy", action) {
    switch (action.type){
        case "SET_CATEGORY":
            return action.difficulty
        default:
            return state
    }
}

export default difficulty;