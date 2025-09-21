import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FormEvent, MouseEvent } from 'react';
import '/src/assets/components/login/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    try {
      console.log('Login attempt:', { email, password, rememberMe });
      // Add your authentication logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
      alert('Login functionality would be implemented here');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = (e: MouseEvent) => {
    e.preventDefault();
    alert('Forgot password functionality would be implemented here');
  };

  return (
    <div className="login-container">
      <div className="left-section" >
        {/* Decorative dots */}
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
        <div className="dot dot-4"></div>
        <div className="dot dot-5"></div>
        <div className="dot dot-6"></div>
        <div className="dot dot-7"></div>
        
        {/* Decorative shapes */}
        <div className="shape shape-pink"></div>
        <div className="shape-overlay shape-pink-overlay"></div>
        <div className="shape shape-purple"></div>
        <div className="shape-overlay shape-green-overlay"></div>
        <div className="shape shape-red"></div>
        <div className="shape-overlay shape-teal-overlay"></div>
        
        {/* Login form */}
        <div className="form-container" style={{backgroundColor: '#f0f4f8',borderRadius: '20px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', padding: '40px', position: 'relative', zIndex: 1}}>
          <div className="form-background"></div>
          
          <h1 className="form-title">Sign In</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-wrapper" style={{width: '500px'}}>
                <input
                  id="email"
                  type="email"
                  className="input-field"
                  placeholder="your.email@example.com" style={{marginTop: '20px'}}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            
            <div className="input-group">
              <div className="input-wrapper">
                <input
                  id="password"
                  type="password"
                  className="input-field"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>
            
            <div className="checkbox-group">
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id="remember"
                  className="checkbox-input"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember" className="checkbox-label">
                  <div className="checkbox-custom">
                    <div className="checkmark"></div>
                  </div>
                  Remember me
                </label>
              </div>
              <a href="#" className="forgot-password" onClick={handleForgotPassword}>Forgot Password ?</a>
            </div>

            <button 
              type="submit" 
              className="login-button" 
              disabled={isLoading} 
              style={{marginTop: '30px',width: '500px'}}
              onClick={() => navigate('/customer-interface')}
            >
              {isLoading ? 'Signing in...' : 'Log in'}
            </button>
          </form>
          
          <div className="signup-link">
            <span className="signup-text">Don't have account yet ?</span>
            <button 
              type="button" 
              className="signup-link-text signup-link-button"
              onClick={() => navigate('/signup')}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      
      <div className="right-section">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/2b6168fcb8a8967dc54f4e0229d1bbbaa178f994?width=1472"
          alt="Baby illustration"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default Login;
