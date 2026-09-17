import { Reveal } from "@/components/Reveal";

const DOING = [
  { label: "At work", color: "#41656a", text: "Rebuilding the stock adjustment screen." },
  { label: "At the table", color: "#9a5f58", text: "A jacket with too many buttons." },
  { label: "Learning", color: "#5f7550", text: "Typography, properly this time." },
  { label: "Playing", color: "#8c5a4e", text: "Something long, slowly.", noBorder: true },
];

export function Now() {
  return (
    <Reveal as="section" className="border-y border-[#7fb0b5] bg-teal py-[58px]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap gap-[26px] px-[26px]">
        <div className="min-w-[280px] flex-[1_1_320px] rounded-2xl border border-burgundy/[.22] bg-paper">
          <h2 className="m-0 rounded-t-[15px] border-b border-dashed border-burgundy/35 bg-teal-pale px-5 py-[13px] text-[11px] font-medium uppercase tracking-[.2em] text-teal-deep">
            Currently watching
          </h2>
          <div className="flex gap-[18px] p-5">
            <span className="flex w-[92px] flex-none items-center justify-center rounded-xl border border-dashed border-burgundy/35 bg-teal-tint text-[11px] uppercase tracking-[.1em] text-ink-muted" style={{ aspectRatio: "3/4" }}>
              cover
            </span>
            <div className="min-w-0">
              <p className="m-0 font-serif text-[23px] leading-[1.25] text-ink">This season&apos;s show</p>
              <p className="mt-2 text-base leading-[1.6] text-ink-soft">Episode 7 of 12. One behind, as usual.</p>
              <div className="mt-4 h-[7px] overflow-hidden rounded-full border border-burgundy/[.22] bg-cream">
                <div className="h-full w-[58%] rounded-full bg-burgundy" />
              </div>
              <p className="mt-2 text-[13px] text-ink-muted">58% through the season</p>
            </div>
          </div>
        </div>

        <div className="min-w-[280px] flex-[1_1_320px] rounded-2xl border border-burgundy/[.22] bg-paper">
          <h2 className="m-0 rounded-t-[15px] border-b border-dashed border-burgundy/35 bg-rose-tint px-5 py-[13px] text-[11px] font-medium uppercase tracking-[.2em] text-teal-deep">
            Currently doing
          </h2>
          <ul className="m-0 flex list-none flex-col gap-3 px-5 pb-5 pt-3.5">
            {DOING.map((d) => (
              <li
                key={d.label}
                className={`flex gap-3.5 ${d.noBorder ? "" : "border-b border-dashed border-burgundy/[.28] pb-3"}`}
              >
                <span
                  className="w-[88px] flex-none pt-0.5 text-[11px] font-medium uppercase tracking-[.14em]"
                  style={{ color: d.color }}
                >
                  {d.label}
                </span>
                <span className="text-[17px] leading-[1.55] text-ink">{d.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
