"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const ENTRIES = [
  {
    date: "12 Sep 2026",
    title: "Finally credits-rolled it",
    summary: "Sixty-some hours in, and the ending actually landed. Immediately started a new save.",
    detail:
      "The good parts were the quiet parts — walking somewhere for ten minutes, talking to nobody in particular. Already missing having somewhere to be in it.",
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
    title: "Caught up, for once",
    summary: "Cleared the whole backlog in a weekend. Immediately started worrying about what's next.",
    detail:
      "There's a specific dread that comes with finally finishing a series you've been a year behind on. Now I have to wait for new episodes like everyone else.",
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
