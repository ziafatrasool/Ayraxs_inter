import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import './SignUpCard.css';

const SignUpCard = () => {
  return (
    <div className="form-card">
      <h1 className="card-title">Create Account</h1>
      
      {/* Sign Up Form Component */}
      <SignUpForm />

      {/* Already have an account? Sign In Link */}
      <div className="signin-text">
        Already have an account?
        <span className="signin-link">Sign In</span>
      </div>
    </div>
  );
};

export default SignUpCard;
