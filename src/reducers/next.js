function next(state = { 
    currentQuestion: 0 
}, action){
    switch (action.type) {
      case 'RECEIVE_QUESTION':
        return {
          currentQuestion: state.currentQuestion + 1
        }
      default:
        return state;
    }
  }
  
  export default next;