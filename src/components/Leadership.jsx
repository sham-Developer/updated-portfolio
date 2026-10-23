import React from "react";
import { soundManager } from "../utils/sound";

const principles = [
  {
    num: "01",
    title: "Predictable Sprints Over Late-Night Heroics",
    desc: "A great team doesn't rely on burnout sprints. We scope accurately, automate regression tests early, and hit release milestones on schedule.",
    motto: "Sustainable Velocity"
  },
  {
    num: "02",
    title: "Speaking Business Value, Not Tech Jargon",
    desc: "When talking with clients and stakeholders, I explain architectural trade-offs in terms of cost, delivery timeline, and uptime—never hiding behind buzzwords.",
    motto: "Transparent Alignment"
  },
  {
    num: "03",
    title: "Design for Today, Architect for Tomorrow",
    desc: "Avoid over-engineering for hypothetical millions of users on day one. Build clean, decoupled domain interfaces so changes are straightforward when scale truly arrives.",
    motto: "Clean Simplicity"
  },
  {
    num: "04",
    title: "Cross-Domain Engineering Versatility",
    desc: "Moving fluidly between frontend React state, backend database optimization, and OpenCV hardware pipelines enables fast troubleshooting across full stacks.",
    motto: "End-to-End Ownership"
  }
];

export default function Leadership() {
  return (
    <section id="principles" className="principles-obsidian-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-editorial reveal-on-scroll">
          <div className="section-label-chip">
            <span className="chip-dot"></span>
            <span>06 / ENGINEERING PRINCIPLES</span>
          </div>
          <h2 className="section-main-title">
            Great systems emerge from <span className="serif-accent">great decisions</span>.
          </h2>
          <p className="section-desc">
            Core philosophies that guide daily sprint orchestration, architectural RFC reviews, and client deliverables.
          </p>
        </div>

        {/* 4 Architectural Cards Grid */}
        <div className="principles-four-grid">
          {principles.map((item, i) => (
            <div
              key={i}
              className={`principle-obsidian-card reveal-on-scroll delay-${i * 100}`}
              onMouseEnter={() => soundManager.playHover()}
            >
              <div>
                <span className="principle-num-badge">{item.num}</span>
                <h3 className="principle-card-title">{item.title}</h3>
                <p className="principle-card-desc">{item.desc}</p>
              </div>

              <div className="principle-motto-tag">
                {item.motto}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
