import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import type { FormEvent, MouseEvent } from 'react';
import '/src/assets/components/login/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState<'customer' | 'admin'>('customer');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    
    try {
      const apiUrl = userType === 'admin' 
        ? 'http://localhost:8082/api/admin/login' 
        : 'http://localhost:8082/member/login';

      const response = await axios.post(apiUrl, {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        timeout: 10000, // 10 second timeout
      });

      // Handle successful response
      console.log('Login successful:', response.data);
      setSuccessMessage(`${userType.charAt(0).toUpperCase() + userType.slice(1)} login successful!`);
      
      // Wait a moment to show success message before redirecting
      setTimeout(() => {
        if (userType === 'admin') {
          navigate('/admin');
        } else {
          navigate('/parent');
        }
      }, 1500);

    } catch (error: any) {
      console.error('Login error:', error);
      
      if (error.code === 'ECONNABORTED') {
        setErrorMessage('Request timeout. Please check your connection and try again.');
      } else if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const message = error.response.data?.message || error.response.data?.error || 'Login failed. Please check your credentials.';
        setErrorMessage(`${userType.charAt(0).toUpperCase() + userType.slice(1)} ${message}`);
      } else if (error.request) {
        // The request was made but no response was received
        setErrorMessage('Cannot connect to server. Please ensure the backend server is running on http://localhost:8082');
      } else {
        // Something happened in setting up the request
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
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
      <div className="left-section">
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
          
          {/* User Type Selection Buttons */}
          <div className="user-type-selection">
            <button
              type="button"
              className={`user-type-btn ${userType === 'customer' ? 'active' : ''}`}
              onClick={() => setUserType('customer')}
            >
              Customer
            </button>
            <button
              type="button"
              className={`user-type-btn ${userType === 'admin' ? 'active' : ''}`}
              onClick={() => setUserType('admin')}
            >
              Admin
            </button>
          </div>
          
          <h1 className="form-title">Sign In</h1
          >
          
          {/* Display error or success message */}
          {errorMessage && (
            <div className="message-container error-message">
              <p>{errorMessage}</p>
            </div>
          )}
          
          {successMessage && (
            <div className="message-container success-message">
              <p>{successMessage}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-wrapper" style={{width: '365px'}}>
                <input
                  id="email"
                  type="email"
                  className="input-field"
                  placeholder="your.email@example.com" 
                  style={{marginTop: '20px'}}
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
                  placeholder="Password"
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
              <a href="#" className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</a>
            </div>

            <button 
              type="submit" 
              className="login-button" 
              disabled={isLoading} 
              style={{marginTop: '30px',width: '500px'}}
            >
              {isLoading ? 'Signing in...' : 'Log in'}
            </button>
          </form>
          
          <div className="signup-link">
            <span className="signup-text">Don't have account yet?</span>
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
