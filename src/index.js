import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import './index.css';
import logoImage from './logo.jpeg';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';


const Chart = () => {
    <Line data={chartData} options={chartOptions} />
}


const StockChart = () => {
    const [stockData, setStockData] = useState([]);
  
    useEffect(() => {
      const fetchStockData = async () => {
        try {
          const response = await axios.get(
            'https://query1.finance.yahoo.com/v8/finance/chart/AAPL?period1=0&period2=9999999999&interval=1d'
          );
  
          const { timestamps, close } = response.data.chart.result[0].indicators.quote[0];
  
          // Format data for Chart.js
          const data = timestamps.map((timestamp, index) => ({
            x: new Date(timestamp * 1000),
            y: close[index],
          }));
  
          setStockData(data);
        } catch (error) {
          console.error('Error fetching stock data:', error);
        }
      };
  
      fetchStockData();
    }, []);
  
    const chartData = {
      datasets: [
        {
          label: 'Stock Price',
          data: stockData,
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
        },
      ],
    };
}
  
    const chartOptions = {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
          },
          title: {
            display: true,
            text: 'Date',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Stock Price',
          },
        },
      },
    };
  
  
const BroseFinancial = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/chart" element={<Chart />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform your login logic here
        // If login is successful, navigate to the desired page
        // For demonstration purposes, let's assume login is successful
        navigate("/chart");
    }

    return (
        <div className="login-container">
            <div className="logo">
                <img src={logoImage} alt="Logo" />
            </div>
            <h2>Log In</h2>
            <form id="login-form" onSubmit={handleLogin}>
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
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
            <a href="https://accounts.google.com/login" className="google-button">Continue with Google</a>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BroseFinancial />);