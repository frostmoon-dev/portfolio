import { Reveal } from "@/components/Reveal";
import { RevealStagger } from "@/components/RevealStagger";

// Titles left as placeholders on purpose — fill in the real ones.
const GROUPS = [
  {
    label: "Currently playing",
    items: [
      { title: "add a title", note: "what's eating this week's evenings" },
      { title: "add a title", note: "what's eating this week's evenings" },
    ],
  },
  {
    label: "On repeat",
    items: [
      { title: "add a title", note: "the one you keep going back to" },
      { title: "add a title", note: "the one you keep going back to" },
    ],
  },
  {
    label: "Backlog",
    items: [
      { title: "add a title", note: "someday, probably" },
      { title: "add a title", note: "someday, probably" },
      { title: "add a title", note: "someday, probably" },
    ],
  },
];

export function GamesShelf() {
  return (
    <section id="games" className="content-section">
      <div className="wrap">
        <Reveal as="p" className="section-kicker">
          Games
        </Reveal>
        <Reveal as="h2" className="section-title" delayMs={60}>
          What's currently eating my evenings.
        </Reveal>
        <Reveal as="p" className="page-lead" delayMs={100}>
          Mostly whatever lets me turn my brain off after a day of turning it very much on.
        </Reveal>

        <div className="games-groups">
          {GROUPS.map((g, gi) => (
            <Reveal key={g.label} delayMs={gi * 80}>
              <p className="games-group-label">{g.label}</p>
              <RevealStagger className="games-list" stepMs={45}>
                {g.items.map((item, i) => (
                  <div className="game-card" key={`${g.label}-${i}`}>
                    <p className="game-title">{item.title}</p>
                    <p className="game-note">{item.note}</p>
                  </div>
                ))}
              </RevealStagger>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
