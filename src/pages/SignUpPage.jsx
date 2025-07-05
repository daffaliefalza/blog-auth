import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthForm from "../components/AuthForm";

const SignUpPage = ({ setUser }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignUp = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/auth/signup",
        formData,
        { withCredentials: true }
      );
      setUser(response.data.user); // Update user state immediately
      navigate("/posts");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      throw err; // Re-throw to be caught by AuthForm
    }
  };

  return (
    <div className="auth-page">
      {error && <div className="error-message">{error}</div>}
      <AuthForm type="signup" onSubmit={handleSignUp} />
    </div>
  );
};

export default SignUpPage;
