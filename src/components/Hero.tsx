import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  LockKeyhole,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 md:pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Copy */}
        <div className="max-w-xl">
          <span
            className="anim-fade-up inline-flex items-center gap-2.5 rounded-full border border-neon/30 bg-neon/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-lav sm:text-[11px]"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="anim-pulse-dot absolute inline-flex h-full w-full rounded-full bg-neon" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lav" />
            </span>
            Cyber Security Enthusiast
          </span>

          <h1
            className="anim-fade-up mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl"
            style={{ animationDelay: "0.15s" }}
          >
            Hi, I&apos;m <span className="text-grad">Siad Khan.</span>
          </h1>

          <p
            className="anim-fade-up mt-5 font-display text-lg font-medium leading-snug text-lav sm:text-xl md:text-[1.4rem]"
            style={{ animationDelay: "0.25s" }}
          >
            Exploring Cybersecurity. Building Knowledge. Securing the Digital Future.
          </p>

          <p
            className="anim-fade-up mt-5 max-w-lg text-base leading-relaxed text-mute sm:text-lg"
            style={{ animationDelay: "0.35s" }}
          >
            Passionate about cybersecurity, technology, and continuous learning.
            Currently pursuing my Honours degree while developing my understanding
            of digital security.
          </p>

          <p
            className="anim-fade-up mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-mute"
            style={{ animationDelay: "0.45s" }}
          >
            <MapPin className="h-4 w-4 shrink-0 text-neon" aria-hidden="true" />
            Rangpur, Panchagarh, Bangladesh
          </p>

          <div
            className="anim-fade-up mt-9 flex flex-col gap-3.5 sm:flex-row"
            style={{ animationDelay: "0.55s" }}
          >
            <a href="#about" className="btn-primary">
              Explore My Profile
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="anim-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[420px] lg:max-w-none">
            {/* Atmospheric glow behind the portrait */}
            <div aria-hidden="true" className="absolute inset-8 rounded-full bg-neon/20 blur-[90px]" />

            {/* Orbit ring frame */}
            <svg
              viewBox="0 0 440 440"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
            >
              <g className="spin-slow">
                <circle cx="220" cy="220" r="196" fill="none" stroke="rgba(168,85,247,0.32)" strokeWidth="1.5" strokeDasharray="3 14" />
                <circle cx="220" cy="220" r="196" fill="none" stroke="rgba(196,181,253,0.9)" strokeWidth="3" strokeDasharray="42 910" strokeLinecap="round" />
                <circle cx="220" cy="24" r="4" fill="#C4B5FD" />
                <circle cx="416" cy="220" r="3" fill="#A855F7" />
              </g>
              <g className="spin-rev">
                <circle cx="220" cy="220" r="158" fill="none" stroke="rgba(124,58,237,0.4)" strokeWidth="1" strokeDasharray="1 9" />
                <circle cx="220" cy="220" r="158" fill="none" stroke="rgba(168,85,247,0.75)" strokeWidth="2.5" strokeDasharray="30 999" strokeLinecap="round" transform="rotate(120 220 220)" />
              </g>
            </svg>

            {/* Portrait with neon ring */}
            <div className="absolute left-1/2 top-1/2 w-[66%] -translate-x-1/2 -translate-y-1/2">
              <div className="relative aspect-square">
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-full bg-neon/30 blur-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,#7C3AED,#C4B5FD,#A855F7,#7C3AED)]" />
                <div className="absolute inset-[3px] overflow-hidden rounded-full">
                  <Image
                    src="/siad.jpg"
                    alt="Portrait of Siad Khan"
                    width={1086}
                    height={1086}
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 345px"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating glass chips */}
            <div className="anim-float absolute -left-2 top-8 sm:-left-6">
              <span className="glass-chip">
                <LockKeyhole className="h-3.5 w-3.5 text-neon" aria-hidden="true" />
                Digital Safety
              </span>
            </div>
            <div className="anim-float-slow absolute -right-2 bottom-20 sm:-right-5">
              <span className="glass-chip">
                <BookOpen className="h-3.5 w-3.5 text-neon" aria-hidden="true" />
                Continuous Learning
              </span>
            </div>
            <div className="anim-float absolute -bottom-3 left-10" style={{ animationDelay: "0.9s" }}>
              <span className="glass-chip">
                <ShieldCheck className="h-3.5 w-3.5 text-neon" aria-hidden="true" />
                Ethical Practices
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="anim-float grid h-10 w-10 place-items-center rounded-full border border-white/15 text-mute transition-colors hover:border-neon/50 hover:text-lav">
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </span>
      </a>
    </section>
  );
}
