"use client";

const LINKS = [
  { href: "#about", label: "About", id: "about" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#shelf", label: "Shelf", id: "shelf" },
  { href: "#pictures", label: "Pictures", id: "pictures" },
  { href: "#journal", label: "Journal", id: "journal" },
];

export function Header({
  scrollPct,
  activeId,
  pastHero,
}: {
  scrollPct: number;
  activeId: string;
  pastHero: boolean;
}) {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-40 h-[3px] bg-teal transition-[width] duration-100 ease-linear"
        style={{ width: `${scrollPct}%` }}
      />

      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-[22px] right-[22px] z-[45] flex h-[54px] w-[54px] items-center justify-center rounded-full border border-burgundy/30 bg-paper shadow-[0_8px_18px_-12px_rgba(61,43,41,.55)] transition-all duration-300 ease-in-out hover:-translate-y-[3px]"
        style={{
          opacity: pastHero ? 1 : 0,
          visibility: pastHero ? "visible" : "hidden",
        }}
      >
        <span
          aria-hidden="true"
          className="h-3 w-3 bg-teal transition-transform duration-100 ease-linear"
          style={{ transform: `rotate(${(scrollPct * 3.6).toFixed(1)}deg)` }}
        />
      </a>

      <header className="sticky top-0 z-20 border-b border-burgundy/[.16] bg-paper shadow-[0_1px_0_rgba(105,74,71,.06)]">
        <div className="mx-auto flex min-h-[60px] max-w-[1240px] flex-wrap items-center justify-between gap-2.5 px-[26px]">
          <a href="#top" className="flex items-center gap-2.5 leading-[60px] no-underline">
            <span className="h-[9px] w-[9px] rotate-45 bg-teal" />
            <span className="font-script text-[27px] text-burgundy">Nurfatihah</span>
          </a>

          <nav aria-label="Sections" className="flex flex-wrap gap-0.5">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="flex min-h-11 items-center rounded-full px-3.5 text-[12px] font-medium uppercase tracking-[.14em] text-[#5b4340] no-underline transition-colors duration-150 ease-in-out hover:bg-teal-pale hover:text-burgundy"
                style={{ background: activeId === l.id ? "#e8f1f1" : "transparent" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="flex min-h-11 items-center rounded-full bg-burgundy px-4 text-[12px] font-bold uppercase tracking-[.14em] text-cream-soft no-underline transition-colors duration-150 ease-in-out hover:bg-burgundy-deep"
            >
              Say hello
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
