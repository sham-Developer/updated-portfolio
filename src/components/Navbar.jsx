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
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Monogram Brand Mark */}
        <a
          href="#hero"
          className="brand-logo"
          onClick={() => soundManager.playHover()}
        >
          <div className="brand-badge-box">SR</div>
          <div className="brand-text-block">
            <span className="brand-title">SHAM R</span>
            <span className="brand-role-caption">Software Team Leader</span>
          </div>
        </a>

        {/* Clean, Curated Desktop Links */}
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

        {/* Essential Quick Utilities */}
        <div className="nav-utilities">
          {/* Audio FX Toggle (Micro icon button) */}
          <button
            className={`utility-btn sound-toggle-btn ${soundEnabled ? "active" : "muted"}`}
            onClick={toggleSound}
            title={soundEnabled ? "Mute Sound Effects" : "Enable Sound Effects"}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
          </button>

          {/* Quick CLI Palette trigger (compact pill) */}
          <button
            className="utility-btn terminal-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenTerminal();
            }}
            title="Open Interactive Terminal (Ctrl+K)"
            aria-label="Open Terminal"
          >
            <Terminal size={14} />
            <span className="key-hint">⌘K</span>
          </button>

          {/* Curriculum Vitae Modal */}
          <button
            className="utility-btn resume-btn"
            onClick={() => {
              soundManager.playClick();
              onOpenResume();
            }}
            title="View & Print Curriculum Vitae"
          >
            <FileText size={14} />
            <span className="btn-label">Resume</span>
          </button>

          {/* Clean Contact Action Button */}
          <a
            href="#contact"
            className="nav-cta-btn"
            onClick={() => soundManager.playClick()}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={13} className="cta-arrow" />
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
