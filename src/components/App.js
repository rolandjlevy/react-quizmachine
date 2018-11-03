import React from 'react';
import QuestionContainer from '../containers/QuestionContainer'
import ScoreContainer from '../containers/ScoreContainer'
import "../styles/App.scss";

class App extends React.Component {
  render(){
    return (
      <main>
        <h1>Quiz questions</h1>
        <QuestionContainer />
        <ScoreContainer />
      </main>
    )
  }
}

export default App;