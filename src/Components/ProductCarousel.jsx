import React, { useRef } from "react";
import products from "../data/Products.js";
import "../CSS/ProductCarousel.css";

const ProductCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (dir) => {
    if (dir === "left") {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-wrapper">
      <button className="arrow left" onClick={() => scroll("left")}>
        &#10094;
      </button>

      <div className="product-container" ref={carouselRef}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.frontImg} alt={product.title} className="front" />
              <img src={product.backImg} alt={product.title} className="back" />
              {product.badge && <span className="badge">{product.badge}</span>}

              <div className="hover-actions">
                <button className="quick-view">QUICK VIEW</button>
                <button className="wishlist">♥</button>
              </div>
            </div>

            <div className="product-info">
              <h4>{product.brand}</h4>
              <p>{product.description}</p>
              <span className="price">${product.price.toFixed(2)}</span>
            </div>

            <div className="add-to-cart">
              <button>ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={() => scroll("right")}>
        &#10095;
      </button>
    </div>
  );
};

export default ProductCarousel;
