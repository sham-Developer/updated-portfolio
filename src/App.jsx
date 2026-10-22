import React, { useState, useEffect } from "react";
import StarBackground from "./components/StarBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsRibbon from "./components/StatsRibbon";
import About from "./components/About";
import Competencies from "./components/Competencies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Leadership from "./components/Leadership";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import TerminalDrawer from "./components/TerminalDrawer";
import ResumeModal from "./components/ResumeModal";
import { soundManager } from "./utils/sound";
import "./App.css";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Global scroll progress & Intersection Observer for on-scroll reveals
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Intersection Observer for .reveal-on-scroll elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    // Keyboard shortcut (Cmd+K / Ctrl+K)
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        soundManager.playClick();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="obsidian-gold-portfolio-app">
      {/* Top Reading Progress Line */}
      <div
        className="scroll-progress-indicator"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Atmospheric Gold Hairlines Canvas */}
      <StarBackground />

      {/* Fixed Obsidian Navigation Header */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Structural Flow */}
      <main>
        {/* 01. HERO (Obsidian Black: #101010) */}
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 02. METRICS STRIP (Warm Ivory: #F5F2EB) */}
        <StatsRibbon />

        {/* 03. ABOUT — THE ENGINEERING MINDSET (Warm Ivory: #F5F2EB) */}
        <About />

        {/* 04. CORE COMPETENCIES (Deep Charcoal: #191919) */}
        <Competencies />

        {/* 05. FEATURED PROJECTS (Alternating Warm Ivory & Obsidian) */}
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 06. PROFESSIONAL EXPERIENCE TIMELINE (Obsidian Black: #101010) */}
        <Experience />

        {/* 07. TECHNICAL TOOLKIT (Warm Ivory: #F5F2EB) */}
        <Skills />

        {/* 08. ENGINEERING PRINCIPLES (Deep Charcoal: #191919) */}
        <Leadership />

        {/* 09. FOUNDATIONS & CREDENTIALS (Warm Ivory: #F5F2EB) */}
        <Education />

        {/* 10. CONTACT — NEXT COLLABORATION (Obsidian Black: #101010) */}
        <Contact />
      </main>

      {/* 11. FOOTER (Warm Ivory: #F5F2EB) */}
      <Footer
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Project Simulator & Architecture Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Interactive CLI Terminal (Ctrl+K) */}
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
