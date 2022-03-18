import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="footer-wave-box">
        <div className="footer-wave footer-animation"></div>
      </div>
      <div className="main">
        <div className="footer">
          <div className="single-footer">
            <h4>about us</h4>
            <p>
              One bridge helps businesses connect to their customer’s bank
              account for payments, financial services and data. It’s a lot of
              individual banks to get connected to, but now all you need is one
              bridge.
            </p>
            <div className="footer-social">
              <a href="/">
                <i className="lab la-facebook-f"></i>
              </a>
              <a href="/">
                <i className="lab la-twitter"></i>
              </a>
              <a href="/">
                <i className="lab la-instagram"></i>
              </a>
              <a href="/">
                <i className="lab la-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="single-footer">
            <h4>quick links</h4>

            <div className="nav-item">
              <a href="/">
                <i className="fas fa-chevron-right"></i> Home
              </a>

              <a href="/">
                <i className="fas fa-chevron-right"></i> developers
              </a>

              <a href="/">
                <i className="fas fa-chevron-right"></i> use case
              </a>
              <a href="/">
                <i className="fas fa-chevron-right"></i> pricing
              </a>
            </div>
          </div>
          <div className="single-footer">
            <h4>contact us</h4>
            <span className="contact">
              <span>Address:</span>
              <small>52, Agboyi road, Ogudu Lagos, Nigeria </small>
            </span>
            <span className="contact">
              <span>Email:</span>
              <small>hello@onebridge.com</small>
            </span>
            <span className="contact">
              <span>Phone:</span>
              <small>+234 8151589129</small>
            </span>
          </div>
        </div>
        <div className="copy">
          <p>&copy; 2021 all rights reserved One Bridge</p>
        </div>
      </div>
    </footer>
  );
}
