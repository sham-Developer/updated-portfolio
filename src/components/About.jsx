import React from "react";
import { soundManager } from "../utils/sound";
import { personalInfo } from "../data/portfolioData";

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
              Full-Stack Software Engineer & Software Team Leader with nearly 3 years of hands-on experience architecting, shipping, and maintaining mission-critical web and Android applications. Currently leading cross-functional engineering pods at <strong>Fisto Tech</strong>, defining distributed system designs, managing client requirements, and instituting automated quality governance.
            </p>

            <p className="mindset-body-text">
              My background converges at the intersection of high-performance backend systems, reactive frontend interfaces, native mobile architectures, and real-time computer vision processing. Whether orchestrating 3D WebGL pattern rendering pipelines or provisioning containerized cloud APIs, my focus remains unchanged: deterministic reliability and structural elegance.
            </p>

            {/* Philosophy Box */}
            <div className="mindset-quote-block">
              <span className="quote-tag-mono">// PHILOSOPHY AT SCALE</span>
              <p className="quote-italic-statement">
                “Software architecture is the deliberate reduction of surprise. When a software system behaves deterministically under complex real-world conditions, true craftsmanship has been achieved.”
              </p>
              <div className="quote-author-signature">
                — Sham R, Software Developer & Team Leader
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
