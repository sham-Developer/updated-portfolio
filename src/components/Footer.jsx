import React from "react";
import { ArrowUp, Mail, Heart, Sparkles, Terminal } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { soundManager } from "../utils/sound";
import { personalInfo } from "../data/portfolioData";

export default function Footer({ onOpenTerminal, onOpenResume }) {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-glow-separator"></div>

      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="brand-bracket">&lt;</span>
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-ext">.dev</span>
            <span className="brand-bracket"> /&gt;</span>
            <p className="footer-tagline">
              Software Developer & Team Leader • Crafting resilient web architectures, native Android apps, and computer vision systems.
            </p>
          </div>

          <div className="footer-quick-links">
            <div className="footer-nav-col">
              <h5>Navigation</h5>
              <a href="#hero">Overview</a>
              <a href="#about">About & Leadership</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Tech Stack</a>
            </div>

            <div className="footer-nav-col">
              <h5>Quick Actions</h5>
              <button
                className="footer-action-link"
                onClick={() => {
                  soundManager.playClick();
                  onOpenResume();
                }}
              >
                Curriculum Vitae
              </button>
              <button
                className="footer-action-link"
                onClick={() => {
                  soundManager.playClick();
                  onOpenTerminal();
                }}
              >
                Terminal CLI (Ctrl+K)
              </button>
              <a href="#contact">Contact Me</a>
            </div>

            <div className="footer-nav-col">
              <h5>Profiles</h5>
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

        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React, Vite & Vanilla CSS. All rights reserved.
          </p>

          <button
            className="back-to-top-btn"
            onClick={scrollToTop}
            title="Return to top"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
