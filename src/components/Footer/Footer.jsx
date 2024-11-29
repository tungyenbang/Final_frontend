import React from 'react';
import './Footer.css'; // Import file CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Us */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We are a company dedicated to providing top-notch services to our customers. Our mission is to make your life easier with our innovative solutions.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <ul>
            <li>Phone: (123) 456-7890</li>
            <li>Email: support@example.com</li>
            <li>Address: 123 Street, City, Country</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
