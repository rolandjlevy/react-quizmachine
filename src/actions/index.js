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
  question.answersArray = shuffle(
    [...question.incorrect_answers, question.correct_answer]
  ); 
  console.log(`Step 4 - creating RECEIVE_QUESTION`, question.answersArray)
  return {
    type: "RECEIVE_QUESTION",
    question
  };
}

function shuffle(answers) {
  return answers
  .map(a => ({key: Math.random(), value: a}))
  .sort((a, b) => a.key - b.key)
  .map(a => a.value); 
}

