import React from "react";
import "./FoodListingSection.css";

function FoodListingSection() {
  return (
    <section className="food-listing">
      <div className="food-listing-content">
        <h2>Food Listing & Availability</h2>
        <p>
          Donors can list available food in real-time, including descriptions, quantity, and expiration dates.
          Recipients can search for available donations based on location, food type, and urgency.
        </p>
      </div>
      <div className="food-listing-grid">
        <div className="food-card">
          <h3>Fresh Bread</h3>
          <p>Description: Packaged fresh bread</p>
          <p>Quantity: 10 loaves</p>
          <p>Expires: 2025-01-30</p>
          <button>Claim Donation</button>
        </div>
        <div className="food-card">
          <h3>Vegetables</h3>
          <p>Description: Organic carrots and lettuce</p>
          <p>Quantity: 15 kg</p>
          <p>Expires: 2025-01-28</p>
          <button>Claim Donation</button>
        </div>
        <div className="food-card">
          <h3>Canned Soup</h3>
          <p>Description: Assorted canned soups</p>
          <p>Quantity: 30 cans</p>
          <p>Expires: 2025-06-15</p>
          <button>Claim Donation</button>
        </div>
      </div>
    </section>
  );
}

export default FoodListingSection;
