export function fetchQuestion(difficulty) {
  return function(dispatch) {
    dispatch(resetTimer());
    const url = `https://opentdb.com/api.php?amount=1&difficulty=${difficulty.toLowerCase()}&type=multiple`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(result => {
        dispatch(receiveQuestion(result.results[0]));
        dispatch(startTimer());
      })
      .catch(error => console.log(error));
  };
}

export function receiveQuestion(question) {
  question.answersArray = shuffle(
    [...question.incorrect_answers, question.correct_answer]
  ); 
  return {
    type: 'RECEIVE_QUESTION',
    question
  };
}

function shuffle(answers) {
  return answers
  .map(a => ({key: Math.random(), value: a}))
  .sort((a, b) => a.key - b.key)
  .map(a => a.value); 
}

export function receiveAnswer(answer, question) {
  const answerType = (answer === question.correct_answer) ? 'CORRECT_ANSWER' : 'INCORRECT_ANSWER';
  return {
    type: answerType,
    answer,
    question
  };
}

export function nextQuestion() {
  return {
    type: 'NEXT_QUESTION'
  };
}

export function setDifficulty(difficulty) {
  return{
      type: "SET_CATEGORY",
      difficulty
  };
}

const max = 10;

export function startTimer () {
  return {
    type: 'START_TIMER',
    max
  };
}

export function runTimer () {
  return {
    type: 'RUN_TIMER',
    max
  };
}

export function resetTimer () {
  return {
    type: 'RESET_TIMER'
  };
}
