import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import HeroSection from "./components/HeroSection";
import FoodListingSection from "./components/FoodListingSection";
import DonatePage from "./components/DonatePage";
import ContactUs from "./components/ContactUs";
import Partners from "./components/Partners";
import AboutUs from "./components/AboutUs";
// import Dashboard from "./components/dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <div id="home">
                <HeroSection />
              </div>
              <div id="about">
                <AboutUs />
              </div>
              <div id="foodlisting">
                <FoodListingSection />
              </div>
              <div id="partners">
                <Partners />
              </div>
              <div id="contact">
                <ContactUs />
              </div>
            </>
          } />
          <Route path="/donate" element={<DonatePage />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;