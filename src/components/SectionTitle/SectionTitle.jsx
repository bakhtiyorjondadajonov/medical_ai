import React from "react";
import "./section_title.css";
export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="title-container">
      <h2 className="title">{title}</h2>
      <div className="sub-title">{subtitle}</div>
    </div>
  );
}
