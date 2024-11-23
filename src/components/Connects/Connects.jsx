import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./connects.css";
export default function Connects() {
  return (
    <SectionContainer background_color="white">
      <SectionTitle
        title="Connect"
        subtitle="Connects with various sales channels."
      />
      <div className="connects_container">
        <div className="image-container">
          <img src="./connects/inha.png" alt="img" />
        </div>
        <div className="image-container">
          <img src="./connects/inha_hospital.jpg" alt="img" />
        </div>
        <div className="image-container">
          <img src="./connects/yonsei.png" alt="img" />
        </div>
        <div className="image-container">
          <img src="./connects/gangnam-hospital.jpg" alt="img" />
        </div>
      </div>
    </SectionContainer>
  );
}
