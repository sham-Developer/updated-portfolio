import React from "react";
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle, Sparkles } from "lucide-react";
import { soundManager } from "../utils/sound";
import { education, certifications } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-subtitle">FOUNDATIONS & LEARNING</span>
          <h2 className="section-main-title">
            Academic <span className="gradient-text-cyan">Education & Certifications</span>
          </h2>
          <p className="section-desc">
            Continuous technical evolution combining formal computer applications education with specialized industry training.
          </p>
        </div>

        <div className="education-grid">
          {/* Left Column: Academic Degrees */}
          <div className="edu-col">
            <h3 className="sub-column-title">
              <GraduationCap size={20} className="accent-cyan" />
              <span>Academic Degrees</span>
            </h3>

            <div className="edu-cards-stack">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="academic-card"
                  onMouseEnter={() => soundManager.playHover()}
                >
                  <div className="academic-card-header">
                    <div className="degree-meta">
                      <span className="degree-status-pill">{edu.status}</span>
                      <h4 className="degree-title">{edu.degree}</h4>
                      <div className="institution-line">
                        <BookOpen size={14} className="accent-cyan" />
                        <span>{edu.institution}</span>
                      </div>
                    </div>

                    <div className="period-tag">
                      <Calendar size={13} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="degree-desc">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Industry Certifications */}
          <div className="cert-col">
            <h3 className="sub-column-title">
              <Award size={20} className="accent-purple" />
              <span>Professional Certifications</span>
            </h3>

            <div className="cert-cards-stack">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="cert-card"
                  onMouseEnter={() => soundManager.playHover()}
                >
                  <div className="cert-card-top">
                    <div className="cert-icon-circle">
                      <Award size={24} className="accent-purple" />
                    </div>
                    <div className="cert-header-meta">
                      <span className="cert-badge">{cert.badge}</span>
                      <h4 className="cert-name">{cert.name}</h4>
                      <span className="cert-issuer">Issued by {cert.issuer}</span>
                    </div>
                  </div>

                  <p className="cert-desc">{cert.desc}</p>

                  <div className="cert-verification-row">
                    <CheckCircle size={14} className="accent-green" />
                    <span>Verified Practical Training Credential</span>
                  </div>
                </div>
              ))}

              {/* Continuous Engineering Card */}
              <div className="learning-ethos-card">
                <Sparkles size={18} className="accent-cyan" />
                <div>
                  <h5>Continuous Engineering Growth</h5>
                  <p>
                    Actively advancing knowledge in distributed systems, advanced computer vision, and cloud microservices alongside day-to-day team leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
