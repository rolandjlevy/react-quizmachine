import React from 'react';
import Question from './Question';

class Questions extends React.Component {

    componentDidMount () {
        // calling this.props.fetchQuestionFromAPI() received from container: mapDispatchToProps
        this.props.fetchQuestionFromAPI(); 
    }

    render () {
        // this.props.questions received from container: mapStateToProps
        return (
        <div>
            {Object.keys(this.props.questions).map(id => {
                return <Question 
                            question={this.props.questions[id]}
                            updateScore={this.props.updateScore}
                            id={id}
                            key={id}
                        />
            })}
        </div>
        )
    }
}

export default Questions;
