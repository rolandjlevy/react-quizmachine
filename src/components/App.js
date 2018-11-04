import React from 'react';
import QuestionContainer from '../containers/QuestionContainer';
import ScoreContainer from '../containers/ScoreContainer';
import NextContainer from '../containers/NextContainer';
import "../styles/App.scss";

class App extends React.Component {
  render(){
    return (
      <main>
        <h1>Quiz Machine</h1>
        <NextContainer />
        <QuestionContainer />
        <ScoreContainer />
      </main>
    )
  }
}

export default App;