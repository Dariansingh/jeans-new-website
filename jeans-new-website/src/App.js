import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div
          className={`sidebar-container ${showSidebar ? 'expanded' : ''}`}
          onMouseEnter={() => setShowSidebar(true)}
          onMouseLeave={() => setShowSidebar(false)}
        >
          <div className="sidebar">
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;