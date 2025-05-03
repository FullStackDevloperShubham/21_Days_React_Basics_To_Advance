What is useState?
useState is a React Hook that lets you add state to functional components. It's used to store values that may change over time (like form inputs, counters, toggles, etc.).

Syntax:

const [state, setState] = useState(initialValue);

state: current state value.

setState: function to update the state.

initialValue: the initial value of the state.

Example 

import React, {useState} from "react"

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;

Tips:
useState can hold any data type: string, number, boolean, object, array, etc.

Updating state re-renders the component.

Avoid mutating the state directly (especially with objects/arrays).

Multiple States Example

const [name, setName] = useState("Shubham");
const [age, setAge] = useState(23);