import { useState } from "react";
import AuthForm from "../components/AuthForm";
import axios from "axios";

const SignUpPage = () => {
  const handleSignUp = async (formData) => {
    const response = await axios.post(
      "http://localhost:3005/auth/signup",
      formData,
      { withCredentials: true }
    );
    return response.data;
  };

  return (
    <div className="auth-page">
      <AuthForm type="signup" onSubmit={handleSignUp} />
    </div>
  );
};

export default SignUpPage;
