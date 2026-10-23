import React from "react";
import { soundManager } from "../utils/sound";

const statsList = [
  {
    num: "15+",
    index: "01",
    label: "Production Systems Delivered",
    subtext: "Web platforms, native Android & OpenCV rigs"
  },
  {
    num: "8+",
    index: "02",
    label: "Live Cloud Deployments",
    subtext: "CI/CD automated release pipelines"
  },
  {
    num: "5+",
    index: "03",
    label: "Engineers Mentored in Pods",
    subtext: "Sprint orchestration & daily code review"
  },
  {
    num: "~3 yrs",
    index: "04",
    label: "Hands-on Full-Stack Tenure",
    subtext: "From Junior Engineer to Team Leader at Fisto Tech"
  }
];

export default function StatsRibbon() {
  return (
    <section id="stats" className="metrics-strip-ivory-section">
      <div className="section-container">
        <div className="metrics-four-grid">
          {statsList.map((stat, i) => (
            <div
              key={i}
              className={`metric-ivory-card reveal-on-scroll delay-${i * 100}`}
              onMouseEnter={() => soundManager.playHover()}
            >
              <div className="metric-header-line">
                <span className="metric-large-num">{stat.num}</span>
                <span className="metric-index-tag">{stat.index}</span>
              </div>
              <div className="metric-title-label">{stat.label}</div>
              <div className="metric-sub-label">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
