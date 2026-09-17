"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const ENTRIES = [
  {
    date: "12 September 2026",
    dateColor: "#41656a",
    dotColor: "#96c1c5",
    title: "Month-end, survived",
    summary: "The closing ran without a single support call, which is the highest compliment this job offers.",
    detail:
      "I rewrote the posting screen so the period field defaults to the open period instead of today's date. Two clicks saved, forty-odd times a month, for eleven people. Nobody noticed. That is the point.",
  },
  {
    date: "30 August 2026",
    dateColor: "#9a5f58",
    dotColor: "#c98b86",
    title: "Foam, heat gun, regret",
    summary: "Third attempt at the pauldrons. The first two are now storage boxes.",
    detail:
      "Lesson recorded for future me: draft the pattern flat on paper before cutting anything. Curved shapes forgive nothing, and neither does EVA foam at two in the morning.",
  },
  {
    date: "14 August 2026",
    dateColor: "#5f7550",
    dotColor: "#a9ba96",
    title: "Why I keep a page like this",
    summary: "Every platform hands you the same rectangle. I wanted somewhere that looks like me.",
    detail:
      "This one has my own palette, my own type, and a shelf that only makes sense to me. It loads fast, it belongs to nobody else, and I can change it on a Tuesday evening because I feel like it.",
  },
];

export function Journal() {
  const [open, setOpen] = useState<boolean[]>(ENTRIES.map(() => false));

  function toggle(i: number) {
    setOpen((s) => s.map((v, idx) => (idx === i ? !v : v)));
  }

  return (
    <Reveal
      as="section"
      id="journal"
      className="mx-auto my-[34px] rounded-[24px] border border-burgundy/[.18] bg-cream-soft p-[clamp(28px,4vw,54px)]"
      style={{ maxWidth: 1240 }}
    >
      <div className="flex flex-wrap gap-9">
        <h2 className="sticky top-[82px] m-0 w-[140px] flex-none self-start pt-2 text-[11px] font-medium uppercase tracking-[.2em] text-teal-deep">
          Journal
        </h2>
        <div className="min-w-[280px] max-w-[740px] flex-[1_1_430px]">
          {ENTRIES.map((entry, i) => (
            <article
              key={entry.title}
              className={`relative border-l-2 border-[#e8dfd0] pl-[26px] ${
                i < ENTRIES.length - 1 ? "border-b border-dashed border-burgundy/[.32] pb-[26px]" : ""
              } ${i > 0 ? "pt-[26px]" : ""}`}
            >
              <span
                aria-hidden="true"
                className="absolute -left-[7px] h-3 w-3 rounded-full border-2 border-cream-soft"
                style={{ top: i === 0 ? 4 : 30, background: entry.dotColor }}
              />
              <p className="m-0 text-xs font-medium uppercase tracking-[.16em]" style={{ color: entry.dateColor }}>
                {entry.date}
              </p>
              <h3 className="mt-2 font-serif text-[27px] font-normal leading-[1.25] text-ink">{entry.title}</h3>
              <p className="mt-2.5 text-lg leading-[1.7] text-ink-soft">{entry.summary}</p>
              {open[i] && (
                <p className="mt-4 animate-rise text-lg leading-[1.7] text-ink-soft">{entry.detail}</p>
              )}
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={open[i]}
                className="mt-2 min-h-11 bg-transparent p-0 font-sans text-[12px] font-bold uppercase tracking-[.14em] text-burgundy transition-colors duration-150 ease-in-out hover:text-ink"
              >
                {open[i] ? "Hide entry" : "Read the rest"}
              </button>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
