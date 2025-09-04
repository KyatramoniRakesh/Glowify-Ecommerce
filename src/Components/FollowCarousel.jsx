// src/components/FollowCarousel.jsx
import React, { useRef, useState } from "react";
import "../CSS/FollowCarousel.css";

const FollowCarousel = () => {
  const FollowData = [
    { id: 1, img: "Images/insta1.jpg" },
    { id: 2, img: "Images/insta2.jpg" },
    { id: 3, img: "Images/insta3.jpg" },
    { id: 4, img: "Images/insta4.jpg" },
    { id: 5, img: "Images/insta5.jpg" },
    { id: 6, img: "Images/insta6.jpg" },
    { id: 7, img: "Images/insta7.jpg" },
    { id: 8, img: "Images/insta8.jpg" },
  ];

  const carouselRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <div className="follow">
      <h2>Follow Us On Instagram</h2>
      <p className="hashtag">#BEAUTICACOSMETICS</p>

      <div className="follow-carousel">
        <button className="follow-prev" onClick={scrollLeft}>
          &#10094;
        </button>

        <div className="follow-imgs" ref={carouselRef}>
          {FollowData.map((item) => (
            <div
              className="follow-img-wrapper"
              key={item.id}
              onClick={() => setSelectedImage(item.img)}
            >
              <img src={item.img} alt={`Instagram ${item.id}`} />
              <div className="overlay">
                <span className="plus">+</span>
              </div>
            </div>
          ))}
        </div>

        <button className="follow-next" onClick={scrollRight}>
          &#10095;
        </button>
      </div>

      {/* === Popup Modal === */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <img src={selectedImage} alt="Enlarged" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FollowCarousel;
