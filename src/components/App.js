import React from 'react';
import QuestionsContainer from '../containers/QuestionsContainer';
import "../styles/App.scss";

class App extends React.Component {

  render(){
    return (
      <main>
        <h1>Quiz questions</h1>
        <QuestionsContainer />
      </main>
    )
  }
}

export default App;
