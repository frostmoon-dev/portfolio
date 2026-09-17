import { SiteChrome } from "@/components/SiteChrome";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Practice } from "@/components/sections/Practice";
import { Work } from "@/components/sections/Work";
import { Now } from "@/components/sections/Now";
import { Shelf } from "@/components/sections/Shelf";
import { Pictures } from "@/components/sections/Pictures";
import { Journal } from "@/components/sections/Journal";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { Ticker } from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <SiteChrome>
        <Stats />
        <About />
        <Practice />
        <Work />
        <Ticker
          text="anime  ·  manga  ·  games  ·  costume making  ·  film photography  ·  erp systems  ·  interfaces  ·  "
          rotate={-1.4}
          background="#694a47"
          border="#4d3432"
          color="#fff0de"
          padding="26px 0"
        />
        <Now />
        <Shelf />
        <Pictures />
        <Journal />
        <Contact />
      </SiteChrome>
      <Footer />
    </>
  );
}
