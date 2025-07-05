import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AuthForm from "../components/AuthForm";
const SignUpPage = ({ setUser }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignUp = async (formData) => {
    try {
      setError(""); // Clear previous errors
      const response = await axios.post(
        "http://localhost:3005/auth/signup",
        formData,
        { withCredentials: true }
      );

      if (response.data.success) {
        setUser(response.data.user);
        navigate("/posts");
      } else {
        setError(response.data.message || "Signup failed");
      }
    } catch (err) {
      // Handle network errors or other unexpected errors
      setError(
        err.response?.data?.message || "An error occurred during signup"
      );
    }
  };

  return (
    <div className="auth-page">
      {error && (
        <div
          className="error-message"
          style={{ color: "red", marginBottom: "15px" }}
        >
          {error}
        </div>
      )}
      <AuthForm type="signup" onSubmit={handleSignUp} />
    </div>
  );
};

export default SignUpPage;
