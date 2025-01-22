import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Best food with Quality</h1>
        <p>
          Discover the best food & drinks in your city. Eat & drink in low rates or free.
        </p>
        <div className="hero-buttons">
          <button className="hero-button red">Donate Food</button>
          <button className="hero-button">Be Volunter</button>
        </div>
      </div>
      <div className="hero-images">
        {/* Replace with actual images */}
        <img src="dish1.jpg" alt="Dish 1" />
        <img src="dish2.jpg" alt="Dish 2" />
      </div>
    </section>
  );
}

export default HeroSection;
