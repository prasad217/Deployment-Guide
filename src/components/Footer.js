import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="copyright-symbol">&copy; {currentYear}</span>
        <a
          href="https://github.com/prasad217"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/2111/2111425.png"
            alt="GitHub Logo"
            className="github-logo"
          />
          prasad217
        </a>
      </div>
    </footer>
  );
};

export default Footer;
