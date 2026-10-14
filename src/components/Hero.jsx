import React, { useState, useEffect } from "react";
import { ArrowRight, Download, Terminal, Sparkles, Mail, Phone, MapPin, Code2, Layers, Cpu, CheckCircle } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import confetti from "canvas-confetti";
import { soundManager } from "../utils/sound";
import { personalInfo } from "../data/portfolioData";

const ROLES = [
  "Software Team Leader @ Fisto Tech",
  "Full-Stack Web Architect (React & Node)",
  "Native Android Developer (Kotlin & Java)",
  "Computer Vision Engineer (Python & OpenCV)",
  "Agile Sprint Leader (15+ Delivered Projects)"
];

export default function Hero({ onOpenTerminal, onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Typing effect
  useEffect(() => {
    const currentFull = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayedText.length < currentFull.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentFull.slice(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText.length === currentFull.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentFull.slice(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 16, y: -y * 16 });
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const triggerDownload = () => {
    soundManager.playSuccess();
    confetti({
      particleCount: 90,
      spread: 60,
      origin: { y: 0.7 }
    });
    onOpenResume();
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow-blob top-left"></div>
      <div className="hero-glow-blob bottom-right"></div>

      <div className="hero-container">
        {/* Left Column: Headline & Intro */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="pulse-beacon"></span>
            <span className="status-text">Software Team Leader • Ramanathapuram, Coimbatore</span>
          </div>

          <h1 className="hero-main-title">
            Hi, I'm <span className="gradient-text-shimmer">{personalInfo.name}</span>
            <span className="hero-title-break">Engineering Scalable Web, Android & Vision Systems.</span>
          </h1>

          <div className="hero-role-rotator">
            <span className="rotator-prefix">&gt; </span>
            <span className="rotator-text">{displayedText}</span>
            <span className="typing-cursor">_</span>
          </div>

          <p className="hero-bio-summary">
            Software Developer with nearly 3 years of hands-on expertise building enterprise software.
            Currently leading 5+ engineers at <strong>Fisto Tech</strong>, driving 15+ delivered client
            solutions from technical requirements to production CI/CD deployments.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a
              href="#projects"
              className="primary-hero-btn"
              onClick={() => soundManager.playClick()}
            >
              <span>Explore Featured Projects</span>
              <ArrowRight size={16} />
            </a>

            <button
              className="secondary-hero-btn"
              onClick={triggerDownload}
            >
              <Download size={16} />
              <span>Get Curriculum Vitae</span>
            </button>

            <button
              className="terminal-quick-btn"
              onClick={() => {
                soundManager.playClick();
                onOpenTerminal();
              }}
              title="Open Terminal"
            >
              <Terminal size={16} />
              <span>CLI</span>
            </button>
          </div>

          {/* Social Links & Location Quick Bar */}
          <div className="hero-social-bar">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              title="GitHub Profile"
              onClick={() => soundManager.playHover()}
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              title="LinkedIn Profile"
              onClick={() => soundManager.playHover()}
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="social-icon-link"
              title="Direct Email"
              onClick={() => soundManager.playHover()}
            >
              <Mail size={18} />
              <span>{personalInfo.email}</span>
            </a>

            <div className="hero-location-pill">
              <MapPin size={14} className="accent-cyan" />
              <span>Coimbatore, TN</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Developer Card */}
        <div className="hero-visual-col">
          <div
            className="holographic-dev-card"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{
              transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`
            }}
          >
            <div className="card-ambient-glow"></div>

            {/* Code Header Bar */}
            <div className="card-top-bar">
              <div className="card-traffic-lights">
                <span className="light red"></span>
                <span className="light yellow"></span>
                <span className="light green"></span>
              </div>
              <span className="card-tab-name">ShamProfile.ts</span>
              <span className="card-lang-tag">TypeScript / React</span>
            </div>

            {/* Code Body */}
            <div className="card-code-body">
              <div className="code-line">
                <span className="syntax-keyword">const</span> <span className="syntax-var">leadEngineer</span> = &#123;
              </div>
              <div className="code-line indent-1">
                <span className="syntax-prop">name</span>: <span className="syntax-string">"{personalInfo.name}"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="syntax-prop">currentRole</span>: <span className="syntax-string">"Software Team Leader"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="syntax-prop">company</span>: <span className="syntax-string">"Fisto Tech Pvt Ltd"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="syntax-prop">experience</span>: <span className="syntax-number">nearly 3 years</span>,
              </div>
              <div className="code-line indent-1">
                <span className="syntax-prop">teamSize</span>: <span className="syntax-string">"5+ Engineers"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="syntax-prop">coreStack</span>: [
              </div>
              <div className="code-line indent-2">
                <span className="syntax-string">"React.js"</span>, <span className="syntax-string">"Node.js"</span>, <span className="syntax-string">"Android"</span>, <span className="syntax-string">"OpenCV"</span>, <span className="syntax-string">"MySQL"</span>
              </div>
              <div className="code-line indent-1">],</div>
              <div className="code-line indent-1">
                <span className="syntax-prop">trackRecord</span>: &#123;
              </div>
              <div className="code-line indent-2">
                <span className="syntax-prop">clientProjectsDelivered</span>: <span className="syntax-number">15</span>,
              </div>
              <div className="code-line indent-2">
                <span className="syntax-prop">appsInProduction</span>: <span className="syntax-number">8</span>,
              </div>
              <div className="code-line indent-2">
                <span className="syntax-prop">ciCdAutomation</span>: <span className="syntax-bool">true</span>
              </div>
              <div className="code-line indent-1">&#125;,</div>
              <div className="code-line indent-1">
                <span className="syntax-prop">isAvailableForImpact</span>: <span className="syntax-bool">true</span>
              </div>
              <div className="code-line">&#125;;</div>
            </div>

            {/* Floating Quick Badges on Card */}
            <div className="floating-badge badge-top-right">
              <CheckCircle size={14} className="accent-green" />
              <span>15+ Delivered Projects</span>
            </div>

            <div className="floating-badge badge-bottom-left">
              <Cpu size={14} className="accent-cyan" />
              <span>Full-Stack + Vision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
