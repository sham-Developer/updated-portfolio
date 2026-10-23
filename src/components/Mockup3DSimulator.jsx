import React, { useState } from "react";
import { RotateCw, Layers, Box } from "lucide-react";
import { soundManager } from "../utils/sound";

const PATTERNS = [
  { id: "hex", name: "Cobalt Grid", gradient: "radial-gradient(circle at 50% 50%, #1a44c2 15%, #ffffff 85%)" },
  { id: "circuit", name: "Terracotta Line", gradient: "linear-gradient(45deg, #c84b31 25%, #f1efe8 25%, #f1efe8 50%, #c84b31 50%, #c84b31 75%, #f1efe8 75%)" },
  { id: "aurora", name: "Bauhaus Block", gradient: "conic-gradient(from 180deg at 50% 50%, #1a44c2, #c84b31, #b45309, #1a44c2)" },
  { id: "matrix", name: "Architectural Hatch", gradient: "repeating-linear-gradient(0deg, rgba(20,23,26,0.3) 0px, transparent 1px, transparent 12px)" }
];

export default function Mockup3DSimulator() {
  const [selectedPattern, setSelectedPattern] = useState(PATTERNS[0]);
  const [scale, setScale] = useState(1);
  const [rotationX, setRotationX] = useState(15);
  const [rotationY, setRotationY] = useState(-20);
  const [activeModel, setActiveModel] = useState("headphone");

  const resetView = () => {
    soundManager.playClick();
    setRotationX(15);
    setRotationY(-20);
    setScale(1);
  };

  return (
    <div className="mockup-editorial-box">
      <div className="mockup-top-bar">
        <div className="mockup-bar-title">
          <Box size={16} className="text-cobalt" />
          <span>Interactive 3D Product & Texture Visualizer</span>
        </div>
        <div className="model-pill-options">
          <button
            className={`model-tag ${activeModel === "headphone" ? "active" : ""}`}
            onClick={() => {
              soundManager.playHover();
              setActiveModel("headphone");
            }}
          >
            Acoustic Headset
          </button>
          <button
            className={`model-tag ${activeModel === "device" ? "active" : ""}`}
            onClick={() => {
              soundManager.playHover();
              setActiveModel("device");
            }}
          >
            Mobile Slate
          </button>
          <button
            className={`model-tag ${activeModel === "card" ? "active" : ""}`}
            onClick={() => {
              soundManager.playHover();
              setActiveModel("card");
            }}
          >
            Executive Pass
          </button>
        </div>
      </div>

      <div className="mockup-stage-grid">
        <div
          className="mockup-viewport-stage"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            setRotationY(x * 45);
            setRotationX(-y * 45);
          }}
        >
          <div
            className="mockup-3d-entity"
            style={{
              transform: `perspective(800px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(${scale})`
            }}
          >
            {activeModel === "headphone" && (
              <div className="headphone-editorial-mesh">
                <div
                  className="headphone-arch"
                  style={{
                    background: selectedPattern.gradient,
                    backgroundSize: `${35 * scale}px ${35 * scale}px`
                  }}
                ></div>
                <div
                  className="earcup left"
                  style={{
                    background: selectedPattern.gradient,
                    backgroundSize: `${25 * scale}px ${25 * scale}px`
                  }}
                ></div>
                <div
                  className="earcup right"
                  style={{
                    background: selectedPattern.gradient,
                    backgroundSize: `${25 * scale}px ${25 * scale}px`
                  }}
                ></div>
              </div>
            )}

            {activeModel === "device" && (
              <div
                className="device-editorial-mesh"
                style={{
                  background: selectedPattern.gradient,
                  backgroundSize: `${40 * scale}px ${40 * scale}px`
                }}
              >
                <div className="device-screen-clean">
                  <span className="live-pill">LIVE 3D RENDER</span>
                  <h4>{selectedPattern.name}</h4>
                  <p>WebGL / CSS 3D Shader Emulation</p>
                </div>
              </div>
            )}

            {activeModel === "card" && (
              <div
                className="pass-editorial-mesh"
                style={{
                  background: selectedPattern.gradient,
                  backgroundSize: `${30 * scale}px ${30 * scale}px`
                }}
              >
                <div className="pass-chip"></div>
                <div className="pass-text-bottom">
                  <span className="pass-brand">SHAM R</span>
                  <span className="pass-sub">TEAM LEADER ARCHITECT</span>
                </div>
              </div>
            )}
          </div>

          <div className="viewport-drag-hint">
            <span>Hover across viewport to rotate along 3D axes</span>
          </div>

          <button className="btn-reset-angle" onClick={resetView} title="Reset Coordinates">
            <RotateCw size={13} />
          </button>
        </div>

        {/* Controls Sidebar */}
        <div className="mockup-sidebar-controls">
          <div className="control-block">
            <label className="block-label">
              <Layers size={13} className="text-cobalt" />
              <span>Texture Pattern Presets</span>
            </label>
            <div className="pattern-editorial-grid">
              {PATTERNS.map((pat) => (
                <button
                  key={pat.id}
                  className={`pat-select-btn ${selectedPattern.id === pat.id ? "active" : ""}`}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedPattern(pat);
                  }}
                >
                  <span className="pat-swatch" style={{ background: pat.gradient }}></span>
                  <span className="pat-text">{pat.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="control-block">
            <div className="slider-meta-line">
              <span>Pattern Scale</span>
              <span className="slider-number">{(scale * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2.0"
              step="0.05"
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="editorial-range"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
