Day 12: Context API for global state

Concepts to Learn:
What is Context API?

React.createContext()

Context.Provider and useContext()

Managing shared/global state across multiple components

Mini Project: Theme Toggler App

Toggle between light and dark themes globally.

Theme state is shared across all components using Context API.

Apply basic Tailwind styling to switch themes dynamically.

Folder Structure:

src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ThemeToggle.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── App.jsx
└── main.jsx

ThemeContext.jsx

import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

App.jsx

import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Theme Toggler using Context API</h1>
        <ThemeToggle />
      </main>
      <Footer />
    </div>
  );
}

export default App;

ThemeToggle.jsx

import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition"
    >
      Switch to {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;