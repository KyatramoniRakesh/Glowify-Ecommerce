import React, { useState, useEffect } from "react";
import "../CSS/Banner.css";

const ImageTextSection = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="image-slider">
      {/* Slides */}
      {images.map((item, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""} ${
            index === 0
              ? "center-text"
              : index === 2
              ? "right-text"
              : "no-text"
          }`}
        >
          {index === current && (
            <>
              <img src={item.src} alt={`slide-${index}`} className="slide-img" />

              {/* Conditional text */}
              {index === 0 && (
                <div className="text-overlay">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <button className="shop-btn">SHOP NOW</button>
                </div>
              )}
              {index === 2 && (
                <div className="text-overlay right">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <button className="shop-btn">SHOP NOW</button>
                </div>
              )}
            </>
          )}
        </div>
      ))}

      {/* Arrows */}
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${current === idx ? "active-dot" : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>

      {/* Counter */}
      <div className="counter">
        {current + 1}/{images.length}
      </div>
    </div>
  );
};

export default ImageTextSection;
