import { Reveal } from "@/components/Reveal";
import { RevealStagger } from "@/components/RevealStagger";

const GROUPS = [
  {
    label: "Day work",
    items: ["X++", "D365 F&O", "SQL", "SSRS", "Power BI"],
  },
  {
    label: "Interfaces",
    items: ["Figma", "React", "Next.js", "CSS", "Illustrator"],
  },
  {
    label: "Off the clock",
    items: ["Sewing machine", "EVA foam", "Heat gun", "Film camera"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="stack">
      <div className="wrap">
        <Reveal as="p" className="section-kicker">
          Stack
        </Reveal>
        <Reveal as="h2" className="section-title" delayMs={60}>
          Tools that end up in everything I make.
        </Reveal>

        <div className="stack-groups">
          {GROUPS.map((g, gi) => (
            <Reveal key={g.label} className="stack-group" delayMs={gi * 80}>
              <p className="stack-group-label">{g.label}</p>
              <RevealStagger className="stack-chips" stepMs={40}>
                {g.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </RevealStagger>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
