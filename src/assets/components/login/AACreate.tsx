import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FormEvent } from 'react';
import './PACreate.css';

const PACreate = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Account creation attempt:', {
        fullName,
        nicNumber,
        email,
        phoneNumber,
        password
      });
      // Add your registration logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
      alert('Account creation functionality would be implemented here');
    } catch (error) {
      console.error('Account creation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="pa-create-container">
      <div className="pa-create-left-section">
        <div className="pa-create-brand-header">
          
          <div className="pa-create-brand-text">
            <div className="pa-create-brand-name">BABY-CARE-SYSTEM</div>
          </div>
        </div>
        <div className="pa-create-tagline">
          Complete care management for your little ones
        </div>
        <div className="pa-create-features">
          <div className="pa-create-feature">
            <div className="pa-create-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="pa-create-feature-text">Health Tracking</div>
          </div>
          <div className="pa-create-feature">
            <div className="pa-create-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="pa-create-feature-text">Growth Monitoring</div>
          </div>
          <div className="pa-create-feature">
            <div className="pa-create-feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="pa-create-feature-text">Care Reminders</div>
          </div>
        </div>
      </div>

      <div className="pa-create-right-section">
        <div className="pa-create-form-container">
          <div className="pa-create-form-header">
            <div className="pa-create-form-title">Create Admin Account</div>

          </div>

          <form onSubmit={handleSubmit} className="pa-create-form">
            <div className="pa-create-input-group">
              <label className="pa-create-label">Full Name *</label>
              <div className="pa-create-input-wrapper">
                <svg className="pa-create-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="pa-create-input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  autoComplete="name"
                />
              </div>
            </div>

            <div className="pa-create-input-group">
              <label className="pa-create-label">NIC Number *</label>
              <div className="pa-create-input-wrapper">
                <svg className="pa-create-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <line x1="7" y1="8" x2="17" y2="8" stroke="currentColor" strokeWidth="2"/>
                  <line x1="7" y1="12" x2="13" y2="12" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <input
                  type="text"
                  placeholder="Enter your NIC number"
                  className="pa-create-input"
                  value={nicNumber}
                  onChange={(e) => setNicNumber(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="pa-create-input-group">
              <label className="pa-create-label">Email Address *</label>
              <div className="pa-create-input-wrapper">
                <svg className="pa-create-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="pa-create-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="pa-create-input-group">
              <label className="pa-create-label">Phone Number *</label>
              <div className="pa-create-input-wrapper">
                <svg className="pa-create-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="pa-create-input"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="pa-create-input-group">
              <label className="pa-create-label">Password *</label>
              <div className="pa-create-input-wrapper">
                <svg className="pa-create-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="10" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="16" r="1" fill="currentColor"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="pa-create-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="pa-create-password-toggle"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="currentColor" strokeWidth="2"/>
                      <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="pa-create-submit-button" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>

            <div className="pa-create-signin-link">
              <span className="pa-create-signin-text">Already have an account?</span>
              <button 
                type="button" 
                className="pa-create-signin-button"
                onClick={() => navigate('/signin')}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PACreate;
