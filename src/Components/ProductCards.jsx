import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  // Fallback: if backImg doesn't exist, reuse frontImg so nothing breaks
  const backImg = product.backImg || product.frontImg;

  return (
    <div className="product-card">
      {/* Badges */}
      <div className="badges">
        {product.badge?.map((b, i) => (
          <span key={i} className={`badge ${b.toLowerCase()}`}>{b}</span>
        ))}
      </div>

      {/* Wishlist */}
      <button className="wishlist" aria-label="Add to wishlist">
        <FaHeart />
      </button>

      {/* Images + Quick View */}
      <div className="product-img">
        {/* front image */}
        <img className="front" src={product.frontImg} alt={product.name} />
        {/* back image (shown on hover with zoom) */}
        <img className="back" src={backImg} alt={`${product.name} alternate`} />

        <button className="quick-view">Quick View</button>
      </div>

      {/* Info */}
      <h3 className="product-name">{product.name}</h3>
      <p className="product-desc">{product.desc}</p>

      {/* Price */}
      <div className="price">
        {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
        <span className={`current-price ${product.oldPrice ? "discount" : ""}`}>
          ${product.price}
        </span>
      </div>

      {/* Ratings */}
      {product.rating > 0 && (
        <div className="stars">
          {[...Array(product.rating)].map((_, i) => (
            <FaStar key={i} className="star" />
          ))}
        </div>
      )}

      {/* Quick Add */}
      <button className="quick-add">Quick Add</button>
    </div>
  );
};

export default ProductCard;
