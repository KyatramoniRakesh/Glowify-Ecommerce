import React, { useState } from "react";
import ProductCard from "./ProductCards";
import featuredProducts from "../data/FeaturedData";
import "../CSS/FeaturedProducts.CSS";

const FeaturedProducts = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (startIndex + itemsPerPage < featuredProducts.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="featured-section">
      <h2 className="section-title">Featured Products</h2>
      <p className="section-subtitle">
        Magnis de darturien eros lacinidados de cosmopolis dinterdum
      </p>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={handlePrev}>
          &#10094;
        </button>

        <div className="product-container">
          {featuredProducts
            .slice(startIndex, startIndex + itemsPerPage)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>

        <button className="arrow right" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
