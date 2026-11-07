"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms */
  delay?: number;
  className?: string;
};

/**
 * Scroll-reveal wrapper. Content is always visible when JS fails or
 * prefers-reduced-motion is set; otherwise it fades up on first
 * intersection with the viewport.
 */
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver support: reveal after a tick.
    // (prefers-reduced-motion is handled in CSS — see globals.css.)
    if (typeof IntersectionObserver === "undefined") {
      const t = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(t);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal min-w-0 w-full ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
