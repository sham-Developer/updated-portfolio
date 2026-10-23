import React from "react";
import { soundManager } from "../utils/sound";

const capabilities = [
  {
    index: "// 01",
    title: "Software Architecture & System Design",
    desc: "Clean code foundations, modular full-stack architecture, component-driven React UI, and robust RESTful APIs engineered for enterprise durability.",
    tags: ["REACT.JS", "NODE.JS", "REST APIS", "SYSTEM DESIGN"]
  },
  {
    index: "// 02",
    title: "Technical Leadership & Agile Delivery",
    desc: "Pod leadership of 5+ developers, sprint velocity management, client requirement discovery, code governance, and automated CI/CD releases.",
    tags: ["TEAM LEADERSHIP", "AGILE SPRINTS", "CODE REVIEWS", "CLIENT POC"]
  },
  {
    index: "// 03",
    title: "Mobile & Native Android Engineering",
    desc: "Native Android applications with Kotlin and Java, offline-first SQLite sync, GPS location tracking, and real-time field telemetry engines.",
    tags: ["ANDROID STUDIO", "KOTLIN", "JAVA", "OFFLINE-FIRST"]
  },
  {
    index: "// 04",
    title: "Full-Stack Web Engineering",
    desc: "High-performance React and Next.js applications, performant state management, responsive CSS architectures, and resilient backend microservices.",
    tags: ["REACT", "NEXT.JS", "EXPRESS.JS", "PHP"]
  },
  {
    index: "// 05",
    title: "Database Management & Query Optimization",
    desc: "Relational query optimization, index tuning, schema modeling across MySQL, PostgreSQL, and MS SQL Server for high-throughput dashboards.",
    tags: ["MYSQL", "POSTGRESQL", "MS SQL", "QUERY TUNING"]
  },
  {
    index: "// 06",
    title: "Computer Vision & Edge Processing",
    desc: "Real-time industrial camera feed processing, contour and gap defect analysis with OpenCV, and automated quality control operator interfaces.",
    tags: ["OPENCV", "PYTHON", "REAL-TIME CAMERA", "EDGE QA"]
  }
];

export default function Competencies() {
  return (
    <section id="expertise" className="capabilities-obsidian-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-editorial reveal-on-scroll">
          <div className="section-label-chip">
            <span className="chip-dot"></span>
            <span>02 / ENGINEERING CAPABILITIES</span>
          </div>
          <h2 className="section-main-title">
            Six disciplines. <span className="text-gold">One coherent system.</span>
          </h2>
          <p className="section-desc">
            Proven execution across web architecture, mobile client engineering, database design, computer vision, and hands-on team leadership.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="capabilities-two-grid">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className={`capability-obsidian-card reveal-on-scroll delay-${(i % 2) * 100}`}
              onMouseEnter={() => soundManager.playHover()}
            >
              <div className="capability-top-row">
                <span className="capability-index-tag">{String(i + 1).padStart(2, "0")}</span>
              </div>

              <h3 className="capability-title-heading">{cap.title}</h3>
              <p className="capability-desc-text">{cap.desc}</p>

              <div className="capability-tags-strip">
                {cap.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="capability-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
