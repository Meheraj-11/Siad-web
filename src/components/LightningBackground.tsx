/**
 * Subtle background lightning flashes (pure CSS — zero JavaScript).
 *
 * Two fixed, full-viewport layers sit with the other background layers
 * (fixed, z-0) and animate opacity only, so the effect is compositor-
 * friendly and costs almost nothing. Each layer carries a different
 * radial-gradient "light source" and a different, non-repeating-feeling
 * flash schedule, so the combined pattern reads as occasional, irregular
 * lightning rather than a visible loop.
 *
 * The layers render behind all content (z-0 vs content z-10) and never
 * receive pointer events. Fully disabled under prefers-reduced-motion.
 */
export default function LightningBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="lightning-flash lightning-flash-a" />
      <div className="lightning-flash lightning-flash-b" />
    </div>
  );
}
