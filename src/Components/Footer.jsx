import React, { useState, useEffect } from "react";
import "../CSS/Footer.css";

const Footer = () => {
  // Collapsible state for each section
  const [expanded, setExpanded] = useState({
    shop: false,
    info: false,
    customer: false,
  });

  // Ensure default expanded states based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setExpanded({ shop: true, info: true, customer: true });
      } else {
        setExpanded({ shop: true, info: false, customer: false }); // Shop expanded by default on mobile
      }
    };

    handleResize(); // Run on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle collapse
  const toggle = (section) => {
    if (window.innerWidth <= 1024) {
      setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
    }
  };

  return (
    <div className="footer">
      <div className="footer-grid">
        {/* SHOP */}
        <div className={`footer-column ${expanded.shop ? "expanded" : ""}`} data-collapsible>
          <div className="footer-header">
            <h4>SHOP</h4>
            <button
              className="footer-toggle"
              aria-expanded={expanded.shop}
              onClick={() => toggle("shop")}
            >
              {expanded.shop ? "−" : "+"}
            </button>
          </div>
          <ul>
            <li>#Trend Now</li>
            <li>Fragrance</li>
            <li>Makeup</li>
            <li>Nail</li>
            <li>Beauty Accessories</li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div className={`footer-column ${expanded.info ? "expanded" : ""}`} data-collapsible>
          <div className="footer-header">
            <h4>INFORMATION</h4>
            <button
              className="footer-toggle"
              aria-expanded={expanded.info}
              onClick={() => toggle("info")}
            >
              {expanded.info ? "−" : "+"}
            </button>
          </div>
          <ul>
            <li>About Us</li>
            <li>Theme FAQs</li>
            <li>New Collections</li>
            <li>Best Sellers</li>
            <li>Manufacturers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Blog</li>
            <li>Gift Certificates</li>
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}
        <div className={`footer-column ${expanded.customer ? "expanded" : ""}`} data-collapsible>
          <div className="footer-header">
            <h4>CUSTOMER SERVICE</h4>
            <button
              className="footer-toggle"
              aria-expanded={expanded.customer}
              onClick={() => toggle("customer")}
            >
              {expanded.customer ? "−" : "+"}
            </button>
          </div>
          <ul>
            <li>Search Terms</li>
            <li>Advanced Search</li>
            <li>Orders and Returns</li>
            <li>Contact Us</li>
            <li>RSS</li>
            <li>Help & FAQs</li>
            <li>Consultant</li>
            <li>Store Locations</li>
          </ul>
        </div>

        {/* NEWSLETTER / SOCIAL */}
        <div className="footer-column Signup">
          <h4>NEWSLETTER SIGN UP</h4>
          <p>Receive our latest updates about our products and promotions.</p>
          <div className="signup-input">
            <input type="email" placeholder="enter your email address" />
            <button className="signup-input-btn">SUBMIT</button>
          </div>

          <h4 style={{ marginTop: "30px" }}>STAY CONNECTED</h4>
          <div className="social-icons">
            <i className="fab fa-facebook-f" aria-label="Facebook"></i>
            <i className="fab fa-x-twitter" aria-label="Twitter"></i>
            <i className="fab fa-pinterest-p" aria-label="Pinterest"></i>
            <i className="fab fa-instagram" aria-label="Instagram"></i>
            <i className="fab fa-youtube" aria-label="YouTube"></i>
            <i className="fab fa-tiktok" aria-label="TikTok"></i>
            <i className="fab fa-google-plus-g" aria-label="Google Plus"></i>
            <i className="fab fa-snapchat-ghost" aria-label="Snapchat"></i>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-bottom">
        <div className="footer-bottom-items">
          <div className="rights">
            <p>
              © 2025 Beautica-Light.<br />All Rights Reserved. Ecommerce
              Software by BigCommerce.
            </p>
            <p>BigCommerce Themes By ThemeVale.Com</p>
          </div>
          <div className="footer-bottom-imgs">
            <img src="/Images/cards/visa.jpg" alt="Visa" />
            <img src="/Images/cards/master.jpg" alt="Mastercard" />
            <img src="/Images/cards/american.jpg" alt="American Express" />
            <img src="/Images/cards/discover.jpg" alt="Discover" />
            <img src="/Images/cards/cirrus.jpg" alt="Cirrus" />
            <img src="/Images/cards/paypal.jpg" alt="PayPal" />
            <img src="/Images/cards/western.jpg" alt="Western Union" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
