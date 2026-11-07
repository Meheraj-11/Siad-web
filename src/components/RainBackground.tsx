"use client";

import { useEffect, useRef } from "react";

type Drop = {
  x: number;
  y: number;
  len: number;
  speed: number;
  drift: number;
  bi: number; // bucket index (shared width/alpha/color → batched strokes)
};

/**
 * Subtle animated rain layer (background only).
 * - Sits behind all content: fixed, z-0, pointer-events-none, aria-hidden.
 * - Thin semi-transparent streaks in white / soft lavender-purple.
 * - Drops are drawn in batched buckets (width × alpha × color), so each
 *   frame costs ~18 stroke calls regardless of drop count.
 * - Fewer drops on touch screens and small viewports; capped DPR.
 * - Pauses while the tab is hidden.
 * - Fully disabled when prefers-reduced-motion is set.
 */
export default function RainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Accessibility: no motion for users who asked for reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      canvas.style.display = "none";
      return;
    }

    const WIDTHS = [0.6, 0.9, 1.2];
    const ALPHAS = [0.07, 0.13, 0.21];

    const buckets: { path: Path2D | null; width: number; color: string }[] = [];
    for (const width of WIDTHS) {
      for (const alpha of ALPHAS) {
        for (const purple of [false, true]) {
          buckets.push({
            path: null,
            width,
            color: purple
              ? `rgba(196, 181, 253, ${alpha})`
              : `rgba(226, 232, 240, ${alpha * 0.85})`,
          });
        }
      }
    }
    const bucketIndex = (w: number, a: number, purple: boolean) =>
      (w * ALPHAS.length + a) * 2 + (purple ? 1 : 0);

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    let drops: Drop[] = [];

    const spawn = (aboveViewport: boolean): Drop => ({
      x: Math.random() * (w + 120) - 60,
      y: aboveViewport ? -Math.random() * h * 0.5 : Math.random() * h,
      len: 9 + Math.random() * 16,
      speed: 6.5 + Math.random() * 8.5,
      drift: -(0.6 + Math.random() * 0.5),
      bi:
        bucketIndex(
          Math.floor(Math.random() * WIDTHS.length),
          Math.floor(Math.random() * ALPHAS.length),
          Math.random() < 0.35
        ),
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = "round";
      // Density scales with area, with per-class caps for low-power devices.
      const target = Math.min(coarse ? 70 : 130, Math.floor((w * h) / 16000));
      drops = Array.from({ length: Math.max(28, target) }, () => spawn(false));
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);
      for (const b of buckets) b.path = null;
      for (const d of drops) {
        d.y += d.speed;
        d.x += d.drift;
        if (d.y - d.len > h) {
          const next = spawn(true);
          d.x = next.x;
          d.y = next.y;
          d.len = next.len;
          d.speed = next.speed;
          d.drift = next.drift;
          d.bi = next.bi;
        }
        // Streak points opposite to the velocity vector (tail behind tip).
        const inv = d.len / Math.hypot(d.speed, d.drift);
        const b = buckets[d.bi];
        if (!b.path) b.path = new Path2D();
        b.path.moveTo(d.x, d.y);
        b.path.lineTo(d.x - d.drift * inv, d.y - d.speed * inv);
      }
      for (const b of buckets) {
        if (!b.path) continue;
        ctx.strokeStyle = b.color;
        ctx.lineWidth = b.width;
        ctx.stroke(b.path);
      }
    };

    const loop = () => {
      if (!document.hidden) step();
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-90"
    />
  );
}
