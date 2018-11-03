export function displayScore (display) {
  return {
    type: 'DISPLAY_SCORE',
    display
  }
}

export function nextQuestion () {
  return {
    type: 'NEXT_QUESTION'
  }
}

export function fetchQuestionFromAPI() {
  return function(dispatch, getState) {
    const api = "https://opentdb.com/api.php?amount=10&category=11&type=multiple";
    fetch(api)
    .then(response => response.json())
    .then(body => {
        // console.log(`Step 3: body: ${body}`);
        dispatch(receiveQuestions(body.results))
    });
  }
}

export function receiveQuestions(questionsArray) {
  return {
      type: 'RECEIVE_QUESTIONS',
      questions: displayQuestions(questionsArray)
  }
}

export function updateScore(id, answer, result) {
  const updateResult = (result === 'correct') ? 'INCREASE_SCORE' : 'DECREASE_SCORE'
    return {
      type: updateResult,
      id,
      answer,
      result
    }
}

function displayQuestions(questionsArray) {
  let obj = {};
  questionsArray.map((quizObject, index) => {
    obj[index+1] = {id: index+1}
    Object.keys(quizObject).forEach(key => obj[index+1][key] = quizObject[key]);
    obj[index+1]["all_answers"] = [{text: obj[index+1].correct_answer, type: "correct"}]
    obj[index+1].incorrect_answers.forEach(item => {
      obj[index+1]["all_answers"].push({text: item, type: "incorrect"})
    })
    obj[index+1]["all_answers"] = randomizeAnswers((obj[index+1]["all_answers"]));
  })
  return obj;
}

function randomizeAnswers(answers) {
  return answers.map(a => ({key: Math.random(), value: a})).sort((a, b) => a.key - b.key).map(a => a.value); 
}