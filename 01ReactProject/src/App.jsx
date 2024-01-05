import { useState } from "react";

import "./App.css";

function App() {
  //let counter = 15;
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    //counter += 1;
    setCounter(counter + 1);
  };

  const addMultipleValue = () => {
    setCounter((previousCounter) => previousCounter + 1);
    setCounter((previousCounter) => previousCounter + 1);
    setCounter((previousCounter) => previousCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React self-learning</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={addMultipleValue}>Add Multiple Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
