Conditional rendering & lists

Conditional Rendering in React
Conditional rendering allows you to render elements based on conditions—just like if statements in JavaScript.

1. Using if Statements

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please log in.</h1>;
}

2. Using Ternary Operator

function Greeting(props) {
  return (
    <div>
      {props.isLoggedIn ? <h1>Hello, Shubham!</h1> : <h1>Guest User</h1>}
    </div>
  );
}

3. Using Logical AND (&&)

function WarningBanner(props) {
  return (
    <div>
      {props.showWarning && <p className="text-red-500">Warning!</p>}
    </div>
  );
}

Rendering Lists in React
Use the .map() function to render a list of items.


const users = ['Shubham', 'Amit', 'Neha'];

function UserList() {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

Small Practice Project: Todo List

function TodoApp() {
  const todos = ['Learn React', 'Practice JavaScript', 'Deploy App'];

  return (
    <div>
      <h2>My Todos</h2>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo, index) => <li key={index}>{todo}</li>)
        ) : (
          <p>No todos available</p>
        )}
      </ul>
    </div>
  );
}
