import React, { useState } from "react";
import { Search, Layout, Server, Smartphone, Database, Cloud, Wrench, CheckCircle2 } from "lucide-react";
import { soundManager } from "../utils/sound";
import { technicalSkills } from "../data/portfolioData";

const CATEGORY_TABS = [
  { key: "all", label: "All Technologies" },
  { key: "frontend", label: "Frontend", icon: Layout },
  { key: "backend", label: "Backend & APIs", icon: Server },
  { key: "mobile", label: "Mobile / Android", icon: Smartphone },
  { key: "database", label: "Databases", icon: Database },
  { key: "cloud", label: "Cloud & CI/CD", icon: Cloud },
  { key: "tools", label: "Tools & Leadership", icon: Wrench }
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
        {/* Editorial Section Header */}
        <div className="section-header-centered reveal-on-scroll">
          <span className="section-label-chip">CAPABILITIES & ARSENAL</span>
          <h2 className="section-main-title">
            Technical Proficiency & <span className="text-cobalt">Production Stack</span>
          </h2>
          <p className="section-desc">
            Granular breakdown of production expertise across modern frontend ecosystems, enterprise APIs, native Android architectures, database optimization, and computer vision.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="skills-editorial-controls reveal-on-scroll delay-100">
          <div className="skills-search-box">
            <Search size={16} className="search-icon-dark" />
            <input
              type="text"
              placeholder="Search technology (e.g. React, Node, Android, Kotlin, MySQL, AWS, OpenCV)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-input-field"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery("")}>
                ✕
              </button>
            )}
          </div>

          <div className="skills-tabs-row">
            {CATEGORY_TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  className={`skills-tab-pill ${activeCategory === tab.key ? "active" : ""}`}
                  onClick={() => {
                    soundManager.playClick();
                    setActiveCategory(tab.key);
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                >
                  {Icon && <Icon size={13} />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-cards-grid reveal-on-scroll delay-200">
          {displaySkills.length > 0 ? (
            displaySkills.map((skill, idx) => (
              <div
                key={idx}
                className="skill-dossier-card"
                onMouseEnter={() => soundManager.playHover()}
              >
                <div className="skill-card-top-line">
                  <div>
                    <span className="skill-item-name">{skill.name}</span>
                    <span className="skill-domain-tag">{skill.category}</span>
                  </div>
                  <span className="skill-tenure-tag">{skill.exp}</span>
                </div>

                <div className="skill-meter-rail">
                  <div
                    className="skill-meter-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <div className="skill-card-footer">
                  <span className="proficiency-word">Proficiency Level</span>
                  <span className="proficiency-score">{skill.level}%</span>
                </div>
              </div>
            ))
          ) : (
            <div className="no-skills-empty-state">
              <p>No technologies found matching "{searchQuery}"</p>
              <button
                className="btn-reset-filter"
                onClick={() => setSearchQuery("")}
              >
                Reset Search Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
