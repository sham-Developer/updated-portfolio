import React from "react";
import { ArrowUp } from "lucide-react";
import { soundManager } from "../utils/sound";
import { personalInfo } from "../data/portfolioData";

export default function Footer({ onOpenTerminal, onOpenResume }) {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-ivory-section">
      <div className="section-container">
        <div className="footer-main-flex-row">
          {/* Monogram & Tagline */}
          <div className="footer-brand-info">
            <div className="footer-brand-header">
              <div className="footer-monogram-box">SR</div>
              <span className="footer-name-title">SHAM R</span>
            </div>
            <p className="footer-sub-tagline">
              Software Developer & Team Leader. Designed around systems. Built for scale.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav-links-row">
            <a href="#about" className="footer-nav-link" onClick={() => soundManager.playHover()}>
              About
            </a>
            <a href="#projects" className="footer-nav-link" onClick={() => soundManager.playHover()}>
              Work
            </a>
            <a href="#experience" className="footer-nav-link" onClick={() => soundManager.playHover()}>
              Experience
            </a>
            <a href="#skills" className="footer-nav-link" onClick={() => soundManager.playHover()}>
              Skills
            </a>
            <a href="#contact" className="footer-nav-link" onClick={() => soundManager.playHover()}>
              Contact
            </a>
            <button
              className="footer-nav-btn-link"
              onClick={() => {
                soundManager.playClick();
                onOpenResume();
              }}
            >
              Resume
            </button>
            <button
              className="footer-back-to-top"
              onClick={scrollToTop}
            >
              <span>Back to top</span>
              <ArrowUp size={13} />
            </button>
          </div>

          {/* Copyright notice */}
          <div className="footer-copyright-text">
            © {new Date().getFullYear()} SHAM R. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
