import React from "react";

function Difficulty({ setDifficulty }) {
  return (
    <React.Fragment>
      Level: 
      <select onChange={(event) => setDifficulty(event.target.value)}>
        {["Easy", "Medium", "Hard"].map(item => {
            return <option 
                      key={item}
                      value={item}
                    >
                      {item}
                  </option>
        })}
      </select>
    </React.Fragment>
  );
}

export default Difficulty;
