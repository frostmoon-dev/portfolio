import { Reveal } from "@/components/Reveal";

const STATS = [
  { label: "Day work", labelColor: "#41656a", value: "ERP development", border: false },
  { label: "Second trade", labelColor: "#9a5f58", value: "UI/UX & front end", border: true },
  { label: "Off the clock", labelColor: "#5f7550", value: "Cosplay, anime, cameras", border: true },
];

export function Stats() {
  return (
    <Reveal as="section" className="border-y border-teal bg-cream-soft">
      <dl className="mx-auto flex max-w-[1240px] flex-wrap px-[26px]">
        {STATS.map((s) => (
          <div
            key={s.label}
            className={`min-w-0 flex-[1_1_190px] py-5 px-[22px] ${s.border ? "border-l border-dashed border-burgundy/30" : "pl-0"}`}
          >
            <dt
              className="text-[11px] font-medium uppercase tracking-[.18em]"
              style={{ color: s.labelColor }}
            >
              {s.label}
            </dt>
            <dd className="m-0 mt-1.5 font-serif text-xl text-ink">{s.value}</dd>
          </div>
        ))}
        <div className="min-w-0 flex-[1_1_190px] border-l border-dashed border-burgundy/30 py-5 pl-[22px]">
          <dt className="text-[11px] font-medium uppercase tracking-[.18em] text-teal-deep">Status</dt>
          <dd className="m-0 mt-1.5 flex items-center gap-2.5 font-serif text-xl text-ink">
            <span className="h-2 w-2 flex-none animate-soft rounded-full bg-teal-deep" />
            Open to good work
          </dd>
        </div>
      </dl>
    </Reveal>
  );
}
