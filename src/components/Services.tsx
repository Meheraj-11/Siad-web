import {
  ArrowRight,
  Info,
  KeyRound,
  ShieldAlert,
  Trash2,
  Unlock,
} from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    icon: ShieldAlert,
    tag: "Service 01",
    title: "Suspended Account Recovery",
    desc: "Guidance for reviewing suspended Facebook and Instagram accounts and following the appropriate official appeal and recovery procedures.",
  },
  {
    icon: KeyRound,
    tag: "Service 02",
    title: "Disabled Account Recovery",
    desc: "Assistance with understanding disabled-account notifications and submitting eligible recovery or appeal requests through official platform channels.",
  },
  {
    icon: Trash2,
    tag: "Service 03",
    title: "Account Removal & Deactivation",
    desc: "Guidance on official account deletion, deactivation, and reporting procedures for eligible situations. Unauthorized removal of another person's account is not offered.",
  },
  {
    icon: Unlock,
    tag: "Service 04",
    title: "Locked Account Recovery",
    desc: "Assistance with official account-unlock procedures, identity verification, password recovery, and account-security checks.",
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="04 · Services"
          title="My Services"
          subtitle="Social Media Account Recovery & Security Assistance"
        />

        <Reveal delay={100}>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-mute sm:text-lg">
            I provide guidance and assistance with social media account access
            issues, recovery procedures, and account security through official
            platform channels.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Service cards */}
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={150 + i * 130}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-neon/40 hover:shadow-[0_14px_44px_-12px_rgba(168,85,247,0.5)]">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-neon/10 blur-2xl transition duration-500 group-hover:bg-neon/20"
                />
                <div className="relative flex h-full flex-col">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-neon/30 bg-neon/10 text-neon transition duration-300 group-hover:shadow-[0_0_24px_rgba(168,85,247,0.55)]">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-neon/80">
                    {service.tag}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mute">
                    {service.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon/80">
              Supported Platforms
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="glass-chip">
                <FacebookIcon className="h-4 w-4 text-neon" aria-hidden="true" />
                Facebook
              </span>
              <span className="glass-chip">
                <InstagramIcon className="h-4 w-4 text-neon" aria-hidden="true" />
                Instagram
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-10 flex justify-center">
            <a href="#contact" className="btn-primary">
              Contact for Assistance
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <p className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2 text-center text-xs leading-relaxed text-mute/80">
            <Info
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neon/60"
              aria-hidden="true"
            />
            Service availability depends on account ownership, platform
            eligibility, and official recovery procedures. Recovery cannot be
            guaranteed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
