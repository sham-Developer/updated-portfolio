import React from "react";
import { soundManager } from "../utils/sound";

export default function About() {
  return (
    <section id="about" className="about-mindset-ivory-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-editorial reveal-on-scroll">
          <div className="section-label-chip ivory-theme">
            <span className="chip-dot"></span>
            <span>01 / ABOUT THE ENGINEER</span>
          </div>
          <h2 className="section-main-title ivory-theme">
            Engineering is more than code. It is the <span className="serif-accent ivory-mode">art of making complexity manageable</span>.
          </h2>
        </div>

        {/* Asymmetrical 2-Column Grid */}
        <div className="mindset-editorial-grid">
          {/* Left Column: Biography Narrative & Philosophy Box */}
          <div className="mindset-bio-col reveal-on-scroll delay-100">
            <p className="mindset-body-lead">
              I'm Sham, a Software Developer and Team Leader based in Coimbatore. Over the past 3 years, I've worked my way up from junior developer to leading engineering pods at <strong>Fisto Tech</strong>—shipping 15+ production systems across full-stack React/Node web apps, native Android tools, and real-time OpenCV camera rigs.
            </p>

            <p className="mindset-body-text">
              My day-to-day balance is 60% hands-on coding and 40% team leadership: gathering client requirements, defining database schemas, reviewing pull requests, unblocking developers, and ensuring deployments happen without 2 AM firefighting.
            </p>

            {/* Practical Engineering Note */}
            <div className="mindset-quote-block">
              <span className="quote-tag-mono">CORE WORKING PRINCIPLE</span>
              <p className="quote-italic-statement">
                “Good software leadership is simple: clarify the requirements before writing code, keep dependencies lean, and build reliable automated tests so your team can deploy on Friday without anxiety.”
              </p>
              <div className="quote-author-signature">
                — Sham R
              </div>
            </div>
          </div>

          {/* Right Column: 3 Architectural Pillars */}
          <div className="mindset-pillars-col reveal-on-scroll delay-200">
            <div
              className="architectural-pillar-card"
              onMouseEnter={() => soundManager.playHover()}
            >
              <span className="pillar-index-label">PILLAR // 01</span>
              <h3 className="pillar-card-title">ARCHITECTURE FIRST</h3>
              <p className="pillar-card-desc">
                Maintainable foundations, decoupled domain boundaries, and explicit RESTful contracts prevent technical debt before it manifests.
              </p>
            </div>

            <div
              className="architectural-pillar-card"
              onMouseEnter={() => soundManager.playHover()}
            >
              <span className="pillar-index-label">PILLAR // 02</span>
              <h3 className="pillar-card-title">DELIVERY WITH CONFIDENCE</h3>
              <p className="pillar-card-desc">
                Rigorous code review standards, agile sprint orchestration, and automated CI/CD pipelines turn client deployments into predictable non-events.
              </p>
            </div>

            <div
              className="architectural-pillar-card"
              onMouseEnter={() => soundManager.playHover()}
            >
              <span className="pillar-index-label">PILLAR // 03</span>
              <h3 className="pillar-card-title">BUILT FOR THE REAL WORLD</h3>
              <p className="pillar-card-desc">
                High-throughput queries, offline-first SQLite synchronization, and edge computer vision algorithms engineered for real industrial and field environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
