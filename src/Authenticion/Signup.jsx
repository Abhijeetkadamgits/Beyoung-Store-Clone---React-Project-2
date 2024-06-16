import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from './auth';
import ls_img from '../image/login-and-signup-image.jpg'
import './authentication.css'
function Signup() {
    const [formData, setFormData] = useState({
        name: '',
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
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      // Call the signup function from AuthS
      const signupResult = await Auth.signup(newUser);

      if (signupResult) {
        console.log('Signup successful');
        navigate('/login'); 
      } else {
        console.error('Signup failed');
        setError('This user is already registered');
      }
    } catch (error) {
      console.error('An error occurred', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="authentication-scetion">
    <div className="signup-form-container">
      <div className="signup-form">
      <div className="su-head">
              <div className="su-img">
                <img src={ls_img} alt="signup-login-poster" />
              </div>
            </div>
      <div className="su-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
            <div className="cb-sec">
            <input
              type="checkbox"
              className='checkbox-btn'
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            <span className="checkbox-text">
               Agree to our Terms of Services & Privacy Policy.
            </span>
            </div>
          </div>
          <button type="submit">Create Account</button>
        </form>
        <div className="g-log">
          <span>Already registered?</span> 
        <Link to="/login">Login</Link>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Signup