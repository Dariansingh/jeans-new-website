import React from 'react';
import { Routes,
  Route,
  Link } from 'react-router-dom';
import "./styling/app.css";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Services from "./pages/services.js";
import { useLocation } from 'react-router-dom';

export default function App() {
  const location = useLocation();
  const showHeader = !['/about', '/contact', '/services'].includes(location.pathname);

  return (
    <div className="App">
      {showHeader && (
        <header className="App-header">
          <div className="menu-container">
            <div className="menu-item">
              <Link to="/services">Services</Link>
            </div>
            <div className="menu-item">
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="menu-item">
              <Link to="/about">About Us</Link>
            </div>
          </div>
        </header>
      )}
      <div className="tabcontent">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </div>
  );
}

