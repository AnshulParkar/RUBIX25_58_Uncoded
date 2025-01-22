import React from "react";
import "./Partners.css"; // Importing the CSS file for styling

const Partners = () => {
  const organizations = [
    // {
    //   name: "Happy Meals Restaurant",
    //   type: "Restaurant",
    //   address: "123 Marine Drive, Mumbai",
    //   donations: 120,
    // },
    {
      name: "Helping Hands NGO",
      type: "NGO",
      address: "45 Bandra West, Mumbai",
      donations: 300,
      image: require("./images/Screenshot 2025-01-22 234350.png"),
    },
    // {
    //   name: "Food Bank Alliance",
    //   type: "Food Bank",
    //   address: "789 Worli Sea Face, Mumbai",
    //   donations: 450,
    // },
    // {
    //   name: "Care & Share Trust",
    //   type: "Trust",
    //   address: "67 Dadar TT Circle, Mumbai",
    //   donations: 200,
    // },
    // {
    //   name: "Meal Makers",
    //   type: "Restaurant",
    //   address: "12 Andheri East, Mumbai",
    //   donations: 180,
    // },
    // {
    //   name: "Shelter for Souls",
    //   type: "Food Shelter",
    //   address: "98 Colaba Causeway, Mumbai",
    //   donations: 220,
    // },
    // {
    //   name: "Unity Kitchens",
    //   type: "Restaurant",
    //   address: "34 Juhu Beach Road, Mumbai",
    //   donations: 150,
    // },
    // {
    //   name: "The Humanity Project",
    //   type: "NGO",
    //   address: "90 Chembur East, Mumbai",
    //   donations: 275,
    // },
    // {
    //   name: "Bright Future Foundation",
    //   type: "Trust",
    //   address: "15 Goregaon West, Mumbai",
    //   donations: 300,
    // },
    // {
    //   name: "Mumbai Food Angels",
    //   type: "Food Bank",
    //   address: "22 Powai Lake Road, Mumbai",
    //   donations: 400,
    // },
    // {
    //   name: "Green Plate Restaurant",
    //   type: "Restaurant",
    //   address: "50 Lower Parel, Mumbai",
    //   donations: 130,
    // },
    // {
    //   name: "Compassionate Souls NGO",
    //   type: "NGO",
    //   address: "80 Borivali West, Mumbai",
    //   donations: 350,
    // },
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
                backgroundImage: `url(${org.image})`, // Dynamically set the background image
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
