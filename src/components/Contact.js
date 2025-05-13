import React from "react";
import "../styles/contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <h2>If you're interested in working with me.</h2>
      <p>You can learn more about me or download my resume below.</p>
      <div className="contact-buttons">
        <button className="contact-btn" onClick={handleContactClick}>
          CONTACT US
        </button>
        <a href="./CV.pdf" download>
          <button className="cv-btn">
            <i className="fas fa-download"></i> Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
