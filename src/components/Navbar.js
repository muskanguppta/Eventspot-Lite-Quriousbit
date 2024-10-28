import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">EventSpot Lite
        <div className="aurora">
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
        </div>
      </h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      </div>
    </nav>
  );
};

export default Navbar;
