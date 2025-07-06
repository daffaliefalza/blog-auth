import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthForm from "../components/AuthForm";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (formData) => {
    try {
      setError("");
      const response = await axios.post(
        "http://localhost:3005/auth/signup",
        formData,
        { withCredentials: true }
      );

      if (response.data.success) {
        setSuccess(true);
        // Redirect to sign-in after a brief delay
        setTimeout(() => navigate("/sign-in"), 2000);
      } else {
        setError(response.data.message || "Signup failed");
      }
    } catch (err) {
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
      {success ? (
        <div className="success-message">
          Account created successfully! Redirecting to sign in...
        </div>
      ) : (
        <AuthForm type="signup" onSubmit={handleSignUp} />
      )}
    </div>
  );
};

export default SignUpPage;
