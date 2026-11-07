import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : "text-left"}>
      <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neon sm:text-xs">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-mute sm:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
      <div
        aria-hidden="true"
        className={`mt-6 h-px w-24 bg-gradient-to-r from-neon to-transparent ${
          centered ? "mx-auto" : ""
        }`}
      />
    </Reveal>
  );
}
