import React from "react";
import { soundManager } from "../utils/sound";

const skillCategories = [
  {
    index: "01 / CLIENT",
    title: "Frontend Engineering",
    desc: "Component architecture, interactive rendering, WebGL canvas, and state hydration.",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "WebGL / Canvas", "Bootstrap"]
  },
  {
    index: "02 / RUNTIME",
    title: "Backend & Systems",
    desc: "Scalable micro-services, asynchronous workers, and robust RESTful API design.",
    skills: ["Node.js", "Express.js", "PHP", "RESTful Architecture", "Python (FastAPI/Django)", "JWT Auth"]
  },
  {
    index: "03 / MOBILE",
    title: "Mobile Engineering",
    desc: "Offline-first mobile workflows, local database indexing, and sensor background work.",
    skills: ["Android Studio", "Kotlin", "Java", "Android XML UI", "SQLite / Room", "GPS Telemetry", "Flutter"]
  },
  {
    index: "04 / PERSISTENCE",
    title: "Database & Caching",
    desc: "Reliable relational schemas, low-latency queries, indexing, and data consistency.",
    skills: ["MySQL", "PostgreSQL", "MS SQL Server", "MongoDB", "Query Optimization", "Schema Indexing"]
  },
  {
    index: "05 / CLOUD",
    title: "Cloud & DevOps",
    desc: "Continuous integration release cycles, Linux environments, and zero-downtime deploys.",
    skills: ["AWS Fundamentals", "CI/CD Pipelines", "Linux Administration", "cPanel / DirectAdmin", "Vercel / Netlify"]
  },
  {
    index: "06 / LEADERSHIP",
    title: "Tooling & Pod Leadership",
    desc: "Stringent code reviews, automated inspection testing, and sprint delivery velocity.",
    skills: ["Git & GitHub", "Postman", "OpenCV (Computer Vision)", "Agile Sprint Leadership", "Code RFC Reviews"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="toolkit-ivory-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-editorial reveal-on-scroll">
          <div className="section-label-chip ivory-theme">
            <span className="chip-dot"></span>
            <span>05 / TECHNICAL TOOLKIT</span>
          </div>
          <h2 className="section-main-title ivory-theme">
            A practical toolkit for <span className="serif-accent ivory-mode">complex systems</span>.
          </h2>
          <p className="section-desc ivory-theme">
            Granular breakdown of production-tested technologies across web frontends, backend APIs, native Android mobile applications, database optimization, and computer vision.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="toolkit-six-grid">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className={`toolkit-ivory-card reveal-on-scroll delay-${(i % 3) * 100}`}
              onMouseEnter={() => soundManager.playHover()}
            >
              <div className="toolkit-card-header">
                <span className="toolkit-cat-index">{cat.index}</span>
                <h3 className="toolkit-cat-title">{cat.title}</h3>
                <p className="toolkit-cat-desc">{cat.desc}</p>
              </div>

              <div className="toolkit-chips-ribbon">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="toolkit-skill-chip">
                    {skill}
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
