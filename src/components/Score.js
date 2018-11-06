import React from 'react';
import { decode } from "he";

function Score({ points, result }) {
    
    return(
        <div>
            <p>Score: {points} </p>
            <div className="score">
                <ul className="score__items">
                {result &&
                result.map((item, index) => {
                    const status = item.correct === 'PASS' ? 'Passed' : (item.correct === 'YES' ? 'Correct answer!' : 'Wrong answer');
                    const iconStyle = item.correct === 'PASS' ? 'score__item-passed' : (item.correct ==='YES' ? 'score__item-correct' : 'score__item-incorrect');
                    return  <li className={iconStyle} key={item.question}>
                                <strong>Question {index+1}: {status}</strong><br />
                                &bull; Q: "{decode(item.question)}" <br />
                                &bull; A: "{decode(item.answer)}"
                            </li>
                })}
                </ul>
            </div>
        </div>
    )
}

export default Score;