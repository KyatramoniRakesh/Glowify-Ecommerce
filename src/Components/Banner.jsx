import React from "react";
import ImageTextSection from "./BannerImages";
import "../CSS/ThreeImages.css";

const images = [
  {
    src: "/Images/banner.png",
    title: "Luxury Skincare",
    description: "Discover the finest products for your beauty routine.",
  },
  {
    src: "/Images/banner2.png",
  },
  {
    src: "/Images/banner3.png",
    title: "Exclusive Collection",
    description: "Shop the latest arrivals and trends now.",
  },
];

const Banner = () => {
  return (
    <>
      <div className="banner-section-div">


        <ImageTextSection images={images} />


        {/* Small Image Grid */}
        <div className="small-img">
          <div
            className="img-box"
            style={{ backgroundImage: "url('/Images/lips.jpg')" }}
          >
            <div className="overlay">
              <div className="img-txt">LIPS</div>
            </div>
          </div>

          <div
            className="img-box"
            style={{ backgroundImage: "url('/Images/face.jpg')" }}
          >
            <div className="overlay">
              <div className="img-txt">FACE</div>
            </div>
          </div>

          <div
            className="img-box"
            style={{ backgroundImage: "url('/Images/tools.jpg')" }}
          >
            <div className="overlay">
              <div className="img-txt">TOOLS</div>
            </div>
          </div>
        </div>

        <div class="arrived">

          <h2>Just Arrived</h2>
          <p>Magnis de darturien eros laciniados de cosmopolis dinterdum</p>

        </div>
      </div>
    </>
  );
};

export default Banner;
