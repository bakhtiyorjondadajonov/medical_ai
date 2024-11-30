import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import Card from "../Card/Card";
import "./features.css";
export default function Features() {
  return (
    <SectionContainer background_color="rgb(248, 249, 250)">
      <SectionTitle
        title="Features"
        subtitle="AI analyzes data to suggest optimal prices"
      />
      <div className="features-container">
        <Card
          card_class="card-features"
          img_type="card-img"
          icon="./features/11.jpg"
          title="Portable and Compact Design"
          description="Portable and Compact Design: A lightweight, easy-to-carry device designed for use in clinics, hospitals, and mobile healthcare settings. Powered by Raspbery Pi"
        />
        <Card
          card_class="card-features"
          img_type="card-img"
          icon="./features/22.jpg"
          title="Advanced technology based on AI"
          description=" Advanced Technology Based on AI: Employs cutting-edge AI algorithms to analyze skin conditions and deliver accurate, real-time diagnostics."
        />
        <Card
          card_class="card-features"
          img_type="card-img"
          icon="./features/33.jpg"
          title="Secure Data Management"
          description="Ensures patient privacy through robust encryption and compliance with international healthcare data regulations."
        />
        {/* <Card
          card_class="card-features"
          img_type="card-img"
          icon="./features/1.jpg"
          title="User-Friendly Interface"
          description=" An intuitive interface that allows healthcare professionals to quickly operate the device with minimal training."
        /> */}
        {/* <Card
          card_class="card-features"
          img_type="card-img"
          icon="./features/1.jpg"
          title="feature"
          description="It is my description"
        /> */}
        {/* <Card
          card_class="card-features"
          img_type="card-img"
          icon="./features/1.jpg"
          title="feature"
          description="It is my description"
        /> */}
      </div>
    </SectionContainer>
  );
}
