import React from "react";
import "./services.css";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import Card from "../Card/Card";

export default function Services() {
  return (
    <SectionContainer background_color="#f8f9fa">
      <SectionTitle title="title" subtitle="subtitle bla ba bla" />
      <div className="services-container">
        <Card
          icon="./services/configuration.png"
          description="hdgskdjshksjklskjd ddf"
          title="Title"
          img_type="card-icon"
        />
        <Card
          icon="./services/medical-report.png"
          description="hdgskdjshksjklskjd ddf"
          title="Title"
          img_type="card-icon"
        />
        <Card
          icon="./services/database.png"
          description="hdgskdjshksjklskjd ddf"
          title="Title"
          img_type="card-icon"
        />
        <Card
          icon="./services/medical-report.png"
          description="hdgskdjshksjklskjd ddf"
          title="Title"
          img_type="card-icon"
        />
      </div>
    </SectionContainer>
  );
}
