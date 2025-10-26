// File: app/page.tsx
// Mission: Assemble all components and update the footer.

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-[1px] w-full bg-brand-gray-border" />
      </div>

      <ProjectGrid />

      {/* MODIFICATION: Personalized Footer */}
      <footer className="text-center py-10 border-t border-brand-gray-border">
        <p className="text-brand-gray-light font-mono text-sm">
          Nurfatihah Muhammad // Full-Spectrum Software Developer
        </p>
      </footer>
    </main>
  );
}