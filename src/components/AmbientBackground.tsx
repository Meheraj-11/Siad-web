export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Subtle circuit grid */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_65%_at_50%_30%,black_20%,transparent_100%)]" />
      {/* Slowly drifting purple glows */}
      <div className="anim-glow-a absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-volt/25 blur-[140px]" />
      <div className="anim-glow-b absolute top-1/3 -left-44 h-[420px] w-[420px] rounded-full bg-neon/15 blur-[120px]" />
      <div className="anim-glow-a absolute -right-36 bottom-0 h-[460px] w-[460px] rounded-full bg-volt/20 blur-[130px]" />
    </div>
  );
}
