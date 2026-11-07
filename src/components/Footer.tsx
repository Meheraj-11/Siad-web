import { ArrowUp, Mail, Shield } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./BrandIcons";
import Year from "./Year";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/itz.me.siad", icon: FacebookIcon, external: true },
  { label: "Instagram", href: "https://www.instagram.com/secretlifeof_siad/", icon: InstagramIcon, external: true },
  { label: "Email", href: "mailto:siadk918@gmail.com", icon: Mail, external: false },
] as const;

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-night-2/60 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <a href="#home" aria-label="Siad Khan — back to top" className="group inline-flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-neon/40 bg-neon/10 text-neon shadow-[0_0_18px_rgba(168,85,247,0.35)] transition duration-300 group-hover:shadow-[0_0_26px_rgba(168,85,247,0.6)]">
                <Shield className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <span className="font-display text-sm font-bold tracking-[0.22em] text-ink">
                SIAD<span className="text-neon"> KHAN</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              Designed with passion for technology and cybersecurity.
            </p>
          </div>

          <nav aria-label="Social media" className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-mute transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/60 hover:text-lav hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                <social.icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-mute">
            © <Year /> Siad Khan. All Rights Reserved.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-lav"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 transition duration-300 group-hover:border-neon/50 group-hover:shadow-[0_0_16px_rgba(168,85,247,0.4)]">
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
