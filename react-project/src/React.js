import { useState } from "react";

function React() {
  let [count, setCount] = useState(0);

  const addValue = () => {
    setCount((prev) => {
      if (prev < 20) {
        return prev + 1;
      }
      return prev; 
    });
  };

  const removeValue = () => {
    setCount((prev) => {
      if (prev > 0) {
        return prev - 1; 
      }
      return prev;
    });
  };

  return (
    <div>
      React Component
      <h1>Counter value : {count} </h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </div>
  );
}

export default React;
