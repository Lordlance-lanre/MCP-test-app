import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import loginIllustration from '../assets/login-illustration.svg';
import './Login.css';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please fill in both email and password.');
      return;
    }
    setError('');
    // Successful login
    if (onLoginSuccess) {
      onLoginSuccess({ email });
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-logo-wrapper">
          <img src={logo} alt="Lendsqr Logo" className="login-brand-logo" />
        </div>
        <div className="login-hero-illustration">
          <img src={loginIllustration} alt="Lendsqr Sign In Illustration" />
        </div>
      </div>

      <div className="login-right">
        <div className="login-mobile-logo">
          <img src={logo} alt="Lendsqr Logo" />
        </div>

        <div className="login-form-box">
          <h1 className="login-title">Welcome!</h1>
          <p className="login-subtitle">Enter details to login.</p>

          {error && <div className="login-error-alert">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="login-input"
              />
            </div>

            <div className="login-input-group password-group">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-input"
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </button>
            </div>

            <div className="login-forgot-wrapper">
              <a href="#forgot" className="forgot-password-link">
                FORGOT PASSWORD?
              </a>
            </div>

            <button type="submit" className="login-submit-btn">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
