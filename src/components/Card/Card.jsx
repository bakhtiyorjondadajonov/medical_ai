import React from "react";
import "./card.css"; // You can create this CSS file for styling

const Card = ({ icon, title, description, img_type, card_class }) => {
  return (
    <div className={`card ${card_class}`}>
      <div className={img_type}>
        <img src={icon} alt="icon" />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
