import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import './index.css';
import logoImage from './logo.jpeg';
import chart from 'Chart/chart.js'

const BroseFinancial = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform your login logic here
        // If login is successful, navigate to the desired page
        // For demonstration purposes, let's assume login is successful
        navigate("/dashboard");
    }

    return (
        <div className="login-container">
            <div className="logo">
                <img src={logoImage} alt="Logo" />
            </div>
            <h2>Log In</h2>
            <div className="form-group">
            <label htmlFor="username">Email Address</label>
            <input type="text" id="username" name="username" placeholder="Enter your email" />
            <div id="username-error" className="error-message"></div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
            <div id="password-error" className="error-message"></div>
          </div>

            <form id="login-form" onSubmit={handleLogin}>
                {/* Your form content */}
                <button type="submit" id="login-btn">Login</button>
            </form>
            <div className="signup-link">
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
            <a href="https://accounts.google.com/login" className="google-button">Continue with Google</a>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BroseFinancial />);
