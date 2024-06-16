import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ls_img from '../image/login-and-signup-image.jpg'
import Auth from './auth';
import './authentication.css'
function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const navigate = useNavigate();
      const [error, setError] = useState(null);
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const credentials = {
            email: formData.email,
            password: formData.password,
          };
    
          const loginResult = await Auth.login(credentials);
    
          if (loginResult) {
            console.log('Login successful');
            navigate('/');
          } else {
            console.error('Login failed');
            setError('Enter a valid email id and password');
          }
        } catch (error) {
          console.error('An error occurred', error);
          setError('An error occurred. Please try again.');
        }
      };
    
      return (
        <div className="authentication-scetion">
        <div className="login-form-container">
          <div className="login-form">
            <div className="su-head">
              <div className="su-img">
                <img src={ls_img} alt="signup-login-poster" />
              </div>
            </div>
            
            <div className="su-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="fp-sec">
                    <Link to="/forgot-password">Forgot password?</Link>
                  </div>
                </div>
                <button type="submit">Login</button>
              </form>
              {error && <div className="error-message">{error}</div>} 
              <div className="g-log">
                <span>New to Beyoung?</span>
                <Link to="/signup">Register</Link>
              </div>
              <div className="demo-log">
                <p>Demo Account - admin@gmail.com</p>
                <p>Password - 123456</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
}

export default Login