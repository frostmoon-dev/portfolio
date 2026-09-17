"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#profile", label: "About" },
  { href: "#hobbies", label: "Hobbies" },
  { href: "#work", label: "Work" },
  { href: "#guestbook", label: "Guestbook" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-primary-dark bg-bg/95 backdrop-saturate-150">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded focus:bg-primary-dark focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-[1100px] px-4 md:px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-lg text-primary-dark">
          your-name.web
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-ink hover:text-secondary-ink underline decoration-secondary/60 decoration-2 underline-offset-4 hover:decoration-secondary-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 border-2 border-primary-dark rounded-sm"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="font-display text-lg leading-none">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="md:hidden border-t-2 border-primary-dark bg-surface px-4 py-3 flex flex-col gap-3"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-base text-ink py-1"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
