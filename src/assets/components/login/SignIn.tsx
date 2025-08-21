import React, { useState } from 'react';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in attempted with:', { email, password, rememberMe });
  };

  return (
    <div className="signin-page" style={{}}>
      <div className="signin-container">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/904af6e26266220d9ab7aa8a7b966112f5a371bc?placeholderIfAbsent=true"
          alt="Background"
          className="signin-background-image"
        />
        <div className="signin-form-wrapper">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/80da1f232322c9473c9e71a4778cc1a10ebc4e01?placeholderIfAbsent=true"
            alt="Form Background"
            className="signin-form-background"
          />
          <h1 className="signin-title">Welcome Back</h1>
          
          <form onSubmit={handleSubmit} className="signin-form">
            <div className="signin-input-group">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/95a6f807fcc24859bbc214c45290adf972d3960a?placeholderIfAbsent=true"
                alt="Email Input Background"
                className="signin-input-background"
              />
              <label className="signin-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="signin-input"
                required
              />
            </div>

            <div className="signin-input-group">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e690002bddefe19ec3087965cf966db0513c6753?placeholderIfAbsent=true"
                alt="Password Input Background"
                className="signin-input-background"
              />
              <label className="signin-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="signin-input"
                required
              />
            </div>

            <div className="signin-options">
              <div className="signin-remember-group">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ display: 'none' }}
                />
                <label
                  htmlFor="remember-me"
                  className="signin-checkbox-icon"
                  style={{
                    backgroundImage: `url(https://api.builder.io/api/v1/image/assets/TEMP/5ad10a5b840b7c802045f1691ada3e792fac601d?placeholderIfAbsent=true)`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                />
                <label htmlFor="remember-me" className="signin-remember-label">Remember me</label>
              </div>
              <a href="#" className="signin-forgot-link">Forgot Password ?</a>
            </div>

            <button type="submit" className="signin-submit-button">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7bfece86270fd93736226cfb7d5919dd835fe4e2?placeholderIfAbsent=true"
                alt="Button Background"
                className="signin-button-background"
              />
              <span className="signin-button-text">Log in</span>
            </button>

            <div className="signin-signup-link">
              <span className="signin-signup-text">Don't have account yet ?</span>
              <a href="#" className="signin-signup-link-text">Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
