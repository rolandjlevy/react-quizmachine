import React from "react";

function CategorySelector({ setCategory }) {
  const categories = ["easy", "medium", "hard"];
  return (
    <select onChange={(event) => setCategory(event.target.value)}>
      {categories.map(item => {
          return <option 
                    key={item}
                    value={item}
                  >
                    {item}
                </option>
      })}
    </select>
  );
}

export default CategorySelector;
