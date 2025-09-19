import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FormEvent } from 'react';
import '/src/assets/components/login/signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (password !== repeatPassword) {
      alert('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      console.log('Signup attempt:', {
        fullName,
        nicNumber,
        email,
        phoneNumber,
        password
      });
      // Add your registration logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
      alert('Signup functionality would be implemented here');
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/0bc537a44d181e4626561155cd3b97dc7a7f17a5?width=2880"
        alt=""
        className="background-image"
      />
      <div className="form-card-container">
        <div className="background-layer-1" />
        <div className="background-layer-2" />
        
        <h1 className="form-title"style={{marginBottom:"10px"}} >
          Create Your Baby Care Account
        </h1>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group" style={{height: '60px'}}>
            <input
              type="text"
              placeholder="Full name"
              className="signup-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>
          
          <div className="input-group" style={{height: '60px'}}>
            <input
              type="text"
              placeholder="NIC number"
              className="signup-input"
              value={nicNumber}
              onChange={(e) => setNicNumber(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group" style={{height: '60px'}}>
            <input
              type="email"
              placeholder="Email address"
              className="signup-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          
          <div className="input-group" style={{height: '60px'}}>
            <input
              type="tel"
              placeholder="Phone number"
              className="signup-input"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              autoComplete="tel"
            />
          </div>
          
          <div className="input-group" style={{height: '60px'}}>
            <input
              type="password"
              placeholder="Password"
              className="signup-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>
          
          <div className="input-group" style={{height: '60px'}}>
            <input
              type="password"
              placeholder="Repeat password"
              className="signup-input"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>
          
          <button type="submit" className="signup-button" disabled={isLoading}>
            <div className="button-text">
              {isLoading ? 'Creating account...' : 'Sign up'}
            </div>
          </button>
          
          <div className="login-link" style={{ marginTop: '30px' }}>
            <span className="login-text">Already have an account?</span>
            <button 
              type="button" 
              className="login-link-text login-link-button"
              onClick={() => navigate('/signin')}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      
      <div className="bottom-bar" />
    </div>
  );
};

export default Signup;
