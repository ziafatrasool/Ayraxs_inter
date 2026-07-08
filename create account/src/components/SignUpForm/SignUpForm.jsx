import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Focus states
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up with:', { email, password, confirmPassword });
    // Handle submission logic here
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      {/* Email Address */}
      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input
          type="email"
          className={`form-input email-input ${emailFocus && !email ? 'focused-empty' : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          required
        />
      </div>

      {/* Password */}
      <div className="form-group">
        <label className="form-label">Password</label>
        <input
          type="password"
          className={`form-input password-input ${passwordFocus && !password ? 'focused-empty' : ''}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
          required
        />
      </div>

      {/* Confirm Password */}
      <div className="form-group">
        <label className="form-label">Confirm Password</label>
        <input
          type="password"
          className={`form-input password-input ${confirmPasswordFocus && !confirmPassword ? 'focused-empty' : ''}`}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onFocus={() => setConfirmPasswordFocus(true)}
          onBlur={() => setConfirmPasswordFocus(false)}
          required
        />
      </div>

      {/* Helper text */}
      <div className="helper-text">
        * Password must contain 8 characters, uppercase letters, lower case letters, numbers, symbols
      </div>

      {/* Sign Up Button */}
      <button type="submit" className="signup-btn">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
