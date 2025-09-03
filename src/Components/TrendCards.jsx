import React from "react";
import "../CSS/TrendCards.css";

const trendData = [
  {
    id: 1,
    img: "/Images/lotin.jpg",
    title: "#Trend: Milancelos",
    desc: "Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia de consequat velit. Quisquemos sodales suscipit tortors...",
    link: "#",
  },
  {
    id: 2,
    img: "/Images/N8.jpg",
    title: "#Cosmopolis",
    desc: "Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia de consequat velit. Quisquemos sodales suscipit tortors...",
    link: "#",
  },
];

const TrendCards = () => {
  return (
    <>
      <div className="two-cards-container">
        {trendData.map((item) => (
          <div className="two-cards" key={item.id}>
            <div className="two-cards-img">
              <img className="two-card-img" src={item.img} alt={item.title} />
              <div className="image-overlay"></div>
              <div className="img-title">{item.title}</div>
            </div>

            <p className="two-cards-info">{item.desc}</p>
            <a href={item.link} className="Shop-now">
              Shop Now
            </a>
          </div>
        ))}
      </div>

      <hr className="new1" />
    </>
  );
};

export default TrendCards;
