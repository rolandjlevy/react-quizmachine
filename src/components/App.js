import React from 'react';
import PaginationContainer from '../containers/PaginationContainer';
import ScoreDisplayContainer from '../containers/ScoreDisplayContainer';
import QuestionsContainer from '../containers/QuestionsContainer';
import "../styles/App.scss";

class App extends React.Component {

  render(){
    return (
      <main>
        <h1>Quiz questions</h1>
        <PaginationContainer />
        <ScoreDisplayContainer />
        <QuestionsContainer />
      </main>
    )
  }
}

export default App;
