import React, { useState } from "react";
import SidebarSignup from "./Signup"; 
import "../CSS/TopNavbar.css";

const TopNav = () => {
  const [isSignupOpen, setSignupOpen] = useState(false);

  return (
    <>
      <div className="top-nav">
        <div className="top-nav-left">3 Free Samples with any Purchase</div>
        <div className="top-nav-right">
          <ul>
            <li>
              Order Online <strong>(1800) 000 BEAUTICA</strong>
            </li>
            <li>Gift Certificates</li>
            <li
              onClick={() => setSignupOpen(true)}
              style={{ cursor: 'pointer' }}
            >
              Sign In
            </li>
            <li>
              <img
                src="https://flagcdn.com/us.svg"
                alt="US"
                className="flag"
              />{" "}
              US Dollar
            </li>
          </ul>
        </div>
      </div>

      {/* Signup Sidebar */}
      <SidebarSignup isOpen={isSignupOpen} onClose={() => setSignupOpen(false)} />
    </>
  );
};

export default TopNav;
