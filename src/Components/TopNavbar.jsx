import React from "react";
import "../CSS/TopNavbar.css";

const TopNav = () => {
    return (
        <div className="top-nav">
            <div className="top-nav-left">3 Free Samples with any Purchase</div>
            <div className="top-nav-right">
                <ul>
                    <li>
                        Order Online <strong>(1800) 000 BEAUTICA</strong>
                    </li>
                    <li>Gift Certificates</li>
                    <li>Sign In</li>
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
    );
};

export default TopNav;
