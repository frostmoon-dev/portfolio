"use client";

import { useEffect, useRef } from "react";

// cls also carries typography: the name renders in the script face set on
// .swap, while "glyph-sans" hands a slot back to the body sans. Tagging it
// per glyph means each letter changes face mid-flip, while it's edge-on.
type Glyph = { html: string; cls?: "accent" | "glyph-sans" };

const NBSP = " ";

const NAME: Glyph[] = [
  { html: "T" },
  { html: "e" },
  { html: "h" },
  { html: "a" },
];

// The role isn't a name, so it stays in the sans the rest of the page uses.
const ROLE: Glyph[] = "an erp + ux dev".split("").map((ch) => ({
  html: ch === " " ? NBSP : ch,
  cls: "glyph-sans" as const,
}));

export function NameSwap() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const swapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const h1 = h1Ref.current;
    const swap = swapRef.current;
    if (!h1 || !swap || reduce) return;

    function makeSlot(data: Glyph) {
      const s = document.createElement("span");
      s.className = "slot";
      s.innerHTML = data.html;
      if (data.cls) s.classList.add(data.cls);
      return s;
    }

    swap.innerHTML = "";
    NAME.forEach((d) => swap.appendChild(makeSlot(d)));

    let state: "name" | "role" = "name";
    let busy = false;
    let pending: "name" | "role" | null = null;

    function morphSlot(slot: HTMLElement, target: Glyph, cb: () => void) {
      slot.style.transition = "transform 250ms ease";
      slot.style.transform = "rotateX(-90deg)";
      setTimeout(() => {
        slot.innerHTML = target.html;
        // Reassign wholesale so the outgoing glyph's class never lingers.
        slot.className = target.cls ? "slot " + target.cls : "slot";
        slot.style.transform = "rotateX(90deg)";
        requestAnimationFrame(() => {
          slot.style.transform = "rotateX(0deg)";
        });
      }, 260);
      setTimeout(cb, 540);
    }

    function addSlot(target: Glyph, cb: () => void) {
      const s = makeSlot(target);
      s.style.opacity = "0";
      s.style.transform = "rotateX(-90deg)";
      s.style.transition = "transform 260ms ease, opacity 220ms ease";
      swap!.appendChild(s);
      requestAnimationFrame(() => {
        s.style.opacity = "1";
        s.style.transform = "rotateX(0deg)";
      });
      setTimeout(cb, 300);
    }

    function removeSlot(slot: HTMLElement, cb: () => void) {
      const w = slot.getBoundingClientRect().width;
      slot.style.width = w + "px";
      void slot.offsetWidth;
      slot.style.transition = "transform 240ms ease";
      slot.style.transform = "rotateX(-90deg)";
      setTimeout(() => {
        slot.style.transition = "width 260ms ease, opacity 220ms ease";
        slot.style.width = "0";
        slot.style.opacity = "0";
      }, 250);
      setTimeout(() => {
        slot.remove();
        cb();
      }, 560);
    }

    function morphTo(target: "name" | "role") {
      if (state === target) return;
      if (busy) {
        pending = target;
        return;
      }
      busy = true;
      state = target;
      const TARGET = target === "role" ? ROLE : NAME;
      const current = Array.prototype.slice.call(swap!.children) as HTMLElement[];
      const maxLen = Math.max(current.length, TARGET.length);
      const stagger = 45;
      let done = 0;

      function tick() {
        done++;
        if (done >= maxLen) {
          busy = false;
          if (pending && pending !== state) {
            const t = pending;
            pending = null;
            morphTo(t);
          } else {
            pending = null;
          }
        }
      }

      for (let i = 0; i < maxLen; i++) {
        setTimeout(() => {
          if (i < TARGET.length && i < current.length) {
            morphSlot(current[i], TARGET[i], tick);
          } else if (i < TARGET.length) {
            addSlot(TARGET[i], tick);
          } else {
            removeSlot(current[i], tick);
          }
        }, i * stagger);
      }
    }

    function onEnter() {
      morphTo("role");
    }
    function onLeave() {
      morphTo("name");
    }
    function onClick() {
      morphTo(state === "name" ? "role" : "name");
    }

    h1.addEventListener("mouseenter", onEnter);
    h1.addEventListener("mouseleave", onLeave);
    h1.addEventListener("click", onClick);

    let autoTimers: ReturnType<typeof setTimeout>[] = [];
    if (window.matchMedia("(max-width: 560px)").matches) {
      autoTimers.push(setTimeout(() => morphTo("role"), 300));
      autoTimers.push(setTimeout(() => morphTo("name"), 2400));
    }

    return () => {
      h1.removeEventListener("mouseenter", onEnter);
      h1.removeEventListener("mouseleave", onLeave);
      h1.removeEventListener("click", onClick);
      autoTimers.forEach(clearTimeout);
    };
  }, []);

  return (
    <h1 ref={h1Ref}>
      I&rsquo;m{" "}
      <span className="swap" ref={swapRef}>
        Teha
      </span>
      .
    </h1>
  );
}
