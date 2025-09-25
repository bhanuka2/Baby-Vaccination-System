import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
import "/src/assets/components/login/signup.css";
import Header from '../Common/Header.tsx'; 


const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (password !== repeatPassword) {
      alert("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      console.log("Signup attempt:", {
        fullName,
        nicNumber,
        email,
        phoneNumber,
      });
      // Add your registration logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay
      // Navigate to appropriate page after successful signup
      navigate("/signin");
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <div className="signup-container">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/0bc537a44d181e4626561155cd3b97dc7a7f17a5?width=2880"
        alt="Background"
        className="background-image"
      />
      <div className="form-card-container">
        <div className="background-layer-1" />
        <div className="background-layer-2" />

        <h3 className="form-title" style={{ marginBottom: "13px" }}>
          Create Your Baby Care Account
        </h3>

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
              onClick={() => navigate("/")}
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
    </>
  );
};

export default Signup;
