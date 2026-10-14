import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import confetti from "canvas-confetti";
import { soundManager } from "../utils/sound";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Discussing Project / Engineering Opportunity",
    message: ""
  });
  const [copiedType, setCopiedType] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, type) => {
    soundManager.playSuccess();
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundManager.playSuccess();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
    setSubmitted(true);

    // Also offer mailto fallback
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
  };

  const handleQuickSubject = (subject) => {
    soundManager.playClick();
    setFormData((prev) => ({ ...prev, subject }));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-main-title">
            Let's Build Something <span className="gradient-text-shimmer">Extraordinary</span>
          </h2>
          <p className="section-desc">
            Open to discussing high-impact engineering leadership roles, full-stack architectures, Android systems, or innovative client projects.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Coordinates Card */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Direct Coordinates</h3>
            <p className="contact-info-para">
              Whether you're looking for a Software Team Leader, a seasoned full-stack developer, or need technical consulting on web and mobile ecosystems, feel free to reach out directly.
            </p>

            <div className="contact-methods-stack">
              {/* Email */}
              <div
                className="contact-method-item"
                onMouseEnter={() => soundManager.playHover()}
              >
                <div className="method-icon-box">
                  <Mail size={18} className="accent-cyan" />
                </div>
                <div className="method-text-area">
                  <span className="method-label">Direct Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="method-value">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(personalInfo.email, "email")}
                  title="Copy email to clipboard"
                >
                  {copiedType === "email" ? (
                    <span className="copied-text"><Check size={14} /> Copied</span>
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div
                className="contact-method-item"
                onMouseEnter={() => soundManager.playHover()}
              >
                <div className="method-icon-box">
                  <Phone size={18} className="accent-purple" />
                </div>
                <div className="method-text-area">
                  <span className="method-label">Direct Phone / WhatsApp</span>
                  <a href={`tel:${personalInfo.phone}`} className="method-value">
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                  title="Copy phone to clipboard"
                >
                  {copiedType === "phone" ? (
                    <span className="copied-text"><Check size={14} /> Copied</span>
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <MapPin size={18} className="accent-green" />
                </div>
                <div className="method-text-area">
                  <span className="method-label">Current Base</span>
                  <span className="method-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="contact-social-section">
              <span className="social-heading">Verified Profiles:</span>
              <div className="social-pill-row">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-profile-pill"
                  onClick={() => soundManager.playHover()}
                >
                  <Github size={16} />
                  <span>GitHub Profile</span>
                  <ExternalLink size={12} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-profile-pill"
                  onClick={() => soundManager.playHover()}
                >
                  <Linkedin size={16} />
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="availability-card">
              <div className="avail-pulse-beacon"></div>
              <div>
                <strong>Current Status:</strong>
                <p>Available for technical leadership discussions & strategic client contracts.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Hub */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon-wrapper">
                  <CheckCircle2 size={48} className="accent-cyan" />
                </div>
                <h3>Message Ready & Client Triggered!</h3>
                <p>
                  Thank you for reaching out, <strong>{formData.name}</strong>. Your native email client has been prepared with your message, and Sham will respond promptly.
                </p>
                <button
                  className="reset-form-btn"
                  onClick={() => {
                    soundManager.playClick();
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "Discussing Project", message: "" });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-heading">Send a Direct Message</h3>

                {/* Quick Subject Selector */}
                <div className="quick-subject-container">
                  <span className="quick-label">Quick Intent:</span>
                  <div className="quick-subject-chips">
                    {[
                      "Tech Lead / Full Stack Role",
                      "Discuss Project Collaboration",
                      "Schedule Technical Interview",
                      "General Inquiries"
                    ].map((subj, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`chip-btn ${formData.subject === subj ? "active" : ""}`}
                        onClick={() => handleQuickSubject(subj)}
                      >
                        {subj}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label>Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell Sham about your team, project requirements, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="submit-form-btn"
                  onClick={() => soundManager.playHover()}
                >
                  <Send size={16} />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
