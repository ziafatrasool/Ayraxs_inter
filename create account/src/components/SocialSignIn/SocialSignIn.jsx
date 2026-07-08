import React from 'react';
import appleImg from '../../assets/apple.png';
import './SocialSignIn.css';

const SocialSignIn = () => {
  return (
    <div className="social-group">
      <p className="social-title">You can also signin with</p>
      <div className="social-icons">
        {/* Google */}
        <button className="social-icon-btn" title="Google">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path
              d="M17.64 9.2c0-.63-.06-1.25-.16-1.84H9v3.47h4.84c-.21 1.12-.84 2.07-1.79 2.7v2.24h2.9c1.7-1.57 2.69-3.88 2.69-6.57zm-8.64 8.8c2.43 0 4.47-.8 5.96-2.18l-2.9-2.24c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.73H.95v2.3C2.43 15.98 5.51 18 9 18z"
              fill="#4285F4"
            />
            <path
              d="M3.95 10.91A5.4 5.4 0 0 1 3.6 9c0-.67.11-1.32.32-1.91l-2.3-1.8a8.97 8.97 0 0 0 0 7.42l2.33-1.8z"
              fill="#FBBC05"
            />
            <path
              d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59C13.46.8 11.43 0 9 0 5.51 0 2.43 2.02.95 5.03l2.3 1.8c.71-2.13 2.7-3.73 5.05-3.73z"
              fill="#EA4335"
            />
          </svg>
        </button>

        {/* LinkedIn */}
        <button className="social-icon-btn" title="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="#0077B5">
            <path d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM5.7 15.2H3.1V7.7h2.6v7.5zM4.4 6.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm10.8 8.6h-2.6v-4.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4.1H6.4V7.7h2.6v1c.5-.8 1.4-1.3 2.4-1.3 1.9 0 3.4 1.5 3.4 3.4v4.4z" />
          </svg>
        </button>

        {/* Apple */}
        <button className="social-icon-btn" title="Apple">
          <img src={appleImg} alt="Apple" className="social-icon-image" />
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;
