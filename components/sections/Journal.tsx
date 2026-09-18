"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const ENTRIES = [
  {
    date: "12 Sep 2026",
    title: "Closed the books, no tickets",
    summary: "Month-end ran clean for the first time this quarter. Small win, loud relief.",
    detail:
      "Moved the period-close screen to default to the open period instead of today's date. Two fewer clicks, forty-odd times a month, for everyone on the finance team. Nobody said anything about it, which is exactly how you know it worked.",
  },
  {
    date: "30 Aug 2026",
    title: "Third pauldron's the charm",
    summary: "First two attempts are now storage boxes. This one actually holds its shape.",
    detail:
      "Lesson filed away for next time: pattern it flat on paper before the foam ever meets a blade. Curved armor forgives nothing, and even less at 1am the night before a convention.",
  },
  {
    date: "14 Aug 2026",
    title: "Redesigned the request form. Again.",
    summary: "Third pass. Still not perfect, but nobody asked what a field meant this time.",
    detail:
      "Every version teaches you which field people actually read first. This time it was the amount — so that's what moved to the top. Small, boring, and it's the whole job.",
  },
];

export function Journal() {
  const [open, setOpen] = useState<boolean[]>(ENTRIES.map(() => false));

  function toggle(i: number) {
    setOpen((s) => s.map((v, idx) => (idx === i ? !v : v)));
  }

  return (
    <section id="journal" className="content-section">
      <div className="wrap">
        <Reveal as="p" className="section-kicker">
          Journal
        </Reveal>
        <Reveal as="h2" className="section-title" delayMs={60}>
          A few entries, kept mostly for myself.
        </Reveal>

        <div className="journal-list">
          {ENTRIES.map((entry, i) => (
            <Reveal as="article" className="journal-entry" key={entry.title} delayMs={i * 70}>
              <p className="journal-date">{entry.date}</p>
              <h3 className="journal-title">{entry.title}</h3>
              <p className="journal-summary">{entry.summary}</p>
              {open[i] && <p className="journal-detail">{entry.detail}</p>}
              <button type="button" className="journal-toggle" onClick={() => toggle(i)} aria-expanded={open[i]}>
                {open[i] ? "Hide entry" : "Read the rest"}
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
