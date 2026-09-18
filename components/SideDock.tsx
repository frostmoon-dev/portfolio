"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const ROUTES: Record<string, { id: string; label: string }[]> = {
  "/": [
    { id: "top", label: "Intro" },
    { id: "work", label: "Work" },
    { id: "stack", label: "Stack" },
    { id: "journal", label: "Journal" },
    { id: "message", label: "Message" },
  ],
  "/hobbies": [
    { id: "top", label: "Intro" },
    { id: "cosplay", label: "Cosplay" },
    { id: "games", label: "Games" },
    { id: "watching", label: "Watching" },
  ],
};

const CROSS_LINK: Record<string, { href: string; label: string }> = {
  "/": { href: "/hobbies", label: "Hobbies" },
  "/hobbies": { href: "/", label: "Work" },
};

export function SideDock() {
  const pathname = usePathname();
  const sections = ROUTES[pathname] ?? ROUTES["/"];
  const crossLink = CROSS_LINK[pathname] ?? CROSS_LINK["/"];
  const [active, setActive] = useState(sections[0].id);
  const rafRef = useRef(0);

  useEffect(() => {
    setActive(sections[0].id);
    function onScroll() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        let current = sections[0].id;
        for (const s of sections) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <nav className="side-dock" aria-label="Section navigation">
      {sections.map((s) => (
        <a key={s.id} href={`#${s.id}`} className={`dock-dot ${active === s.id ? "is-active" : ""}`}>
          <span className="dock-mark" aria-hidden="true" />
          <span className="dock-label">{s.label}</span>
        </a>
      ))}
      <a href={crossLink.href} className="dock-dot dock-dot-cross">
        <span className="dock-mark dock-mark-cross" aria-hidden="true" />
        <span className="dock-label">{crossLink.label} →</span>
      </a>
    </nav>
  );
}
