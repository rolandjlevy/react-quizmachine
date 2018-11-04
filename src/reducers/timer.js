function timer(state = 'Ready', action) {
    switch (action.type) {
        case 'START_TIMER':
            return action.max;
        case 'STOP_TIMER':
            return 0;
        default:
            return state;
    }
}