🧠 What Are Props ?
    Props(short for properties) are how data is passed from parent to child components in React.

Syntax Example:

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// Usage
<Welcome name="Shubham" />


Or using destructuring:

    function Welcome({ name }) {
        return <h1>Hello, {name}</h1>;
    }

🔁 Props Drilling
This happens when you pass data through multiple levels of components, even if some intermediate components don't need it — they just pass it along.


Example:

function App() {
  const user = "Shubham";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h2>Welcome, {user}!</h2>;
}

How to Avoid Props Drilling?
Context API

State management tools (like Redux, Zustand, Jotai, etc.)