import React, { useState } from "react";
import { Search, Layout, Server, Smartphone, Database, Cloud, Wrench, Sparkles, CheckCircle2 } from "lucide-react";
import { soundManager } from "../utils/sound";
import { technicalSkills } from "../data/portfolioData";

const CATEGORY_TABS = [
  { key: "all", label: "All Skills" },
  { key: "frontend", label: "Frontend", icon: Layout },
  { key: "backend", label: "Backend & APIs", icon: Server },
  { key: "mobile", label: "Mobile / Android", icon: Smartphone },
  { key: "database", label: "Databases", icon: Database },
  { key: "cloud", label: "Cloud & CI/CD", icon: Cloud },
  { key: "tools", label: "Tools & Methodologies", icon: Wrench }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getAllSkills = () => {
    const list = [];
    Object.keys(technicalSkills).forEach((catKey) => {
      technicalSkills[catKey].skills.forEach((s) => {
        list.push({ ...s, category: technicalSkills[catKey].title });
      });
    });
    return list;
  };

  const getFilteredSkills = () => {
    let list = [];
    if (activeCategory === "all") {
      list = getAllSkills();
    } else {
      list = technicalSkills[activeCategory]?.skills.map((s) => ({
        ...s,
        category: technicalSkills[activeCategory].title
      })) || [];
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((s) => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q));
    }

    return list;
  };

  const displaySkills = getFilteredSkills();

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-subtitle">ARSENAL & PROFICIENCY</span>
          <h2 className="section-main-title">
            Technical <span className="gradient-text-purple">Skills & Competencies</span>
          </h2>
          <p className="section-desc">
            Nearly 3 years of production expertise spanning modern web frameworks, native mobile architectures, database management, and computer vision.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="skills-controls-bar">
          <div className="skills-search-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Filter by technology (e.g. React, Node, Android, MySQL, AWS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery("")}>
                ✕
              </button>
            )}
          </div>

          <div className="skills-category-tabs">
            {CATEGORY_TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  className={`skills-cat-tab ${activeCategory === tab.key ? "active" : ""}`}
                  onClick={() => {
                    soundManager.playClick();
                    setActiveCategory(tab.key);
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                >
                  {Icon && <Icon size={14} />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {displaySkills.length > 0 ? (
            displaySkills.map((skill, idx) => (
              <div
                key={idx}
                className="skill-meter-card"
                onMouseEnter={() => soundManager.playHover()}
              >
                <div className="skill-card-top">
                  <div className="skill-name-area">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category-tag">{skill.category}</span>
                  </div>
                  <div className="skill-exp-badge">
                    <span>{skill.exp}</span>
                  </div>
                </div>

                <div className="skill-progress-track">
                  <div
                    className="skill-progress-bar"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="progress-glow"></div>
                  </div>
                </div>

                <div className="skill-card-bottom">
                  <span className="proficiency-label">Proficiency</span>
                  <span className="proficiency-pct">{skill.level}%</span>
                </div>
              </div>
            ))
          ) : (
            <div className="no-skills-found">
              <p>No technologies matching "{searchQuery}"</p>
              <button
                className="reset-search-pill"
                onClick={() => setSearchQuery("")}
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
