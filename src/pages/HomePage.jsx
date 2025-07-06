import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero-content">
        <h1 className="title">Cultural Harmony</h1>
        <div className="flag-wrapper">
          <img
            src="/korea.png"
            alt="Korea Flag"
            className="flag animate-left"
          />
          <span className="symbol">✧</span>
          <img
            src="/indonesia.png"
            alt="Indonesia Flag"
            className="flag animate-right"
          />
        </div>
        <p className="subtitle">Korea ✧ Indonesia — Friendship & Unity</p>
        <div className="cta-buttons">
          <Link to="/posts" className="cta-btn explore-btn">
            Explore Posts
          </Link>
          <Link to="/sign-up" className="cta-btn explore-btn">
            Join Our Community
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
