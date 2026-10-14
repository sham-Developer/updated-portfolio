import React from "react";
import { ArrowUp, Mail, Sparkles, Terminal } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { soundManager } from "../utils/sound";
import { personalInfo } from "../data/portfolioData";

export default function Footer({ onOpenTerminal, onOpenResume }) {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="editorial-footer">
      <div className="footer-top-accent-line"></div>

      <div className="footer-container">
        <div className="footer-main-row">
          <div className="footer-brand-column">
            <div className="footer-monogram">
              <span className="mono-letter">S</span>
              <span className="mono-name">SHAM R</span>
            </div>
            <p className="footer-pitch-text">
              Software Developer & Team Leader based in Coimbatore, Tamil Nadu. Engineering high-performance web applications, native Android software, and automated computer vision systems.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-links-col">
              <h5>Index</h5>
              <a href="#hero">Overview</a>
              <a href="#projects">Selected Works</a>
              <a href="#experience">Career History</a>
              <a href="#about">Philosophy</a>
              <a href="#skills">Tech Arsenal</a>
            </div>

            <div className="footer-links-col">
              <h5>Utilities</h5>
              <button
                className="footer-link-btn"
                onClick={() => {
                  soundManager.playClick();
                  onOpenResume();
                }}
              >
                Curriculum Vitae
              </button>
              <button
                className="footer-link-btn"
                onClick={() => {
                  soundManager.playClick();
                  onOpenTerminal();
                }}
              >
                CLI Terminal (⌘K)
              </button>
              <a href="#contact">Dispatch Inquiry</a>
            </div>

            <div className="footer-links-col">
              <h5>Network</h5>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href={`mailto:${personalInfo.email}`}>Email</a>
            </div>
          </div>
        </div>

        <div className="footer-copyright-bar">
          <p className="copyright-line">
            © {new Date().getFullYear()} {personalInfo.name}. Designed & Engineered with React 19, Vite & Vanilla CSS.
          </p>

          <button
            className="btn-scroll-top"
            onClick={scrollToTop}
            title="Return to top of page"
            aria-label="Back to top"
          >
            <span>Top of Page</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
