import React, { useEffect, useRef } from "react";

/**
 * Editorial Mesh/Topographic Background:
 * Replaces the dark space/star canvas with a clean, bespoke, interactive
 * fluid wave/topographic contour mesh in subtle warm bone & slate.
 * Responds organically to mouse hover without feeling like a generic AI template!
 */
export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = { x: width * 0.7, y: height * 0.3, targetX: width * 0.7, targetY: height * 0.3 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let t = 0;

    const render = () => {
      t += 0.008;
      // Smooth lerp mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle interactive geometric lines & editorial flow ribbons
      const lineCount = 8;
      const step = height / (lineCount + 1);

      for (let i = 1; i <= lineCount; i++) {
        const baseY = i * step;
        ctx.beginPath();
        ctx.moveTo(0, baseY);

        for (let x = 0; x <= width; x += 30) {
          // Distance from mouse creates organic deflection
          const dx = x - mouse.x;
          const dy = baseY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseDeflect = Math.max(0, 1 - dist / 320) * 45;

          const wave = Math.sin(x * 0.003 + t + i * 0.4) * 16 + Math.cos(x * 0.006 - t * 0.5) * 8;
          const y = baseY + wave - (mouseDeflect * (dy < 0 ? -1 : 1));

          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = i % 2 === 0 ? "rgba(197, 164, 109, 0.04)" : "rgba(229, 193, 136, 0.06)";
        ctx.lineWidth = i % 3 === 0 ? 1.2 : 0.8;
        ctx.stroke();
      }

      // Draw a subtle soft architectural focus circle
      const gradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 10,
        mouse.x, mouse.y, 300
      );
      gradient.addColorStop(0, "rgba(197, 164, 109, 0.045)");
      gradient.addColorStop(0.6, "rgba(169, 135, 80, 0.015)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 300, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0
      }}
      aria-hidden="true"
    />
  );
}
