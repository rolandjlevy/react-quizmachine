import React from 'react';
import { decode } from "he";

function Score({ points, result }) {
    return(
        <div>
            <p>Score: {points} </p>
            <ul>
            {result &&
            result.map((item, index) => {
                const status = item.correct === 'YES' ? 'Correct' : 'Wrong'
                return  <li key={item.question}>
                            Question {index+1}: {decode(item.answer)} => {status} answer
                        </li>
            })}
            </ul>
        </div>
    )
}

export default Score;