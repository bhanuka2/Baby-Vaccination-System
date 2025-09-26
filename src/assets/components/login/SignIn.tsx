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

  const validateForm = () => {
    if (!email.trim()) {
      setErrorMessage('Email is required');
      return false;
    }
    if (!password.trim()) {
      setErrorMessage('Password is required');
      return false;
    }
    if (!email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);
    
    try {
      const apiUrl = userType === 'admin' 
        ? 'http://localhost:8082/api/admin/login' 
        : 'http://localhost:8082/member/login';

      console.log(`Attempting ${userType} login with:`, { email, apiUrl });

      const response = await axios.post(apiUrl, {
        email: email.trim(),
        password: password.trim()
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        timeout: 15000, // 15 second timeout
      });

      console.log('Login successful response:', response.data);

      // Check if the response indicates success
      if (response.status === 200 && response.data) {
        // Store authentication data
        if (rememberMe) {
          localStorage.setItem('userToken', response.data.token || 'authenticated');
          localStorage.setItem('userType', userType);
          localStorage.setItem('userEmail', email);
        } else {
          sessionStorage.setItem('userToken', response.data.token || 'authenticated');
          sessionStorage.setItem('userType', userType);
          sessionStorage.setItem('userEmail', email);
        }

        setSuccessMessage(`${userType.charAt(0).toUpperCase() + userType.slice(1)} login successful! Redirecting...`);
        
        // Wait a moment to show success message before redirecting
        setTimeout(() => {
          if (userType === 'admin') {
            navigate('/admin');
          } else {
            navigate('/parent');
          }
        }, 2000);

      } else {
        throw new Error('Invalid login response from server');
      }

    } catch (error: any) {
      console.error('Login error:', error);
      
      let errorMsg = 'Login failed. Please try again.';

      if (error.code === 'ECONNABORTED') {
        errorMsg = 'Request timeout. Please check your connection and try again.';
      } else if (error.response) {
        // The request was made and the server responded with a status code
        const status = error.response.status;
        
        if (status === 401) {
          errorMsg = 'Invalid email or password. Please check your credentials and try again.';
        } else if (status === 404) {
          errorMsg = `${userType.charAt(0).toUpperCase() + userType.slice(1)} account not found. Please sign up first or check your user type selection.`;
        } else if (status === 403) {
          errorMsg = 'Account access denied. Please contact administrator.';
        } else if (status >= 500) {
          errorMsg = 'Server error. Please try again later.';
        } else {
          const message = error.response.data?.message || error.response.data?.error;
          if (message) {
            errorMsg = message;
          }
        }
      } else if (error.request) {
        errorMsg = 'Cannot connect to server. Please ensure the backend server is running on http://localhost:8082';
      } else if (error.message) {
        errorMsg = error.message;
      }

      setErrorMessage(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = (e: MouseEvent) => {
    e.preventDefault();
    alert('Forgot password functionality would be implemented here');
  };

  const handleSignUpRedirect = () => {
    navigate('/signup');
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
              onClick={() => {
                setUserType('customer');
                setErrorMessage(null);
                setSuccessMessage(null);
              }}
            >
              Customer
            </button>
            <button
              type="button"
              className={`user-type-btn ${userType === 'admin' ? 'active' : ''}`}
              onClick={() => {
                setUserType('admin');
                setErrorMessage(null);
                setSuccessMessage(null);
              }}
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
                <label htmlFor="email" className="input-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="input-field"
                  placeholder="your.email@example.com" 
                  style={{marginTop: '5px'}}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  required
                  autoComplete="email"
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div className="input-group">
              <div className="input-wrapper">
                <label htmlFor="password" className="input-label">Password</label>
                <input
                  id="password"
                  type="password"
                  className="input-field"
                  placeholder="Enter your password"
                  style={{marginTop: '5px'}}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  required
                  autoComplete="current-password"
                  disabled={isLoading}
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
                  disabled={isLoading}
                />
                <label htmlFor="remember" className="checkbox-label">
                  <div className="checkbox-custom">
                    <div className="checkmark"></div>
                  </div>
                  Remember me
                </label>
              </div>
              <a href="#" className="forgot-password" onClick={handleForgotPassword}>
                Forgot Password?
              </a>
            </div>

            <button 
              type="submit" 
              className="login-button" 
              disabled={isLoading || !email.trim() || !password.trim()} 
              style={{marginTop: '30px',width: '365px'}}
            >
              {isLoading ? 'Signing in...' : 'Log in'}
            </button>
          </form>
          
          <div className="signup-link">
            <span className="signup-text">Don't have an account yet?</span>
            <button 
              type="button" 
              className="signup-link-text signup-link-button"
              onClick={handleSignUpRedirect}
              disabled={isLoading}
            >
              Sign up
            </button>
          </div>

          {/* Authentication Notice */}
          <div style={{
            marginTop: '20px',
            padding: '12px',
            backgroundColor: '#E3F2FD',
            border: '1px solid #2196F3',
            borderRadius: '8px',
            fontSize: '12px',
            color: '#1565C0',
            textAlign: 'center'
          }}>
            <strong>Note:</strong> You must create an account first using the Sign Up page before you can log in.
            {userType === 'admin' && ' Admin accounts require special registration.'}
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
