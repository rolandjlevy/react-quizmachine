import React from 'react';

function Score({ points, result }) {
    return(
        <div>
            <p>Score: {points} </p>
            <ul>
            {result &&
            result.map((item, index) => {
                const status = item.correct === 'YES' ? 'Correct' : 'Wrong'
                return  <li key={item.question}>
                            Question {index+1}: {item.answer} => {status} answer
                        </li>
            })}
            </ul>
        </div>
    )
}

export default Score;