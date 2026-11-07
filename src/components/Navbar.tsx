"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Shield, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Cybersecurity", href: "#cybersecurity" },
  { label: "Contact", href: "#contact" },
] as const;

const SECTION_IDS = LINKS.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  // Solid glass background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (els.length === 0 || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-night/85 shadow-[0_10px_40px_-18px_rgba(124,58,237,0.5)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#home" aria-label="Siad Khan — back to top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-neon/40 bg-neon/10 text-neon shadow-[0_0_18px_rgba(168,85,247,0.35)] transition duration-300 group-hover:shadow-[0_0_26px_rgba(168,85,247,0.6)]">
            <Shield className="h-[18px] w-[18px]" aria-hidden="true" />
          </span>
          <span className="font-display text-sm font-bold tracking-[0.22em] text-ink">
            SIAD<span className="text-neon"> KHAN</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={`rounded-md px-3.5 py-2 text-sm transition-colors duration-200 ${
                active === link.href ? "text-lav" : "text-mute hover:text-ink"
              }`}
            >
              <span
                className={
                  active === link.href
                    ? "underline decoration-neon decoration-2 underline-offset-8"
                    : ""
                }
              >
                {link.label}
              </span>
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 inline-flex items-center gap-2 rounded-lg bg-neon px-4 py-2 text-sm font-semibold text-[#0A0712] shadow-[0_0_20px_rgba(168,85,247,0.4)] transition duration-300 hover:bg-lav hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
          >
            Let&apos;s Connect
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-ink transition duration-200 hover:border-neon/50 hover:text-lav lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="space-y-1 border-t border-white/10 bg-night/95 px-5 pb-6 pt-3 backdrop-blur-xl">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-3 text-base transition-colors duration-200 ${
                  active === link.href
                    ? "bg-neon/10 text-lav"
                    : "text-mute hover:bg-white/5 hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-neon px-4 py-3 text-base font-semibold text-[#0A0712] shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              Let&apos;s Connect
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
