import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle, Cpu, Layers, Sparkles, Code2, ShieldAlert } from "lucide-react";
import WheelInspectionSimulator from "./WheelInspectionSimulator";
import Mockup3DSimulator from "./Mockup3DSimulator";
import CrmPipelinePreview from "./CrmPipelinePreview";
import { soundManager } from "../utils/sound";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="project-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        <div className="modal-scroll-body">
          {/* Header */}
          <div className="modal-header-section">
            <div className="modal-badge-row">
              <span className="project-category-badge">{project.category}</span>
              {project.badge && <span className="project-featured-badge">{project.badge}</span>}
            </div>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-summary">{project.summary}</p>
          </div>

          {/* Interactive Simulation or Image */}
          <div className="modal-interactive-area">
            {project.demoType === "cv-simulator" && (
              <WheelInspectionSimulator />
            )}

            {project.demoType === "3d-simulator" && (
              <Mockup3DSimulator />
            )}

            {project.demoType === "crm-pipeline" && (
              <CrmPipelinePreview />
            )}

            {project.demoType === "irrigation-demo" && (
              <div className="irrigation-mockup-wrapper">
                <img
                  src={project.image || "/assets/smart_irrigation.jpg"}
                  alt={project.title}
                  className="modal-hero-img"
                />
                <div className="irrigation-telemetry-badge">
                  <Cpu size={14} className="accent-cyan" />
                  <span>Android Native Canvas • Real-Time Valve Telemetry</span>
                </div>
              </div>
            )}

            {project.demoType === "distribution-demo" && (
              <div className="distribution-flow-card">
                <div className="flow-step">
                  <div className="flow-number">01</div>
                  <div className="flow-content">
                    <h5>Dealer Order & Inventory Check</h5>
                    <p>Real-time stock validation across centralized warehouse database.</p>
                  </div>
                </div>
                <div className="flow-step">
                  <div className="flow-number">02</div>
                  <div className="flow-content">
                    <h5>Automated PDF Invoice Generation</h5>
                    <p>Dynamic tax-compliant dispatch slips and ledger synchronization.</p>
                  </div>
                </div>
                <div className="flow-step">
                  <div className="flow-number">03</div>
                  <div className="flow-content">
                    <h5>Field Agent Delivery & Settlement</h5>
                    <p>Signed mobile delivery confirmation and live admin telemetry tracking.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Detailed Info */}
          <div className="modal-details-grid">
            <div className="modal-left-col">
              <h4 className="section-subheading">
                <Code2 size={16} className="accent-cyan" />
                Project Architecture & Implementation
              </h4>
              <p className="modal-full-desc">{project.description}</p>

              <h4 className="section-subheading mt-6">
                <CheckCircle size={16} className="accent-purple" />
                Key Engineering Highlights
              </h4>
              <ul className="modal-keypoints-list">
                {project.keyPoints.map((pt, i) => (
                  <li key={i}>
                    <span className="bullet-glow">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-right-col">
              <div className="tech-stack-panel">
                <h4>Technologies Used</h4>
                <div className="tech-tags-cloud">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-action-card">
                <h5>Want to see more details?</h5>
                <p>Discuss the architecture, live deployment, or code structure directly with Sham.</p>
                <a
                  href="#contact"
                  className="contact-sham-btn"
                  onClick={() => {
                    soundManager.playClick();
                    onClose();
                  }}
                >
                  <Sparkles size={14} />
                  <span>Contact Sham R</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
