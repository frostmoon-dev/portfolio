import { NameSwap } from "@/components/NameSwap";
import { Socials } from "@/components/Socials";
import { LensBio } from "@/components/LensBio";
import { CosplayGallery } from "@/components/sections/CosplayGallery";
import { GamesShelf } from "@/components/sections/GamesShelf";
import { WatchList } from "@/components/sections/WatchList";
import { Journal } from "@/components/sections/Journal";
import { Playground } from "@/components/Playground";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="wrap">
        <section id="top" className="intro">
          <div className="hero">
            <NameSwap />
            <Socials />
            <LensBio />
          </div>
        </section>
      </div>

      <CosplayGallery />
      <GamesShelf />
      <WatchList />
      <Journal />
      <Playground />
      <Footer />
    </>
  );
}
