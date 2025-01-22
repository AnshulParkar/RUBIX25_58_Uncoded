import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import HeroSection from "./components/HeroSection";
import FoodListingSection from "./components/FoodListingSection";
import DonatePage from "./components/DonatePage";
import ContactUs from "./components/ContactUs";
import Partners from "./components/Partners";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<div><HeroSection /><FoodListingSection /></div>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/donate" element={<DonatePage />} />
          {/* <Route path="/partners" element={<Partners />}/>  */}
        </Routes>
          <Partners />
      </div>
    </Router>
  );
}

export default App;
