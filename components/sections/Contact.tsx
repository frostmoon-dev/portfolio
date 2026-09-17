"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <Reveal as="section" id="contact" className="bg-burgundy py-[70px] text-cream">
      <div className="mx-auto flex max-w-[1240px] flex-wrap gap-11 px-[26px]">
        <div className="min-w-[280px] flex-[1_1_360px]">
          <div
            aria-hidden="true"
            className="float-right mb-3 ml-[18px] flex h-[104px] w-[104px] flex-col items-center justify-center gap-1 rounded-full border-2 border-dashed border-teal/70"
            style={{ transform: "rotate(-9deg)" }}
          >
            <span className="font-script text-[26px] leading-none text-teal">kept</span>
            <span className="text-[9px] font-bold uppercase tracking-[.2em] text-rose">by hand</span>
            <span className="text-[9px] tracking-[.14em] text-sage">2026</span>
          </div>
          <p className="m-0 font-script text-[54px] leading-none text-teal">Say hello</p>
          <p className="mt-4 max-w-[46ch] text-lg leading-[1.7] text-cream">
            Work enquiries, cosplay talk, or a recommendation for something to watch — all welcome.
            I answer everything eventually.
          </p>
          <ul className="m-0 mt-7 flex list-none flex-col gap-3 p-0 text-[17px]">
            <li className="flex gap-4 border-b border-dashed border-cream/35 pb-3">
              <span className="w-[84px] flex-none pt-0.5 text-[11px] font-medium uppercase tracking-[.16em] text-teal">
                Email
              </span>
              <span className="text-[#f3ddc4]">add your address</span>
            </li>
            <li className="flex gap-4 border-b border-dashed border-cream/35 pb-3">
              <span className="w-[84px] flex-none pt-0.5 text-[11px] font-medium uppercase tracking-[.16em] text-rose">
                GitHub
              </span>
              <a href="https://github.com/frostmoon-dev" className="text-cream">
                frostmoon-dev
              </a>
            </li>
            <li className="flex gap-4">
              <span className="w-[84px] flex-none pt-0.5 text-[11px] font-medium uppercase tracking-[.16em] text-sage">
                Instagram
              </span>
              <span className="text-[#f3ddc4]">add your handle</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (note.trim()) setSent(true);
          }}
          className="min-w-[280px] flex-[1_1_320px] rounded-[18px] border border-teal bg-paper p-6"
        >
          <label htmlFor="note" className="block text-[11px] font-medium uppercase tracking-[.16em] text-teal-deep">
            Leave a note
          </label>
          <textarea
            id="note"
            rows={4}
            value={note}
            onChange={(e) => {
              setNote(e.target.value.slice(0, 300));
              setSent(false);
            }}
            placeholder="saw your page, wanted to say…"
            className="mt-2 w-full resize-y rounded-[14px] border border-burgundy/30 bg-cream-soft p-3 font-sans text-base leading-[1.55] text-ink"
          />
          <div className="mt-3 flex items-center justify-between gap-3">
            <span className="text-[13px] text-ink-muted">{note.length}/300</span>
            <button
              type="submit"
              className="min-h-[46px] rounded-full border border-burgundy-deep bg-burgundy px-[22px] font-sans text-[12px] font-bold uppercase tracking-[.14em] text-cream-soft transition-colors duration-150 ease-in-out hover:bg-burgundy-deep active:translate-y-px"
            >
              Send note
            </button>
          </div>
          <p role="status" className="mt-3 text-[15px] leading-[1.55] text-teal-deep">
            {sent ? "Saved on this page. Add a real email address and it will send for real." : ""}
          </p>
        </form>
      </div>
    </Reveal>
  );
}
