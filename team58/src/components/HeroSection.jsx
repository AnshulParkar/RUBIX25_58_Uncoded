import React from "react";
import { Link } from "react-router-dom"; // Add this import
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Food Rescue Platform</h1>
        <p>
          Discover the best food & drinks in your city. Eat & drink in low rates or free.
        </p>
        <div className="hero-buttons">
          <Link to="/donate">
            <button className="hero-button red">Donate Now</button>
          </Link>
          <button className="hero-button">Be Volunter</button>
        </div>
      </div>
      {/* <div className="hero-images">
      </div> */}
    </section>
  );
}

export default HeroSection;