import React, { useState } from "react";
import { Sliders, RotateCw, Eye, Sparkles, Layers, Box } from "lucide-react";
import { soundManager } from "../utils/sound";

const PATTERNS = [
  { id: "hex", name: "Cyber Hex", gradient: "radial-gradient(circle at 50% 50%, #00f0ff 10%, transparent 60%)" },
  { id: "circuit", name: "Tech Circuit", gradient: "linear-gradient(45deg, #a855f7 25%, transparent 25%), linear-gradient(-45deg, #00f0ff 25%, transparent 25%)" },
  { id: "aurora", name: "Neon Aurora", gradient: "conic-gradient(from 180deg at 50% 50%, #00f0ff, #8b5cf6, #ec4899, #00f0ff)" },
  { id: "matrix", name: "Matrix Grid", gradient: "repeating-linear-gradient(0deg, rgba(16,185,129,0.3) 0px, transparent 2px, transparent 15px)" }
];

export default function Mockup3DSimulator() {
  const [selectedPattern, setSelectedPattern] = useState(PATTERNS[0]);
  const [scale, setScale] = useState(1);
  const [rotationX, setRotationX] = useState(15);
  const [rotationY, setRotationY] = useState(-20);
  const [glowIntensity, setGlowIntensity] = useState(70);
  const [wireframe, setWireframe] = useState(false);
  const [activeModel, setActiveModel] = useState("headphone"); // "headphone", "device", "card"

  const handlePatternChange = (pat) => {
    soundManager.playClick();
    setSelectedPattern(pat);
  };

  const resetView = () => {
    soundManager.playClick();
    setRotationX(15);
    setRotationY(-20);
    setScale(1);
  };

  return (
    <div className="mockup-sim-container">
      <div className="mockup-sim-header">
        <div className="mockup-sim-title">
          <Box size={16} className="accent-cyan" />
          <span>Interactive 3D Pattern & Mockup Visualizer</span>
        </div>
        <div className="model-selector-pills">
          <button
            className={`model-pill ${activeModel === "headphone" ? "active" : ""}`}
            onClick={() => {
              soundManager.playHover();
              setActiveModel("headphone");
            }}
          >
            AeroMesh Headset
          </button>
          <button
            className={`model-pill ${activeModel === "device" ? "active" : ""}`}
            onClick={() => {
              soundManager.playHover();
              setActiveModel("device");
            }}
          >
            Cyber Slate
          </button>
          <button
            className={`model-pill ${activeModel === "card" ? "active" : ""}`}
            onClick={() => {
              soundManager.playHover();
              setActiveModel("card");
            }}
          >
            Holo Pass
          </button>
        </div>
      </div>

      <div className="mockup-sim-body">
        {/* 3D Stage Viewport */}
        <div
          className="mockup-viewport"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            setRotationY(x * 45);
            setRotationX(-y * 45);
          }}
        >
          <div
            className={`mockup-3d-object ${wireframe ? "wireframe-mode" : ""}`}
            style={{
              transform: `perspective(800px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(${scale})`,
              boxShadow: `0 20px 50px rgba(0, 240, 255, ${glowIntensity / 250})`
            }}
          >
            {activeModel === "headphone" && (
              <div className="mockup-headphone-mesh">
                <div
                  className="headphone-band"
                  style={{
                    background: selectedPattern.gradient,
                    backgroundSize: `${30 * scale}px ${30 * scale}px`
                  }}
                >
                  <div className="inner-mesh-glow" style={{ opacity: glowIntensity / 100 }}></div>
                </div>
                <div
                  className="headphone-cup left"
                  style={{
                    background: selectedPattern.gradient,
                    backgroundSize: `${20 * scale}px ${20 * scale}px`
                  }}
                >
                  <div className="cup-rim"></div>
                </div>
                <div
                  className="headphone-cup right"
                  style={{
                    background: selectedPattern.gradient,
                    backgroundSize: `${20 * scale}px ${20 * scale}px`
                  }}
                >
                  <div className="cup-rim"></div>
                </div>
              </div>
            )}

            {activeModel === "device" && (
              <div
                className="mockup-device-mesh"
                style={{
                  background: selectedPattern.gradient,
                  backgroundSize: `${40 * scale}px ${40 * scale}px`
                }}
              >
                <div className="device-screen-overlay">
                  <div className="device-notch"></div>
                  <div className="device-content-mock">
                    <span className="live-tag">LIVE 3D PREVIEW</span>
                    <h3>{selectedPattern.name}</h3>
                    <p>Real-Time CSS3D & WebGL Shader Emulation</p>
                  </div>
                </div>
              </div>
            )}

            {activeModel === "card" && (
              <div
                className="mockup-card-mesh"
                style={{
                  background: selectedPattern.gradient,
                  backgroundSize: `${25 * scale}px ${25 * scale}px`
                }}
              >
                <div className="card-chip"></div>
                <div className="card-info-text">
                  <span className="card-logo">SHAM.DEV</span>
                  <span className="card-sub">TEAM LEAD ARCHITECT</span>
                </div>
              </div>
            )}
          </div>

          <div className="viewport-overlay-hint">
            <span>Hover / Drag across to rotate in 3D space</span>
          </div>

          <button className="viewport-reset-btn" onClick={resetView} title="Reset Angle">
            <RotateCw size={12} />
          </button>
        </div>

        {/* Controls Sidebar */}
        <div className="mockup-controls-sidebar">
          <div className="control-section">
            <label className="section-label">
              <Layers size={13} className="accent-cyan" />
              <span>Pattern Texture Presets</span>
            </label>
            <div className="pattern-grid">
              {PATTERNS.map((pat) => (
                <button
                  key={pat.id}
                  className={`pattern-btn ${selectedPattern.id === pat.id ? "active" : ""}`}
                  onClick={() => handlePatternChange(pat)}
                >
                  <span className="pattern-swatch" style={{ background: pat.gradient }}></span>
                  <span className="pattern-label">{pat.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="control-section">
            <div className="slider-label-row">
              <span className="slider-title">Pattern Scale</span>
              <span className="slider-val">{(scale * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2.0"
              step="0.05"
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="custom-range"
            />
          </div>

          <div className="control-section">
            <div className="slider-label-row">
              <span className="slider-title">Neon Emissive Glow</span>
              <span className="slider-val">{glowIntensity}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={glowIntensity}
              onChange={(e) => setGlowIntensity(parseInt(e.target.value, 10))}
              className="custom-range"
            />
          </div>

          <div className="toggle-row">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={wireframe}
                onChange={(e) => {
                  soundManager.playClick();
                  setWireframe(e.target.checked);
                }}
              />
              <span>Render Wireframe Grid</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
