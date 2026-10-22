import React from "react";
import { soundManager } from "../utils/sound";

const statsList = [
  {
    num: "15+",
    index: "// 01",
    label: "CLIENT PROJECTS DELIVERED",
    subtext: "Across multiple business domains"
  },
  {
    num: "8+",
    index: "// 02",
    label: "PRODUCTION DEPLOYMENTS",
    subtext: "Live high-traffic environments"
  },
  {
    num: "5+",
    index: "// 03",
    label: "ENGINEERS LED IN PODS",
    subtext: "Agile sprints, code reviews & CI/CD"
  },
  {
    num: "Nearly 3",
    index: "// 04",
    label: "YEARS OF ARCHITECTURAL CRAFT",
    subtext: "Full-Stack, Android & Vision Systems"
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
