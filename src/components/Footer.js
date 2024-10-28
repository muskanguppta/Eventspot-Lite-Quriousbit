// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>EventSpot Lite</h2>
        </div>
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div className="footer-socials">
          <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
