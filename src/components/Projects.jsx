import React, { useState } from "react";
import { Play, ArrowUpRight, Sparkles, Filter, Code2, Layers, Cpu, Smartphone, Box, ShieldCheck } from "lucide-react";
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
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-subtitle">INNOVATION & ARCHITECTURE</span>
          <h2 className="section-main-title">
            Featured <span className="gradient-text-cyan">Engineering Projects</span>
          </h2>
          <p className="section-desc">
            Production-grade web platforms, native Android applications, and real-time computer vision systems. Test live interactive demos directly in your browser.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          <div className="filter-pill-container">
            {CATEGORIES.map((cat, i) => (
              <button
                key={i}
                className={`filter-tab ${activeFilter === cat ? "active" : ""}`}
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
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onMouseEnter={() => soundManager.playHover()}
            >
              {/* Card Thumbnail / Preview Banner */}
              <div
                className="project-thumb-area"
                onClick={() => {
                  soundManager.playClick();
                  onSelectProject(project);
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    loading="lazy"
                  />
                ) : project.id === "alloy-wheel-inspection" ? (
                  <div className="vision-thumb-card">
                    <div className="vision-wheel-graphic">
                      <div className="wheel-rim-outer">
                        <div className="wheel-hub-center"></div>
                        <div className="wheel-laser-beam"></div>
                      </div>
                    </div>
                    <div className="vision-stream-tag">
                      <Cpu size={12} className="accent-cyan" />
                      <span>LIVE OPENCV STREAM</span>
                    </div>
                  </div>
                ) : (
                  <div className="distribution-thumb-card">
                    <div className="flow-lines-graphic">
                      <Layers size={36} className="accent-purple" />
                      <span>ENTERPRISE INVOICING & DISTRIBUTION</span>
                    </div>
                  </div>
                )}

                <div className="thumb-hover-overlay">
                  <div className="launch-demo-pill">
                    <Play size={14} />
                    <span>Launch Interactive Demo</span>
                  </div>
                </div>

                <div className="card-top-tags">
                  <span className="cat-badge">{project.category}</span>
                  {project.badge && <span className="feat-badge">{project.badge}</span>}
                </div>
              </div>

              {/* Card Content */}
              <div className="project-card-content">
                <h3
                  className="project-card-title"
                  onClick={() => {
                    soundManager.playClick();
                    onSelectProject(project);
                  }}
                >
                  {project.title}
                </h3>

                <p className="project-card-summary">{project.summary}</p>

                {/* Tech Tags */}
                <div className="project-card-tech-cloud">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge more">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="project-card-actions">
                  <button
                    className="demo-action-btn primary"
                    onClick={() => {
                      soundManager.playClick();
                      onSelectProject(project);
                    }}
                  >
                    <Play size={14} />
                    <span>Interactive Demo</span>
                  </button>

                  <button
                    className="demo-action-btn details"
                    onClick={() => {
                      soundManager.playClick();
                      onSelectProject(project);
                    }}
                    title="View System Architecture"
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
