import React from "react";
import "./Partners.css"; // Importing the CSS file for styling
import NGO1 from "../images/NGO1.png"; // Importing the image file for NGO1

const Partners = () => {
  const organizations = [
    {
      name: "Helping Hands NGO",
      type: "NGO",
      address: "45 Bandra West, Mumbai",
      image: NGO1, 
    },
  ];

  return (
    <div className="partners-page">
      <h1>Our Partners</h1>
      <div className="card-container">
        {organizations.map((org, index) => (
          <div className="card" key={index}>
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${org.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="card-content">
              <h3>{org.name}</h3>
            </div>
            <div className="card-hover">
              <p>
                <strong>Address:</strong> {org.address}
              </p>
              <p>
                <strong>Donations:</strong> {org.donations} meals
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
