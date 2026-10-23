import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, X, CornerDownLeft, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { soundManager } from "../utils/sound";
import { personalInfo, projects, experience, technicalSkills } from "../data/portfolioData";

export default function TerminalDrawer({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "⚡ Sham R [Interactive CLI v3.0 — Editorial Edition]" },
    { type: "system", text: "Type 'help' to review valid system commands or 'clear' to reset screen." }
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const runCommand = (cmdText) => {
    const rawCmd = cmdText.trim();
    const cmd = rawCmd.toLowerCase();
    const newHistory = [...history, { type: "user", text: `$ ${rawCmd || cmdText}` }];

    if (rawCmd) {
      setCommandHistory((prev) => [...prev, rawCmd]);
      setHistoryIndex(-1);
    }

    if (!cmd) {
      setHistory(newHistory);
      setInputVal("");
      return;
    }

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `AVAILABLE TERMINAL COMMANDS:
  • help         - Display this manual
  • projects     - Enumerate all production works & tech stacks
  • skills       - Display technical competencies & tech stack
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
            .map((p, i) => `[${i + 1}] ${p.title}\n    Category: ${p.category}\n    Technologies: ${p.technologies.join(", ")}\n    Summary: ${p.summary}`)
            .join("\n\n")
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: `FRONTEND:  React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
BACKEND:   Node.js, Express.js, PHP, RESTful APIs, Django
MOBILE:    Android Studio, Java, Kotlin, XML UI, Location/GPS
DATABASE:  MySQL, PostgreSQL, MS SQL Server, MongoDB
CLOUD:     AWS Fundamentals, cPanel, Server Management, CI/CD
VISION:    Python, OpenCV, Real-Time Image Processing`
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
          text: `Command not found: "${cmd}". Type 'help' to see valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      soundManager.playClick();
      runCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop overlay to close on clicking outside */}
      <div className="terminal-backdrop-overlay" onClick={onClose} />

      <div
        className="terminal-drawer-window"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="terminal-top-header">
          <div className="terminal-title-left">
            <TerminalIcon size={14} />
            <span>sham@workstation:~ (zsh) — [Esc to exit]</span>
          </div>

          <button className="terminal-close-btn" onClick={onClose} title="Close CLI">
            <X size={16} />
          </button>
        </div>

        <div className="terminal-output-area">
          {history.map((line, i) => (
            <div key={i} className={`terminal-line ${line.type}`}>
              {line.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="terminal-input-row">
          <span className="terminal-prompt">sham@terminal:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'projects', 'open 1', 'skills', 'clear'..."
            className="terminal-cli-input"
            autoFocus
          />
          <button
            className="btn-submit-cmd"
            onClick={() => {
              soundManager.playClick();
              runCommand(inputVal);
            }}
            title="Execute Command"
          >
            <CornerDownLeft size={14} />
          </button>
        </div>
      </div>
    </>
  );
}
