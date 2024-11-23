import "./section-container.css";

import React from "react";

export default function SectionContainer({ background_color, children }) {
  return (
    <div
      style={{
        backgroundColor: background_color,
      }}
      className="section-container"
    >
      {children}
    </div>
  );
}
