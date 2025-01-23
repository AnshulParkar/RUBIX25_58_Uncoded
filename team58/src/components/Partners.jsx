/*import React from "react";
import "./Partners.css"; // Importing the CSS file for styling
import NGO1 from "../images/NGO1.png";
import Resto1 from "../images/resto1.png";
import NGO2 from "../images/NGO2.png";
import NGO3 from "../images/NGO3.png";
import NGO4 from "../images/NGO4.png";
import NGO5 from "../images/NGO5.png";
import Resto2 from "../images/resto2.png";
import NGO6 from "../images/NGO6.png";
import Resto3 from "../images/resto3.png";
import Resto4 from "../images/resto4.png";
import Resto5 from "../images/resto5.png";
import NGO7 from "../images/NGO7.png";

// Importing the image file for NGO1

const Partners = () => {
  const organizations = [
    {
      name: "Helping Hands NGO",
      type: "NGO",
      address: "45 Bandra West, Mumbai",
      
      image: NGO1,
    },
    {
      name: "Happy Meals Restaurant",
      type: "RESTAURANT",
      address: "12 Andheri East, Mumbai",
      donations: 220,
      image: Resto1,
    },
    {
      name: "Feed the Hungry",
      type: "NGO",
      address: "23 Malad West, Mumbai",
      
      image: NGO2,
    },
    {
      name: "Sharing Smiles",
      type: "NGO",
      address: "34 Borivali East, Mumbai",
      
      image: NGO3,
    },
    {
      name: "Feeding India",
      type: "NGO",
      address: "56 Kandivali West, Mumbai",
      
      image: NGO4,
    },
    {
      name: "Food for Life",
      type: "NGO",
      address: "67 Goregaon East, Mumbai",
      
      image: NGO5,
    },
    {
      name: "Hunger Bros",
      type: "RESTAURANT",
      address: "78 Jogeshwari West, Mumbai",
      donations:190,
      image: Resto2,
    },
    {
      name: "Food for Soul",
      type: "NGO",
      address: "89 Santacruz East, Mumbai",
      image: NGO6,
    },
    {
      name: "Shiv Sagar",
      type: "RESTAURANT",
      address: "90 Vile Parle West, Mumbai",
      donations:140,
      image: Resto3,
    },
    {
      name: "Foodies",
      type: "RESTAURANT",
      address: "23 Malad West, Mumbai",
      donations:50,
      image: Resto4,
    },
    {
      name: "Link View",
      type: "RESTAURANT",
      address: "77,Churchgate, Mumbai",
      donations:220,
      image: Resto5,
    },
    {
      name: "Asha Foundation",
      type: "NGO",
      address: "Mhatre Road,99, Mumbai",
      image: NGO7,
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
                {org.type=="RESTAURANT"?<strong>Donations:{org.donations} meals</strong> :<div></div>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;*/
import React from "react";
import "./Partners.css";
import NGO1 from "../images/NGO1.png";
import Resto1 from "../images/resto1.png";
import NGO2 from "../images/NGO2.png";
import NGO3 from "../images/NGO3.png";
import NGO4 from "../images/NGO4.png";
import NGO5 from "../images/NGO5.png";
import Resto2 from "../images/resto2.png";
import NGO6 from "../images/NGO6.png";
import Resto3 from "../images/resto3.png";
import Resto4 from "../images/resto4.png";
import Resto5 from "../images/resto5.png";
import NGO7 from "../images/NGO7.png";

const Partners = () => {
  const organizations = [
    {
      name: "Helping Hands NGO",
      type: "NGO",
      address: "45 Bandra West, Mumbai",
      image: NGO1,
    },
    {
      name: "Happy Meals Restaurant",
      type: "RESTAURANT",
      address: "12 Andheri East, Mumbai",
      donations: 220,
      image: Resto1,
    },
    {
      name: "Feed the Hungry",
      type: "NGO",
      address: "23 Malad West, Mumbai",
      image: NGO2,
    },
    {
      name: "Sharing Smiles",
      type: "NGO",
      address: "34 Borivali East, Mumbai",
      image: NGO3,
    },
    {
      name: "Feeding India",
      type: "NGO",
      address: "56 Kandivali West, Mumbai",
      image: NGO4,
    },
    {
      name: "Food for Life",
      type: "NGO",
      address: "67 Goregaon East, Mumbai",
      image: NGO5,
    },
    {
      name: "Hunger Bros",
      type: "RESTAURANT",
      address: "78 Jogeshwari West, Mumbai",
      donations: 190,
      image: Resto2,
    },
    {
      name: "Food for Soul",
      type: "NGO",
      address: "89 Santacruz East, Mumbai",
      image: NGO6,
    },
    {
      name: "Shiv Sagar",
      type: "RESTAURANT",
      address: "90 Vile Parle West, Mumbai",
      donations: 140,
      image: Resto3,
    },
    {
      name: "Foodies",
      type: "RESTAURANT",
      address: "23 Malad West, Mumbai",
      donations: 50,
      image: Resto4,
    },
    {
      name: "Link View",
      type: "RESTAURANT",
      address: "77 Churchgate, Mumbai",
      donations: 220,
      image: Resto5,
    },
    {
      name: "Asha Foundation",
      type: "NGO",
      address: "Mhatre Road, 99, Mumbai",
      image: NGO7,
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
              {org.type === "RESTAURANT" && (
                <p>
                  <strong>Donations:</strong> {org.donations} meals
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
