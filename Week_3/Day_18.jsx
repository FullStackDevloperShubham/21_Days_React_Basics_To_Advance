Day 18: Testing React apps (Jest )

Setup
Install dependencies:


npm install --save-dev jest @testing-library/react @testing-library/jest-dom
Add Jest config to your package.json:

json
Copy
Edit
"scripts": {
  "test": "jest"
}
(Optional) Configure Babel for Jest:
If you’re using JSX:


npm install --save-dev babel-jest @babel/preset-env @babel/preset-react
Add a babel.config.js:

js
Copy
Edit
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};

Example Component

// components/Greet.js
export default function Greet({ name }) {
  return <h1>Hello, {name}!</h1>;
}

Unit Test with Jest + Testing Library

// components/__tests__/Greet.test.js
import { render, screen } from '@testing-library/react';
import Greet from '../Greet';

test('renders greeting with name', () => {
  render(<Greet name="Shubham" />);
  const textElement = screen.getByText(/Hello, Shubham/i);
  expect(textElement).toBeInTheDocument();
});

Snapshot Testing

import { render } from '@testing-library/react';
import Greet from '../Greet';

test('matches snapshot', () => {
  const { asFragment } = render(<Greet name="Snapshot" />);
  expect(asFragment()).toMatchSnapshot();
});

Interaction Testing

// Button.js
import { useState } from 'react';
export default function Button() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}

// Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

test('increments counter on click', () => {
  render(<Button />);
  const button = screen.getByText(/Clicked 0 times/);
  fireEvent.click(button);
  expect(button.textContent).toBe('Clicked 1 times');
});