export function fetchQuestionFromAPI() {
  return function(dispatch, getState) {
    console.log(`Step 3: calling fetch`);
    const api = "https://opentdb.com/api.php?amount=10&category=11&type=multiple";
    fetch(api)
    .then(response => response.json())
    .then(body => {
        console.log(`Step 3: body: ${body}`);
        dispatch(receiveQuestions(body.results))
    });
  }
}

export function receiveQuestions(questionsArray) {
  console.log(`Step 4 - creating RECEIVE_QUESTION question object`);
  return {
      type: 'RECEIVE_QUESTIONS',
      questions: displayQuestions(questionsArray)
  }
}

export function updateScore(id, result) {
  if (result === 'correct') {
    return {
      type: 'INCREASE_SCORE',
    }
  } else {
    return {
      type: 'DECREASE_SCORE',
    }
  }
}

function displayQuestions(questionsArray) {
  let obj = {};
  questionsArray.map((quizObject, index) => {
    obj[index+1] = {
      id: index+1
    }
    Object.keys(quizObject).forEach(key => {
      obj[index+1][key] = quizObject[key];
    })
    obj[index+1]["all_answers"] = [
      {text: obj[index+1].correct_answer, type: "correct"}
    ]
    obj[index+1].incorrect_answers.forEach(item => {
      obj[index+1]["all_answers"].push(
        {text: item, type: "incorrect"}
      )
    })
    obj[index+1]["all_answers"] = randomizeAnswers((obj[index+1]["all_answers"]));
  })
  return obj;
}

function randomizeAnswers(answers) {
  const shuffled = answers.map(a => ({key: Math.random(), value: a}))
  .sort((a, b) => a.key - b.key)
  .map(a => a.value); 
  return shuffled;
}