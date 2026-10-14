import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, AlertTriangle, CheckCircle2, XCircle, RefreshCw, Eye, ShieldAlert, Cpu } from "lucide-react";
import { soundManager } from "../utils/sound";

export default function WheelInspectionSimulator() {
  const [isScanning, setIsScanning] = useState(true);
  const [defectMode, setDefectMode] = useState("mixed"); // "clear", "defect", "mixed"
  const [fps, setFps] = useState(60);
  const [latency, setLatency] = useState(14.8);
  const [selectedGap, setSelectedGap] = useState(1);
  const canvasRef = useRef(null);
  const angleRef = useRef(0);

  // Simulated gap metrics
  const [gaps, setGaps] = useState([
    { id: 1, status: "clear", score: 0.04, label: "Gap #1: Clean" },
    { id: 2, status: "obstructed", score: 0.89, label: "Gap #2: Dust Blockage" },
    { id: 3, status: "partial", score: 0.42, label: "Gap #3: Edge Obstruction" },
    { id: 4, status: "clear", score: 0.06, label: "Gap #4: Clean" },
    { id: 5, status: "clear", score: 0.02, label: "Gap #5: Clean" }
  ]);

  useEffect(() => {
    // Update gap statuses based on defectMode
    if (defectMode === "clear") {
      setGaps([
        { id: 1, status: "clear", score: 0.02, label: "Gap #1: Pass" },
        { id: 2, status: "clear", score: 0.05, label: "Gap #2: Pass" },
        { id: 3, status: "clear", score: 0.03, label: "Gap #3: Pass" },
        { id: 4, status: "clear", score: 0.04, label: "Gap #4: Pass" },
        { id: 5, status: "clear", score: 0.02, label: "Gap #5: Pass" }
      ]);
    } else if (defectMode === "defect") {
      setGaps([
        { id: 1, status: "obstructed", score: 0.94, label: "Gap #1: Heavy Debris" },
        { id: 2, status: "obstructed", score: 0.88, label: "Gap #2: Metallic Burr" },
        { id: 3, status: "partial", score: 0.61, label: "Gap #3: Partial Residue" },
        { id: 4, status: "obstructed", score: 0.82, label: "Gap #4: Surface Defect" },
        { id: 5, status: "partial", score: 0.45, label: "Gap #5: Spoke Burr" }
      ]);
    } else {
      setGaps([
        { id: 1, status: "clear", score: 0.04, label: "Gap #1: Pass" },
        { id: 2, status: "obstructed", score: 0.89, label: "Gap #2: Dust Defect" },
        { id: 3, status: "partial", score: 0.42, label: "Gap #3: Margin Dust" },
        { id: 4, status: "clear", score: 0.06, label: "Gap #4: Pass" },
        { id: 5, status: "clear", score: 0.03, label: "Gap #5: Pass" }
      ]);
    }
  }, [defectMode]);

  // Canvas animation of rotating wheel and computer vision bounding overlay
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const render = () => {
      if (isScanning) {
        angleRef.current += 0.012;
      }
      const angle = angleRef.current;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const r = Math.min(w, h) * 0.38;

      ctx.clearRect(0, 0, w, h);

      // Background grid (industrial camera grid)
      ctx.strokeStyle = "rgba(0, 240, 255, 0.06)";
      ctx.lineWidth = 1;
      const step = 20;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Outer rim
      ctx.save();
      ctx.translate(cx, cy);

      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(148, 163, 184, 0.4)";
      ctx.lineWidth = 10;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, r - 12, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(71, 85, 105, 0.6)";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Hub center
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.28, 0, Math.PI * 2);
      ctx.fillStyle = "#1e293b";
      ctx.fill();
      ctx.strokeStyle = "#00f0ff";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw 5 rotating spokes and gaps
      const spokeCount = 5;
      for (let i = 0; i < spokeCount; i++) {
        const spokeAngle = angle + (i * Math.PI * 2) / spokeCount;
        const gap = gaps[i] || { status: "clear" };

        // Spoke line
        ctx.save();
        ctx.rotate(spokeAngle);
        ctx.beginPath();
        ctx.moveTo(r * 0.28, 0);
        ctx.lineTo(r - 10, 0);
        ctx.lineWidth = 14;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#475569";
        ctx.stroke();

        // High-tech spoke inner reflection
        ctx.beginPath();
        ctx.moveTo(r * 0.32, 0);
        ctx.lineTo(r - 14, 0);
        ctx.lineWidth = 4;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
        ctx.stroke();

        // Gap detection sector overlay
        const sectorAngle = Math.PI / spokeCount;
        ctx.rotate(sectorAngle);

        ctx.beginPath();
        ctx.arc(0, 0, r * 0.65, -sectorAngle * 0.45, sectorAngle * 0.45);
        ctx.lineWidth = 18;

        let statusColor = "rgba(16, 185, 129, 0.6)"; // green
        let strokeColor = "#10b981";
        if (gap.status === "obstructed") {
          statusColor = "rgba(239, 68, 68, 0.75)"; // red
          strokeColor = "#ef4444";
        } else if (gap.status === "partial") {
          statusColor = "rgba(234, 179, 8, 0.7)"; // yellow
          strokeColor = "#eab308";
        }

        ctx.strokeStyle = statusColor;
        ctx.stroke();

        // OpenCV Bounding Box visualization
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(r * 0.45, -12, r * 0.38, 24);

        // Gap ID marker
        ctx.fillStyle = strokeColor;
        ctx.font = "bold 9px JetBrains Mono, monospace";
        ctx.fillText(`GAP_${i + 1}`, r * 0.48, -16);

        ctx.restore();
      }

      ctx.restore();

      // Camera laser scanning line
      if (isScanning) {
        const scanY = (Math.sin(Date.now() * 0.003) * 0.5 + 0.5) * h;
        const grad = ctx.createLinearGradient(0, scanY - 8, 0, scanY + 8);
        grad.addColorStop(0, "rgba(0, 240, 255, 0)");
        grad.addColorStop(0.5, "rgba(0, 240, 255, 0.65)");
        grad.addColorStop(1, "rgba(0, 240, 255, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, scanY - 8, w, 16);

        ctx.beginPath();
        ctx.moveTo(0, scanY);
        ctx.lineTo(w, scanY);
        ctx.strokeStyle = "#00f0ff";
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00f0ff";
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Live camera frame metadata HUD
      ctx.fillStyle = "rgba(0, 240, 255, 0.85)";
      ctx.font = "10px JetBrains Mono, monospace";
      ctx.fillText(`CAM_FEED: 1080p @ ${fps}FPS`, 15, 22);
      ctx.fillText(`CV_ENGINE: OpenCV 4.8.x`, 15, 36);
      ctx.fillText(`INSPECTION_MODE: REAL_TIME`, 15, 50);

      // Live timestamp
      const now = new Date();
      ctx.fillText(now.toISOString().split("T")[1].replace("Z", ""), w - 130, 22);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isScanning, defectMode, gaps, fps]);

  const toggleScan = () => {
    soundManager.playClick();
    setIsScanning(!isScanning);
  };

  const handleModeChange = (mode) => {
    soundManager.playClick();
    setDefectMode(mode);
  };

  return (
    <div className="wheel-simulator-container">
      <div className="wheel-sim-header">
        <div className="wheel-sim-title-group">
          <div className="wheel-status-indicator">
            <span className={`status-dot ${isScanning ? "active-pulse" : "paused"}`}></span>
            <span className="status-text">{isScanning ? "LIVE CAMERA SCAN ACTIVE" : "STREAM PAUSED"}</span>
          </div>
          <h4>OpenCV Real-Time Alloy Wheel Gap Inspector</h4>
        </div>

        <div className="wheel-sim-controls">
          <button
            className={`sim-btn ${isScanning ? "sim-btn-active" : ""}`}
            onClick={toggleScan}
            title={isScanning ? "Pause Inspection" : "Start Inspection"}
          >
            {isScanning ? <Pause size={14} /> : <Play size={14} />}
            <span>{isScanning ? "Pause Feed" : "Resume"}</span>
          </button>

          <div className="defect-selector-group">
            <button
              className={`filter-pill-btn ${defectMode === "mixed" ? "active" : ""}`}
              onClick={() => handleModeChange("mixed")}
            >
              Test Scene
            </button>
            <button
              className={`filter-pill-btn ${defectMode === "clear" ? "active" : ""}`}
              onClick={() => handleModeChange("clear")}
            >
              All Clear
            </button>
            <button
              className={`filter-pill-btn ${defectMode === "defect" ? "active" : ""}`}
              onClick={() => handleModeChange("defect")}
            >
              Inject Defects
            </button>
          </div>
        </div>
      </div>

      <div className="wheel-sim-body">
        <div className="wheel-canvas-wrapper">
          <canvas ref={canvasRef} width={420} height={320} className="wheel-canvas" />
          <div className="canvas-crosshair top-left"></div>
          <div className="canvas-crosshair top-right"></div>
          <div className="canvas-crosshair bottom-left"></div>
          <div className="canvas-crosshair bottom-right"></div>
        </div>

        <div className="wheel-telemetry-panel">
          <div className="telemetry-header">
            <Cpu size={14} className="accent-cyan" />
            <span>Telemetry & Vision Matrix</span>
          </div>

          <div className="telemetry-stats-row">
            <div className="sim-stat-box">
              <span className="stat-label">Inference Latency</span>
              <span className="stat-val accent-cyan">{latency} ms</span>
            </div>
            <div className="sim-stat-box">
              <span className="stat-label">Frame Rate</span>
              <span className="stat-val accent-purple">{fps} FPS</span>
            </div>
            <div className="sim-stat-box">
              <span className="stat-label">Gaps Tracked</span>
              <span className="stat-val">5 Spokes</span>
            </div>
          </div>

          <div className="gap-classification-list">
            <span className="list-heading">Spoke Gap Real-Time Classification:</span>
            {gaps.map((g) => (
              <div
                key={g.id}
                className={`gap-row ${g.status} ${selectedGap === g.id ? "selected" : ""}`}
                onClick={() => {
                  soundManager.playHover();
                  setSelectedGap(g.id);
                }}
              >
                <div className="gap-info">
                  {g.status === "clear" && <CheckCircle2 size={14} className="status-icon green" />}
                  {g.status === "obstructed" && <XCircle size={14} className="status-icon red" />}
                  {g.status === "partial" && <AlertTriangle size={14} className="status-icon yellow" />}
                  <span className="gap-name">{g.label}</span>
                </div>
                <div className="gap-score-badge">
                  <span>Obstruction: {(g.score * 100).toFixed(0)}%</span>
                  <span className={`status-tag ${g.status}`}>
                    {g.status === "clear" ? "PASS" : g.status === "obstructed" ? "REJECT" : "WARN"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="vision-logic-callout">
            <Eye size={12} className="accent-cyan" />
            <span>Algorithm: Adaptive frame difference & thresholding on rotating wheel axis</span>
          </div>
        </div>
      </div>
    </div>
  );
}
