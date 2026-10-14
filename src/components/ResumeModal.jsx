import React from "react";
import { X, Printer, Phone, Mail, MapPin, ExternalLink, Briefcase, GraduationCap, Code } from "lucide-react";
import confetti from "canvas-confetti";
import { soundManager } from "../utils/sound";
import { personalInfo, experience, education, technicalSkills, projects } from "../data/portfolioData";

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
    <div className="editorial-modal-backdrop" onClick={onClose}>
      <div className="resume-editorial-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="resume-actions-bar">
          <div className="resume-dialog-title">
            <span>Curriculum Vitae • Sham R (Software Team Leader)</span>
          </div>
          <div className="resume-actions-group">
            <button
              className="btn-print-cv"
              onClick={handleDownload}
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button
              className="btn-close-cv"
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

        <div className="resume-document-sheet" id="printable-resume">
          {/* Header */}
          <header className="resume-doc-header">
            <div>
              <h1 className="resume-name">{personalInfo.name}</h1>
              <h2 className="resume-role-tag">{personalInfo.title}</h2>
            </div>
            <div className="resume-coords-block">
              <div><Phone size={12} /> {personalInfo.phone}</div>
              <div><Mail size={12} /> {personalInfo.email}</div>
              <div><MapPin size={12} /> {personalInfo.location}</div>
              <div><ExternalLink size={12} /> github.com/Sham-Developer</div>
            </div>
          </header>

          <hr className="resume-line-rule" />

          {/* About */}
          <section className="resume-section-item">
            <h3 className="resume-sec-heading">PROFESSIONAL SUMMARY</h3>
            <p className="resume-paragraph">{personalInfo.aboutBio}</p>
          </section>

          {/* Experience */}
          <section className="resume-section-item">
            <h3 className="resume-sec-heading">WORK EXPERIENCE</h3>
            {experience.map((exp, i) => (
              <div key={i} className="resume-work-block">
                <div className="resume-work-top">
                  <strong>{exp.company}</strong>
                  <span className="resume-tenure text-cobalt">{exp.period}</span>
                </div>
                <div className="resume-work-sub">
                  <span className="work-role">{exp.role}</span>
                  <span className="work-loc">{exp.location}</span>
                </div>
                <ul className="resume-bullet-points">
                  {exp.highlights.map((h, hi) => (
                    <li key={hi}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Key Projects */}
          <section className="resume-section-item">
            <h3 className="resume-sec-heading">KEY PRODUCTION PROJECTS</h3>
            {projects.slice(0, 4).map((p, i) => (
              <div key={i} className="resume-project-block">
                <div className="resume-proj-line">
                  <strong>{i + 1}. {p.title}</strong>
                  <span className="resume-proj-tags">[{p.technologies.slice(0, 4).join(", ")}]</span>
                </div>
                <p className="resume-proj-summary">{p.summary}</p>
              </div>
            ))}
          </section>

          {/* Technical Skills */}
          <section className="resume-section-item">
            <h3 className="resume-sec-heading">TECHNICAL SKILLS</h3>
            <div className="resume-skills-two-col">
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
          <section className="resume-section-item">
            <h3 className="resume-sec-heading">EDUCATION & CERTIFICATIONS</h3>
            <div className="resume-edu-stack">
              {education.map((edu, i) => (
                <div key={i} className="edu-entry">
                  <strong>{edu.degree}</strong> – {edu.institution} ({edu.period})
                </div>
              ))}
              <div className="edu-entry">
                <strong>Full Stack Python Developer</strong> – Appin Technology
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
