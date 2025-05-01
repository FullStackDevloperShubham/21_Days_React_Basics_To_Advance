// 1. JSX (JavaScript XML)
// JSX lets you write HTML-like code inside JavaScript.

Example

const element = <h1>Hello, Shubham!</h1>;

Key Rules:

Must return one parent element.

Use className instead of class.

Expressions go inside {}.

// 2. Rendering Elements
// Use ReactDOM.createRoot() and .render() to render JSX into the DOM.

Example:

import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, React!</h1>);

// 3. Functional Components
// Functional components are basic JS functions that return JSX.

function Welcome() {
    return <h2>Welcome to Day 1!</h2>;
  }

// Render the component:

root.render(<Welcome />);
  

// Using Props

function Greeting(props) {
    return <h3>Hello, {props.name}!</h3>;
  }
  
  root.render(<Greeting name="Shubham" />);