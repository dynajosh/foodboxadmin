import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ mobileNavActive, setMobileNavActive }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 108) {
      setHasScrolled(true);
    } else if (window.scrollY === 0) {
      setHasScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  const handleClick = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <>
      <nav className={hasScrolled ? "nav-scroll" : null}>
        <div className="nav-logo">
          <h1>One Bridge</h1>
        </div>

        <div className="nav-items">
          <Link to="/" className="nav--item">
            Home
          </Link>

          <Link to="/" className="nav--item">
            Developers
          </Link>
          <Link to="/" className="nav--item">
            Use Case
          </Link>

          <Link to="/" className="nav--item">
            Pricing
          </Link>
          <div className="nav-btns">
            <Link to="/signup">
              <button className="nav-btn">Get Started</button>
            </Link>
            <Link to="/signin">
              <button className="nav-btn signin">Sign In</button>
            </Link>
          </div>
        </div>

        <div
          className={
            mobileNavActive ? " hamburger hamburger--active" : "hamburger"
          }
          onClick={handleClick}
        >
          <div className="hamburger--bar"></div>
          <div className="hamburger--bar"></div>
        </div>
      </nav>
    </>
  );
}
