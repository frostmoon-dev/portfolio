import { Reveal } from "@/components/Reveal";

export function WatchList() {
  return (
    <section id="watching" className="content-section">
      <div className="wrap">
        <Reveal as="p" className="section-kicker">
          Told to me
        </Reveal>
        <Reveal as="h2" className="section-title" delayMs={60}>
          Stories I&rsquo;ve <em className="title-accent">witnessed</em>, always one night behind.
        </Reveal>

        <div className="watch-grid">
          <Reveal as="div" className="watch-card" delayMs={100}>
            <p className="watch-kicker">Told to me now</p>
            <p className="watch-title">add a title</p>
            <p className="watch-note">One behind, as usual — no spoilers.</p>
          </Reveal>
          <Reveal as="div" className="watch-card" delayMs={170}>
            <p className="watch-kicker">Read by lamplight</p>
            <p className="watch-title">add a title</p>
            <p className="watch-note">The volume I stopped at, whenever that was.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
