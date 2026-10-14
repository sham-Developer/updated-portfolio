import React, { useState } from "react";
import { Building2, Calendar, MapPin, CheckCircle2, Award, ChevronRight, TrendingUp, ShieldCheck, Users } from "lucide-react";
import { soundManager } from "../utils/sound";
import { experience } from "../data/portfolioData";

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(0);

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        {/* Editorial Section Header */}
        <div className="section-header-centered reveal-on-scroll">
          <span className="section-label-chip">CAREER TIMELINE</span>
          <h2 className="section-main-title">
            Professional Trajectory & <span className="text-terracotta">Leadership Ascent</span>
          </h2>
          <p className="section-desc">
            A verified trajectory of performance-based promotion: from practical engineering foundations to orchestrating multi-developer agile sprints and high-availability releases.
          </p>
        </div>

        {/* Experience Dual Column Layout */}
        <div className="experience-editorial-grid">
          {/* Left Column: Organization & Timeline Cards */}
          <div className="experience-roles-nav reveal-on-scroll delay-100">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className={`exp-nav-card ${selectedExp === idx ? "active-exp" : ""}`}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedExp(idx);
                }}
                onMouseEnter={() => soundManager.playHover()}
              >
                <div className="exp-nav-top">
                  <span className="exp-org-name">{exp.company}</span>
                  {exp.current && <span className="current-lead-tag">CURRENT ROLE</span>}
                </div>
                <h4 className="exp-role-heading">{exp.role}</h4>
                <div className="exp-period-line">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </div>
              </div>
            ))}

            {/* Leadership Promotion Spotlight Card */}
            <div className="promotion-spotlight-box">
              <div className="spotlight-icon-wrap">
                <TrendingUp size={20} className="text-cobalt" />
              </div>
              <div className="spotlight-content">
                <h5>Fast-Track Leadership Promotion</h5>
                <p>
                  Promoted from Junior Software Developer to Software Team Leader at Fisto Tech within 16 months based on consistent technical results, code quality, and delivery leadership.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Responsibilities Dossier */}
          <div className="experience-dossier-panel reveal-on-scroll delay-200">
            {experience[selectedExp] && (
              <div className="dossier-white-sheet">
                <div className="sheet-top-header">
                  <div>
                    <div className="sheet-location-row">
                      <Building2 size={16} className="text-cobalt" />
                      <strong>{experience[selectedExp].company}</strong>
                      <span className="dot-sep">•</span>
                      <span className="location-text">
                        <MapPin size={13} />
                        {experience[selectedExp].location}
                      </span>
                    </div>
                    <h3 className="sheet-role-title">{experience[selectedExp].role}</h3>
                  </div>

                  <div className="sheet-tenure-tag">
                    <span className="tenure-badge">{experience[selectedExp].period}</span>
                    <span className="type-badge">{experience[selectedExp].type}</span>
                  </div>
                </div>

                <div className="sheet-body-content">
                  <h4 className="deliverables-title">
                    Key Engineering Deliverables & Milestones
                  </h4>

                  <ul className="sheet-bullets-list">
                    {experience[selectedExp].highlights.map((item, hi) => (
                      <li key={hi} className="sheet-bullet-item">
                        <div className="bullet-point-box">
                          <CheckCircle2 size={15} className="text-forest" />
                        </div>
                        <span className="bullet-text">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="sheet-tech-footer">
                    <span className="tech-footer-label">Stack & Methodologies Applied:</span>
                    <div className="sheet-tech-tags">
                      {experience[selectedExp].technologies.map((t, ti) => (
                        <span key={ti} className="sheet-tech-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
