import React, { useState } from "react";
import "./DonatePage.css";

function DonatePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic
    setIsLoggedIn(true);
  };

  const handleSubmitDonation = (e) => {
    e.preventDefault();
    alert("Donation Submitted!");
    window.location.href = "/"; // Redirect back to home page
  };

  return (
    <div className="donate-page">
      {!isLoggedIn ? (
        <div className="login-form">
          <h2>Login to Donate Food</h2>
          <form onSubmit={handleLogin}>
            <label>
              Email:
              <input type="email" required />
            </label>
            <label>
              Password:
              <input type="password" required />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div className="donation-form">
          <h2>Donate Food</h2>
          <form onSubmit={handleSubmitDonation}>
            <label>
              Food Name:
              <input type="text" required />
            </label>
            <label>
              Expiry Date:
              <input type="date" required />
            </label>
            <label>
              Veg/Non-Veg:
              <select required>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
              </select>
            </label>
            <label>
              Category:
              <input type="text" placeholder="e.g., Bakery, Fruits" required />
            </label>
            <label>
              Upload Photo:
              <input type="file" accept="image/*" required />
            </label>
            <button type="submit">Submit Donation</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default DonatePage;
