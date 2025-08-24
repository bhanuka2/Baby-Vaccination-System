import React, { useState } from 'react';

const Welcome: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in attempted with:', { email, password, rememberMe });
  };

  return (
    <div className="welcome-page">
      <div className="welcome-background">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/4c9f5f442226b5744a91e0b05570df9bdcd2913b?width=7232"
          alt="Mother holding baby background"
          className="welcome-background-image"
        />
      </div>

      <div className="welcome-container">
        <div className="welcome-form-card" style={{marginLeft:'50px',marginBottom:'50px'}}>
          <div className="welcome-form-background"></div>
          
          <div className="welcome-content">
            <h1 className="welcome-title">Sign In</h1>

            <form onSubmit={handleSubmit} className="welcome-form">
              <div className="welcome-input-group">
                <label className="welcome-label">Email</label>
                <div className="welcome-input-wrapper">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="welcome-input"
                    required
                  />
                </div>
              </div>

              <div className="welcome-input-group">
                <label className="welcome-label">Password</label>
                <div className="welcome-input-wrapper">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="welcome-input"
                    required
                  />
                </div>
              </div>

              <div className="welcome-options">
                <div className="welcome-remember-group">
                  <div className="welcome-checkbox-container">
                    <input
                      type="checkbox"
                      id="remember-me"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="welcome-checkbox-input"
                    />
                    <div className="welcome-checkbox-icon">
                      <svg
                        width="25"
                        height="20"
                        viewBox="0 0 25 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.3125 0H4.6875C2.09867 0 0 1.67893 0 3.75V16.25C0 18.3211 2.09867 20 4.6875 20H20.3125C22.9013 20 25 18.3211 25 16.25V3.75C25 1.67893 22.9013 0 20.3125 0Z"
                          fill="#213FD5"
                        />
                      </svg>
                      {rememberMe && (
                        <svg
                          className="welcome-checkmark"
                          width="22"
                          height="13"
                          viewBox="0 0 22 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.5397 0.3808C22.1534 0.888533 22.1534 1.71309 21.5397 2.22082L8.96965 12.6192C8.35588 13.1269 7.35911 13.1269 6.74534 12.6192L0.460328 7.42001C-0.153443 6.91228 -0.153443 6.08772 0.460328 5.57999C1.0741 5.07225 2.07086 5.07225 2.68463 5.57999L7.85995 9.85713L19.3203 0.3808C19.934 -0.126933 20.9308 -0.126933 21.5446 0.3808H21.5397Z"
                            fill="white"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <label htmlFor="remember-me" className="welcome-remember-label">
                    Remember me
                  </label>
                </div>
                <a href="#" className="welcome-forgot-link">
                  Forgot Password ?
                </a>
              </div>

              <button type="submit" className="welcome-submit-button">
                <span className="welcome-button-text">Log in</span>
              </button>

              <div className="welcome-signup-link">
                <span className="welcome-signup-text">Don't have account yet ? </span>
                <a href="#" className="welcome-signup-link-text">Sign up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
