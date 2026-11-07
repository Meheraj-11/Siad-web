"use client";

import { useEffect, useRef } from "react";

/**
 * Renders the current year on the client (kept correct even if the site
 * stays live past New Year). A non-breaking space holds the layout until
 * hydration fills in the value via a direct DOM update.
 */
export default function Year() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.textContent = String(new Date().getFullYear());
  }, []);

  return <span ref={ref}>{"\u00A0"}</span>;
}
