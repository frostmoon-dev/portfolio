import { Reveal } from "@/components/Reveal";
import { RevealStagger } from "@/components/RevealStagger";

type Photo = { label: string; caption: string; src?: string };

// No real photos yet — these render as labeled placeholder frames. Drop
// files in public/images/cosplay/ (see its README) and add `src` here.
const PHOTOS: Photo[] = [
  { label: "cosplay 01", caption: "Character · convention · year" },
  { label: "cosplay 02", caption: "Character · convention · year" },
  { label: "cosplay 03", caption: "Character · convention · year" },
  { label: "cosplay 04", caption: "Character · convention · year" },
  { label: "cosplay 05", caption: "Character · convention · year" },
  { label: "cosplay 06", caption: "Character · convention · year" },
];

export function CosplayGallery() {
  return (
    <section id="cosplay" className="content-section">
      <div className="wrap">
        <Reveal as="p" className="section-kicker">
          Borrowed skins
        </Reveal>
        <Reveal as="h2" className="section-title" delayMs={60}>
          Shapes I&rsquo;ve worn, and the ones still half-made.
        </Reveal>
        <Reveal as="p" className="page-lead" delayMs={100}>
          Patterning, foam, paint, and whatever it takes to hold a borrowed shape together for
          one convention weekend.
        </Reveal>

        <RevealStagger className="cosplay-grid" stepMs={50}>
          {PHOTOS.map((p) => (
            <div className="cosplay-card" key={p.label}>
              <div className="cosplay-photo">
                {p.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.src} alt={p.caption} />
                ) : (
                  p.label
                )}
              </div>
              <p className="cosplay-caption">{p.caption}</p>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
