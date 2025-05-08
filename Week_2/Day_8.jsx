Day 8: Lifting state up, component communication

Concept 1: Lifting State Up
When two or more components need to share the same state, you move that state up to their closest common ancestor.

Example:

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </>
  );
}

function ChildA({ count }) {
  return <h2>Count is: {count}</h2>;
}

function ChildB({ setCount }) {
  return <button onClick={() => setCount(prev => prev + 1)}>Increment</button>;
}

Component Communication Patterns
1. Parent → Child
Use props.


<Child message="Hello from parent!" />

Child → Parent
Use callback functions passed via props.

function Parent() {
  const showAlert = (msg) => alert(msg);
  return <Child sendAlert={showAlert} />;
}

function Child({ sendAlert }) {
  return <button onClick={() => sendAlert("Hello from child!")}>Click Me</button>;
}

Sibling → Sibling
Lift the shared state to the parent and use props to pass it down.