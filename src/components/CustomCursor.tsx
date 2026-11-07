"use client";

import { useEffect, useRef } from "react";

/**
 * Restrained cursor glow follower (desktop, fine pointers only).
 * The native cursor stays visible — this is purely decorative,
 * so it is never an accessibility barrier. Disabled for
 * prefers-reduced-motion and touch devices.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!fine || reduced || !dot || !ring) return;

    dot.style.opacity = "1";
    ring.style.opacity = "1";

    let mx = -200;
    let my = -200;
    let rx = -200;
    let ry = -200;
    let started = false;
    let hovering = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!started) {
        rx = mx;
        ry = my;
        started = true;
      }
      const t = e.target as HTMLElement | null;
      hovering = !!(t && typeof t.closest === "function" && t.closest("a, button, [role='button'], input, textarea, select, summary"));
    };

    const tick = () => {
      dot.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      const scale = hovering ? 1.55 : 1;
      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
  }, []);

  return (
    <div aria-hidden="true" className="cursor-layer">
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
