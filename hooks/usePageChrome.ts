"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["about", "work", "shelf", "pictures", "journal"];

export function usePageChrome() {
  const [loading, setLoading] = useState(true);
  const [scrollPct, setScrollPct] = useState(0);
  const [activeId, setActiveId] = useState("");
  const [pastHero, setPastHero] = useState(false);
  const [heroShift, setHeroShift] = useState(0);

  useEffect(() => {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem("nf-seen") === "1";
    } catch {
      // storage unavailable — treat as unseen
    }
    if (seen || calm) {
      setLoading(false);
      return;
    }
    const t = setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem("nf-seen", "1");
      } catch {
        // ignore
      }
    }, 1250);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setScrollPct(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
        setPastHero(h.scrollTop > 520);
        setHeroShift(calm ? 0 : Math.max(-26, -h.scrollTop * 0.055));

        let active = "";
        for (const id of SECTION_IDS) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= h.clientHeight * 0.34) active = id;
        }
        setActiveId(active);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { loading, scrollPct, activeId, pastHero, heroShift };
}
