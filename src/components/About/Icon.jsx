import React from "react";
import "./icon.css";
export default function Icon({ imageUrl, altText = "icon" }) {
  return (
    <div className="icon_container">
      <img src={imageUrl} alt="Company Name" className="icon_image" />
    </div>
  );
}
