function next(state = { 
    currentQuestion: 1 
}, action){
    switch (action.type) {
      case 'NEXT_QUESTION':
        return {
          currentQuestion: state.currentQuestion + 1
        }
      default:
        return state;
    }
  }
  
  export default next;