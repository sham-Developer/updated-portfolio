import React from "react";
import { soundManager } from "../utils/sound";
import { education, certifications } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="foundations-ivory-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-editorial reveal-on-scroll">
          <div className="section-label-chip ivory-theme">
            <span className="chip-dot"></span>
            <span>07 / FOUNDATIONS</span>
          </div>
          <h2 className="section-main-title ivory-theme">
            Academic rigour meets <span className="serif-accent ivory-mode">modern certification</span>.
          </h2>
          <p className="section-desc ivory-theme">
            Grounding advanced computer application theory and business information systems with verified industry-grade full-stack credentials.
          </p>
        </div>

        {/* Credentials List Stack */}
        <div className="credentials-cards-stack">
          {/* Degree 1 */}
          <div
            className="credential-ivory-card reveal-on-scroll delay-100"
            onMouseEnter={() => soundManager.playHover()}
          >
            <div className="credential-left-info">
              <span className="credential-category-tag">GRADUATE DEGREE</span>
              <h3 className="credential-degree-title">{education[0].degree}</h3>
              <p className="credential-inst-text">{education[0].institution}</p>
              <p className="credential-desc-body">{education[0].description}</p>
            </div>
            <div className="credential-period-badge">
              {education[0].period.toUpperCase()}
            </div>
          </div>

          {/* Degree 2 */}
          <div
            className="credential-ivory-card reveal-on-scroll delay-200"
            onMouseEnter={() => soundManager.playHover()}
          >
            <div className="credential-left-info">
              <span className="credential-category-tag">UNDERGRADUATE DEGREE</span>
              <h3 className="credential-degree-title">{education[1].degree}</h3>
              <p className="credential-inst-text">{education[1].institution}</p>
              <p className="credential-desc-body">{education[1].description}</p>
            </div>
            <div className="credential-period-badge">
              {education[1].period.toUpperCase()}
            </div>
          </div>

          {/* Industry Certification */}
          <div
            className="credential-ivory-card reveal-on-scroll delay-300"
            onMouseEnter={() => soundManager.playHover()}
          >
            <div className="credential-left-info">
              <span className="credential-category-tag">INDUSTRY CERTIFICATION</span>
              <h3 className="credential-degree-title">{certifications[0].name}</h3>
              <p className="credential-inst-text">Issued by {certifications[0].issuer}</p>
              <p className="credential-desc-body">{certifications[0].desc}</p>
            </div>
            <div className="credential-period-badge">
              {certifications[0].badge.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
