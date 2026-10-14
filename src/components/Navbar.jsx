import React, { useState, useEffect } from "react";
import { Terminal, Volume2, VolumeX, FileText, Menu, X, ArrowUpRight } from "lucide-react";
import { soundManager } from "../utils/sound";
import { personalInfo } from "../data/portfolioData";

export default function Navbar({ onOpenTerminal, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundManager.enabled);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
    { label: "Selected Works", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About & Leadership", href: "#about" },
    { label: "Proficiency", href: "#skills" },
    { label: "Credentials", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Editorial Monogram Brand */}
        <a
          href="#hero"
          className="brand-logo"
          onClick={() => soundManager.playHover()}
        >
          <div className="brand-badge-box">S</div>
          <div className="brand-text-block">
            <span className="brand-title">SHAM R</span>
            <span className="brand-role-caption">Software Team Lead</span>
          </div>
          <span className="brand-status-dot" title="Available for Impact"></span>
        </a>

        {/* Desktop Links */}
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

        {/* Quick Utilities */}
        <div className="nav-utilities">
          {/* Sound Toggle */}
          <button
            className={`utility-btn ${soundEnabled ? "active" : "muted"}`}
            onClick={toggleSound}
            title={soundEnabled ? "Mute Acoustic FX" : "Enable Acoustic FX"}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
          </button>

          {/* Terminal Launcher */}
          <button
            className="utility-btn terminal-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenTerminal();
            }}
            title="Open Interactive CLI (Ctrl+K)"
            aria-label="Terminal"
          >
            <Terminal size={14} />
            <span className="key-hint">CLI ⌘K</span>
          </button>

          {/* Resume Viewer */}
          <button
            className="utility-btn resume-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenResume();
            }}
            title="View & Print Curriculum Vitae"
          >
            <FileText size={14} />
            <span className="btn-label">CV</span>
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="nav-cta-btn"
            onClick={() => soundManager.playClick()}
          >
            <span>Initiate Contact</span>
            <ArrowUpRight size={14} />
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
                <span>View Full Curriculum Vitae</span>
              </button>
              <button
                className="mobile-drawer-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
              >
                <Terminal size={16} />
                <span>Interactive Terminal (CLI)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
