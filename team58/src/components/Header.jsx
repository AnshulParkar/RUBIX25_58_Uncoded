import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Anna Rakshak</div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#menu">Partners</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* <button className="book-button">Donate food</button> */}
      <button className="login-button">login/signup</button>
    </header>
  );
}

export default Header;
