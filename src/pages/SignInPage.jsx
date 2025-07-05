import { useState } from "react";
import AuthForm from "../components/AuthForm";
import axios from "axios";

const SignInPage = () => {
  const handleLogin = async (formData) => {
    const response = await axios.post(
      "http://localhost:3005/auth/login",
      formData,
      { withCredentials: true }
    );
    return response.data;
  };

  return (
    <div className="auth-page">
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
};

export default SignInPage;
