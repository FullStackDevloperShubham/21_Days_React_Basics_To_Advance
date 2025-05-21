Day 21: Real DOM vs React Virtual DOM

1. Real DOM (Document Object Model)
The Real DOM is the browser's actual representation of the HTML structure.

When anything changes (like text input or color), the entire DOM gets updated, which can be slow and inefficien

Example:
If you update one small element, the browser recalculates styles and layouts for the whole document.

2. React Virtual DOM
The Virtual DOM is a lightweight JavaScript copy of the Real DOM.

React uses it to compare changes efficiently using a process called "diffing."

After comparison, React only updates the changed part in the real DOM — this is called "reconciliation."

How It Works:
You update the UI (e.g., click a button).

React updates the Virtual DOM.

React compares the old Virtual DOM with the new one (diffing).

React applies only the changed parts to the Real DOM (fast and optimized).

| Feature         | Real DOM                    | Virtual DOM                     |
| --------------- | --------------------------- | ------------------------------- |
| Updates         | Slow and full re-render     | Fast and partial re-render      |
| Efficiency      | Less efficient              | Highly efficient                |
| Used by         | Regular HTML/JS             | React                           |
| Re-render logic | Browser handles all updates | React handles with diffing algo |
