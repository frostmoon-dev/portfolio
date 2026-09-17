"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { RevealStagger } from "@/components/RevealStagger";

type Kind = "anime" | "game" | "manga";
type Filter = "all" | "anime" | "games" | "manga";

const TINT: Record<Kind, string> = { anime: "#96c1c5", game: "#c98b86", manga: "#a9ba96" };
const FILTER_TO_KIND: Record<Exclude<Filter, "all">, Kind> = { anime: "anime", games: "game", manga: "manga" };

const ITEMS: { kind: Kind; title: string; note: string }[] = [
  { kind: "anime", title: "add a title", note: "one honest line about it" },
  { kind: "anime", title: "add a title", note: "one honest line about it" },
  { kind: "game", title: "add a title", note: "hours played, and whether it was worth it" },
  { kind: "game", title: "add a title", note: "hours played, and whether it was worth it" },
  { kind: "manga", title: "add a title", note: "the volume you stopped at" },
  { kind: "anime", title: "add a title", note: "one honest line about it" },
];

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "Everything" },
  { key: "anime", label: "Anime" },
  { key: "games", label: "Games" },
  { key: "manga", label: "Manga" },
];

export function Shelf() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? ITEMS : ITEMS.filter((i) => i.kind === FILTER_TO_KIND[filter]);

  return (
    <Reveal
      as="section"
      id="shelf"
      className="mx-auto my-[34px] rounded-[24px] border border-burgundy/[.18] bg-cream-soft p-[clamp(28px,4vw,54px)]"
      style={{ maxWidth: 1240 }}
    >
      <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-4.5">
        <h2 className="m-0 font-serif text-[clamp(27px,3.2vw,38px)] font-normal text-ink">The shelf</h2>
        <div className="flex flex-wrap gap-0.5">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={active}
                className="flex min-h-11 items-center rounded-full border border-burgundy/[.28] px-4 font-sans text-[12px] font-medium uppercase tracking-[.14em] transition-all duration-150 ease-in-out hover:-translate-y-1 hover:border-burgundy hover:shadow-[0_10px_18px_-12px_rgba(61,43,41,.45)]"
                style={{ background: active ? "#96c1c5" : "#fffbf4", color: active ? "#3d2b29" : "#5b4340" }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>
      <p className="m-0 mb-[30px] max-w-[64ch] text-lg leading-[1.7] text-ink-soft">
        Everything I have finished, with one honest line each. Anime, manga, and the games that ate
        whole weekends.
      </p>
      <RevealStagger
        className="grid gap-[22px]"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(168px, 1fr))" }}
      >
        {shown.map((item, i) => (
          <article
            key={`${item.title}-${i}`}
            className="rounded-2xl border border-burgundy/[.22] bg-paper p-2.5 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_18px_-12px_rgba(61,43,41,.45)]"
          >
            <span
              className="bg-dot-grid flex items-center justify-center rounded-xl text-[11px] uppercase tracking-[.1em] text-ink-muted"
              style={
                {
                  aspectRatio: "3/4",
                  "--dot-bg": "#eef5f5",
                  "--dot-line": "rgba(150,193,197,.9)",
                  "--dot-size": "11px",
                } as React.CSSProperties
              }
            >
              cover art
            </span>
            <span
              className="mt-2.5 inline-block rounded-full px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-[.16em] text-ink"
              style={{ background: TINT[item.kind] }}
            >
              {item.kind}
            </span>
            <span className="mt-1.5 block font-serif text-[19px] leading-[1.25] text-ink">{item.title}</span>
            <span className="mt-1 block text-sm leading-[1.55] text-ink-muted">{item.note}</span>
          </article>
        ))}
      </RevealStagger>
      <p className="mt-6 text-sm text-ink-muted">
        {shown.length} slots showing. Covers and titles go in by hand, same as everything else here.
      </p>
    </Reveal>
  );
}
