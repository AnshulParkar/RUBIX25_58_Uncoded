import React from "react";
import "./FoodListingSection.css"; // Importing the external CSS file
import Paneer from "../images/paneer.png";
import Jeera from "../images/jeera.png";
import Aloo from "../images/aloo.png";
import Dal from "../images/dal.png";

 // Importing the image

const FoodListing = () => {
  const foodItems = [
    {
      name: "Paneer Butter Masala",
      quantity: "9 servings",
      expires: "2025-02-01",
      donor: "Happy Meals Restaurant",
      image: Paneer,
    },
    {
      name: "Jeera Rice",
      quantity: "3 servings",
      expires: "2025-02-03",
      donor: "Aarti Sharma",
      image: Jeera,
    },
    {
      name: "Aloo Gobi",
      quantity: "1.5 kg",
      expires: "2025-02-05",
      donor: "Vikram Singh",
      image: Aloo,
    },
    {
      name: "Dal Tadka",
      quantity: "10 servings",
      expires: "2025-02-07",
      donor: "Foodies",
      image: Dal,
    },
  ];

  return (
    <div className="food-listing">
      <div className="food-listing-content">
        <h2>Food Listing</h2>
        <p>Browse through the available food items and their details below.</p>
      </div>
      <div className="food-listing-grid">
        {foodItems.map((item, index) => (
          <div className="food-card" key={index}>
            <h3>{item.name}</h3>
            {item.image && (
              <img src={item.image} alt={item.name} className="food-image"  />
            )}
            <p>Quantity: {item.quantity}</p>
            <p>Expires: {item.expires}</p>
            <p>Donor: {item.donor}</p>
            <button className="claim-button">Claim Donation</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodListing;
