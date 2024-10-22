import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/AboutPage";
import ProductPage from "./Pages/Product/Product";
import Checkout from "./Pages/Checkut/Checkout";
import Faq from "./Pages/Faq/Faqs";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<ProductPage />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Faqs" element={<Faq />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
