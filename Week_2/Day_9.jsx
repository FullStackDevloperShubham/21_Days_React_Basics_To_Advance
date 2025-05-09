Day 9: useRef and DOM manipulation

What is useRef?
useRef is a hook in React that allows you to:

Access and manipulate DOM elements directly

Persist values across renders without causing re-renders

Basic Syntax

import { useRef } from 'react';

const myRef = useRef(initialValue);

Common Use Case: Accessing DOM elements

import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // Directly manipulates the DOM
  };

  return (
    <div className="p-4">
      <input ref={inputRef} type="text" placeholder="Click button to focus" className="border p-2" />
      <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 ml-2">Focus</button>
    </div>
  );
}

Persisting Mutable Values Without Re-renders

function Timer() {
  const count = useRef(0);

  const handleClick = () => {
    count.current += 1;
    console.log('Clicked:', count.current);
  };

  return <button onClick={handleClick}>Click Me</button>;

Real-Life Example: Scroll to a section

function ScrollDemo() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={scrollToSection}>Go to Section</button>
      <div style={{ height: '100vh' }}></div>
      <div ref={sectionRef} style={{ height: '300px', backgroundColor: 'lightcoral' }}>
        🎯 Target Section
      </div>
    </div>
  );
}

Summary
useRef() returns a mutable object: { current: ... }.

Can be used to reference a DOM element or store a mutable value.

Does not cause re-renders when updated.

Ideal for timers, scroll handling, animations, or preventing unnecessary re-renders.

