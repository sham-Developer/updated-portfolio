import React from "react";
import { Briefcase, CloudLightning, Users, Clock, Award, ShieldCheck } from "lucide-react";
import { soundManager } from "../utils/sound";

const statsList = [
  {
    number: "15+",
    title: "Client Projects Delivered",
    desc: "From client requirement discovery to successful production launch.",
    icon: Briefcase,
    color: "cyan"
  },
  {
    number: "8+",
    title: "Production Deployments",
    desc: "High-uptime web & mobile platforms on cloud & Linux servers.",
    icon: CloudLightning,
    color: "purple"
  },
  {
    number: "5+",
    title: "Developers Led & Mentored",
    desc: "Sprint planning, architectural code reviews, CI/CD workflows.",
    icon: Users,
    color: "emerald"
  },
  {
    number: "3",
    title: "Years Engineering Depth",
    desc: "Full-Stack Web (React/Node), Android (Kotlin/Java) & Vision.",
    icon: Clock,
    color: "amber"
  }
];

export default function StatsRibbon() {
  return (
    <section className="stats-ribbon-section">
      <div className="stats-container">
        <div className="stats-grid">
          {statsList.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`stat-card border-glow-${stat.color}`}
                onMouseEnter={() => soundManager.playHover()}
              >
                <div className={`stat-icon-wrapper color-${stat.color}`}>
                  <Icon size={24} />
                </div>
                <div className="stat-text-area">
                  <div className={`stat-number-display color-${stat.color}`}>
                    {stat.number}
                  </div>
                  <h3 className="stat-title">{stat.title}</h3>
                  <p className="stat-description">{stat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
