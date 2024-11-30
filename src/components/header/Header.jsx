import React from "react";
import "./header.css";
import ButtonMain from "../Button/Button";
import { Button } from "antd";
export default function Header() {
  return (
    <div className="header">
      <div class="sub-heading">AI based solutions to medical issues</div>
      <div class="heading">ScanX IMS</div>
      <Button className="btn-header" size="large ">
        <a href="#services">Learn More</a>
      </Button>
    </div>
  );
}
