import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink, ArrowUpRight, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import confetti from "canvas-confetti";
import { soundManager } from "../utils/sound";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Discussing Software Engineering / Team Lead Role",
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
      particleCount: 110,
      spread: 75,
      origin: { y: 0.6 }
    });
    setSubmitted(true);

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
        {/* Editorial Section Header */}
        <div className="section-header-centered reveal-on-scroll">
          <span className="section-label-chip">COMMUNICATION & INQUIRIES</span>
          <h2 className="section-main-title">
            Initiate a Conversation with <span className="text-cobalt">Sham R</span>
          </h2>
          <p className="section-desc">
            Available for software team leadership roles, full-stack architectural consulting, native Android systems, or strategic client software projects.
          </p>
        </div>

        <div className="contact-editorial-grid">
          {/* Left Column: Direct Coordinates Dossier */}
          <div className="contact-coordinates-card reveal-on-scroll delay-100">
            <h3 className="coords-card-title">Direct Contact Coordinates</h3>
            <p className="coords-card-intro">
              Direct access channels for recruiters, engineering leaders, and enterprise clients. Responses delivered within 24 hours.
            </p>

            <div className="coords-methods-list">
              {/* Email */}
              <div
                className="coord-item-row"
                onMouseEnter={() => soundManager.playHover()}
              >
                <div className="coord-icon-box">
                  <Mail size={18} className="text-cobalt" />
                </div>
                <div className="coord-data">
                  <span className="coord-label">Direct Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="coord-value">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  className="btn-copy-action"
                  onClick={() => copyToClipboard(personalInfo.email, "email")}
                  title="Copy email to clipboard"
                >
                  {copiedType === "email" ? (
                    <span className="copied-badge"><Check size={14} /> Copied</span>
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div
                className="coord-item-row"
                onMouseEnter={() => soundManager.playHover()}
              >
                <div className="coord-icon-box">
                  <Phone size={18} className="text-terracotta" />
                </div>
                <div className="coord-data">
                  <span className="coord-label">Direct Telephone / WhatsApp</span>
                  <a href={`tel:${personalInfo.phone}`} className="coord-value">
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  className="btn-copy-action"
                  onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                  title="Copy phone to clipboard"
                >
                  {copiedType === "phone" ? (
                    <span className="copied-badge"><Check size={14} /> Copied</span>
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="coord-item-row">
                <div className="coord-icon-box">
                  <MapPin size={18} className="text-forest" />
                </div>
                <div className="coord-data">
                  <span className="coord-label">Primary Headquarters</span>
                  <span className="coord-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="coords-social-group">
              <span className="coords-subhead">Verified Online Presence:</span>
              <div className="coords-pills-row">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="presence-pill"
                  onClick={() => soundManager.playHover()}
                >
                  <Github size={16} />
                  <span>GitHub Profile</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="presence-pill"
                  onClick={() => soundManager.playHover()}
                >
                  <Linkedin size={16} />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="availability-white-pill">
              <span className="avail-pulse-beacon-dark"></span>
              <div>
                <strong>Current Engagement Status:</strong>
                <p>Open to discussions regarding engineering leadership, team direction & high-scale software delivery.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Message Form */}
          <div className="contact-form-white-card reveal-on-scroll delay-200">
            {submitted ? (
              <div className="form-success-editorial">
                <div className="success-mark-wrap">
                  <CheckCircle2 size={44} className="text-forest" />
                </div>
                <h3>Message Initialized</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Your native email client has been opened with your inquiry pre-filled, and Sham will respond promptly.
                </p>
                <button
                  className="btn-reset-editorial-form"
                  onClick={() => {
                    soundManager.playClick();
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "Discussing Project", message: "" });
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="editorial-form">
                <h3 className="form-main-heading">Dispatch a Direct Inquiry</h3>

                {/* Quick Subject Selectors */}
                <div className="subject-selector-area">
                  <span className="subject-picker-label">Select Purpose:</span>
                  <div className="subject-pills-flex">
                    {[
                      "Engineering Leadership Role",
                      "Full-Stack Web Architecture",
                      "Android Application Delivery",
                      "Technical Project Consulting"
                    ].map((subj, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`subject-chip ${formData.subject === subj ? "active" : ""}`}
                        onClick={() => handleQuickSubject(subj)}
                      >
                        {subj}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-fields-row">
                  <div className="field-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="field-group">
                    <label>Corporate / Personal Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. marcus@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="field-group">
                  <label>Message Content *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about your project scope, technical timeline, or leadership opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-send-editorial"
                  onClick={() => soundManager.playHover()}
                >
                  <Send size={15} />
                  <span>Transmit Direct Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
