import React from 'react';
import NextContainer from '../containers/NextContainer';
import CategorySelectorContainer from '../containers/CategorySelectorContainer';
// import TimerContainer from '../containers/TimerContainer';
// import Timer from '../components/Timer';
import QuestionContainer from '../containers/QuestionContainer';
import ScoreContainer from '../containers/ScoreContainer';
import "../styles/App.scss";

class App extends React.Component {
  render(){
    return (
      <main>
        <h1>Quiz Machine</h1>
        <NextContainer />
        <CategorySelectorContainer />
        {/* <TimerContainer /> */}
        {/* <Timer /> */}
        <QuestionContainer />
        <ScoreContainer />
      </main>
    )
  }
}

export default App;