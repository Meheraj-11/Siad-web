import Image from "next/image";
import { BrainCircuit, GraduationCap, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const INFO_CARDS = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Honours Student",
    note: "Currently pursuing my Honours degree.",
  },
  {
    icon: ShieldCheck,
    label: "Interest",
    value: "Cybersecurity & Digital Safety",
    note: "Focused on ethical security practices and safer digital spaces.",
  },
  {
    icon: BrainCircuit,
    label: "Mindset",
    value: "Continuous Learning",
    note: "Always exploring, practicing, and improving my skills.",
  },
] as const;

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="01 · Who I Am"
          title="About Me"
          subtitle="Curious about technology. Focused on learning. Passionate about cybersecurity."
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Portrait */}
          <Reveal delay={100} className="mx-auto w-full max-w-[340px] lg:mx-0">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-neon/40 via-transparent to-volt/40 blur-xl"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-neon/25 bg-night-2 shadow-[0_0_50px_-10px_rgba(168,85,247,0.45)]">
                <Image
                  src="/siad.jpg"
                  alt="Portrait of Siad Khan"
                  width={1086}
                  height={1086}
                  sizes="(max-width: 1024px) 90vw, 340px"
                  className="aspect-square w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/95 via-night/40 to-transparent p-5 pt-14">
                  <p className="font-display text-lg font-bold text-ink">Siad Khan</p>
                  <p className="mt-0.5 text-sm text-lav">Cyber Security Enthusiast</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <div>
            <Reveal delay={150}>
              <p className="text-lg leading-relaxed text-ink/90">
                Hi, my name is{" "}
                <span className="font-semibold text-lav">Siad Khan</span>. I
                completed my SSC in 2024 and my HSC in 2026. I am currently
                pursuing my Honours degree while also working on and learning
                about Cyber Security. I am passionate about technology,
                cybersecurity, and continuously improving my skills.
              </p>
              <p className="mt-5 leading-relaxed text-mute">
                My primary interest is cybersecurity, ethical security
                practices, digital safety, and continuous learning.
              </p>
            </Reveal>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {INFO_CARDS.map((card, i) => (
                <Reveal key={card.label} delay={200 + i * 120}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-neon/40 hover:bg-neon/[0.06] hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.45)]">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-neon/30 bg-neon/10 text-neon transition duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                      <card.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-mute">
                      {card.label}
                    </p>
                    <p className="mt-1.5 font-display text-base font-bold leading-snug text-ink">
                      {card.value}
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-mute">
                      {card.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
