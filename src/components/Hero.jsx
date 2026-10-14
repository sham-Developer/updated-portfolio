import React, { useState, useEffect } from "react";
import { ArrowDownRight, ArrowUpRight, Download, Terminal, MapPin, CheckCircle, Sparkles, Building2, ShieldCheck, Layers, GitBranch, Cpu } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import confetti from "canvas-confetti";
import { soundManager } from "../utils/sound";
import { personalInfo } from "../data/portfolioData";

export default function Hero({ onOpenTerminal, onOpenResume }) {
  const [activeTab, setActiveTab] = useState("overview");

  const triggerDownload = () => {
    soundManager.playSuccess();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
    onOpenResume();
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-editorial-container">
        {/* Top Meta Bar */}
        <div className="hero-top-meta reveal-on-scroll">
          <div className="location-stamp">
            <span className="live-dot"></span>
            <span>COIMBATORE, TAMIL NADU, INDIA</span>
            <span className="meta-sep">•</span>
            <span className="org-stamp">FISTO TECH PVT LTD</span>
          </div>
          <div className="experience-stamp">
            <span>ROLE: <strong>SOFTWARE TEAM LEADER</strong></span>
            <span className="meta-sep">•</span>
            <span>EXP: <strong>NEARLY 3 YEARS</strong></span>
          </div>
        </div>

        {/* Hero Editorial Headline */}
        <div className="hero-headline-wrapper reveal-on-scroll delay-100">
          <h1 className="hero-editorial-title">
            Architecting scalable <span className="title-italic-accent">web & mobile</span> software with rigorous engineering leadership.
          </h1>
        </div>

        {/* Subhead + Quick Pitch */}
        <div className="hero-subhead-grid reveal-on-scroll delay-200">
          <div className="hero-pitch-column">
            <p className="hero-narrative-text">
              Leading a team of 5+ developers building production-ready business applications, native Android workflows, and automated computer vision systems. Spearheaded 15+ successful client deliveries from requirement discovery to CI/CD releases.
            </p>

            {/* CTAs with editorial tactile buttons */}
            <div className="hero-action-buttons">
              <a
                href="#projects"
                className="btn-editorial-primary"
                onClick={() => soundManager.playClick()}
              >
                <span>Explore Works & Live Demos</span>
                <ArrowDownRight size={17} />
              </a>

              <button
                className="btn-editorial-outline"
                onClick={triggerDownload}
              >
                <Download size={16} />
                <span>Curriculum Vitae</span>
              </button>

              <button
                className="btn-editorial-cli"
                onClick={() => {
                  soundManager.playClick();
                  onOpenTerminal();
                }}
                title="Launch Command Line"
              >
                <Terminal size={15} />
                <span>CLI Terminal</span>
              </button>
            </div>

            {/* Direct Connect Pills */}
            <div className="hero-channels-row">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link"
                onClick={() => soundManager.playHover()}
              >
                <Github size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={12} className="corner-arrow" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link"
                onClick={() => soundManager.playHover()}
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} className="corner-arrow" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="channel-link email-pill"
                onClick={() => soundManager.playHover()}
              >
                <span>{personalInfo.email}</span>
                <ArrowUpRight size={12} className="corner-arrow" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Dossier Card */}
          <div className="hero-dossier-column">
            <div className="dossier-card">
              <div className="dossier-header">
                <div className="dossier-header-left">
                  <span className="file-badge">ENGINEERING DOSSIER</span>
                  <span className="file-id">SHAM_R_ARCH_v2.6</span>
                </div>
                <div className="dossier-tabs">
                  <button
                    className={`dossier-tab-btn ${activeTab === "overview" ? "active" : ""}`}
                    onClick={() => {
                      soundManager.playHover();
                      setActiveTab("overview");
                    }}
                  >
                    Metrics
                  </button>
                  <button
                    className={`dossier-tab-btn ${activeTab === "stack" ? "active" : ""}`}
                    onClick={() => {
                      soundManager.playHover();
                      setActiveTab("stack");
                    }}
                  >
                    Tech Stack
                  </button>
                </div>
              </div>

              {activeTab === "overview" ? (
                <div className="dossier-body">
                  <div className="dossier-metric-row">
                    <div className="d-stat-box">
                      <span className="d-num text-cobalt">15+</span>
                      <span className="d-label">Delivered Projects</span>
                      <span className="d-sub">End-to-end client solutions</span>
                    </div>
                    <div className="d-stat-box">
                      <span className="d-num text-terracotta">8+</span>
                      <span className="d-label">Live Deployments</span>
                      <span className="d-sub">Cloud & Linux production</span>
                    </div>
                  </div>

                  <div className="dossier-metric-row">
                    <div className="d-stat-box">
                      <span className="d-num text-forest">5+</span>
                      <span className="d-label">Engineers Led</span>
                      <span className="d-sub">Sprint cycles & code reviews</span>
                    </div>
                    <div className="d-stat-box">
                      <span className="d-num text-ink">Nearly 3</span>
                      <span className="d-label">Years In Production</span>
                      <span className="d-sub">React, Node, Android, Vision</span>
                    </div>
                  </div>

                  <div className="dossier-lead-note">
                    <ShieldCheck size={16} className="text-cobalt" />
                    <p>
                      <strong>Current Mandate:</strong> Leading sprint velocity, architectural standards, and client deliverables at Fisto Tech.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="dossier-body stack-mode">
                  <div className="dossier-stack-group">
                    <span className="dossier-group-title">Primary Frontend:</span>
                    <div className="dossier-pills">
                      <span className="dpill">React.js</span>
                      <span className="dpill">Next.js</span>
                      <span className="dpill">JavaScript (ES6+)</span>
                      <span className="dpill">Tailwind CSS</span>
                    </div>
                  </div>

                  <div className="dossier-stack-group">
                    <span className="dossier-group-title">Backend & APIs:</span>
                    <div className="dossier-pills">
                      <span className="dpill">Node.js</span>
                      <span className="dpill">Express.js</span>
                      <span className="dpill">RESTful Architecture</span>
                      <span className="dpill">PHP</span>
                      <span className="dpill">MySQL</span>
                    </div>
                  </div>

                  <div className="dossier-stack-group">
                    <span className="dossier-group-title">Mobile & Vision:</span>
                    <div className="dossier-pills">
                      <span className="dpill">Android Studio</span>
                      <span className="dpill">Kotlin / Java</span>
                      <span className="dpill">OpenCV (Python)</span>
                      <span className="dpill">GPS / Telemetry</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="dossier-footer">
                <span className="status-indicator"></span>
                <span>STATUS: ACTIVE & DELIVERING ENTERPRISE VALUE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
