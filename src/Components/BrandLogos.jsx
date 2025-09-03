import React, { useRef } from "react";
import "../CSS/BrandLogos.css";

const LogosCarousel = () => {

    const LogosData = [
        { id: 1, img: "Images/brand-logo-1.png" },
        { id: 2, img: "Images/brand-logo-2.png" },
        { id: 3, img: "Images/brand-logo-3.png" },
        { id: 4, img: "Images/brand-logo-4.png" },
        { id: 5, img: "Images/brand-logo-5.png" },

        { id: 6, img: "Images/brand-logo-3.png" },
        { id: 7, img: "Images/brand-logo-4.png" },
        { id: 8, img: "Images/brand-logo-5.png" },
        { id: 9, img: "Images/brand-logo-3.png" },
        { id: 10, img: "Images/brand-logo-4.png" },
        { id: 11, img: "Images/brand-logo-5.png" },
    ];




    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    return (
        <div className="logos-container">
            <h3>Shop Our Top Brands</h3>
            <div className="logos">
                <button className="logos-prevs" onClick={scrollLeft}>
                    &#10094;
                </button>
                <div className="logos-imgs" ref={carouselRef}>
                    {LogosData.map((logo) => (
                        <img key={logo.id} src={logo.img} alt={`brand-logo-${logo.id}`} />
                    ))}
                </div>
                <button className="logos-next" onClick={scrollRight}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default LogosCarousel;
