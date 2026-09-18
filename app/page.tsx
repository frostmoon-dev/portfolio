import { NameSwap } from "@/components/NameSwap";
import { Socials } from "@/components/Socials";
import { LensBio } from "@/components/LensBio";
import { Collage } from "@/components/Collage";
import { Playground } from "@/components/Playground";
import { Stack } from "@/components/sections/Stack";
import { Journal } from "@/components/sections/Journal";
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

        <Collage />
        <Playground />
      </div>

      <Stack />
      <Journal />
      <Footer />
    </>
  );
}
