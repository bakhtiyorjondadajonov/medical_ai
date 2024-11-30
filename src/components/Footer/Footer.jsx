import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import "./footer.css";
function Footer() {
  return (
    <SectionContainer>
      <div className="footer_container">
        <ul>
          <li>ScanX Co., Ltd.</li>
          <li>702, 13, Teheran-ro 84-gil, Michuhul-gu, Incheon</li>
          <li>Representative: Bakhtiyorjon (John) Ddajonov</li>
        </ul>
        <ul>
          <li>Copyright © ScanX 2024</li>
          <li>Business Registration Number 864-86-7777</li>
          <li>info@scanx.ai</li>
        </ul>
      </div>
    </SectionContainer>
  );
}

export default Footer;
