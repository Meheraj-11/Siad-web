import { Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    name: "SSC",
    period: "Completed in 2024",
    status: "Completed",
    active: false,
    desc: "Completed my Secondary School Certificate.",
  },
  {
    name: "HSC",
    period: "Completed in 2026",
    status: "Completed",
    active: false,
    desc: "Completed my Higher Secondary Certificate.",
  },
  {
    name: "Honours",
    period: "2026 — Present",
    status: "Currently Pursuing",
    active: true,
    desc: "Currently pursuing my Honours degree while learning about cybersecurity.",
  },
] as const;

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="02 · Education"
          title="My Educational Journey"
          subtitle="A steady path of learning — one milestone at a time."
        />

        <div className="relative mt-16">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-[15px] top-2 w-px bg-gradient-to-b from-neon/70 via-volt/40 to-transparent sm:left-[19px]"
          />

          <ol className="space-y-10">
            {STEPS.map((step, i) => (
              <li key={step.name}>
                <Reveal delay={i * 130} className="relative pl-12 sm:pl-16">
                  {/* Timeline indicator */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border sm:h-10 sm:w-10 ${
                      step.active
                        ? "border-neon bg-neon/15 shadow-[0_0_22px_rgba(168,85,247,0.6)]"
                        : "border-neon/40 bg-night"
                    }`}
                  >
                    {step.active ? (
                      <span className="relative flex h-3 w-3" aria-hidden="true">
                        <span className="anim-pulse-dot absolute inline-flex h-full w-full rounded-full bg-neon" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-lav" />
                      </span>
                    ) : (
                      <Check className="h-4 w-4 text-neon" aria-hidden="true" />
                    )}
                  </span>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:border-neon/35 hover:shadow-[0_10px_40px_-12px_rgba(168,85,247,0.4)]">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                        {step.name}
                      </h3>
                      <span
                        className={`rounded-full px-3 py-1 font-mono text-[11px] tracking-wider ${
                          step.active ? "bg-neon/15 text-lav" : "bg-white/5 text-mute"
                        }`}
                      >
                        {step.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-neon/90">{step.period}</p>
                    <p className="mt-2.5 text-sm leading-relaxed text-mute">{step.desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
