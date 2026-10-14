import React, { useState } from "react";
import { ArrowUpRight, Play, Eye, Sparkles, Filter, CheckCircle2, Layers, Cpu, Box, Smartphone } from "lucide-react";
import { soundManager } from "../utils/sound";
import { projects } from "../data/portfolioData";

const CATEGORIES = ["All", "Full Stack / Web", "Mobile / Android", "Computer Vision / AI"];

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter) || (activeFilter === "Full Stack / Web" && p.category.includes("Full Stack")));

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        {/* Editorial Section Header */}
        <div className="section-header-centered reveal-on-scroll">
          <span className="section-label-chip">ARCHIVE & DELIVERABLES</span>
          <h2 className="section-main-title">
            Selected Works & <span className="text-cobalt">Live Systems</span>
          </h2>
          <p className="section-desc">
            Production-grade systems ranging from industrial computer vision inspection rigs to multi-tenant CRM suites and 3D pattern platforms. Launch live interactive simulations directly in your browser.
          </p>
        </div>

        {/* Filter Bar with bespoke pill buttons */}
        <div className="projects-filter-row reveal-on-scroll delay-100">
          <div className="filter-button-group">
            {CATEGORIES.map((cat, i) => (
              <button
                key={i}
                className={`filter-button ${activeFilter === cat ? "active" : ""}`}
                onClick={() => {
                  soundManager.playClick();
                  setActiveFilter(cat);
                }}
                onMouseEnter={() => soundManager.playHover()}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="results-counter">Showing {filteredProjects.length} Systems</span>
        </div>

        {/* Editorial Projects Grid */}
        <div className="editorial-projects-grid">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`project-editorial-card reveal-on-scroll delay-${(idx % 3) * 100}`}
            >
              {/* Media / Visual Box */}
              <div
                className="project-media-frame"
                onClick={() => {
                  soundManager.playClick();
                  onSelectProject(project);
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image-view"
                    loading="lazy"
                  />
                ) : project.id === "alloy-wheel-inspection" ? (
                  <div className="cv-editorial-preview">
                    <div className="cv-radar-circle">
                      <div className="cv-inner-wheel"></div>
                      <div className="cv-scan-laser"></div>
                    </div>
                    <div className="cv-live-badge">
                      <span className="beacon-green"></span>
                      <span>OPENCV REAL-TIME ENGINE</span>
                    </div>
                  </div>
                ) : (
                  <div className="dist-editorial-preview">
                    <Layers size={38} className="text-cobalt" />
                    <span className="dist-title-stamp">ENTERPRISE SUPPLY & INVOICING</span>
                  </div>
                )}

                {/* Floating Category Tag */}
                <div className="project-category-stamp">
                  <span>{project.category}</span>
                </div>

                {/* Action Hover Strip */}
                <div className="media-hover-strip">
                  <span className="strip-text">
                    <Play size={13} />
                    Launch Interactive Simulator
                  </span>
                </div>
              </div>

              {/* Text & Content Block */}
              <div className="project-editorial-content">
                <div className="project-header-meta">
                  <span className="project-index">0{idx + 1} / 0{projects.length}</span>
                  {project.badge && <span className="project-badge-tag">{project.badge}</span>}
                </div>

                <h3
                  className="project-heading-title"
                  onClick={() => {
                    soundManager.playClick();
                    onSelectProject(project);
                  }}
                >
                  {project.title}
                </h3>

                <p className="project-narrative-summary">
                  {project.summary}
                </p>

                {/* Tech Pills */}
                <div className="project-tech-ribbon">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-editorial-pill">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-editorial-pill more">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Bottom CTA */}
                <div className="project-editorial-actions">
                  <button
                    className="btn-interactive-demo"
                    onClick={() => {
                      soundManager.playClick();
                      onSelectProject(project);
                    }}
                  >
                    <Play size={14} />
                    <span>Run Simulation</span>
                  </button>

                  <button
                    className="btn-deep-dive"
                    onClick={() => {
                      soundManager.playClick();
                      onSelectProject(project);
                    }}
                    title="View Architectural Breakdown"
                  >
                    <span>Architecture</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
