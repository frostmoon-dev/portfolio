import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CosplayGallery } from "@/components/hobbies/CosplayGallery";
import { GamesShelf } from "@/components/hobbies/GamesShelf";
import { WatchList } from "@/components/hobbies/WatchList";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Teha — Hobbies & Likes",
  description: "Cosplay builds, games, and whatever Teha is currently watching or reading — off the clock.",
};

export default function Hobbies() {
  return (
    <>
      <div className="wrap">
        <section id="top" className="page-intro">
          <Reveal as="p" className="section-kicker">
            Hobbies &amp; likes
          </Reveal>
          <Reveal as="h1" className="section-title" delayMs={60}>
            Off the clock, this is where the time goes.
          </Reveal>
          <Reveal as="p" className="page-lead" delayMs={120}>
            Cosplay builds, whatever I&rsquo;m playing, and the shows I&rsquo;m behind on. None of
            this pays the bills. All of it matters just as much.
          </Reveal>
        </section>
      </div>

      <CosplayGallery />
      <GamesShelf />
      <WatchList />
      <Footer />
    </>
  );
}
