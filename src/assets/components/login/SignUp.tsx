import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import type { FormEvent } from "react";
import "/src/assets/components/login/signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState<'customer' | 'admin'>('customer');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    // Basic validation
    if (password !== repeatPassword) {
      setErrorMessage("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^[0-9+\-\s()]{10,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setErrorMessage("Please enter a valid phone number");
      setIsLoading(false);
      return;
    }

    try {
      const apiUrl = userType === 'admin'
        ? 'http://localhost:8082/api/admin/addAdmin'
        : 'http://localhost:8082/member/add';
      
      // Updated payload to match backend DTO attributes
      const payload = {
        name: fullName.trim(),  // Changed from fullName to name
        nic: nicNumber.trim(),
        email: email.trim().toLowerCase(),
        phone: phoneNumber.trim(),  // Changed from phoneNumber to phone  
        password: password
      };

      console.log(`Attempting ${userType} signup to:`, apiUrl);
      console.log('Payload:', { ...payload, password: '[HIDDEN]' });

      const response = await axios.post(apiUrl, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        timeout: 15000, // 15 second timeout
      });

      // Handle successful response
      console.log("Signup successful:", response.data);
      setSuccessMessage(`${userType.charAt(0).toUpperCase() + userType.slice(1)} account created successfully! Redirecting to login...`);
      
      // Wait a moment to show success message before redirecting
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
      
    } catch (error: any) {
      console.error("Signup error:", error);
      
      if (error.code === 'ECONNABORTED') {
        setErrorMessage('Request timeout. Please check your connection and try again.');
      } else if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('Error response:', error.response);
        const status = error.response.status;
        const message = error.response.data?.message || error.response.data?.error || 'Signup failed';
        
        if (status === 400) {
          setErrorMessage(`Invalid data: ${message}`);
        } else if (status === 409) {
          setErrorMessage('User already exists with this email or NIC number');
        } else if (status === 500) {
          setErrorMessage('Server error. Please try again later.');
        } else {
          setErrorMessage(`${userType.charAt(0).toUpperCase() + userType.slice(1)} signup failed: ${message}`);
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.log('Error request:', error.request);
        setErrorMessage('Cannot connect to server. Please ensure the backend server is running on http://localhost:8082 and CORS is configured properly.');
      } else {
        // Something happened in setting up the request
        console.log('Error message:', error.message);
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/0bc537a44d181e4626561155cd3b97dc7a7f17a5?width=2880"
        alt="Background"
        className="background-image"
      />
      <div className="form-card-container">
        <div className="background-layer-1" />
        <div className="background-layer-2" />

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

        <h3 className="form-title" style={{ marginBottom: "13px" }}>
          Create Your Baby Care Account
        </h3>
        
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
          <div
            className="input-group"
            style={{
              height: "45px",
              backgroundColor: "white",
              borderRadius: "15px",
            }}
          >
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

          <div
            className="input-group"
            style={{
              height: "45px",
              backgroundColor: "white",
              borderRadius: "15px",
            }}
          >
            <input
              type="text"
              placeholder="NIC number"
              className="signup-input"
              value={nicNumber}
              onChange={(e) => setNicNumber(e.target.value)}
              required
            />
          </div>

          <div
            className="input-group"
            style={{
              height: "45px",
              backgroundColor: "white",
              borderRadius: "15px",
            }}
          >
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

          <div
            className="input-group"
            style={{
              height: "45px",
              backgroundColor: "white",
              borderRadius: "15px",
            }}
          >
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

          <div
            className="input-group"
            style={{
              height: "45px",
              backgroundColor: "white",
              borderRadius: "15px",
            }}
          >
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

          <div
            className="input-group"
            style={{
              height: "45px",
              backgroundColor: "white",
              borderRadius: "15px",
            }}
          >
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
              {isLoading ? "Creating account..." : "Sign up"}
            </div>
          </button>

          <div
            className="login-link"
            style={{ marginTop: "30px", position: "relative", zIndex: 10 }}
          >
            <span className="login-text" style={{ color: "black", fontWeight: "normal" }}>
              Already have an account?
            </span>

            <button
              type="button"
              className="login-link-text login-link-button"
              onClick={() => navigate("/signin")}
              style={{
                cursor: "pointer",
                padding: "0 5px",
                color: "#3a86ff",
                textDecoration: "underline",
                background: "transparent",
                border: "none",
                fontWeight: "bold",
                position: "relative",
                zIndex: 20,
              }}
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
