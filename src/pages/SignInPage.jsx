import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthForm from "../components/AuthForm";

const SignInPage = ({ setUser }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/auth/login",
        formData,
        { withCredentials: true }
      );
      setUser(response.data.user); // Update user state immediately
      navigate("/posts");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      throw err; // Re-throw to be caught by AuthForm
    }
  };

  return (
    <div className="auth-page">
      {error && <div className="error-message">{error}</div>}
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
};

export default SignInPage;
