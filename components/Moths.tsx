"use client";

import { MOTH_VIEWBOX, MothPaths } from "@/components/MothShape";

/**
 * Oberon's moths: a handful of silhouettes drifting over the whole page.
 *
 * Deliberately faint — they read as something fluttering in front of the
 * dream rather than as decoration, and they sit above the sections (which
 * paint opaque backgrounds) so they can't be buried. Pointer-events are off
 * and the layer is aria-hidden, so nothing here is in anyone's way. The whole
 * layer is dropped for prefers-reduced-motion rather than frozen in place.
 */
const MOTHS = [
  { left: "8%", delay: "0s", duration: "41s", scale: 1, drift: "26px" },
  { left: "23%", delay: "-13s", duration: "53s", scale: 0.66, drift: "-34px" },
  { left: "47%", delay: "-31s", duration: "47s", scale: 0.82, drift: "40px" },
  { left: "68%", delay: "-7s", duration: "58s", scale: 0.55, drift: "-22px" },
  { left: "84%", delay: "-24s", duration: "44s", scale: 0.93, drift: "30px" },
  { left: "93%", delay: "-39s", duration: "62s", scale: 0.62, drift: "-28px" },
];

export function Moths() {
  return (
    <div className="moths" aria-hidden="true">
      {MOTHS.map((m, i) => (
        <span
          key={i}
          className="moth"
          style={
            {
              left: m.left,
              animationDelay: m.delay,
              animationDuration: m.duration,
              "--moth-scale": m.scale,
              "--moth-drift": m.drift,
            } as React.CSSProperties
          }
        >
          <svg viewBox={MOTH_VIEWBOX} fill="currentColor" aria-hidden="true">
            <MothPaths />
          </svg>
        </span>
      ))}
    </div>
  );
}
