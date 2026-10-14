import React, { useState } from "react";
import { Crown, CheckCircle2, ShieldCheck, Target, ArrowRight, Quote } from "lucide-react";
import { soundManager } from "../utils/sound";
import { personalInfo, competencies, leadershipPoints } from "../data/portfolioData";

export default function About() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered reveal-on-scroll">
          <span className="section-label-chip">PHILOSOPHY & PROFILE</span>
          <h2 className="section-main-title">
            Engineering Rigor & <span className="text-cobalt">Leadership Principles</span>
          </h2>
          <p className="section-desc">
            Bridging technical depth with human leadership: translating client requirements into scalable architectural systems while mentoring developers toward engineering excellence.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="about-editorial-grid">
          {/* Left Column: Authentic Executive Bio */}
          <div className="about-bio-white-card reveal-on-scroll delay-100">
            <div className="bio-lead-tag">
              <Crown size={15} className="text-terracotta" />
              <span>SOFTWARE TEAM LEADER PROFILE</span>
            </div>

            <h3 className="bio-card-heading">
              Delivering scalable business value through structured code and team clarity.
            </h3>

            <p className="bio-card-para">
              Software Developer with nearly 3 years of hands-on experience in designing, developing, deploying, and maintaining web and Android applications. Currently serving as a <strong>Software Team Leader</strong> at <strong>Fisto Tech Private Limited</strong> in Coimbatore, Tamil Nadu.
            </p>

            <p className="bio-card-para">
              Promoted to Team Lead based on technical performance and leadership contributions. I lead a team of 5+ developers delivering web and Android applications, managing task planning, code reviews, sprint execution, client requirement discovery, and production deployments.
            </p>

            <div className="bio-stats-trio">
              <div className="bio-stat-col">
                <span className="b-num text-cobalt">15+</span>
                <span className="b-desc">Client Projects Delivered</span>
              </div>
              <div className="bio-stat-col">
                <span className="b-num text-terracotta">8+</span>
                <span className="b-desc">Production Apps Live</span>
              </div>
              <div className="bio-stat-col">
                <span className="b-num text-forest">5+</span>
                <span className="b-desc">Developers Mentored</span>
              </div>
            </div>

            <div className="editorial-quote-block">
              <Quote size={20} className="text-cobalt quote-icon" />
              <p>
                “Great software is not just about lines of code; it is about predictable delivery, maintainable design systems, and empowering engineers to take ownership of client outcomes.”
              </p>
              <span className="quote-author-name">— Sham R, Software Team Leader</span>
            </div>
          </div>

          {/* Right Column: Leadership Pillars */}
          <div className="about-pillars-stack reveal-on-scroll delay-200">
            <h4 className="pillars-section-title">Leadership Tenets</h4>

            <div className="pillars-editorial-list">
              {leadershipPoints.map((point, i) => (
                <div
                  key={i}
                  className={`pillar-editorial-card ${activePillar === i ? "active-pillar" : ""}`}
                  onMouseEnter={() => {
                    soundManager.playHover();
                    setActivePillar(i);
                  }}
                  onClick={() => {
                    soundManager.playClick();
                    setActivePillar(i);
                  }}
                >
                  <div className="pillar-top-row">
                    <span className="pillar-num-stamp">0{i + 1}</span>
                    <h5 className="pillar-heading-title">{point.title}</h5>
                  </div>
                  <p className="pillar-body-text">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competencies Section */}
        <div className="competencies-editorial-area reveal-on-scroll delay-300">
          <h4 className="comp-block-title">Core Engineering Competencies</h4>
          <div className="competencies-grid-clean">
            {competencies.map((comp, idx) => (
              <div
                key={idx}
                className="comp-card-clean"
                onMouseEnter={() => soundManager.playHover()}
              >
                <div className="comp-check-box">
                  <CheckCircle2 size={17} className="text-cobalt" />
                </div>
                <div className="comp-text-block">
                  <h5 className="comp-item-title">{comp.title}</h5>
                  <p className="comp-item-desc">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
