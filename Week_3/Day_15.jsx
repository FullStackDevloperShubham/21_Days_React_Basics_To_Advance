Day 15: Code splitting, lazy loading

What is Code Splitting ?
    Code splitting is a technique to split your JavaScript bundle into smaller chunks so that your app only loads the necessary code at the right time, instead of loading everything upfront.

        Why ?

        Faster initial load times

Better user experience

Lower data usage

What is Lazy Loading ?

    Lazy loading means delaying the loading of a component or module until it’s actually needed, typically when it’s rendered or when the user navigates to a certain route.

How to Implement in React?

    1. Using React.lazy() and Suspense
    React provides built-in support for lazy loading components.
    
    Example:
  
    import React, { Suspense } from 'react';
    
    // Lazy load the component
    const LazyComponent = React.lazy(() => import('./LazyComponent'));
    
    function App() {
      return (
        <div>
          <h1>My App</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        </div>
      );
    }
    
    export default App;

    React.lazy(() => import('./LazyComponent')) tells React to load the component only when it’s needed.

    Suspense wraps the lazy component and shows a fallback (loading message or spinner) while the component is loading.

    Code Splitting with React Router (for routes)
    If you use React Router, you can lazy load routes to improve performance.
    
 
    import React, { Suspense } from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    
    const Home = React.lazy(() => import('./Home'));
    const About = React.lazy(() => import('./About'));
    
    function App() {
      return (
        <Router>
          <Suspense fallback={<div>Loading page...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </Router>
      );
    }
    
    export default App;

    Additional Tips
    
    You can combine code splitting with dynamic imports anywhere, even outside React components.
    
    Be careful with error boundaries because if the lazy load fails, React can throw errors.
    
    You can also use libraries like Loadable Components for more advanced use cases (e.g., server-side rendering).
    
    