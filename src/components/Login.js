import React, { useState } from "react";
import { auth } from "../services/firebaseConfig"; // Firebase authentication import
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages

    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);

      // Redirect to dashboard or home page upon successful login
      navigate("/dashboard");
    } catch (error) {
      // Check if it's a specific Firebase error
      if (error.code === "auth/wrong-password") {
        setError("Wrong password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error message if exists */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
