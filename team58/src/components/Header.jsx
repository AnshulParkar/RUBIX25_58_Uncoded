import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Anna Rakshak</div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="foodlisting" smooth={true} duration={500}>
              Food Listing
            </Link>
          </li>
          <li>
            <Link to="partners" smooth={true} duration={500}>
              Partners
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button className="login-button">login/signup</button>
    </header>
  );
}

export default Header;