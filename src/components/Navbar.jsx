import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Cultural Harmony
        </Link>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            to="/posts"
            className="navbar-link"
            onClick={() => setIsOpen(false)}
          >
            Posts
          </Link>
          <Link
            to="/about"
            className="navbar-link"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="navbar-link"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <div className="navbar-auth">
            {user ? (
              <>
                <div className="navbar-user">
                  <span>Hello {user.username}👋</span>
                </div>
                <button
                  onClick={() => {
                    onLogout();
                    setIsOpen(false);
                  }}
                  className="navbar-logout"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/sign-in"
                className="navbar-signin"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
