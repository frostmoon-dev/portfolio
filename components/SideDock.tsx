"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Intro" },
  { id: "cosplay", label: "Cosplay" },
  { id: "games", label: "Games" },
  { id: "watching", label: "Watching" },
  { id: "journal", label: "Journal" },
  { id: "message", label: "Message" },
];

export function SideDock() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const rafRef = useRef(0);

  useEffect(() => {
    function onScroll() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        let current = SECTIONS[0].id;
        for (const s of SECTIONS) {
          const el = document.getElementById(s.id);
          if (el && el.getBoundingClientRect().top <= vh * 0.5) current = s.id;
        }
        setActive(current);
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <nav className="side-dock" aria-label="Section navigation">
      {SECTIONS.map((s) => (
        <a key={s.id} href={`#${s.id}`} className={`dock-dot ${active === s.id ? "is-active" : ""}`}>
          <span className="dock-mark" aria-hidden="true" />
          <span className="dock-label">{s.label}</span>
        </a>
      ))}
    </nav>
  );
}
