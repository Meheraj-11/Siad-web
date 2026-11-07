"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

type CopyButtonProps = {
  text: string;
  label: string;
};

/**
 * Copies `text` to the clipboard with a fallback for older browsers and
 * announces success / failure to screen readers.
 */
export default function CopyButton({ text, label }: CopyButtonProps) {
  const [state, setState] = useState<"idle" | "ok" | "err">("idle");
  const timer = useRef(0);

  const copy = async () => {
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        ok = true;
      }
    } catch {
      ok = false;
    }
    if (!ok) {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    setState(ok ? "ok" : "err");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2200);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-neon/35 bg-neon/10 px-3.5 py-2 text-sm font-medium text-lav transition duration-200 hover:border-neon/70 hover:bg-neon/20 hover:shadow-[0_0_18px_rgba(168,85,247,0.35)] active:scale-[0.97]"
    >
      {state === "ok" ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
      <span>
        {state === "ok" ? "Copied!" : state === "err" ? "Copy failed" : "Copy"}
      </span>
      <span className="sr-only" aria-live="polite">
        {state === "ok" ? "Copied to clipboard" : state === "err" ? "Copy failed" : ""}
      </span>
    </button>
  );
}
