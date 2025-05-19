Day 19: Performance optimization(memo, useMemo, useCallback)


React.memo
React.memo is a higher - order component used to prevent re - rendering of a component unless its props change.

✅ Use When:

Component re - renders often but receives same props.


    Example:

const Child = React.memo(({ name }) => {
    console.log("Child rendered");
    return <div>Hello {name}</div>;
});

export default function App() {
    const [count, setCount] = React.useState(0);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Child name="Shubham" />
        </>
    );
}

2. useMemo
useMemo memoizes the result of a computation to avoid recalculating it on every render.

✅ Use When:
A complex calculation is done on every render.

    Example:

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    return num * 2;
};

function App() {
    const [count, setCount] = React.useState(0);
    const [number, setNumber] = React.useState(5);

    const result = React.useMemo(() => expensiveCalculation(number), [number]);

    return (
        <>
            <p>Result: {result}</p>
            <button onClick={() => setCount(count + 1)}>Re-render</button>
        </>
    );
}

3. useCallback
useCallback memoizes a function to avoid redefining it on every render — useful when passing callbacks to child components.

✅ Use When:
Passing functions to memo - ized components.

Avoiding unnecessary effect triggers or renders.

    Example:
jsx
Copy
Edit
const Button = React.memo(({ onClick, children }) => {
    console.log("Button rendered");
    return <button onClick={onClick}>{children}</button>;
});

function App() {
    const [count, setCount] = React.useState(0);

    const handleClick = React.useCallback(() => {
        console.log("Button clicked");
    }, []);

    return (
        <>
            <p>Count: {count}</p>
            <Button onClick={handleClick}>Click Me</Button>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </>
    );
}

Result:
Button won’t re - render unless handleClick changes(which it won’t, because it’s memoized).