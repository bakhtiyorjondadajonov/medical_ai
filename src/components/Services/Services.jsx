import React from "react";
import "./services.css";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Card } from "antd";
const { Meta } = Card;
export default function Services() {
  return (
    <SectionContainer background_color="red">
      <SectionTitle title="title" subtitle="subtitle bla ba bla" />
      <div className="cards-container">
        <Card
          hoverable
          style={{
            width: 340,
          }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    </SectionContainer>
  );
}
