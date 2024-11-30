import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import "./about.css";
import Icon from "./Icon";
import SectionTitle from "../SectionTitle/SectionTitle";
export default function About() {
  return (
    <div id="about" className="container">
      <SectionTitle title="About" subtitle="What we've been doing" />
      <div className="">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={<div className="date-left">2024.09</div>}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Icon imageUrl="./1.jpg" />}
          >
            <h3 className="vertical-timeline-element-title">
              Offical Service Lounch
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              It was established with the goal of solving the dermatological
              problem of the healthcare industry through portable health monitor
              device based on AI technology.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025.01"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Icon imageUrl="./2.jpg" />}
          >
            <h3 className="vertical-timeline-element-title">
              Beta service launch{" "}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Incheon, Korea
            </h4>
            <p>
              We are revolutionizing Skin Disease Diagnosis with AI Technology.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025.4"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Icon imageUrl="./3.jpg" />}
          >
            <h3 className="vertical-timeline-element-title">
              Official product launch
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Seoul,Korea</h4>
            <p>
              Our product system is designed to be incredibly efficient and
              user-friendly, making it much easier to detect skin deceases and
              providing better medical treatment at hospitals.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            style={{ "margin-bottom": "5rem" }}
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<div className="vertical-tl-btn">Be part of our story</div>}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}
