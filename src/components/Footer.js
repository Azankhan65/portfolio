import React from "react";
import "../styles/footer.css"; 

const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      <a href="mailto:azan.khaan65@gmail.com" className="footer-item">
        <i className="fas fa-envelope"></i> azan.khaan65@gmail.com
      </a>
      <a href="https://github.com/azankhan65" target="_blank" rel="noopener noreferrer" className="footer-item">
        <i className="fab fa-github"></i> GitHub
      </a>
      <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="footer-item">
        <i className="fab fa-instagram"></i> Instagram
      </a>
      <a href="https://facebook.com/your-username" target="_blank" rel="noopener noreferrer" className="footer-item">
        <i className="fab fa-facebook"></i> Facebook
      </a>
      <a href="https://tiktok.com/@your-username" target="_blank" rel="noopener noreferrer" className="footer-item">
        <i className="fab fa-tiktok"></i> TikTok
      </a>
      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="footer-item">
        <i className="fab fa-linkedin"></i> LinkedIn
      </a>
    </div>
    <p className="footer-credit">© 2025 Azan Khan | All Rights Reserved</p>
  </footer>
);

export default Footer;
