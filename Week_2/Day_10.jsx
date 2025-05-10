Day 10: useReducer for complex state


Why useReducer?
When state logic becomes too complex for useState (e.g., multiple related states or complex updates), useReducer helps centralize and organize it in a single function.

Syntax Overview:

const [state, dispatch] = useReducer(reducer, initialState);

reducer – a function that handles state transitions.

initialState – your initial state object.

dispatch(action) – a function you call to trigger state updates.reducer – a function that handles state transitions.

initialState – your initial state object.

dispatch(action) – a function you call to trigger state updates.

Basic Example: Counter with Actions

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold">Count: {state.count}</h1>
      <div className="space-x-2 mt-4">
        <button onClick={() => dispatch({ type: 'increment' })} className="bg-green-500 text-white px-4 py-2 rounded">+</button>
        <button onClick={() => dispatch({ type: 'decrement' })} className="bg-red-500 text-white px-4 py-2 rounded">-</button>
        <button onClick={() => dispatch({ type: 'reset' })} className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
}

export default Counter;

When to Use useReducer
When multiple state values change in response to the same action.

When the next state depends on the previous state.

When you want to encapsulate logic in a reducer for easier testing or readability.