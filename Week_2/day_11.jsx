Day 11: Custom hooks

What are Custom Hooks?
A custom hook is a JavaScript function whose name starts with use and that can call other hooks inside it.

Think of it like this:

React’s built-in hooks like useState, useEffect, etc., help manage state and side effects.

When your logic gets reused across multiple components, instead of duplicating code, you move that logic into a custom hook.

Syntax of a Custom Hook

import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

You can use it in a component like this:

function App() {
  const { data, loading } = useFetchData('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

Benefits of Custom Hooks
Reusability: Write once, use everywhere.

Cleaner components: Keep UI logic separated from data logic.

Encapsulation: Each hook manages its own logic/state cleanly.