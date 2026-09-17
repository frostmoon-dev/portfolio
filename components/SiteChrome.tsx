"use client";

import { ReactNode } from "react";
import { usePageChrome } from "@/hooks/usePageChrome";
import { Preloader } from "@/components/Preloader";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";

export function SiteChrome({ children }: { children: ReactNode }) {
  const { loading, scrollPct, activeId, pastHero, heroShift } = usePageChrome();

  return (
    <>
      <Preloader loading={loading} />
      <Header scrollPct={scrollPct} activeId={activeId} pastHero={pastHero} />
      <main id="top">
        <Hero loading={loading} heroShift={heroShift} />
        {children}
      </main>
    </>
  );
}
