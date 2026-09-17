"use client";

import Image from "next/image";
import { useTilt } from "@/hooks/useTilt";
import { Reveal } from "@/components/Reveal";
import { SplitHeading } from "@/components/SplitHeading";
import avatar from "@/public/images/nurfatihah-avatar.png";

export function Hero({ loading, heroShift }: { loading: boolean; heroShift: number }) {
  const tiltRef = useTilt<HTMLDivElement>();

  return (
    <>
      <section className="border-b border-teal bg-cream-soft">
        <div
          className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-[clamp(30px,5vw,68px)]"
          style={{ padding: "clamp(40px,6vw,86px) 26px clamp(34px,4vw,58px)" }}
        >
          <div
            className="min-w-[290px] flex-[1_1_460px] transition-all duration-700 ease-out"
            style={{
              opacity: loading ? 0 : 1,
              transform: loading ? "translateY(22px)" : "none",
              transitionDelay: "0.1s",
            }}
          >
            <p className="m-0 mb-[22px] inline-flex items-center gap-2.5 rounded-full bg-teal px-4 py-[7px] text-[11px] font-bold uppercase tracking-[.2em] text-[#31221f]">
              ERP developer · Malaysia
            </p>
            <SplitHeading
              as="h1"
              immediate={!loading}
              text="I build the systems that quietly run other people's workdays."
              className="m-0 max-w-[20ch] font-serif font-normal text-ink"
            />
            <p className="mt-6 max-w-[52ch] text-[19px] leading-[1.7] text-ink-soft">
              And then I fuss over how they look. Enterprise software by day, interface design by
              conviction, costumes and cameras on the weekends.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="flex min-h-12 items-center rounded-full bg-burgundy px-6 text-[12px] font-bold uppercase tracking-[.14em] text-cream-soft no-underline transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-burgundy-deep"
              >
                See the work
              </a>
              <a
                href="#about"
                className="flex min-h-12 items-center rounded-full border border-burgundy/35 bg-paper px-6 text-[12px] font-bold uppercase tracking-[.14em] text-burgundy no-underline transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-cream"
              >
                Read about me
              </a>
            </div>
          </div>

          <figure
            className="relative m-0 min-w-[240px] max-w-[380px] flex-[1_1_320px]"
            style={{ transform: `translateY(${heroShift}px)` }}
          >
            <span
              className="absolute right-[-10px] top-[-18px] z-[2] animate-bob rounded-full bg-burgundy px-[18px] pb-3 pt-2.5 font-script text-[26px] leading-none text-cream"
              style={{ transform: "rotate(-5deg)" }}
            >
              hello!
            </span>
            <span
              aria-hidden="true"
              className="absolute left-[26px] top-[-11px] z-[2] h-[26px] w-[104px] border-x border-dashed border-teal-deep/55"
              style={{ background: "rgba(150,193,197,.82)", transform: "rotate(-4deg)" }}
            />
            <div
              ref={tiltRef}
              className="bg-dot-grid rounded-[999px_999px_20px_20px] border border-teal p-3.5"
              style={
                {
                  "--dot-bg": "#eef5f5",
                  "--dot-line": "rgba(150,193,197,.75)",
                  "--dot-size": "13px",
                  transformStyle: "preserve-3d",
                  transition: "transform .25s ease",
                } as React.CSSProperties
              }
            >
              <Image
                src={avatar}
                alt="Nurfatihah"
                width={736}
                height={736}
                priority
                className="block aspect-[4/5] w-full rounded-[999px_999px_16px_16px] border border-burgundy/30 bg-paper object-cover"
              />
            </div>
            <figcaption className="mt-3 rounded-[14px] border border-dashed border-burgundy/35 bg-paper px-3.5 py-2.5 text-[13px] leading-[1.6] text-[#6b524e]">
              The avatar I have used for years. A real photograph is on the list.
            </figcaption>
          </figure>
        </div>
      </section>
      <div aria-hidden="true" className="scallop-divider" />
    </>
  );
}
