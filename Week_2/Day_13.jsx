
Day 13: Routing with React Router DOM

What is React Router DOM ?
    React Router DOM is a popular routing library for React that enables navigation between different components without reloading the page.

        Installation
  npm install react - router - dom

Basic Concepts

BrowserRouter – Wraps your entire app and enables routing.

    Routes – Container for all route definitions.

        Route – Defines the path and component to render.

            Link / NavLink – For navigation without refreshing.

                useNavigate – Programmatic navigation.

                    useParams – Access URL parameters.

                        useLocation – Get current route info.

Basic Setup Example

App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

Navigation(Navbar.js)

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link> |
            <Link to="/about">About</Link> |
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Navbar;

Dynamic Routing with Params
Example: /user/: id

    < Route path = "/user/:id" element = {< UserProfile />} />

Inside UserProfile.js:

import { useParams } from 'react-router-dom';

function UserProfile() {
    const { id } = useParams();
    return <h2>User ID: {id}</h2>;
}

useNavigate Example

import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // login logic here
        navigate('/dashboard');
    };

    return <button onClick={handleLogin}>Login</button>;
}

Summary

Feature	Use
BrowserRouter	Wraps app for routing
Routes & Route	Define routes & paths
Link / NavLink	Navigation without reload
useParams()	Get dynamic route data
useNavigate()	Navigate programmatically