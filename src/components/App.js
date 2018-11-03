import React from 'react';
import QuestionContainer from '../containers/QuestionContainer'

class App extends React.Component {
  render(){
    return (
      <main>
        <h1>Quiz questions</h1>
        <QuestionContainer />
      </main>
    )
  }
}

export default App;