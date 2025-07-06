import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Thank you for your message! We will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Get In Touch</h1>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>Our Location</h3>
              <p>
                123 Harmony Street
                <br />
                Cultural District
                <br />
                Seoul, South Korea
              </p>
            </div>

            <div className="info-card">
              <FaPhone className="info-icon" />
              <h3>Phone</h3>
              <p>+82 2 1234 5678</p>
            </div>

            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h3>Email</h3>
              <p>contact@culturalharmony.com</p>
            </div>

            <div className="info-card">
              <FaClock className="info-icon" />
              <h3>Working Hours</h3>
              <p>
                Monday - Friday
                <br />
                9:00 AM - 6:00 PM KST
              </p>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitMessage && (
                <div className="submit-message">{submitMessage}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
