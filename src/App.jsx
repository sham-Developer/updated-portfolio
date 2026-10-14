import React, { useState, useEffect } from "react";
import StarBackground from "./components/StarBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsRibbon from "./components/StatsRibbon";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TerminalDrawer from "./components/TerminalDrawer";
import ResumeModal from "./components/ResumeModal";
import { soundManager } from "./utils/sound";
import "./App.css";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Global keyboard shortcuts (Ctrl+K or Cmd+K for Terminal)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        soundManager.playClick();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Interactive Starlight Constellation Canvas */}
      <StarBackground />

      {/* Floating Navigation Header */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <StatsRibbon />

        <About />

        <Experience />

        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <Skills />

        <Education />

        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive Project Deep Dive & Simulator Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Interactive Terminal / Command Runner (Ctrl+K) */}
      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenProject={(proj) => {
          setIsTerminalOpen(false);
          setSelectedProject(proj);
        }}
      />

      {/* Curriculum Vitae Viewer & PDF Generator Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
