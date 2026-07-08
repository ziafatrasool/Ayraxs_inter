import React from 'react';
import Logo from './components/Logo/Logo';
import SignUpCard from './components/SignUpCard/SignUpCard';
import SocialSignIn from './components/SocialSignIn/SocialSignIn';
import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      {/* Logo Component */}
      <Logo />

      {/* SignUpCard Component */}
      <SignUpCard />

      {/* SocialSignIn Component */}
      <SocialSignIn />
    </div>
  );
}

export default App;
