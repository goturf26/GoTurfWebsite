import React, { useState } from "react";
import "./Login.css";

function Login({ closeModal }) {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="login-overlay" onClick={closeModal}>
      
      {/* STOP bubbling */}
      <div className="auth-container" onClick={(e) => e.stopPropagation()}>

        {/* ❌ CLOSE */}
        <span className="close-btn" onClick={closeModal}>✖</span>

        {/* LOGIN */}
        {!isSignup && (
          <form className="form">
            <h2>Welcome Back</h2>
            <input type="text" placeholder="Mobile Number" />
            <input type="password" placeholder="Password" />

            <button type="submit" onClick={closeModal}>
              Login
            </button>

            <span onClick={() => setIsSignup(true)}>
              New user? <b>Sign Up</b>
            </span>
          </form>
        )}

        {/* SIGNUP */}
        {isSignup && (
          <form className="form">
            <h2>Create Account</h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Mobile Number" />
            <input type="password" placeholder="Password" />

            <button type="submit" onClick={closeModal}>
              Sign Up
            </button>

            <span onClick={() => setIsSignup(false)}>
              Already have account? <b>Login</b>
            </span>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
