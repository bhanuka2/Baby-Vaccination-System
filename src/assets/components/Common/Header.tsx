import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  showDashboardButtons?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showDashboardButtons = false }) => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <header className="header-container" style={{ position: 'relative', width: '100%', height: '100px', zIndex: 100 }}>
      <div className="header-background"></div>

      <img
        className="header-logo"
        style={{marginTop: '5px', cursor: 'pointer'}}
        src="https://api.builder.io/api/v1/image/assets/TEMP/131b92fa2f7aaddceda632a21b86a6a5fc310f93?width=180"
        alt="ABC Logo"
        loading="eager"
        onClick={handleHome}
      />

      {showDashboardButtons ? (
        <>
          <button
            className="vaccination-button"
            type="button"
            aria-label="Profile"
          >
            <span className="vaccination-text">Profile</span>
          </button>

          <button
            className="login-button"
            type="button"
            aria-label="Logout"
          >
            <span className="login-text">Logout</span>
          </button>
        </>
      ) : (
        <>
          <button
            className="vaccination-button"
            type="button"
            aria-label="Sign in to account"
            onClick={handleSignIn}
          >
            <span className="vaccination-text">Sign In</span>
          </button>

          <button
            className="login-button"
            type="button"
            aria-label="Sign up for account"
            onClick={handleSignUp}
          >
            <span className="login-text">Sign Up</span>
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
