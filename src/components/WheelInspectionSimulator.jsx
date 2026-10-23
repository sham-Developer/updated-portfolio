import React, { useState, useEffect, useRef, useMemo } from "react";
import { Play, Pause, AlertTriangle, CheckCircle2, XCircle, Eye, Cpu } from "lucide-react";
import { soundManager } from "../utils/sound";

export default function WheelInspectionSimulator() {
  const [isScanning, setIsScanning] = useState(true);
  const [defectMode, setDefectMode] = useState("mixed");
  const [fps] = useState(60);
  const [latency] = useState(14.8);
  const [selectedGap, setSelectedGap] = useState(1);
  const canvasRef = useRef(null);
  const angleRef = useRef(0);

  const gaps = useMemo(() => {
    if (defectMode === "clear") {
      return [
        { id: 1, status: "clear", score: 0.02, label: "Gap #1: Pass" },
        { id: 2, status: "clear", score: 0.05, label: "Gap #2: Pass" },
        { id: 3, status: "clear", score: 0.03, label: "Gap #3: Pass" },
        { id: 4, status: "clear", score: 0.04, label: "Gap #4: Pass" },
        { id: 5, status: "clear", score: 0.02, label: "Gap #5: Pass" }
      ];
    } else if (defectMode === "defect") {
      return [
        { id: 1, status: "obstructed", score: 0.94, label: "Gap #1: Heavy Debris" },
        { id: 2, status: "obstructed", score: 0.88, label: "Gap #2: Metallic Burr" },
        { id: 3, status: "partial", score: 0.61, label: "Gap #3: Partial Residue" },
        { id: 4, status: "obstructed", score: 0.82, label: "Gap #4: Surface Defect" },
        { id: 5, status: "partial", score: 0.45, label: "Gap #5: Spoke Burr" }
      ];
    } else {
      return [
        { id: 1, status: "clear", score: 0.04, label: "Gap #1: Pass" },
        { id: 2, status: "obstructed", score: 0.89, label: "Gap #2: Dust Defect" },
        { id: 3, status: "partial", score: 0.42, label: "Gap #3: Margin Dust" },
        { id: 4, status: "clear", score: 0.06, label: "Gap #4: Pass" },
        { id: 5, status: "clear", score: 0.03, label: "Gap #5: Pass" }
      ];
    }
  }, [defectMode]);

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

      // Light architectural grid
      ctx.fillStyle = "#f8f7f3";
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(20, 23, 26, 0.06)";
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
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 10;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, r - 12, 0, Math.PI * 2);
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Hub center
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.28, 0, Math.PI * 2);
      ctx.fillStyle = "#1e293b";
      ctx.fill();
      ctx.strokeStyle = "#1a44c2";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Spokes and Gaps
      const spokeCount = 5;
      for (let i = 0; i < spokeCount; i++) {
        const spokeAngle = angle + (i * Math.PI * 2) / spokeCount;
        const gap = gaps[i] || { status: "clear" };

        ctx.save();
        ctx.rotate(spokeAngle);
        ctx.beginPath();
        ctx.moveTo(r * 0.28, 0);
        ctx.lineTo(r - 10, 0);
        ctx.lineWidth = 14;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#334155";
        ctx.stroke();

        const sectorAngle = Math.PI / spokeCount;
        ctx.rotate(sectorAngle);

        ctx.beginPath();
        ctx.arc(0, 0, r * 0.65, -sectorAngle * 0.45, sectorAngle * 0.45);
        ctx.lineWidth = 18;

        let statusColor = "rgba(27, 101, 71, 0.7)";
        let strokeColor = "#1b6547";
        if (gap.status === "obstructed") {
          statusColor = "rgba(200, 75, 49, 0.85)";
          strokeColor = "#c84b31";
        } else if (gap.status === "partial") {
          statusColor = "rgba(180, 83, 9, 0.8)";
          strokeColor = "#b45309";
        }

        ctx.strokeStyle = statusColor;
        ctx.stroke();

        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(r * 0.45, -12, r * 0.38, 24);

        ctx.fillStyle = strokeColor;
        ctx.font = "bold 9px JetBrains Mono, monospace";
        ctx.fillText(`GAP_${i + 1}`, r * 0.48, -16);

        ctx.restore();
      }

      ctx.restore();

      // Camera laser scanning line
      if (isScanning) {
        const scanY = (Math.sin(Date.now() * 0.003) * 0.5 + 0.5) * h;
        ctx.beginPath();
        ctx.moveTo(0, scanY);
        ctx.lineTo(w, scanY);
        ctx.strokeStyle = "#c84b31";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // HUD readout in deep ink
      ctx.fillStyle = "#1e2329";
      ctx.font = "bold 10px JetBrains Mono, monospace";
      ctx.fillText(`CAM_FEED: 1080p @ ${fps}FPS`, 15, 22);
      ctx.fillText(`CV_ENGINE: OpenCV 4.8 (Python)`, 15, 36);
      ctx.fillText(`ROTATION_SPEED: 12 RPM`, 15, 50);

      const now = new Date();
      ctx.fillText(now.toISOString().split("T")[1].replace("Z", ""), w - 120, 22);

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
    <div className="wheel-sim-editorial-box">
      <div className="wheel-sim-top-strip">
        <div className="sim-title-left">
          <div className="sim-live-badge">
            <span className={`status-point ${isScanning ? "pulse" : "static"}`}></span>
            <span>{isScanning ? "LIVE OPENCV STREAM" : "STREAM PAUSED"}</span>
          </div>
          <h4 className="sim-main-title">Alloy Wheel Gap Quality Control Rig</h4>
        </div>

        <div className="sim-controls-right">
          <button
            className={`sim-btn-toggle ${isScanning ? "running" : ""}`}
            onClick={toggleScan}
          >
            {isScanning ? <Pause size={13} /> : <Play size={13} />}
            <span>{isScanning ? "Pause Stream" : "Resume"}</span>
          </button>

          <div className="defect-mode-selector">
            <button
              className={`defect-btn ${defectMode === "mixed" ? "active" : ""}`}
              onClick={() => handleModeChange("mixed")}
            >
              Test Rig
            </button>
            <button
              className={`defect-btn ${defectMode === "clear" ? "active" : ""}`}
              onClick={() => handleModeChange("clear")}
            >
              100% Pass
            </button>
            <button
              className={`defect-btn ${defectMode === "defect" ? "active" : ""}`}
              onClick={() => handleModeChange("defect")}
            >
              Inject Obstructions
            </button>
          </div>
        </div>
      </div>

      <div className="wheel-sim-content-grid">
        <div className="wheel-canvas-frame">
          <canvas ref={canvasRef} width={420} height={320} className="wheel-draw-canvas" />
          <div className="canvas-bracket bl-tl"></div>
          <div className="canvas-bracket bl-tr"></div>
          <div className="canvas-bracket bl-bl"></div>
          <div className="canvas-bracket bl-br"></div>
        </div>

        <div className="wheel-telemetry-dossier">
          <div className="telemetry-title-strip">
            <Cpu size={14} className="text-cobalt" />
            <span>Telemetry & Vision Matrix</span>
          </div>

          <div className="telemetry-stat-pills-row">
            <div className="telemetry-box">
              <span className="t-label">Inference Latency</span>
              <span className="t-val text-cobalt">{latency} ms</span>
            </div>
            <div className="telemetry-box">
              <span className="t-label">Frame Rate</span>
              <span className="t-val text-forest">{fps} FPS</span>
            </div>
            <div className="telemetry-box">
              <span className="t-label">Monitored Spokes</span>
              <span className="t-val text-ink">5 Spokes</span>
            </div>
          </div>

          <div className="spokes-classification-list">
            <span className="spokes-heading">Spoke Gap Real-Time Classification:</span>
            {gaps.map((g) => (
              <div
                key={g.id}
                className={`spoke-row ${g.status} ${selectedGap === g.id ? "selected" : ""}`}
                onClick={() => {
                  soundManager.playHover();
                  setSelectedGap(g.id);
                }}
              >
                <div className="spoke-data">
                  {g.status === "clear" && <CheckCircle2 size={14} className="text-forest" />}
                  {g.status === "obstructed" && <XCircle size={14} className="text-terracotta" />}
                  {g.status === "partial" && <AlertTriangle size={14} className="text-amber" />}
                  <span className="spoke-name">{g.label}</span>
                </div>
                <div className="spoke-score-wrap">
                  <span>Obstruction: {(g.score * 100).toFixed(0)}%</span>
                  <span className={`spoke-verdict ${g.status}`}>
                    {g.status === "clear" ? "PASS" : g.status === "obstructed" ? "REJECT" : "WARN"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="vision-algorithm-note">
            <Eye size={12} className="text-cobalt" />
            <span>Algorithm: Adaptive frame differencing & contour segmentation on rotating rim axis</span>
          </div>
        </div>
      </div>
    </div>
  );
}
