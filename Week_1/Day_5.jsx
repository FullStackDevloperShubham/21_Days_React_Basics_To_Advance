1. What is Event Handling?
In React, you handle events similarly to DOM elements, but with camelCase syntax and passing functions directly.

Example:

function handleClick() {
  alert('Button clicked!');
}

<button onClick={handleClick}>Click Me</button>

Common React Events:
onClick

onChange

onSubmit

onMouseEnter

onKeyDown

2. Forms in React
Forms are used to capture user input. React uses controlled components where the form data is handled by the component's state.

Example: Controlled Input

import { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

3. Controlled vs Uncontrolled Components
Controlled: Form data is stored in state (useState)

Uncontrolled: You use ref to directly access the DOM element (less common in React)

Uncontrolled Example:

const inputRef = useRef();

const handleSubmit = (e) => {
  e.preventDefault();
  alert(inputRef.current.value);
};

<form onSubmit={handleSubmit}>
  <input type="text" ref={inputRef} />
  <button type="submit">Submit</button>
</form>