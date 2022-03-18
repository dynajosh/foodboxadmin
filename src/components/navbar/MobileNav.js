import React from "react";
import { Link } from "react-router-dom";

export default function MobileNav({ mobileNavActive }) {
  return (
    <div className={mobileNavActive ? "mobile-nav active" : "mobile-nav"}>
      <div className="mobile-nav-items">
        <Link to="/" className="mobile-nav-item">
          Home
        </Link>
        <Link to="/" className="mobile-nav-item">
          Developers
        </Link>
        <Link to="/" className="mobile-nav-item">
          Use case
        </Link>
        <Link to="/" className="mobile-nav-item">
          Pricing
        </Link>
        <Link to="/signup" className="nav-btn">
          Get Started
        </Link>
        <Link to="/signin" className="nav-btn signin">
          Sign In
        </Link>
      </div>
    </div>
  );
}
