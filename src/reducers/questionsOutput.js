function questionsOutput(state = [], action){
  console.log(`Step 5 - setting question in state`);
  switch (action.type) {
    case 'RECEIVE_QUESTIONS':
      return action.questions
    default:
      return state
  }
}

export default questionsOutput;
