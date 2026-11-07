import { BookOpen, Scale, Shield } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CARDS = [
  {
    icon: Shield,
    tag: "Foundations",
    title: "Cybersecurity Fundamentals",
    desc: "Understanding security concepts, threats, vulnerabilities, and defensive practices.",
  },
  {
    icon: Scale,
    tag: "Ethics",
    title: "Ethical Security Awareness",
    desc: "Learning about responsible security research, permission-based testing, and ethical practices.",
  },
  {
    icon: BookOpen,
    tag: "Growth",
    title: "Continuous Learning",
    desc: "Exploring cybersecurity concepts and improving technical knowledge through learning and practice.",
  },
] as const;

export default function Cybersecurity() {
  return (
    <section id="cybersecurity" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="03 · Cybersecurity"
          title="My Cybersecurity Journey"
          subtitle="I am continuously learning about cybersecurity, digital security, and the technologies that help protect people and systems in the digital world."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Interest cards */}
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={150 + i * 130}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-neon/40 hover:shadow-[0_14px_44px_-12px_rgba(168,85,247,0.5)] sm:p-7">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-neon/10 blur-2xl transition duration-500 group-hover:bg-neon/20"
                />
                <div className="relative flex items-start gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-neon/30 bg-neon/10 text-neon transition duration-300 group-hover:shadow-[0_0_24px_rgba(168,85,247,0.55)]">
                    <card.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon/80">
                      {card.tag}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-ink sm:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-mute sm:text-[15px]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
