import { Reveal } from "@/components/Reveal";
import { RevealStagger } from "@/components/RevealStagger";

const PRACTICE = [
  {
    order: "one",
    orderColor: "#96c1c5",
    title: "ERP development",
    body: "Modules, reports, integrations, and the unglamorous data migrations nobody volunteers for.",
  },
  {
    order: "two",
    orderColor: "#c98b86",
    title: "Interface work",
    body: "Flows, form layouts, small usability repairs. Self-taught, argued about with colleagues, tested on real users.",
  },
  {
    order: "three",
    orderColor: "#a9ba96",
    title: "Costume making",
    body: "Patterning, foam, paint, and late nights before a convention. Non-professional, thoroughly committed.",
  },
];

export function Practice() {
  return (
    <Reveal
      as="section"
      className="mx-auto mb-[34px] flex flex-wrap gap-9 rounded-[24px] border border-burgundy/[.18] bg-cream-soft p-[clamp(28px,4vw,54px)]"
      style={{ maxWidth: 1240 }}
    >
      <h2 className="sticky top-[82px] m-0 w-[140px] flex-none self-start pt-2 text-[11px] font-medium uppercase tracking-[.2em] text-rose-deep">
        Practice
      </h2>
      <RevealStagger className="flex min-w-[280px] flex-[1_1_430px] flex-wrap gap-[26px]" stepMs={80}>
        {PRACTICE.map((p) => (
          <article
            key={p.title}
            className="min-w-0 flex-[1_1_210px] rounded-2xl border border-burgundy/[.22] bg-paper p-[22px] shadow-[0_1px_0_rgba(105,74,71,.07)]"
          >
            <p className="m-0 mb-2.5 font-script text-[30px] leading-none" style={{ color: p.orderColor }}>
              {p.order}
            </p>
            <h3 className="m-0 mb-2 font-serif text-[23px] font-normal text-ink">{p.title}</h3>
            <p className="m-0 text-[17px] leading-[1.65] text-ink-soft">{p.body}</p>
          </article>
        ))}
      </RevealStagger>
    </Reveal>
  );
}
