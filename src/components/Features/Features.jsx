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
          icon="./features/1.jpg"
          title="feature"
          description="It is my description"
        />
        <Card
          card_class="card-features"
          img_type="card-img"
          icon="./features/1.jpg"
          title="feature"
          description="It is my description"
        />
        <Card
          card_class="card-features"
          img_type="card-img"
          icon="./features/1.jpg"
          title="feature"
          description="It is my description"
        />
        <Card
          card_class="card-features"
          img_type="card-img"
          icon="./features/1.jpg"
          title="feature"
          description="It is my description"
        />
        <Card
          card_class="card-features"
          img_type="card-img"
          icon="./features/1.jpg"
          title="feature"
          description="It is my description"
        />
        <Card
          card_class="card-features"
          img_type="card-img"
          icon="./features/1.jpg"
          title="feature"
          description="It is my description"
        />
      </div>
    </SectionContainer>
  );
}
