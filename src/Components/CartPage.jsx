import React, { useState, useEffect } from "react";
import "../CSS/CartPage.css";

const CartPage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [shippingMethod, setShippingMethod] = useState("free");
  const [billingSame, setBillingSame] = useState(true);
  const [orderComments, setOrderComments] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userCart = users.find(u => u.email === storedUser.email)?.cart || [];
      setCart(userCart);
    }
  }, []);

  const handleShippingChange = (method) => setShippingMethod(method);

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setCart([]);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = 0;
  const total = subtotal + shippingCost;

  return (
    <div className="cartpage-wrapper">
      <div className="cartpage-container">
        {/* LEFT */}
        <div className="cartpage-left">
          <section className="cartpage-customer">
            <h2>CUSTOMER</h2>
            {currentUser ? (
              <div className="cartpage-customer-info">
                <span>{currentUser.email}</span>
                <button onClick={handleSignOut}>Sign Out</button>
              </div>
            ) : (
              <span>Please login</span>
            )}
          </section>

          <section className="cartpage-shipping">
            <h2>SHIPPING</h2>
            <label>Shipping Address</label>
            <textarea
              value={currentUser?.address || ""}
              placeholder="Enter shipping address"
              rows="4"
            ></textarea>

            <div className="cartpage-billing-checkbox">
              <input
                type="checkbox"
                checked={billingSame}
                onChange={() => setBillingSame(!billingSame)}
              />
              <span>My billing address is the same as my shipping address.</span>
            </div>

            <label>Shipping Method</label>
            <div className="cartpage-shipping-methods">
              <div
                className={`cartpage-shipping-option ${shippingMethod === "pickup" ? "selected" : ""}`}
                onClick={() => handleShippingChange("pickup")}
              >
                Pickup In Store <span>$0.00</span>
              </div>
              <div
                className={`cartpage-shipping-option ${shippingMethod === "free" ? "selected" : ""}`}
                onClick={() => handleShippingChange("free")}
              >
                Free Shipping <span>$0.00</span>
              </div>
            </div>

            <label>Order Comments</label>
            <textarea
              value={orderComments}
              onChange={e => setOrderComments(e.target.value)}
              placeholder="Add comments about your order"
              rows="3"
            ></textarea>

            <button className="cartpage-continue-btn">CONTINUE</button>
          </section>

          <section className="cartpage-billing">
            <h2>BILLING</h2>
          </section>

          <section className="cartpage-payment">
            <h2>PAYMENT</h2>
          </section>
        </div>

        {/* RIGHT */}
        <div className="cartpage-right">
          <section className="cartpage-summary">
            <h3>Order Summary</h3>
            <span>{cart.length} Item{cart.length !== 1 ? "s" : ""}</span>

            <div className="cartpage-items">
              {cart.map((item, idx) => (
                <div className="cartpage-item" key={idx}>
                  <img src={item.thumbnail} alt={item.name} />
                  <div className="cartpage-item-info">
                    <p>{item.quantity} x {item.name}</p>
                    <p className="cartpage-item-details">Color {item.color} | Size {item.size}</p>
                  </div>
                  <div className="cartpage-item-price">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>

            <div className="cartpage-totals">
              <div><span>Subtotal</span> <span>${subtotal.toFixed(2)}</span></div>
              <div><span>Shipping</span> <span>Free</span></div>
              <div><span>Tax</span> <span>$0.00</span></div>
              <div><strong>Total (USD)</strong> <strong>${total.toFixed(2)}</strong></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
