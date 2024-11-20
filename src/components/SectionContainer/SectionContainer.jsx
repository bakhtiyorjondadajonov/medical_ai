import "./section-container.css";

import React from "react";

export default function SectionContainer({ background_color, children }) {
  return (
    <div
      style={{ backgroundColor: background_color, padding: "2rem 5rem" }}
      className="section-container"
    >
      {children}
    </div>
  );
}
