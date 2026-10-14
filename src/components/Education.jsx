import React from "react";
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle, ShieldCheck } from "lucide-react";
import { soundManager } from "../utils/sound";
import { education, certifications } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-container">
        {/* Editorial Section Header */}
        <div className="section-header-centered reveal-on-scroll">
          <span className="section-label-chip">ACADEMIC & CREDENTIALS</span>
          <h2 className="section-main-title">
            Academic Foundations & <span className="text-cobalt">Certifications</span>
          </h2>
          <p className="section-desc">
            Combining university computer application fundamentals with verified industry-grade full stack credentials and ongoing higher education.
          </p>
        </div>

        <div className="education-editorial-grid">
          {/* Left Column: Degrees */}
          <div className="edu-degrees-col reveal-on-scroll delay-100">
            <div className="column-title-strip">
              <GraduationCap size={19} className="text-cobalt" />
              <span>University Degrees</span>
            </div>

            <div className="degree-cards-stack">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="academic-white-card"
                  onMouseEnter={() => soundManager.playHover()}
                >
                  <div className="academic-card-top-row">
                    <span className="degree-status-pill">{edu.status}</span>
                    <div className="academic-period-stamp">
                      <Calendar size={13} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <h4 className="academic-degree-name">{edu.degree}</h4>

                  <div className="academic-institution-line">
                    <BookOpen size={14} className="text-cobalt" />
                    <span>{edu.institution}</span>
                  </div>

                  <p className="academic-summary-text">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Industry Certifications */}
          <div className="edu-certs-col reveal-on-scroll delay-200">
            <div className="column-title-strip">
              <Award size={19} className="text-terracotta" />
              <span>Industry Certifications</span>
            </div>

            <div className="cert-cards-stack">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="cert-white-card"
                  onMouseEnter={() => soundManager.playHover()}
                >
                  <div className="cert-top-row">
                    <div className="cert-icon-container">
                      <Award size={22} className="text-terracotta" />
                    </div>
                    <div>
                      <span className="cert-verified-label">{cert.badge}</span>
                      <h4 className="cert-title-name">{cert.name}</h4>
                      <span className="cert-issuer-text">Issued by {cert.issuer}</span>
                    </div>
                  </div>

                  <p className="cert-narrative-desc">{cert.desc}</p>

                  <div className="cert-verified-footer">
                    <CheckCircle size={15} className="text-forest" />
                    <span>Verified Practical Engineering Credential</span>
                  </div>
                </div>
              ))}

              {/* Continuing Education Card */}
              <div className="continuous-learning-card">
                <ShieldCheck size={20} className="text-cobalt" />
                <div>
                  <h5>Continuous Engineering Evolution</h5>
                  <p>
                    Actively advancing knowledge in distributed cloud microservices, database scaling, and edge computer vision algorithms alongside daily engineering leadership.
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
