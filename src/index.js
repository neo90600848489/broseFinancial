import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import logoImage from './logo.jpeg';

const BookList = () => {
    return (
        <section className='bookList'>
            <Book/>
        </section>
    );
}

const Book = () => {
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

const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/512lI7+2SjL._AC_UL900_SR900,600_.jpg"/>;

const Title = () => <h2>I Don't Love You Anymore: Moving On</h2>;

const Author = () => {
    return <h4>Rithvik Singh</h4>;
}
    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);
