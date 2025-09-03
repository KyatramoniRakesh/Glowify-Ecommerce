import React from "react";
import "../CSS/Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h3>Menu</h3>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </div>

      <ul className="sidebar-menu">
        <li>
          #TREND NOW <span className="badge new">New</span>{" "}
          <span className="arrow">&gt;</span>
        </li>
        <li>
          FRAGRANCE <span className="arrow">&gt;</span>
        </li>
        <li>
          MAKEUP <span className="badge hot">Hot</span>{" "}
          <span className="arrow">&gt;</span>
        </li>
        <li>NAIL</li>
        <li>
          BEAUTY ACCESSORIES <span className="arrow">&gt;</span>
        </li>
        <li>DEMO</li>
        <li>
          PAGES <span className="arrow">&gt;</span>
        </li>
        <li>
          TRY THEME <span className="badge sale">Sale</span>{" "}
          <span className="arrow">&gt;</span>
        </li>
      </ul>

      <ul className="sidebar-secondary">
        <li>
          <i className="fas fa-user"></i> Sign In
        </li>
        <li>
          <i className="fas fa-heart"></i> Wish Lists
        </li>
        <li>
          <i className="fas fa-phone"></i> (1800) 000 BEAUTICA
        </li>
        <li>
          <i className="fas fa-gift"></i> Gift Certificates
        </li>
        <li>
          <img
            src="https://flagcdn.com/us.svg"
            alt="flag"
            className="flag"
          />{" "}
          USD <span className="arrow">&gt;</span>
        </li>
      </ul>

      <div className="social-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-x-twitter"></i>
        <i className="fab fa-pinterest"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-tiktok"></i>
      </div>
    </div>
  );
};

export default Sidebar;
