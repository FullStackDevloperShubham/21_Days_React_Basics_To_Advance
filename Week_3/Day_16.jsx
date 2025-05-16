Day 16: Error boundaries + fallback UI

What are Error Boundaries ?
    Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole component tree.

    Key Concepts:
    Only catch errors in:
    
    Lifecycle methods
    
    Render methods
    
    Constructors of class components
    
    Do NOT catch errors in:
    
    Event handlers
    
    Async code (e.g., setTimeout)
    
    Server-side rendering

    When to use Error Boundaries?

    Around risky components (like third-party libraries).
    
    Around routes, widgets, dashboard panels, etc.
    
    Around the entire application (top-level wrapper).

    How to Create an Error Boundary (Class Component Only)
 
    import React from "react";
    
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        // Update state to trigger fallback UI
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        // You can log the error to a service
        console.error("Error caught:", error, errorInfo);
      }
    
      render() {
        if (this.state.hasError) {
          return (
            <div className="p-6 text-red-600 font-bold">
              ⚠️ Something went wrong. Please try again later.
            </div>
          );
        }
    
        return this.props.children;
      }
    }

    Example Usage
   
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>

Simulating an Error

function BuggyComponent() {
  throw new Error("Oops! Component crashed.");
  return <div>This will never render</div>;
}

Tip: Custom Fallback UI with Props
You can enhance the ErrorBoundary by passing a fallback prop:


<ErrorBoundary fallback={<p>Custom error message</p>}>
  <BuggyComponent />
</ErrorBoundary>
This needs additional logic in the component to support props.fallback.