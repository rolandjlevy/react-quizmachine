import React from 'react';
import NextContainer from '../containers/NextContainer';
import DifficultyContainer from '../containers/DifficultyContainer';
// import TimerContainer from '../containers/TimerContainer';
import Timer from '../components/Timer';
import QuestionContainer from '../containers/QuestionContainer';
import ScoreContainer from '../containers/ScoreContainer';
import "../styles/App.scss";

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <header className="header">
          <h1>Quiz Machine</h1>
        </header>
        <nav className="nav">
          <ul className="nav__info">
            <li><NextContainer /></li>
            <li><DifficultyContainer /></li>
            <li><Timer /></li>
            {/* <TimerContainer /> */}
          </ul>
        </nav>
        <main className="main">
          <QuestionContainer />
          <ScoreContainer />
        </main>
      </React.Fragment>
    )
  }
}

export default App;