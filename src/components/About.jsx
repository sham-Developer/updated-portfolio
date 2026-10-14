import React, { useState } from "react";
import { Users, Crown, Sparkles, CheckCircle2, Target, GitPullRequest, ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";
import { soundManager } from "../utils/sound";
import { personalInfo, competencies, leadershipPoints } from "../data/portfolioData";

export default function About() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-subtitle">ABOUT & LEADERSHIP</span>
          <h2 className="section-main-title">
            Engineering Rigor Meets <span className="gradient-text-cyan">Team Leadership</span>
          </h2>
          <p className="section-desc">
            Bridging complex technical architectures with agile project execution to deliver production-ready software solutions.
          </p>
        </div>

        {/* 2-Column About Grid */}
        <div className="about-grid">
          {/* Left Bio Card */}
          <div className="about-bio-card">
            <div className="about-card-badge">
              <Crown size={15} className="accent-amber" />
              <span>Software Team Leader Profile</span>
            </div>

            <h3 className="about-bio-title">
              Driven by Quality, Scalability, and Clean Architecture
            </h3>

            <p className="about-bio-para">
              Software Developer with nearly 3 years of experience in designing, developing, deploying, and maintaining web and Android applications. Currently serving as a <strong>Software Team Leader</strong> at <strong>Fisto Tech Private Limited</strong> in Coimbatore.
            </p>

            <p className="about-bio-para">
              Promoted to Team Lead based on consistent technical excellence and leadership contributions. I spearhead a team of 5+ developers delivering web and Android applications, driving everything from direct client requirement discovery to sprint planning, architecture, code reviews, and CI/CD production releases.
            </p>

            <div className="about-leadership-summary">
              <div className="leadership-stat-item">
                <span className="lead-num">15+</span>
                <span className="lead-text">Client Projects Successfully Delivered</span>
              </div>
              <div className="leadership-stat-item">
                <span className="lead-num">8+</span>
                <span className="lead-text">Production Deployments Handled</span>
              </div>
              <div className="leadership-stat-item">
                <span className="lead-num">5+</span>
                <span className="lead-text">Developers Actively Mentored</span>
              </div>
            </div>

            <div className="quote-box">
              <span className="quote-mark">“</span>
              <p>
                My approach combines strong technical fundamentals with empathetic leadership: writing maintainable code, empowering engineers to excel, and delivering tangible business value on time.
              </p>
              <span className="quote-author">— Sham R, Team Leader</span>
            </div>
          </div>

          {/* Right Column: Leadership Pillars & Competencies */}
          <div className="about-pillars-col">
            <h4 className="pillars-header">Leadership & Engineering Pillars</h4>

            <div className="pillars-list">
              {leadershipPoints.map((point, i) => (
                <div
                  key={i}
                  className={`pillar-card ${activePillar === i ? "active-pillar" : ""}`}
                  onMouseEnter={() => {
                    soundManager.playHover();
                    setActivePillar(i);
                  }}
                  onClick={() => {
                    soundManager.playClick();
                    setActivePillar(i);
                  }}
                >
                  <div className="pillar-header-row">
                    <div className="pillar-indicator">
                      <span className="pillar-num">0{i + 1}</span>
                    </div>
                    <h5 className="pillar-title">{point.title}</h5>
                  </div>
                  <p className="pillar-desc">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Competencies Grid */}
        <div className="competencies-area">
          <h4 className="competencies-title">Core Technical Competencies</h4>
          <div className="competencies-grid">
            {competencies.map((comp, idx) => (
              <div
                key={idx}
                className="competency-card"
                onMouseEnter={() => soundManager.playHover()}
              >
                <div className="comp-icon-box">
                  <CheckCircle2 size={18} className="accent-cyan" />
                </div>
                <div className="comp-info">
                  <h5 className="comp-title">{comp.title}</h5>
                  <p className="comp-desc">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
