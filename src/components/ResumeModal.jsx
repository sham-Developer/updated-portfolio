import React from "react";
import { X, Download, Printer, Check, Copy, ExternalLink, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, Code } from "lucide-react";
import confetti from "canvas-confetti";
import { soundManager } from "../utils/sound";
import { personalInfo, experience, education, certifications, technicalSkills, projects } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    soundManager.playSuccess();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="resume-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-actions-bar">
          <div className="resume-modal-title">
            <span>Curriculum Vitae Preview • Sham R</span>
          </div>
          <div className="resume-btn-group">
            <button
              className="action-pill-btn primary"
              onClick={handleDownload}
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button
              className="action-pill-btn close"
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              title="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="resume-sheet" id="printable-resume">
          {/* Header */}
          <header className="resume-sheet-header">
            <div>
              <h1 className="resume-name">{personalInfo.name}</h1>
              <h2 className="resume-role">{personalInfo.title}</h2>
            </div>
            <div className="resume-contacts">
              <div><Phone size={12} /> {personalInfo.phone}</div>
              <div><Mail size={12} /> {personalInfo.email}</div>
              <div><MapPin size={12} /> {personalInfo.location}</div>
              <div><ExternalLink size={12} /> github.com/Sham-Developer</div>
            </div>
          </header>

          <hr className="resume-divider" />

          {/* About */}
          <section className="resume-sec">
            <h3 className="resume-sec-title">PROFESSIONAL SUMMARY</h3>
            <p className="resume-text">{personalInfo.aboutBio}</p>
          </section>

          {/* Experience */}
          <section className="resume-sec">
            <h3 className="resume-sec-title">WORK EXPERIENCE</h3>
            {experience.map((exp, i) => (
              <div key={i} className="resume-job-entry">
                <div className="resume-job-header">
                  <strong>{exp.company}</strong>
                  <span className="resume-period">{exp.period}</span>
                </div>
                <div className="resume-sub-header">
                  <span className="resume-sub-role">{exp.role}</span>
                  <span className="resume-loc">{exp.location}</span>
                </div>
                <ul className="resume-bullets">
                  {exp.highlights.map((h, hi) => (
                    <li key={hi}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Key Projects */}
          <section className="resume-sec">
            <h3 className="resume-sec-title">KEY PROJECTS</h3>
            {projects.slice(0, 4).map((p, i) => (
              <div key={i} className="resume-project-item">
                <div className="resume-proj-header">
                  <strong>{i + 1}. {p.title}</strong>
                  <span className="resume-proj-tech">[{p.technologies.slice(0, 4).join(", ")}]</span>
                </div>
                <p className="resume-proj-desc">{p.summary}</p>
              </div>
            ))}
          </section>

          {/* Technical Skills */}
          <section className="resume-sec">
            <h3 className="resume-sec-title">TECHNICAL SKILLS</h3>
            <div className="resume-skills-grid">
              <div>
                <strong>Frontend:</strong> React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap
              </div>
              <div>
                <strong>Backend:</strong> Node.js, Express.js, PHP, REST APIs, Django (Basic)
              </div>
              <div>
                <strong>Mobile:</strong> Android Studio, Java, Kotlin, XML, Flutter (Basic)
              </div>
              <div>
                <strong>Database:</strong> MySQL, PostgreSQL, MS SQL Server, MongoDB
              </div>
              <div>
                <strong>Cloud & Tools:</strong> AWS Fundamentals, cPanel, CI/CD, Git, Postman, OpenCV
              </div>
            </div>
          </section>

          {/* Education & Certs */}
          <section className="resume-sec">
            <h3 className="resume-sec-title">EDUCATION & CERTIFICATIONS</h3>
            <div className="resume-edu-list">
              {education.map((edu, i) => (
                <div key={i} className="resume-edu-item">
                  <strong>{edu.degree}</strong> – {edu.institution} ({edu.period})
                </div>
              ))}
              <div className="resume-edu-item">
                <strong>Full Stack Python Developer</strong> – Appin Technology
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
