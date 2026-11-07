"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
};

/**
 * Lightweight canvas particle field (purple network dots).
 * - Reduced particle counts on small / touch screens.
 * - Renders nothing when prefers-reduced-motion is set (static frame only).
 * - Pauses while the tab is hidden.
 */
export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    let raf = 0;
    let w = 0;
    let h = 0;
    let parts: Particle[] = [];
    const LINK = 130;

    const make = (n: number): Particle[] =>
      Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 0.6,
        a: Math.random() * 0.32 + 0.14,
      }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.min(coarse ? 20 : 42, Math.floor((w * h) / 30000));
      parts = make(Math.max(10, target));
      if (reduced) draw(false);
    };

    const draw = (move: boolean) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        if (move) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -12) p.x = w + 12;
          if (p.x > w + 12) p.x = -12;
          if (p.y < -12) p.y = h + 12;
          if (p.y > h + 12) p.y = -12;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${p.a})`;
        ctx.fill();
      }
      if (move) {
        for (let i = 0; i < parts.length; i++) {
          for (let j = i + 1; j < parts.length; j++) {
            const a = parts[i];
            const b = parts[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < LINK * LINK) {
              const o = (1 - Math.sqrt(d2) / LINK) * 0.1;
              ctx.strokeStyle = `rgba(168, 85, 247, ${o})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }
    };

    const loop = () => {
      if (!document.hidden) draw(true);
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduced) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
    />
  );
}
