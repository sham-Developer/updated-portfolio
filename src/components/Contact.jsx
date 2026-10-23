import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import confetti from "canvas-confetti";
import { soundManager } from "../utils/sound";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    soundManager.playSuccess();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleStartConversation = () => {
    soundManager.playSuccess();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="contact" className="contact-obsidian-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="contact-header-centered reveal-on-scroll">
          <div className="section-label-chip">
            <span className="chip-dot"></span>
            <span>08 / NEXT COLLABORATION</span>
          </div>
          <h2 className="contact-main-display-title">
            Have a project in mind or an engineering role to discuss? <span className="serif-accent">Let's talk</span>.
          </h2>
          <p className="contact-narrative-sub">
            Whether you need a software team leader to orchestrate delivery sprints or a full-stack engineer to build web platforms, Android apps, or OpenCV inspection systems, I'm open to discussing opportunities.
          </p>
        </div>

        {/* 2-Column Contact Interaction Grid */}
        <div className="contact-two-column-grid">
          {/* Card 1: Direct Inquiry & Copy */}
          <div
            className="contact-interaction-card reveal-on-scroll delay-100"
            onMouseEnter={() => soundManager.playHover()}
          >
            <div className="card-top-content">
              <span className="contact-card-sublabel">EMAIL</span>
              <div className="contact-email-monoline">
                {personalInfo.email}
              </div>
              <p className="contact-card-note">
                I typically respond to inquiries within 24 hours.
              </p>
            </div>

            <button
              className={`btn-contact-clipboard ${copied ? "copied" : ""}`}
              onClick={handleCopyEmail}
            >
              {copied ? "COPIED TO CLIPBOARD ✓" : "COPY EMAIL ADDRESS"}
            </button>
          </div>

          {/* Card 2: Telemetry & Location Details */}
          <div
            className="contact-interaction-card reveal-on-scroll delay-200"
            onMouseEnter={() => soundManager.playHover()}
          >
            <div className="telemetry-specs-list">
              <div className="telemetry-spec-item">
                <span className="spec-label">LOCATION</span>
                <span className="spec-value">{personalInfo.location}</span>
              </div>
              <div className="telemetry-spec-item">
                <span className="spec-label">TIMEZONE</span>
                <span className="spec-value">Indian Standard Time (IST / UTC+5:30)</span>
              </div>
              <div className="telemetry-spec-item">
                <span className="spec-label">TELEPHONE / WHATSAPP</span>
                <span className="spec-value">{personalInfo.phone}</span>
              </div>
              <div className="telemetry-spec-item">
                <span className="spec-label">CURRENT MANDATE</span>
                <span className="spec-value text-gold">Leading 5+ Developers at Fisto Tech</span>
              </div>
            </div>

            <div className="social-links-duo">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn-box"
                onClick={() => soundManager.playHover()}
              >
                <Github size={15} />
                <span>GITHUB</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn-box"
                onClick={() => soundManager.playHover()}
              >
                <Linkedin size={15} />
                <span>LINKEDIN</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="contact-primary-cta-row reveal-on-scroll delay-300">
          <a
            href={`mailto:${personalInfo.email}?subject=Collaboration%20Inquiry%20with%20Sham%20R`}
            className="btn-start-conversation"
            onClick={handleStartConversation}
          >
            <span>START A CONVERSATION ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
