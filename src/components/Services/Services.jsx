import React from "react";
import "./services.css";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import Card from "../Card/Card";

export default function Services() {
  return (
    <SectionContainer id="services" background_color="white">
      <SectionTitle
        title="Our Services"
        subtitle="Ensuring Quality, Support, and Customization"
      />
      <div className="services-container">
        <Card
          icon="./services/configuration.png"
          description="We offer tailored solutions to meet the unique needs of our clients. Our device customization services allow us to adapt features, design, and functionality to suit specific requirements, ensuring optimal performance and user satisfaction."
          title="Customization of the device."
          img_type="card-icon"
        />
        <Card
          icon="./services/settings.png"
          description="We provide comprehensive maintenance services to ensure the longevity and optimal performance of our devices."
          title="Maintenance"
          img_type="card-icon"
        />
        <Card
          icon="./services/database.png"
          description="Our warranty program is designed to provide customers with peace of mind and assurance in the quality of our devices. It covers defects in materials and workmanship under normal use during the warranty period."
          title="Warranty Program"
          img_type="card-icon"
        />
        {/* <Card
          icon="./services/medical-report.png"
          description="hdgskdjshksjklskjd ddf"
          title="Title"
          img_type="card-icon"
        /> */}
      </div>
    </SectionContainer>
  );
}
