import React, { useState, useEffect } from "react";
import { Terminal, Volume2, VolumeX, FileText, Menu, X, Sparkles, Send } from "lucide-react";
import { soundManager } from "../utils/sound";
import { personalInfo } from "../data/portfolioData";

export default function Navbar({ onOpenTerminal, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundManager.enabled);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = soundManager.toggle();
    setSoundEnabled(newState);
  };

  const navLinks = [
    { label: "Overview", href: "#hero" },
    { label: "About & Leadership", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Tech Stack", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="brand-logo"
          onClick={() => soundManager.playHover()}
        >
          <span className="brand-bracket">&lt;</span>
          <span className="brand-name">Sham</span>
          <span className="brand-ext">.dev</span>
          <span className="brand-bracket"> /&gt;</span>
          <span className="brand-badge-pulse" title="Software Team Leader"></span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="nav-link"
              onClick={() => soundManager.playHover()}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick Utilities / CTAs */}
        <div className="nav-utilities">
          {/* Sound Toggle */}
          <button
            className={`utility-btn ${soundEnabled ? "active" : "muted"}`}
            onClick={toggleSound}
            title={soundEnabled ? "Mute Sound FX" : "Enable Sound FX"}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Terminal Launcher */}
          <button
            className="utility-btn terminal-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenTerminal();
            }}
            title="Open Interactive Terminal (Ctrl+K)"
            aria-label="Terminal"
          >
            <Terminal size={15} />
            <span className="key-hint">Ctrl+K</span>
          </button>

          {/* Resume Viewer */}
          <button
            className="utility-btn resume-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenResume();
            }}
            title="View & Download Resume"
          >
            <FileText size={15} />
            <span className="btn-label">Resume</span>
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="nav-cta-btn"
            onClick={() => soundManager.playClick()}
          >
            <Sparkles size={14} />
            <span>Connect</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-menu-toggle"
            onClick={() => {
              soundManager.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-links-list">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => {
                  soundManager.playClick();
                  setMobileMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="mobile-drawer-actions">
              <button
                className="mobile-drawer-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
              >
                <FileText size={16} />
                <span>View Full Resume</span>
              </button>
              <button
                className="mobile-drawer-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
              >
                <Terminal size={16} />
                <span>Interactive Terminal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
