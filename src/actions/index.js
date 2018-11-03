export function fetchQuestion() {
  console.log(`Step 3: calling fetch`)
  return function(dispatch) {
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
      .then(response => response.json())
      .then(result => {
        dispatch(receiveQuestion(result.results[0]));
      })
      .catch(error => console.log(error));
  };
}


export function receiveQuestion(question) {
  console.log(`Step 4 - creating RECEIVE_QUESTION`)
  console.log({question})
  // question.answersArray = shuffle(
  //   question.incorrect_answers.concat(question.correct_answer)
  // );
  return {
    type: "RECEIVE_QUESTION",
    question
  };
}

function shuffle(answers) {
  return answers.map(a => ({key: Math.random(), value: a})).sort((a, b) => a.key - b.key).map(a => a.value); 
}

