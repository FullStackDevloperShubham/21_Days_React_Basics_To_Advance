Day 6: useEffect (lifecycle in React)

useEffect — React's Lifecycle Hook
What is useEffect?
useEffect is a React Hook that lets you perform side effects in your functional components — like fetching data, changing the DOM, setting up subscriptions, etc.

It replaces lifecycle methods like:

componentDidMount

componentDidUpdate

componentWillUnmount

Syntax:

useEffect(() => {
  // Code here runs on mount & update (by default)
  
  return () => {
    // Cleanup code (optional, like removing event listeners)
  };
}, [dependencies]);

Basic Examples:
1. 🔁 Run once on component mount

useEffect(() => {
  console.log("Component mounted");
}, []);

The empty array [] means: run only once (like componentDidMount)

Run on specific state/prop changes

useEffect(() => {
  console.log("Count updated:", count);
}, [count]);

Runs every time count changes — like componentDidUpdate.

❌ Cleanup on unmount

useEffect(() => {
  const interval = setInterval(() => {
    console.log("Interval running");
  }, 1000);

  return () => {
    clearInterval(interval); // Cleanup
    console.log("Component unmounted");
  };
}, []);

Like componentWillUnmount.

Real Example: Fetching Data

import { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

Important Notes

Don’t put useEffect inside conditions or loops.

Always include dependencies in the array to avoid stale data.

You can have multiple useEffects in a single component.