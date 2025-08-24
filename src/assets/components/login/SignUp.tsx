import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  //const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!repeatPassword) {
      newErrors.repeatPassword = 'Please confirm your password';
    } else if (password !== repeatPassword) {
      newErrors.repeatPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Sign up attempted with:', { fullName, email, phoneNumber, password });
      alert('Account created successfully!');
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #fdf2f8 50%, #f3e8ff 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    backgroundPattern: {
      position: 'absolute' as const,
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none' as const,
      zIndex: 0
    },
    circle1: {
      position: 'absolute' as const,
      top: '-16px',
      right: '-16px',
      width: '96px',
      height: '96px',
      background: '#fbcfe8',
      borderRadius: '50%',
      opacity: 0.2
    },
    circle2: {
      position: 'absolute' as const,
      top: '80px',
      left: '-32px',
      width: '128px',
      height: '128px',
      background: '#dbeafe',
      borderRadius: '50%',
      opacity: 0.2
    },
    circle3: {
      position: 'absolute' as const,
      bottom: '80px',
      right: '80px',
      width: '64px',
      height: '64px',
      background: '#e9d5ff',
      borderRadius: '50%',
      opacity: 0.2
    },
    circle4: {
      position: 'absolute' as const,
      bottom: '160px',
      left: '40px',
      width: '80px',
      height: '80px',
      background: '#fef3c7',
      borderRadius: '50%',
      opacity: 0.2
    },
    mainContainer: {
      position: 'relative' as const,
      width: '100%',
      maxWidth: '420px',
      zIndex: 1
    },
    formCard: {
      background: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      overflow: 'hidden'
    },
    header: {
      background: 'linear-gradient(135deg, #f472b6 0%, #a855f7 50%, #3b82f6 100%)',
      padding: '32px',
      textAlign: 'center' as const
    },
    headerIcon: {
      width: '64px',
      height: '64px',
      background: 'white',
      borderRadius: '50%',
      margin: '0 auto 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
    },
    headerTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: 'white',
      margin: '0 0 8px 0'
    },
    headerSubtitle: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '14px',
      margin: 0
    },
    formSection: {
      padding: '32px'
    },
    inputGroup: {
      marginBottom: '20px'
    },
    input: {
      width: '100%',
      padding: '14px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '16px',
      background: '#f9fafb',
      transition: 'all 0.2s ease',
      outline: 'none',
      boxSizing: 'border-box' as const
    },
    inputFocus: {
      border: '2px solid #60a5fa',
      background: 'white',
      boxShadow: '0 0 0 3px rgba(96, 165, 250, 0.1)'
    },
    inputError: {
      border: '2px solid #f87171',
      background: '#fef2f2',
      boxShadow: '0 0 0 3px rgba(248, 113, 113, 0.1)'
    },
    errorText: {
      color: '#ef4444',
      fontSize: '12px',
      marginTop: '4px',
      marginLeft: '4px'
    },
    submitButton: {
      width: '100%',
      background: 'linear-gradient(135deg, #ec4899 0%, #9333ea 100%)',
      color: 'white',
      fontWeight: '600',
      fontSize: '16px',
      padding: '16px',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      marginTop: '12px',
      boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
    },
    submitButtonHover: {
      transform: 'scale(1.02)',
      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)'
    },
    signInLink: {
      textAlign: 'center' as const,
      marginTop: '24px'
    },
    signInText: {
      color: '#6b7280',
      fontSize: '14px'
    },
    signInLinkText: {
      color: '#9333ea',
      fontWeight: '600',
      textDecoration: 'none',
      fontSize: '14px'
    },
    footer: {
      textAlign: 'center' as const,
      marginTop: '24px'
    },
    footerText: {
      color: '#6b7280',
      fontSize: '12px'
    }
  };

  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const getInputStyle = (fieldName: string) => {
    const baseStyle = { ...styles.input };
    
    if (errors[fieldName]) {
      return { ...baseStyle, ...styles.inputError };
    }
    
    if (focusedInput === fieldName) {
      return { ...baseStyle, ...styles.inputFocus };
    }
    
    return baseStyle;
  };

  const getButtonStyle = () => {
    return isButtonHovered 
      ? { ...styles.submitButton, ...styles.submitButtonHover }
      : styles.submitButton;
  };

  return (
    <div style={styles.container}>
      {/* Background Pattern */}
      <div style={styles.backgroundPattern}>
        <div style={styles.circle1}></div>
        <div style={styles.circle2}></div>
        <div style={styles.circle3}></div>
        <div style={styles.circle4}></div>
      </div>

      <div style={styles.mainContainer}>
        {/* Main Form Container */}
        <div style={styles.formCard}>
          {/* Header Section */}
          <div style={styles.header}>
            <div style={styles.headerIcon}>
              <svg width="32" height="32" fill="#ec4899" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2C5.582 2 2 5.582 2 10s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 11a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm-2 3a3 3 0 01-2.83-2H6a1 1 0 110-2h1.17A3 3 0 0110 8c1.31 0 2.44.83 2.83 2H14a1 1 0 110 2h-1.17A3 3 0 0110 14z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 style={styles.headerTitle}>Create Your Account</h1>
            <p style={styles.headerSubtitle}>Join our baby care community today</p>
          </div>

          {/* Form Section */}
          <div style={styles.formSection}>
            <div>
              {/* Full Name Input */}
              <div style={styles.inputGroup}>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onFocus={() => setFocusedInput('fullName')}
                  onBlur={() => setFocusedInput(null)}
                  placeholder="Full Name"
                  style={getInputStyle('fullName')}
                />
                {errors.fullName && <div style={styles.errorText}>{errors.fullName}</div>}
              </div>

              {/* Email Input */}
              <div style={styles.inputGroup}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  placeholder="Email Address"
                  style={getInputStyle('email')}
                />
                {errors.email && <div style={styles.errorText}>{errors.email}</div>}
              </div>

              {/* Phone Number Input */}
              <div style={styles.inputGroup}>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onFocus={() => setFocusedInput('phoneNumber')}
                  onBlur={() => setFocusedInput(null)}
                  placeholder="Phone Number"
                  style={getInputStyle('phoneNumber')}
                />
                {errors.phoneNumber && <div style={styles.errorText}>{errors.phoneNumber}</div>}
              </div>

              {/* Password Input */}
              <div style={styles.inputGroup}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedInput('password')}
                  onBlur={() => setFocusedInput(null)}
                  placeholder="Password"
                  style={getInputStyle('password')}
                />
                {errors.password && <div style={styles.errorText}>{errors.password}</div>}
              </div>

              {/* Repeat Password Input */}
              <div style={styles.inputGroup}>
                <input
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  onFocus={() => setFocusedInput('repeatPassword')}
                  onBlur={() => setFocusedInput(null)}
                  placeholder="Confirm Password"
                  style={getInputStyle('repeatPassword')}
                />
                {errors.repeatPassword && <div style={styles.errorText}>{errors.repeatPassword}</div>}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                style={getButtonStyle()}
              >
                Create Account
              </button>

              {/* Sign In Link */}
              <div style={styles.signInLink}>
                <span style={styles.signInText}>Already have an account? </span>
                {/* <Link to="/" style={styles.signInLinkText}>Sign In</Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            By creating an account, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;