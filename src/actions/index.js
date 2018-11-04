export function fetchQuestion(difficulty) {
  // console.log(`Step 3: calling fetch`)
  return function(dispatch) {
    const url = `https://opentdb.com/api.php?amount=1&difficulty=${difficulty}&type=multiple`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(result => {
        dispatch(receiveQuestion(result.results[0]));
      })
      .catch(error => console.log(error));
  };
}

export function receiveQuestion(question) {
  // console.log(`Step 4 - creating RECEIVE_QUESTION`, question.answersArray)
  question.answersArray = shuffle(
    [...question.incorrect_answers, question.correct_answer]
  ); 
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

export function startTimer(max) {
  return {
    type: 'START_TIMER',
    max
  };
}

export function setDifficulty(difficulty) {
  return{
      type: "SET_CATEGORY",
      difficulty
  }
}

// function runTimer (timer) {
//   if (timer > 1) {    

//   } else {
//       this.setState({timer: "Done"});
//       clearInterval(timerCall);
//   }
// };

// function stopTimer () {
//   timerCall = setInterval(() => { runTimer()}, 1000);
// }
