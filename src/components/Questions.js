import React from 'react';
import Question from './Question';

class Questions extends React.Component {

    componentDidMount () {
        // this.props.fetchQuestionFromAPI() received from container: mapDispatchToProps
        this.props.fetchQuestionFromAPI(); 
        console.log(`Step 1: calling fetchQuestionFromAPI`);
    }

    render () {
        // this.props.questions received from container: mapStateToProps
        const idKeys = Object.keys(this.props.questions); 
        return (
        <div>
            {idKeys.map(id => {
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
