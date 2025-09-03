import React, { useState } from "react";
import "../CSS/Header.css";
import logo from "/Images/beautic.png";

const Header = ({ toggleSidebar }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="header">
      {/* Left Section */}
      <div className="left-section">
        {/* Hamburger - only visible on mobile */}
        <div className="hamburger" onClick={toggleSidebar} aria-label="Open menu">
          <i className="fas fa-bars"></i>
        </div>

        {/* Search box (desktop) */}
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search for a product" />
        </div>

        {/* Search toggle (mobile) */}
        <button
          className="search-toggle"
          onClick={() => setShowSearch(!showSearch)}
          aria-label="Toggle search"
        >
          <i className="fas fa-search"></i>
        </button>
      </div>

      {/* Center Section - Logo */}
      <div className="logo">
        <img src={logo} alt="Beautica Logo" />
      </div>

      {/* Right Section - User + Icons */}
      <div className="user-area">
        {/* Desktop Login Info */}
        <div className="login-info">
          <strong>HI, CUSTOMER</strong>
          <p>
            <a href="/login">Login or Register</a>
          </p>
        </div>

        <div className="divider"></div>

        <div className="icons">
          {/* Mobile user icon */}
          <button className="user-icon" aria-label="User Account">
            <i className="fas fa-user"></i>
          </button>

          {/* Wishlist */}
          <button aria-label="Wishlist">
            <i className="fas fa-heart"></i>
          </button>

          {/* Cart */}
          <div className="cart-icon" aria-label="Cart">
            <i className="fas fa-bag-shopping"></i>
            <span className="badge_top">1</span>
          </div>
        </div>
      </div>

      {/* Collapsible search on mobile */}
      {showSearch && (
        <div className="mobile-search">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search for a product" />
        </div>
      )}
    </header>
  );
};

export default Header;
