import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, X, CornerDownLeft, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { soundManager } from "../utils/sound";
import { personalInfo, projects, experience, technicalSkills } from "../data/portfolioData";

export default function TerminalDrawer({ isOpen, onClose, onOpenProject }) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "⚡ Sham R [Interactive CLI v3.0 — Editorial Edition]" },
    { type: "system", text: "Type 'help' to review valid system commands or 'clear' to reset screen." }
  ]);
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
  • projects     - Enumerate all production & computer vision works
  • skills       - Display technical competencies & active tech stack
  • experience   - View professional leadership progression
  • contact      - Print direct coordinates (Email, Phone, Profiles)
  • download-cv  - Trigger instant Curriculum Vitae print dialog
  • clear        - Reset output console
  • whoami       - Inspect current session context`
          });
          break;

        case "projects":
          newHistory.push({
            type: "output",
            text: projects
              .map((p, i) => `[${i + 1}] ${p.title}\n    Category: ${p.category} | Stack: ${p.technologies.slice(0, 3).join(", ")}`)
              .join("\n\n")
          });
          break;

        case "skills":
          newHistory.push({
            type: "output",
            text: `Frontend: React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
Backend:  Node.js, Express.js, PHP, RESTful APIs, Django
Mobile:   Android Studio, Java, Kotlin, XML UI, Location/GPS
Database: MySQL, PostgreSQL, MS SQL Server, MongoDB
Cloud:    AWS Fundamentals, cPanel, Server Management, CI/CD
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
            text: "🎉 Opening Curriculum Vitae print & export dialog..."
          });
          break;

        case "whoami":
          newHistory.push({
            type: "output",
            text: "An engineering leader, recruiter, or collaborator evaluating Sham R's portfolio."
          });
          break;

        case "clear":
          setHistory([]);
          setInputVal("");
          return;

        default:
          newHistory.push({
            type: "error",
            text: `Command not found: "${cmd}". Enter 'help' for command list.`
          });
          break;
      }

      setHistory(newHistory);
      setInputVal("");
    }
  };

  return (
    <div className="terminal-editorial-overlay" onClick={onClose}>
      <div
        className="terminal-editorial-window"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="terminal-header-bar">
          <div className="terminal-header-left">
            <span className="dot-circle red" onClick={onClose}></span>
            <span className="dot-circle yellow"></span>
            <span className="dot-circle green"></span>
            <span className="terminal-tab-title">sham@workstation:~ (zsh)</span>
          </div>

          <button className="btn-close-term" onClick={onClose} title="Close CLI">
            <X size={15} />
          </button>
        </div>

        <div className="terminal-scroll-area">
          {history.map((line, i) => (
            <div key={i} className={`cli-line line-${line.type}`}>
              <pre>{line.text}</pre>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="terminal-bottom-input">
          <span className="terminal-prompt-tag">sham@terminal:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="Type 'help', 'projects', 'skills', 'contact'..."
            className="terminal-text-input"
            autoFocus
          />
          <button
            className="btn-submit-cmd"
            onClick={() => handleCommand({ key: "Enter" })}
          >
            <CornerDownLeft size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
