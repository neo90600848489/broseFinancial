import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import logoImage from './logo.jpeg';

const BroseFinacial = () => {
    return (
        <section className='bookList'>
            <Login/>
        </section>
    );
}

const Login = () => {
    return (
      <div className="login-container">
        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <h2>Log In</h2>
        <form id="login-form" action="#">
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
          <button type="submit" id="login-btn">Login</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <a href="signup.html">Sign up</a></p>
        </div>
        <a href="https://accounts.google.com/login" className="google-button">Continue with Google</a>
      </div>
    );
}   
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BroseFinacial/>);
