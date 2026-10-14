import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { soundManager } from "../utils/sound";
import { personalInfo, projects, experience, technicalSkills } from "../data/portfolioData";

export default function TerminalDrawer({ isOpen, onClose, onOpenProject }) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "⚡ Sham R [Interactive Terminal v2.4]" },
    { type: "system", text: "Type 'help' to view available system commands or 'clear' to reset." }
  ]);
  const [isMatrix, setIsMatrix] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      soundManager.playClick();
      const cmd = inputVal.trim().toLowerCase();
      const newHistory = [...history, { type: "user", text: `$ ${inputVal}` }];

      if (!cmd) {
        setHistory(newHistory);
        setInputVal("");
        return;
      }

      switch (cmd) {
        case "help":
          newHistory.push({
            type: "output",
            text: `Available Commands:
  • help         - Display this manual
  • projects     - List all featured software & vision projects
  • skills       - Display technical skills & proficiency radar
  • experience   - View professional work history & leadership milestones
  • contact      - Print direct contact coordinates (Email, Phone, LinkedIn)
  • download-cv  - Trigger CV download with celebratory confetti
  • matrix       - Toggle matrix cyber theme
  • clear        - Wipe screen output
  • whoami       - Display current session entity`
          });
          break;

        case "projects":
          newHistory.push({
            type: "output",
            text: projects
              .map((p, i) => `[${i + 1}] ${p.title}\n    Category: ${p.category} | Tech: ${p.technologies.slice(0, 3).join(", ")}`)
              .join("\n\n")
          });
          break;

        case "skills":
          newHistory.push({
            type: "output",
            text: `Frontend: React.js, Next.js, JavaScript (ES6+), CSS3, Tailwind CSS
Backend:  Node.js, Express.js, PHP, RESTful APIs, Django
Mobile:   Android Studio, Java, Kotlin, XML UI, Flutter
Database: MySQL, PostgreSQL, MS SQL Server, MongoDB
Cloud:    AWS, CI/CD, cPanel, Server Management
Vision:   Python, OpenCV, Real-Time Image Processing`
          });
          break;

        case "experience":
          newHistory.push({
            type: "output",
            text: experience
              .map((exp) => `• ${exp.role} @ ${exp.company} (${exp.period})\n  Highlights: ${exp.highlights[0]}`)
              .join("\n\n")
          });
          break;

        case "contact":
          newHistory.push({
            type: "output",
            text: `Name:      ${personalInfo.name}
Role:      ${personalInfo.title}
Email:     ${personalInfo.email}
Phone:     ${personalInfo.phone}
Location:  ${personalInfo.location}
GitHub:    ${personalInfo.github}
LinkedIn:  ${personalInfo.linkedin}`
          });
          break;

        case "download-cv":
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
          soundManager.playSuccess();
          newHistory.push({
            type: "output",
            text: "🎉 Downloading Sham R's CV... Opening resume dialog!"
          });
          break;

        case "matrix":
          setIsMatrix(!isMatrix);
          newHistory.push({
            type: "output",
            text: isMatrix ? "Matrix mode deactivated." : "⚡ MATRIX MODE ACTIVATED: Follow the white rabbit..."
          });
          break;

        case "whoami":
          newHistory.push({
            type: "output",
            text: "A forward-thinking recruiter or technology leader evaluating Sham R's portfolio!"
          });
          break;

        case "clear":
          setHistory([]);
          setInputVal("");
          return;

        default:
          newHistory.push({
            type: "error",
            text: `Command not recognized: "${cmd}". Type 'help' for valid commands.`
          });
          break;
      }

      setHistory(newHistory);
      setInputVal("");
    }
  };

  return (
    <div className="terminal-drawer-overlay" onClick={onClose}>
      <div
        className={`terminal-drawer-panel ${isMatrix ? "matrix-theme" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="terminal-bar">
          <div className="terminal-dots">
            <span className="dot red" onClick={onClose}></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <div className="terminal-title">
            <TerminalIcon size={14} className="accent-cyan" />
            <span>sham@developer-terminal:~ (bash)</span>
          </div>

          <div className="terminal-actions">
            <button
              className="term-icon-btn"
              onClick={() => setIsMatrix(!isMatrix)}
              title="Toggle Matrix Theme"
            >
              <Sparkles size={14} />
            </button>
            <button className="term-icon-btn" onClick={onClose} title="Close Terminal">
              <X size={15} />
            </button>
          </div>
        </div>

        <div className="terminal-content">
          {history.map((line, i) => (
            <div key={i} className={`terminal-line line-${line.type}`}>
              <pre>{line.text}</pre>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="terminal-input-bar">
          <span className="terminal-prompt">sham@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="Type 'help', 'projects', 'skills', 'contact'..."
            className="terminal-input"
            autoFocus
          />
          <button
            className="terminal-submit-btn"
            onClick={() => handleCommand({ key: "Enter" })}
          >
            <CornerDownLeft size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
