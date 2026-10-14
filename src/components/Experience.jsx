import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award, Sparkles, Building2, TrendingUp } from "lucide-react";
import { soundManager } from "../utils/sound";
import { experience } from "../data/portfolioData";

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(0);

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-subtitle">CAREER MILESTONES</span>
          <h2 className="section-main-title">
            Professional <span className="gradient-text-purple">Work Experience</span>
          </h2>
          <p className="section-desc">
            A proven trajectory of rapid career progression from hands-on software development to leading high-performing engineering teams.
          </p>
        </div>

        {/* Experience Timeline Layout */}
        <div className="experience-layout">
          {/* Left Navigation Tabs */}
          <div className="experience-tabs-col">
            {experience.map((exp, idx) => (
              <button
                key={idx}
                className={`exp-tab-card ${selectedExp === idx ? "active-tab" : ""}`}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedExp(idx);
                }}
                onMouseEnter={() => soundManager.playHover()}
              >
                <div className="exp-tab-indicator"></div>
                <div className="exp-tab-content">
                  <div className="exp-tab-top">
                    <span className="exp-tab-company">{exp.company}</span>
                    {exp.current && <span className="current-badge">CURRENT</span>}
                  </div>
                  <h4 className="exp-tab-role">{exp.role}</h4>
                  <div className="exp-tab-period">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </button>
            ))}

            {/* Career Growth Callout */}
            <div className="career-growth-card">
              <TrendingUp size={20} className="accent-cyan" />
              <div>
                <h5>Rapid Leadership Ascent</h5>
                <p>Promoted from Junior Developer to Software Team Leader at Fisto Tech within 16 months based on consistent technical results and team impact.</p>
              </div>
            </div>
          </div>

          {/* Right Detailed Panel */}
          <div className="experience-detail-col">
            {experience[selectedExp] && (
              <div className="experience-card">
                <div className="card-header-row">
                  <div>
                    <div className="company-meta-line">
                      <Building2 size={16} className="accent-cyan" />
                      <span className="company-name">{experience[selectedExp].company}</span>
                      <span className="separator">•</span>
                      <span className="loc-text">
                        <MapPin size={14} />
                        {experience[selectedExp].location}
                      </span>
                    </div>
                    <h3 className="role-title">{experience[selectedExp].role}</h3>
                  </div>

                  <div className="period-badge-wrapper">
                    <span className="period-pill">{experience[selectedExp].period}</span>
                    <span className="type-pill">{experience[selectedExp].type}</span>
                  </div>
                </div>

                <div className="card-body-content">
                  <h4 className="highlights-heading">
                    <Sparkles size={16} className="accent-purple" />
                    Key Responsibilities & Deliverables
                  </h4>

                  <ul className="highlights-bullet-list">
                    {experience[selectedExp].highlights.map((item, hi) => (
                      <li key={hi} className="highlight-bullet-item">
                        <CheckCircle2 size={16} className="bullet-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="exp-tech-section">
                    <h5 className="tech-section-title">Technologies & Methodologies Applied:</h5>
                    <div className="exp-tags-row">
                      {experience[selectedExp].technologies.map((t, ti) => (
                        <span key={ti} className="exp-tech-tag">
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
