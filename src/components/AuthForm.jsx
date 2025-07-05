import { useState } from "react";
import { Link } from "react-router-dom";
const AuthForm = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: type === "signup" ? "" : undefined,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form">
      <h2>{type === "login" ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {type === "signup" && (
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : type === "login" ? "Login" : "Sign Up"}
        </button>
      </form>
      <div className="auth-switch">
        {type === "login" ? (
          <p>
            Don't have an account? <Link to="/sign-up">Sign up</Link>
          </p>
        ) : (
          <p>
            Already have an account? <Link to="/sign-in">Login</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
