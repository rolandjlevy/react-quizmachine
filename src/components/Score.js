import React from 'react';
import { decode } from "he";

function Score({ points, result }) {

    return(
        <div>
            <p>Score: {points} </p>
            <ul className="score">
            {result &&
            result.map((item, index) => {
                const status = item.correct === 'YES' ? 'Correct' : 'Wrong'
                return  <li key={item.question}>
                            <strong>Question {index+1}: {status} answer</strong><br />
                            - Q: "{decode(item.question)}" <br />
                            - A: "{decode(item.answer)}"
                            {/* <span className={getClassName}>{decode(item.answer)}</span> */}
                            {/* <button onClick="#">[+]</button> */}
                        </li>
            })}
            </ul>
        </div>
    )
}

export default Score;