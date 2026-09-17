"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { RevealStagger } from "@/components/RevealStagger";
import { useDragScroll } from "@/hooks/useDragScroll";

const PHOTO_TINTS = [
  { bg: "#fffbf4", border: "rgba(105,74,71,.32)" },
  { bg: "#eef5f5", border: "rgba(65,101,106,.38)" },
  { bg: "#f8e8e4", border: "rgba(154,95,88,.38)" },
  { bg: "#eff3e8", border: "rgba(95,117,80,.38)" },
  { bg: "#fffbf4", border: "rgba(105,74,71,.32)" },
  { bg: "#eef5f5", border: "rgba(65,101,106,.38)" },
];

const COSTUMES = ["costume 01", "costume 02", "costume 03"];

export function Pictures() {
  const drag = useDragScroll<HTMLDivElement>();
  const [dragLabel, setDragLabel] = useState({ visible: false, x: 0, y: 0 });

  function onStripPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    drag.onPointerMove(e);
    const r = e.currentTarget.getBoundingClientRect();
    const overflowing = e.currentTarget.scrollWidth > e.currentTarget.clientWidth + 8;
    setDragLabel({ visible: overflowing, x: e.clientX - r.left - 24, y: e.clientY - r.top - 14 });
  }

  return (
    <Reveal as="section" id="pictures" className="border-t border-teal bg-cream-soft py-[66px]">
      <div className="mx-auto max-w-[1240px] px-[26px]">
        <div className="mb-8 flex flex-wrap gap-9">
          <h2 className="sticky top-[82px] m-0 w-[140px] flex-none self-start pt-2.5 text-[11px] font-medium uppercase tracking-[.2em] text-sage-deep">
            Pictures
          </h2>
          <p className="m-0 min-w-[280px] max-w-[44ch] flex-[1_1_430px] font-serif text-[clamp(21px,2.3vw,27px)] leading-[1.42] text-ink">
            Mostly quiet things: shop fronts on the way home, food before anyone is allowed to eat
            it, friends squinting into the sun.
          </p>
        </div>

        <div className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-[3] rounded-full bg-[#31221f] px-3.5 py-[7px] text-[10px] font-bold uppercase tracking-[.2em] text-cream transition-opacity duration-200 ease-in-out"
            style={{ opacity: dragLabel.visible ? 1 : 0, transform: `translate(${dragLabel.x}px, ${dragLabel.y}px)` }}
          >
            drag
          </span>
          <div
            ref={drag.ref}
            onPointerDown={drag.onPointerDown}
            onPointerMove={onStripPointerMove}
            onPointerUp={drag.onPointerUp}
            onPointerLeave={() => {
              drag.onPointerLeave();
              setDragLabel((s) => ({ ...s, visible: false }));
            }}
            onClickCapture={drag.onClickCapture}
            className="flex cursor-grab gap-4 overflow-x-auto pb-3"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
          >
            {PHOTO_TINTS.map((tint, i) => (
              <div
                key={i}
                className="flex aspect-square w-[clamp(178px,22vw,240px)] flex-none items-center justify-center rounded-2xl border border-dashed text-[11px] uppercase tracking-[.12em] text-ink-muted"
                style={{ background: tint.bg, borderColor: tint.border, scrollSnapAlign: "start" }}
              >
                photo {String(i + 1).padStart(2, "0")}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[58px] flex flex-wrap gap-9">
          <h2 className="sticky top-[82px] m-0 w-[140px] flex-none self-start pt-2.5 text-[11px] font-medium uppercase tracking-[.2em] text-[#8c5a4e]">
            Costumes
          </h2>
          <div className="min-w-[280px] flex-[1_1_430px]">
            <p className="m-0 mb-[26px] max-w-[60ch] text-lg leading-[1.7] text-ink-soft">
              Built at the kitchen table, worn for one weekend, photographed badly. Worth it every
              time.
            </p>
            <RevealStagger
              className="grid gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(186px, 1fr))" }}
            >
              {COSTUMES.map((c) => (
                <div key={c}>
                  <span
                    className="bg-dot-grid flex items-center justify-center rounded-xl border border-burgundy/[.22] text-[11px] uppercase tracking-[.12em] text-ink-muted"
                    style={
                      {
                        aspectRatio: "3/4",
                        "--dot-bg": "#eef5f5",
                        "--dot-line": "rgba(150,193,197,.9)",
                        "--dot-size": "12px",
                      } as React.CSSProperties
                    }
                  >
                    {c}
                  </span>
                  <span className="mt-2.5 block text-sm text-ink-muted">Character · convention · year</span>
                </div>
              ))}
            </RevealStagger>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
