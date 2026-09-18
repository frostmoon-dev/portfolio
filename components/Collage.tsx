"use client";

import { useEffect, useRef } from "react";

type Tile = { label: string; ratio: number; video?: string };

// No video files yet — these render as labeled placeholder tiles. Once you have
// clips, drop them in public/videos/ and add `video: "/videos/your-clip.mp4"`
// to the matching entry; it'll swap to an actual <video> automatically.
const TILES: Tile[] = [
  { label: "ERP screen redesign", ratio: 4 / 3 },
  { label: "Interface sketches", ratio: 3 / 4 },
  { label: "Costume WIP", ratio: 1 },
  { label: "Icon set", ratio: 4 / 3 },
  { label: "Journal layout", ratio: 3 / 4 },
  { label: "Motion test", ratio: 1 },
  { label: "Type experiment", ratio: 4 / 3 },
  { label: "Convention photo", ratio: 3 / 4 },
];

const SPEEDS = [-0.03, 0.04, -0.025, 0.035, -0.03, 0.02, -0.028, 0.04];

export function Collage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tiles = Array.from(root.querySelectorAll<HTMLElement>(".tile"));
    if (!tiles.length) return;

    tiles.forEach((t, i) => {
      t.dataset.speed = String(SPEEDS[i % SPEEDS.length]);
    });

    // Videos: only play the ones on screen.
    const videos = Array.from(root.querySelectorAll<HTMLVideoElement>(".tile video"));
    const vio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting) {
            if (!v.src) v.src = v.dataset.src || "";
            const p = v.play();
            if (p && p.catch) p.catch(() => {});
          } else if (v.src) {
            v.pause();
          }
        });
      },
      { rootMargin: "200px 0px" }
    );
    videos.forEach((v) => vio.observe(v));

    if (reduce) {
      return () => vio.disconnect();
    }

    // Parallax + mobile focal-scale.
    const mobileMQ = window.matchMedia("(max-width: 560px)");
    let isMobile = mobileMQ.matches;
    const onMQChange = (e: MediaQueryListEvent) => {
      isMobile = e.matches;
      onScroll();
    };
    mobileMQ.addEventListener("change", onMQChange);

    const visible = new Set<HTMLElement>();
    const pio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target as HTMLElement);
          else visible.delete(e.target as HTMLElement);
        });
      },
      { rootMargin: "200px 0px" }
    );
    tiles.forEach((t) => pio.observe(t));

    let ticking = false;
    let raf = 0;
    function update() {
      ticking = false;
      const vh = window.innerHeight;
      visible.forEach((t) => {
        const rect = t.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = center - vh / 2;

        const speed = parseFloat(t.dataset.speed || "0") || 0;
        let offset = dist * speed;
        if (offset > 28) offset = 28;
        if (offset < -28) offset = -28;

        let scale = 1;
        let opacity = 1;
        if (isMobile) {
          const maxDist = vh / 2 + rect.height / 2;
          const prog = Math.min(1, Math.abs(dist) / maxDist);
          scale = 1 - prog * 0.4;
          if (scale < 0.6) scale = 0.6;
          opacity = 1 - prog * 0.7;
          if (opacity < 0.3) opacity = 0.3;
        }

        t.style.transform = `translate3d(0,${offset.toFixed(2)}px,0) scale(${scale.toFixed(3)})`;
        t.style.opacity = opacity.toFixed(3);
      });
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(update);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      vio.disconnect();
      pio.disconnect();
      mobileMQ.removeEventListener("change", onMQChange);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="collage" ref={rootRef} aria-label="Design and interface experiments by Teha">
      {TILES.map((tile) =>
        tile.video ? (
          <figure className="tile" key={tile.label}>
            <video
              data-src={tile.video}
              muted
              loop
              playsInline
              preload="none"
              aria-label={tile.label}
            />
          </figure>
        ) : (
          <figure className="tile" key={tile.label}>
            <div
              className="tile-placeholder"
              style={{ "--ar": tile.ratio } as React.CSSProperties}
              role="img"
              aria-label={`${tile.label} (placeholder — video coming soon)`}
            >
              {tile.label}
            </div>
          </figure>
        )
      )}
    </div>
  );
}
