"use client";

import { useState } from "react";
import { FolderIcon, StarIcon, SparkleUnderline, ScribbleIcon, SocialIcon } from "@/components/Icons";
import { PhotoPlaceholder, AvatarPlaceholder } from "@/components/Placeholders";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#playground", label: "Playground" },
];

const FOLDERS = [
  { key: "work", label: "Projects at Work", color: "#7EA4BE", dark: "#8EB4CE" },
  { key: "ai", label: "Designing with AI", color: "#CEAB7E", dark: "#DEBB8E" },
  { key: "community", label: "Community Impact", color: "#7DB49B", dark: "#8DC4AB" },
  { key: "lens", label: "Through My Lens", color: "#D08D88", dark: "#E09D98" },
  { key: "merch", label: "From Sketch to Merch", color: "#A08AC0", dark: "#B09AD0" },
] as const;

const FOLDER_CONTENT: Record<string, { blurb: string; items: string[] }> = {
  work: {
    blurb:
      "Product design work shipped with cross-functional teams — B2B and B2C, 0-to-1 and scaled platforms.",
    items: ["Project one", "Project two", "Project three"],
  },
  ai: {
    blurb: "Prototypes and experiments built at the edge of design and AI tooling.",
    items: ["AI experiment one", "AI experiment two"],
  },
  community: {
    blurb: "Volunteer and community-facing design work.",
    items: ["Community project one"],
  },
  lens: {
    blurb: "Photography — a side practice in noticing detail.",
    items: ["Photo set one", "Photo set two"],
  },
  merch: {
    blurb: "From sketch to shipped merchandise and physical goods.",
    items: ["Merch drop one"],
  },
};

const SIDEBAR_TABS = ["Projects", "Snapshot", "Achievements", "Garden"];

const SIDE_NOTES_PROMPT =
  "I care about craft, how clearly things communicate, handle edge cases, and build trust. Always in “let me try this” mode, curious, building, and exploring.";

const BULLETIN_ITEMS = [
  { top: "4%", left: "6%", w: 210, rot: -5, label: "Sketch exploration" },
  { top: "2%", left: "30%", w: 230, rot: -2, label: "UI study" },
  { top: "6%", left: "54%", w: 200, rot: 3, label: "Prototype" },
  { top: "3%", left: "78%", w: 220, rot: 6, label: "Icon set" },
  { top: "34%", left: "4%", w: 210, rot: 4, label: "Case study" },
  { top: "32%", left: "28%", w: 250, rot: 6, label: "Side project" },
  { top: "36%", left: "54%", w: 260, rot: 2, label: "Vibe coding build" },
  { top: "33%", left: "80%", w: 230, rot: -4, label: "App concept" },
  { top: "66%", left: "6%", w: 220, rot: -3, label: "Landing page" },
  { top: "64%", left: "32%", w: 240, rot: -3, label: "Poster set" },
  { top: "64%", left: "60%", w: 250, rot: 5, label: "3D artifact" },
];

