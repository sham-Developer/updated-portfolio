import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle, Cpu, Layers, Code2, ArrowUpRight } from "lucide-react";
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
    <div className="editorial-modal-backdrop" onClick={onClose}>
      <div
        className="editorial-modal-window"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-btn-close"
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        <div className="modal-inner-scroll">
          {/* Header */}
          <div className="modal-headline-block">
            <div className="modal-category-row">
              <span className="modal-cat-tag">{project.category}</span>
              {project.badge && <span className="modal-badge-tag">{project.badge}</span>}
            </div>
            <h2 className="modal-project-title">{project.title}</h2>
            <p className="modal-project-summary">{project.summary}</p>
          </div>

          {/* Interactive Simulation or Visual Area */}
          <div className="modal-interactive-stage">
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
              <div className="irrigation-view-wrapper">
                <img
                  src={project.image || "/assets/smart_irrigation.jpg"}
                  alt={project.title}
                  className="modal-display-img"
                />
                <div className="irrigation-telemetry-strip">
                  <Cpu size={14} className="text-cobalt" />
                  <span>Android Native Canvas • Multi-Zone Water Flow Calculation</span>
                </div>
              </div>
            )}

            {project.demoType === "distribution-demo" && (
              <div className="distribution-steps-editorial">
                <div className="step-card">
                  <span className="step-num text-cobalt">01</span>
                  <h5>Centralized Stock Validation</h5>
                  <p>Real-time relational database queries validating inventory levels across distribution points.</p>
                </div>
                <div className="step-card">
                  <span className="step-num text-terracotta">02</span>
                  <h5>Tax-Compliant PDF Invoicing</h5>
                  <p>Dynamic generation of printable GST invoices and dispatch slips directly from mobile.</p>
                </div>
                <div className="step-card">
                  <span className="step-num text-forest">03</span>
                  <h5>Delivery Confirmation & Ledger Sync</h5>
                  <p>Field signature capture with automated dealer ledger accounting reconciliation.</p>
                </div>
              </div>
            )}
          </div>

          {/* Detailed Narrative Grid */}
          <div className="modal-narrative-grid">
            <div className="modal-narrative-main">
              <h4 className="modal-subheading">
                <Code2 size={16} className="text-cobalt" />
                <span>Architecture & Engineering Strategy</span>
              </h4>
              <p className="modal-detailed-desc">{project.description}</p>

              <h4 className="modal-subheading mt-24">
                <CheckCircle size={16} className="text-forest" />
                <span>Key Engineering Highlights</span>
              </h4>
              <ul className="modal-bullets-list">
                {project.keyPoints.map((pt, i) => (
                  <li key={i}>
                    <span className="bullet-dash text-cobalt">—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-sidebar-info">
              <div className="modal-tech-box">
                <h5>Implemented Stack</h5>
                <div className="tech-tags-flex">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-contact-prompt">
                <h5>Want to discuss this architecture?</h5>
                <p>Discuss the engineering tradeoffs, benchmarks, or codebase structure directly with Sham.</p>
                <a
                  href="#contact"
                  className="btn-modal-inquire"
                  onClick={() => {
                    soundManager.playClick();
                    onClose();
                  }}
                >
                  <span>Connect with Sham</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
