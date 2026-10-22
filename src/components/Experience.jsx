import React from "react";
import { soundManager } from "../utils/sound";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="experience-obsidian-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-editorial reveal-on-scroll">
          <div className="section-label-chip">
            <span className="chip-dot"></span>
            <span>04 / EXPERIENCE CHRONICLE</span>
          </div>
          <h2 className="section-main-title">
            From technical execution to <span className="serif-accent">engineering leadership</span>.
          </h2>
          <p className="section-desc">
            A track record of performance-based promotion: from building full-stack web and native Android solutions to orchestrating multi-developer pods, code governance, and reliable production releases.
          </p>
        </div>

        {/* Timeline Entries */}
        <div className="timeline-cards-stack">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className={`timeline-entry-card reveal-on-scroll delay-${idx * 100}`}
              onMouseEnter={() => soundManager.playHover()}
            >
              <div className="entry-header-row">
                <div className="entry-meta-block">
                  <span className="entry-period-stamp">{exp.period.toUpperCase()}</span>
                  <h3 className="entry-role-title">{exp.role}</h3>
                  <div className="entry-company-line">
                    <span className="entry-company-name">{exp.company}</span>
                    <span className="entry-location-name">— {exp.location}</span>
                  </div>
                </div>

                <div className="entry-type-pill-wrap">
                  <span className={`entry-type-badge ${exp.current ? "current" : ""}`}>
                    {exp.type.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Highlights List */}
              <ul className="entry-bullets-list">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="entry-bullet-item">
                    <span className="bullet-prompt-symbol">&gt;</span>
                    <span className="bullet-text">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="entry-tech-ribbon">
                {exp.technologies.map((t, tIdx) => (
                  <span key={tIdx} className="entry-tech-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
