import React from 'react';


interface HeaderProps {
  showDashboardButtons?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showDashboardButtons = false }) => {
  return (
    <header className="header-container" style={{ position: 'relative', width: '100%', height: '100px', zIndex: 100 }}>
      <div className="header-background"></div>

      <img
        className="header-logo" style={{marginTop: '5px'}}
        src="https://api.builder.io/api/v1/image/assets/TEMP/131b92fa2f7aaddceda632a21b86a6a5fc310f93?width=180"
        alt="ABC Logo"
        loading="eager"
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
            aria-label="Vaccination information"
          >
            <span className="vaccination-text">Vaccination</span>
          </button>

          <button
            className="login-button"
            type="button"
            aria-label="Sign up for account"
          >
            <span className="login-text">Sign Up</span>
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
