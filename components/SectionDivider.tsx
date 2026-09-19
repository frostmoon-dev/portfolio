"use client";

import { useInView } from "@/hooks/useInView";
import { MOTH_VIEWBOX, MothPaths } from "@/components/MothShape";

/**
 * The divider between sections, in Oberon's register: a moth at the centre
 * with the rot creeping across its right wing, and the stitched rule on that
 * same side coming apart to match. Left side intact, right side going — the
 * asymmetry is the whole point, so don't "fix" it by mirroring them.
 *
 * The word pairs hand off down the page and close back on themselves:
 * waking, worn, wandered, witnessed, written, waking. Keep that loop intact
 * when editing the pairs in page.tsx — it's the calamity cycle, not a typo.
 */
export function SectionDivider({ from, to }: { from: string; to: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`divider ${inView ? "is-visible" : ""}`}>
      <span className="divider-rule is-left" />
      <span className="divider-word is-from">{from}</span>
      <span className="divider-orn" aria-hidden="true">
        <svg viewBox={MOTH_VIEWBOX} fill="currentColor">
          <MothPaths antennae />
          {/* The gilt, creeping in from the right wingtip. The notch is filled
              with the page colour, so it reads as wing that is simply gone
              rather than as a mark drawn on top of it. */}
          <path d="M64 3C60.5 4.2 58.8 6.8 60.4 9C62.4 7.8 64.2 5.6 64 3Z" fill="var(--bg)" />
          <path
            d="M60.5 8.2C57 9.4 55.2 10.6 52.5 11.6C50.8 12.2 49.8 13.4 47.5 14.6"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="50.6" cy="9.8" r="1" fill="var(--gold)" />
          <circle cx="45.8" cy="12.4" r="0.8" fill="var(--gold)" />
        </svg>
      </span>
      <span className="divider-word is-to">{to}</span>
      <span className="divider-rule is-right" />
    </div>
  );
}
