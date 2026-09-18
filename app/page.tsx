import { ThemeToggle } from "@/components/ThemeToggle";
import { NameSwap } from "@/components/NameSwap";
import { Socials } from "@/components/Socials";
import { LensBio } from "@/components/LensBio";
import { Collage } from "@/components/Collage";
import { Playground } from "@/components/Playground";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <div className="wrap">
        <section className="intro">
          <div className="hero">
            <NameSwap />
            <Socials />
            <LensBio />
          </div>
        </section>

        <Collage />
        <Playground />
      </div>
    </>
  );
}