export default function Home() {
  const [activeFolder, setActiveFolder] = useState<string | null>("work");
  const [activeTab, setActiveTab] = useState("Projects");

  return (
    <div className="relative overflow-x-clip">
      <nav className="relative z-50">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 pt-6 pb-3 flex items-center justify-between">
          <a
            href="/"
            className="font-[family-name:var(--font-noto)] text-[13px] font-medium text-stone-700 hover:text-stone-900 transition-colors tracking-wide"
          >
            Your Name
          </a>
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-noto)] text-[12px] text-stone-500 hover:text-stone-800 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ---------------- HERO ---------------- */}
      <section className="relative px-6 pt-8 pb-20 md:pt-16 md:pb-32">
        <div className="max-w-[1000px] mx-auto text-center">
          <h1
            className="font-[family-name:var(--font-noto)] text-5xl md:text-7xl font-semibold text-stone-800 hero-entrance"
            style={{ animation: "hero-blur-in 0.6s ease-out 0.1s both" }}
          >
            Your Name
          </h1>
          <p
            className="mt-4 font-[family-name:var(--font-noto)] text-xs md:text-base text-stone-500 tracking-[0.2em] uppercase hero-entrance"
            style={{ animation: "hero-fade-in 0.5s ease-out 0.5s both" }}
          >
            I think, then I build
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          <div
            className="badge-swing hero-entrance rounded-xl p-[6px] mx-auto w-full max-w-[190px]"
            style={{
              background:
                "linear-gradient(170deg, #57534e 0%, #44403c 15%, #292524 60%, #1c1917 100%)",
              animation: "hero-slide-up 0.6s ease-out 0.2s both",
            }}
          >
            <div className="flex justify-center pt-1 pb-1">
              <div
                className="w-8 h-[6px] rounded-full border border-stone-500/50"
                style={{ background: "linear-gradient(180deg, #1c1917, #292524)" }}
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <div
                className="px-3 pt-3 pb-3"
                style={{ background: "linear-gradient(175deg, #6b6560 0%, #57534e 20%, #44403c 100%)" }}
              >
                <h3 className="text-white font-extrabold text-lg tracking-[0.1em]">ID</h3>
                <p className="font-[family-name:var(--font-noto)] text-white/50 text-[9px] mt-1 leading-relaxed">
                  Product Designer
                </p>
              </div>
              <div
                className="px-3 pt-4 pb-4 flex flex-col items-center"
                style={{ background: "linear-gradient(180deg, #1c1917, #0c0a09)" }}
              >
                <AvatarPlaceholder
                  initials="YN"
                  className="w-16 h-16 rounded-full text-lg"
                />
              </div>
            </div>
          </div>

          <div
            className="hero-entrance mx-auto w-full max-w-[190px]"
            style={{ animation: "hero-slide-up 0.6s ease-out 0.3s both" }}
          >
            <div className="relative bg-white border border-editor-border rounded-xl shadow-sm flex flex-col items-center w-full pt-8 pb-3 -rotate-[3deg]">
              <div className="absolute -top-8 w-16 h-16 rounded-full bg-stone-800 vinyl-spin flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#F7F1E8]" />
              </div>
              <p className="font-[family-name:var(--font-noto)] text-[11px] text-stone-400 mt-6">
                Vibe coding playlist
              </p>
            </div>
          </div>

          <div
            className="hero-entrance mx-auto w-full max-w-[190px] rotate-[3deg]"
            style={{ animation: "hero-slide-up 0.6s ease-out 0.4s both" }}
          >
            <div className="w-full rounded-lg overflow-hidden shadow-md" style={{ border: "1px solid #e7e5e4" }}>
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#FAFAF9] border-b border-editor-border">
                <div className="w-[9px] h-[9px] rounded-full bg-[#FF5F57]" />
                <div className="w-[9px] h-[9px] rounded-full bg-[#FEBC2E]" />
                <div className="w-[9px] h-[9px] rounded-full bg-[#28C840]" />
              </div>
              <div className="p-3 font-mono text-[10px] leading-[1.7] bg-white text-stone-500 min-h-[90px]">
                <p>$ whoami</p>
                <p className="text-stone-400">your-name</p>
                <p className="mt-1">$ status</p>
                <p className="text-stone-400">building.</p>
              </div>
            </div>
          </div>

          <div
            className="hero-entrance mx-auto w-full max-w-[190px] -rotate-[2deg]"
            style={{ animation: "hero-slide-up 0.6s ease-out 0.5s both" }}
          >
            <div className="relative bg-white border border-editor-border rounded-xl shadow-sm p-4 flex flex-col items-center gap-2">
              <FolderIcon color="#7EA4BE" dark="#8EB4CE" />
              <p className="font-[family-name:var(--font-noto)] text-[11px] text-stone-400">
                Tools I build with
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="scroll-mt-16 px-6 py-16 md:py-24">
        <div className="max-w-[720px] mx-auto flex flex-col items-center gap-10">
          <div
            className="relative bg-[#FDF6E3] rounded-md shadow-md p-6 max-w-[380px] rotate-[2deg]"
            style={{ boxShadow: "0 6px 16px rgba(0,0,0,0.12)" }}
          >
            <p className="font-[family-name:var(--font-noto)] text-[14px] text-stone-600 leading-[1.8] tracking-[0.02em]">
              {SIDE_NOTES_PROMPT}
            </p>
          </div>

          <div className="text-center">
            <p className="font-[family-name:var(--font-courier-prime)] text-lg md:text-xl text-stone-600 leading-relaxed">
              I turn ambiguity{" "}
              <ScribbleIcon className="inline-block w-10 h-5 text-stone-400 align-middle" />{" "}
              into clear product{" "}
              <span className="relative inline-block">
                <SparkleUnderline className="absolute -top-3 left-0 w-full h-3 text-amber-400" />
                design
              </span>{" "}
              direction and ship with cross-functional teams{" "}
              <span className="inline-flex items-center border border-stone-500 px-2.5 py-0.5 rounded-sm">
                at speed.
              </span>
            </p>
            <p className="font-[family-name:var(--font-courier-prime)] text-lg md:text-xl text-stone-600 leading-relaxed mt-6">
              <StarIcon className="inline-block w-6 h-6 text-amber-400 align-middle mr-1" />
              <span className="inline-flex items-center border border-stone-500 px-2.5 py-0.5 rounded-sm">
                I build with AI,
              </span>{" "}
              prototyping ideas and exploring the edge of design and technology.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- WORK ---------------- */}
      <section id="work" className="scroll-mt-16 px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto font-[family-name:var(--font-noto)]">
          <div
            className="relative bg-[#F5F5F4] rounded-2xl overflow-hidden border border-stone-300/40"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
          >
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-stone-300/30 bg-[#F0EDE6]/80">
              <div className="flex gap-1.5">
                <div className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
                <div className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
                <div className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[11px] text-stone-400">~/your-name/project</span>
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap border-b border-stone-300/30 bg-[#EDE9E2]/60 lg:hidden">
              {SIDEBAR_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-2 py-2 text-[11px] transition-colors ${
                    activeTab === tab ? "bg-[#E8E0D4] text-stone-800 font-medium" : "text-stone-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex min-h-[560px]">
              <div className="hidden lg:flex flex-col w-[170px] shrink-0 bg-[#EDE9E2]/60 border-r border-stone-300/30 py-3 px-2">
                <p className="text-[11px] font-medium text-stone-400 px-2 mb-1">Favorites</p>
                {SIDEBAR_TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left px-2 py-[5px] rounded-md text-[12px] transition-colors ${
                      activeTab === tab ? "bg-[#E8E0D4] text-stone-800" : "text-stone-600 hover:bg-stone-200/40"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex-1 p-6 md:p-8">
                {activeTab !== "Projects" ? (
                  <p className="text-stone-400 text-sm">More coming soon.</p>
                ) : (
                  <>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-6">
                      {FOLDERS.map((folder) => (
                        <button
                          key={folder.key}
                          onClick={() => setActiveFolder(folder.key)}
                          className="flex flex-col items-center gap-2.5 group cursor-pointer"
                        >
                          <FolderIcon color={folder.color} dark={folder.dark} />
                          <span
                            className={`text-[11px] leading-tight text-center transition-colors ${
                              activeFolder === folder.key ? "text-stone-800 font-medium" : "text-stone-500"
                            }`}
                          >
                            {folder.label}
                          </span>
                        </button>
                      ))}
                    </div>

                    {activeFolder && (
                      <div className="mt-10 border-t border-stone-300/40 pt-8">
                        <h3 className="text-stone-800 text-xl font-semibold mb-2">
                          {FOLDERS.find((f) => f.key === activeFolder)?.label}
                        </h3>
                        <p className="text-stone-500 text-sm mb-6 max-w-[520px]">
                          {FOLDER_CONTENT[activeFolder].blurb}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {FOLDER_CONTENT[activeFolder].items.map((item, i) => (
                            <div
                              key={item}
                              className="rounded-lg overflow-hidden border border-stone-300/40 bg-white"
                            >
                              <PhotoPlaceholder label={item} seed={i} className="h-28" />
                              <p className="p-3 text-xs text-stone-500">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PLAYGROUND ---------------- */}
      <section id="playground" className="scroll-mt-16 px-4 md:px-6 py-8">
        <div className="max-w-[1200px] mx-auto board-float">
          <div
            className="rounded-3xl p-3"
            style={{
              background: "linear-gradient(160deg, #d6cfc4 0%, #c9c0b3 20%, #bfb5a6 80%, #b5aa9a 100%)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.5)",
            }}
          >
            <div
              className="relative rounded-xl overflow-hidden"
              style={{ background: "#F7F1E8", minHeight: 560 }}
            >
              {BULLETIN_ITEMS.map((item, i) => (
                <div
                  key={item.label}
                  className="bulletin-card absolute rounded-md shadow-lg overflow-hidden"
                  style={{
                    top: item.top,
                    left: item.left,
                    width: item.w,
                    transform: `rotate(${item.rot}deg)`,
                    zIndex: i,
                  }}
                >
                  <PhotoPlaceholder label={item.label} seed={i} className="h-32" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <div className="flex flex-wrap justify-center gap-6 pt-12 pb-2 px-6">
        {(["X", "Figma", "Github", "LinkedIn", "Unsplash", "Threads"] as const).map((name) => (
          <a
            key={name}
            href="#"
            className="relative font-[family-name:var(--font-noto)] text-[14px] text-stone-500 flex items-center justify-center social-morph"
          >
            <span className="social-morph-text">{`{${name}}`}</span>
            <SocialIcon name={name} />
          </a>
        ))}
      </div>

      <footer className="w-full flex flex-col items-center gap-4 pt-2 pb-12">
        <div className="flex items-center gap-3">
          <StarIcon className="w-4 h-4 text-stone-500" />
          <p className="font-[family-name:var(--font-noto)] text-[13px] text-stone-600">
            Built with Claude Code
          </p>
          <StarIcon className="w-4 h-4 text-stone-500" />
        </div>
      </footer>
    </div>
  );
}
