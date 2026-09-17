import { Reveal } from "@/components/Reveal";
import { RevealStagger } from "@/components/RevealStagger";

const PLACEHOLDER_PROJECTS = ["Project two", "Project three", "Project four"];

export function Work() {
  return (
    <Reveal as="section" id="work" className="border-t border-teal bg-cream-soft py-[66px]">
      <div className="mx-auto max-w-[1240px] px-[26px]">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3.5">
          <h2 className="m-0 font-serif text-[clamp(27px,3.2vw,38px)] font-normal text-ink">
            Selected work
          </h2>
          <p className="m-0 text-[13px] text-ink-muted">One filled, three waiting</p>
        </div>
        <RevealStagger className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(232px, 1fr))" }}>
          <a
            href="#about"
            className="block rounded-2xl border border-burgundy/[.22] bg-paper p-3 text-inherit no-underline transition-all duration-200 ease-in-out hover:-translate-y-1 hover:border-burgundy hover:shadow-[0_10px_18px_-12px_rgba(61,43,41,.45)]"
          >
            <span
              className="block aspect-[4/3] rounded-xl bg-teal-tint"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(105,74,71,.14) 0 6px, rgba(105,74,71,0) 6px 12px)",
              }}
            />
            <span className="mt-3.5 block font-serif text-xl text-burgundy">This portfolio</span>
            <span className="mt-1 block text-sm text-ink-muted">Written by hand, one file · 2026</span>
          </a>
          {PLACEHOLDER_PROJECTS.map((title) => (
            <div key={title} className="rounded-2xl border border-dashed border-burgundy/35 bg-paper p-3">
              <span className="flex aspect-[4/3] items-center justify-center rounded-xl bg-cream text-[11px] uppercase tracking-[.12em] text-ink-muted">
                project shot
              </span>
              <span className="mt-3.5 block font-serif text-xl text-ink-muted">{title}</span>
              <span className="mt-1 block text-sm text-ink-muted">Add a title and one line</span>
            </div>
          ))}
        </RevealStagger>
      </div>
    </Reveal>
  );
}
