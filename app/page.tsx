import { NameSwap } from "@/components/NameSwap";
import { Socials } from "@/components/Socials";
import { LensBio } from "@/components/LensBio";
import { SectionDivider } from "@/components/SectionDivider";
import { CosplayGallery } from "@/components/sections/CosplayGallery";
import { GamesShelf } from "@/components/sections/GamesShelf";
import { WatchList } from "@/components/sections/WatchList";
import { Journal } from "@/components/sections/Journal";
import { Playground } from "@/components/Playground";
import { Footer } from "@/components/Footer";
import { Moths } from "@/components/Moths";

export default function Home() {
  return (
    <>
      <Moths />
      <div className="wrap">
        <section id="top" className="intro">
          <div className="hero">
            <NameSwap />
            <Socials />
            <LensBio />
          </div>
        </section>
      </div>

      {/* Each divider's second word opens the next one, so scrolling the page
          reads as one line — and closes back on itself: waking, worn,
          wandered, witnessed, written, waking. */}
      <SectionDivider from="waking" to="worn" />
      <CosplayGallery />

      <SectionDivider from="worn" to="wandered" />
      <GamesShelf />

      <SectionDivider from="wandered" to="witnessed" />
      <WatchList />

      <SectionDivider from="witnessed" to="written" />
      <Journal />

      <SectionDivider from="written" to="waking" />
      <Playground />

      <Footer />
    </>
  );
}
