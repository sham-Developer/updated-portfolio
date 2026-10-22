import React from "react";
import { soundManager } from "../utils/sound";

const principles = [
  {
    num: "01 • CADENCE",
    title: "Delivery with Discipline",
    desc: "Agile execution is meaningless without rigorous testing and reliable automation. Velocity without quality is simply fast technical debt.",
    motto: "PREDICTABILITY > HEROICS"
  },
  {
    num: "02 • PARTNERSHIP",
    title: "Clients as Collaborators",
    desc: "Clear architectural trade-offs communicated in business terms. We do not hide behind jargon; we present strategic options with absolute clarity.",
    motto: "TRANSPARENT ALIGNMENT"
  },
  {
    num: "03 • PURPOSE",
    title: "Architecture with Intention",
    desc: "Never over-engineer for hypothetical scale; design clean decoupled boundaries so the codebase effortlessly adapts when true scale arrives.",
    motto: "SIMPLICITY IS ELEGANCE"
  },
  {
    num: "04 • VERSATILITY",
    title: "Engineering Across Domains",
    desc: "Cross-pollination between WebGL graphics, native mobile workflows, and computer vision brings robust, high-performance solutions to life.",
    motto: "MULTI-DISCIPLINARY"
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
