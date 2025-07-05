import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Deadline Warrior Blog
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/posts" className="navbar-link">
            Posts
          </Link>
          {user ? (
            <>
              <span className="navbar-user">Hello, {user.username}</span>
              <button onClick={onLogout} className="navbar-link">
                Logout
              </button>
            </>
          ) : (
            <Link to="/sign-in" className="navbar-link">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
