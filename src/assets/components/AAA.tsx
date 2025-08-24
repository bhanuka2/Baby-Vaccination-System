import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AAA.module.css';

interface FormErrors {
  email?: string;
  password?: string;
}

const AAA: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): string | undefined => {
    if (!email) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return undefined;
  };

  const validatePassword = (password: string): string | undefined => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const emailError = validateEmail(email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(password);
    if (passwordError) newErrors.password = passwordError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Baby-Pulse sign in attempted with:', { email, password, rememberMe });
      // On success, you might navigate to dashboard
      // navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (errors.email && value) {
      const error = validateEmail(value);
      if (!error) {
        setErrors(prev => ({ ...prev, email: undefined }));
      }
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (errors.password && value) {
      const error = validatePassword(value);
      if (!error) {
        setErrors(prev => ({ ...prev, password: undefined }));
      }
    }
  };

  return (
    <div className={styles.babyPulseSigninPage}>
      {/* Background decorative elements */}
      <div className={styles.decorativeElements}>
        <div className={styles.tealBackground}></div>
        <div className={styles.decorativeDots}>
          <div className={`${styles.dot} ${styles.dot1}`}></div>
          <div className={`${styles.dot} ${styles.dot2}`}></div>
          <div className={`${styles.dot} ${styles.dot3}`}></div>
          <div className={`${styles.dot} ${styles.dot4}`}></div>
          <div className={`${styles.dot} ${styles.dot5}`}></div>
          <div className={`${styles.dot} ${styles.dot6}`}></div>
        </div>
        <div className={styles.coloredShapes}>
          <div className={`${styles.shape} ${styles.shapePink}`}></div>
          <div className={`${styles.shape} ${styles.shapeBlue}`}></div>
          <div className={`${styles.shape} ${styles.shapePurple}`}></div>
          <div className={`${styles.shape} ${styles.shapeGreen}`}></div>
          <div className={`${styles.shape} ${styles.shapeRed}`}></div>
          <div className={`${styles.shape} ${styles.shapeCyan}`}></div>
        </div>
      </div>

      {/* Baby image */}
      <img 
        className={styles.babyImage} 
        src="https://api.builder.io/api/v1/image/assets/TEMP/cd5962e043db1c70bbe09a8ca7426059a1b6c270?width=2306" 
        alt="Baby" 
      />

      {/* Main form container */}
      <div className={styles.formContainer}>
        <div className={styles.formBackground}>
          <div className={styles.formContent}>
            <h1 className={styles.signinTitle}>Sign In</h1>
            
            <form onSubmit={handleSubmit} className={styles.signinForm}>
              {/* Email input */}
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="your.email@example.com"
                  className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
                  required
                  autoComplete="email"
                />
                {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
              </div>

              {/* Password input */}
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="••••••••"
                  className={`${styles.formInput} ${errors.password ? styles.inputError : ''}`}
                  required
                  autoComplete="current-password"
                />
                {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
              </div>

              {/* Remember me and forgot password */}
              <div className={styles.formOptions}>
                <div className={styles.rememberGroup}>
                  <div className={styles.checkboxContainer}>
                    <input
                      type="checkbox"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className={styles.checkboxInput}
                    />
                    <div className={styles.checkboxCustom}>
                      {rememberMe && (
                        <svg className={styles.checkmark} viewBox="0 0 22 13" fill="none">
                          <path d="M21.5397 0.3808C22.1534 0.888533 22.1534 1.71309 21.5397 2.22082L8.96965 12.6192C8.35588 13.1269 7.35911 13.1269 6.74534 12.6192L0.460328 7.42001C-0.153443 6.91228 -0.153443 6.08772 0.460328 5.57999C1.0741 5.07225 2.07086 5.07225 2.68463 5.57999L7.85995 9.85713L19.3203 0.3808C19.934 -0.126933 20.9308 -0.126933 21.5446 0.3808H21.5397Z" fill="white"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <label htmlFor="rememberMe" className={styles.rememberLabel}>Remember me</label>
                </div>
                <a href="#" className={styles.forgotLink}>Forgot Password ?</a>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                disabled={isSubmitting}
              >
                <span className={styles.buttonText}>
                  {isSubmitting ? 'Signing in...' : 'Log in'}
                </span>
              </button>

              {/* Sign up link */}
              <div className={styles.signupLinkContainer}>
                <span className={styles.signupText}>Don't have account yet ?</span>
                <a onClick={() => navigate('/signup')} className={styles.signupLink}>Sign up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AAA;
