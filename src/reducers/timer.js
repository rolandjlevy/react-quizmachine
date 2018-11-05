function timer(state = { timer: 10 }, action) {
    switch (action.type) {
        case 'RESET_TIMER':
        return { timer: "..." }
        case 'START_TIMER':
            return { timer: action.max }
        case 'RUN_TIMER':
            const updatedTime = (state.timer > 1) ? state.timer - 1 : action.max;
            return { timer: updatedTime }
        default:
            return state;
    }
}

export default timer;