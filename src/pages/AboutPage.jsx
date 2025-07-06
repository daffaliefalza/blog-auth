import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About Cultural Harmony</h1>

        <div className="about-content">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Cultural Harmony is dedicated to fostering understanding and
              appreciation between Korean and Indonesian cultures through shared
              stories, experiences, and dialogue.
            </p>

            <h2>Our Story</h2>
            <p>
              Founded in 2023, our platform began as a small community blog and
              has grown into a vibrant space where people from both cultures
              come together to exchange ideas, traditions, and perspectives.
            </p>

            <h2>The Team</h2>
            <p>
              We're a diverse group of writers, cultural enthusiasts, and
              bridge-builders passionate about creating meaningful connections
              between our communities.
            </p>

            <div className="cta-section">
              <p>Join our community and share your own cultural experiences!</p>
              <Link to="/sign-up" className="cta-btn">
                Become a Contributor
              </Link>
            </div>
          </div>

          <div className="about-image">
            <img
              src="/about-image.jpg"
              alt="Korean and Indonesian cultural elements"
              className="cultural-image"
            />
            <div className="image-caption">
              Traditional elements from both cultures coming together
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
