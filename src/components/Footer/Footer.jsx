import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import "./footer.css";
function Footer() {
  return (
    <SectionContainer>
      <div className="footer_container">
        <ul>
          <li>Price One Co., Ltd.</li>
          <li>702, 13, Teheran-ro 84-gil, Gangnam-gu, Seoul</li>
          <li>Representative: Bakhtiyorjon (John) Ddajonov</li>
        </ul>
        <ul>
          <li>Copyright © ScanX 2024</li>
          <li>Business Registration Number 864-86-03026</li>
          <li>info@scanx.ai</li>
        </ul>
      </div>
    </SectionContainer>
  );
}

export default Footer;
