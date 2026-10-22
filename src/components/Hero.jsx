import React from "react";
import { ArrowDownRight, ArrowUpRight, Download, Terminal, ChevronDown } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import confetti from "canvas-confetti";
import { soundManager } from "../utils/sound";
import { personalInfo } from "../data/portfolioData";

export default function Hero({ onOpenTerminal, onOpenResume }) {
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
    <section id="hero" className="hero-obsidian-section">
      <div className="hero-grid-ambient-bg"></div>

      <div className="hero-inner-container">
        {/* Left Column (Editorial Typography & Meta) */}
        <div className="hero-text-col reveal-on-scroll">
          {/* Overhead Category Badge */}
          <div className="overhead-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">ENGINEERING / ARCHITECTURE / LEADERSHIP</span>
          </div>

          {/* Monolithic Display Headline */}
          <h1 className="hero-display-headline">
            Building systems that stand the <span className="serif-accent">test of scale</span>.
          </h1>

          {/* Narrative Sub-description */}
          <p className="hero-narrative-lead">
            Software Developer and Team Leader architecting resilient full-stack systems, native Android enterprise solutions, interactive 3D WebGL platforms, and real-time computer vision pipelines.
          </p>

          {/* CTA Action Row */}
          <div className="hero-actions-row">
            <a
              href="#projects"
              className="btn-gold-primary"
              onClick={() => soundManager.playClick()}
            >
              <span>EXPLORE SELECTED WORK ↘</span>
            </a>

            <a
              href="#contact"
              className="btn-gold-ghost"
              onClick={() => soundManager.playClick()}
            >
              <span>LET'S CONNECT ↗</span>
            </a>

            <button
              className="btn-gold-outline-sm"
              onClick={triggerDownload}
              title="View & Download Curriculum Vitae"
            >
              <Download size={14} />
              <span>CV</span>
            </button>

            <button
              className="btn-gold-cli-sm"
              onClick={() => {
                soundManager.playClick();
                onOpenTerminal();
              }}
              title="Launch CLI Terminal (Ctrl+K)"
            >
              <Terminal size={14} />
              <span>CLI</span>
            </button>
          </div>

          {/* Live Telemetry Status Line */}
          <div className="hero-telemetry-row">
            <span className="telemetry-beacon">
              <span className="telemetry-ping"></span>
              <span className="telemetry-core"></span>
            </span>
            <span className="telemetry-label">
              CURRENTLY LEADING ENGINEERING PODS & DELIVERING HIGH-SCALE SOFTWARE AT FISTO TECH
            </span>
          </div>

          {/* Social Channels Row */}
          <div className="hero-social-strip">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              onClick={() => soundManager.playHover()}
            >
              <Github size={15} />
              <span>GITHUB</span>
              <ArrowUpRight size={11} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              onClick={() => soundManager.playHover()}
            >
              <Linkedin size={15} />
              <span>LINKEDIN</span>
              <ArrowUpRight size={11} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="hero-social-link"
              onClick={() => soundManager.playHover()}
            >
              <span>{personalInfo.email}</span>
              <ArrowUpRight size={11} />
            </a>
          </div>
        </div>

        {/* Right Column (Precision 3D Machined Engineering Sculpture) */}
        <div className="hero-visual-col reveal-on-scroll delay-100">
          <div className="hero-artwork-frame">
            {/* Top Coordinate Label */}
            <div className="artwork-meta-tag top-left">
              // SYS_REF.01 [SHAM_POD]
            </div>
            <div className="artwork-meta-tag bottom-right">
              REAL-TIME / 15+ DELIVERIES • 99.9% UPTIME
            </div>

            {/* High-Resolution Machined 3D Render Image */}
            <div className="artwork-image-wrapper">
              <img
                src="/assets/hero_sculpture.png"
                alt="Architectural metallic engineering sculpture with orbital geometry in titanium and gold"
                className="artwork-image"
                loading="eager"
              />
              <div className="artwork-overlay-gradient"></div>

              {/* Monospace Technical Overlay Tag */}
              <div className="artwork-caption-box">
                <span className="caption-category">ARCHITECTURE / 01</span>
                <span className="caption-metric">SYSTEM INTEGRITY: OPTIMAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Bar */}
      <div className="hero-bottom-bar reveal-on-scroll delay-200">
        <div className="bar-location">
          COIMBATORE, TAMIL NADU, INDIA // AVAILABLE FOR LEADERSHIP & ARCHITECTURAL ROLES
        </div>
        <a
          href="#stats"
          className="bar-scroll-prompt"
          onClick={() => soundManager.playHover()}
        >
          <span>SCROLL TO DISCOVER</span>
          <ChevronDown size={14} className="bounce-arrow" />
        </a>
      </div>
    </section>
  );
}
