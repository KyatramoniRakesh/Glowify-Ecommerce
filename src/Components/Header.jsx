import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SidebarLogin from "./Login";
import SidebarSignup from "./Signup";
import "../CSS/Header.css";
import logo from "/Images/beautic.png";

const Header = ({ toggleSidebar }) => {

  const navigate = useNavigate(); 

  const [showSearch, setShowSearch] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser && storedUser.name) {
      setIsLoggedIn(true);
      setUserName(storedUser.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <>
      <header className="header">
        <div className="left-section">
          <div className="hamburger" onClick={toggleSidebar} aria-label="Open menu">
            <i className="fas fa-bars"></i>
          </div>

          <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search for a product" />
          </div>

          <button
            className="search-toggle"
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Toggle search"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="logo">
          <img src={logo} alt="Beautica Logo" />
        </div>

        <div className="user-area">
          <div className="login-info">
            {isLoggedIn ? (
              <>
                <strong>HI, {userName.toUpperCase()}</strong>
                <p>
                  <span
                    style={{ cursor: 'pointer', color: 'red' }}
                    onClick={handleLogout}
                  >
                    Logout
                  </span>
                </p>
              </>
            ) : (
              <p>
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => setLoginOpen(true)}
                >
                  Login or Register
                </span>
              </p>
            )}
          </div>

          <div className="divider"></div>

          <div className="icons">
            <button className="user-icon" aria-label="User Account">
              <i className="fas fa-user"></i>
            </button>

            <button aria-label="Wishlist">
              <i className="fas fa-heart"></i>
            </button>

            <div
              className="cart-icon"
              aria-label="Cart"
              onClick={() => navigate("/cart")}
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-bag-shopping"></i>
              <span className="badge_top">1</span>
            </div>
          </div>
        </div>

        {showSearch && (
          <div className="mobile-search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search for a product" />
          </div>
        )}
      </header>

      {/* Login Sidebar */}
      <SidebarLogin
        isOpen={isLoginOpen}
        onClose={() => setLoginOpen(false)}
        setIsLoggedIn={setIsLoggedIn}
        setUserName={setUserName}
      />

      {/* Signup Sidebar */}
      <SidebarSignup
        isOpen={isSignupOpen}
        onClose={() => setSignupOpen(false)}
        setIsLoggedIn={setIsLoggedIn}
        setUserName={setUserName}
      />
    </>
  );
};

export default Header;
