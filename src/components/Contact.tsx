import { ArrowUpRight, Mail, MessageCircle, Send } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./BrandIcons";
import CopyButton from "./CopyButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const LINK_CARDS = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    value: "facebook.com/itz.me.siad",
    href: "https://www.facebook.com/itz.me.siad",
    external: true,
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    value: "@secretlifeof_siad",
    href: "https://www.instagram.com/secretlifeof_siad/",
    external: true,
  },
  {
    name: "Email",
    icon: Mail,
    value: "siadk918@gmail.com",
    href: "mailto:siadk918@gmail.com",
    external: false,
  },
  {
    name: "Telegram",
    icon: Send,
    value: "@siadx007",
    href: "https://t.me/siadx007",
    external: true,
  },
] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="04 · Contact"
          title="Let's Connect"
          subtitle="Have a question or want to connect? Feel free to reach out through my social profiles or email."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Direct links */}
          {LINK_CARDS.map((card, i) => (
            <Reveal key={card.name} delay={120 + i * 100}>
              <a
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-neon/40 hover:bg-neon/[0.05] hover:shadow-[0_12px_40px_-12px_rgba(168,85,247,0.5)]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-neon/30 bg-neon/10 text-neon transition duration-300 group-hover:shadow-[0_0_22px_rgba(168,85,247,0.55)]">
                  <card.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-neon/80">
                    {card.name}
                  </span>
                  <span className="mt-1 block truncate text-[15px] font-medium text-ink">
                    {card.value}
                  </span>
                </span>
                <ArrowUpRight
                  className="ml-auto h-5 w-5 shrink-0 text-mute transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          ))}

          {/* WhatsApp — username shown as text with copy action */}
          <Reveal delay={520}>
            <div className="flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-neon/40 hover:bg-neon/[0.05] hover:shadow-[0_12px_40px_-12px_rgba(168,85,247,0.5)]">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-neon/30 bg-neon/10 text-neon">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon/80">
                  WhatsApp
                </p>
                <p className="mt-1 truncate text-[15px] font-medium text-ink">
                  @siadsax
                </p>
                <p className="mt-1 text-xs text-mute">Find me on WhatsApp.</p>
              </div>
              <CopyButton text="@siadsax" label="Copy WhatsApp username @siadsax" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
