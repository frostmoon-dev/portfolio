import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Reveal
      as="section"
      id="about"
      className="mx-auto my-[34px] mb-[26px] flex flex-wrap gap-9 rounded-[24px] border border-burgundy/[.18] bg-cream-soft p-[clamp(28px,4vw,54px)]"
      style={{ maxWidth: 1240 }}
    >
      <h2 className="sticky top-[82px] m-0 w-[140px] flex-none self-start pt-2 text-[11px] font-medium uppercase tracking-[.2em] text-teal-deep">
        About
      </h2>
      <div className="min-w-[280px] flex-[1_1_430px]">
        <p className="m-0 mb-5 max-w-[34ch] font-serif text-[clamp(23px,2.5vw,30px)] leading-[1.38] text-burgundy">
          A field in the wrong place costs someone an afternoon. That is why I care about screens.
        </p>
        <p className="m-0 mb-4 max-w-[68ch] text-lg leading-[1.75] text-ink-soft">
          My working hours go into enterprise systems — purchase orders, stock counts, month-end
          closings. The sort of software people only notice when it goes wrong, running quietly
          behind a business that would rather not think about it at all.
        </p>
        <p className="m-0 mb-4 max-w-[68ch] text-lg leading-[1.75] text-ink-soft">
          Working on it taught me something I did not expect to care about so much. The interface
          is not decoration; it is where the work actually happens. So I read design the way other
          people read novels, and I redraw our internal screens until they stop making anyone sigh.
        </p>
        <p className="m-0 max-w-[68ch] text-lg leading-[1.75] text-ink-soft">
          Away from the desk I am a fairly ordinary anime, comics and games person. I photograph
          small things, I sew costumes badly and then better, and I keep this page by hand.
        </p>
        <div className="ml-auto mt-[30px] max-w-[300px] rotate-[1.4deg] rounded-[4px] border border-burgundy/[.18] bg-note px-5 py-[18px] shadow-[0_8px_16px_-14px_rgba(61,43,41,.6)] transition-transform duration-200 ease-in-out hover:rotate-0">
          <p className="m-0 mb-1.5 text-[10px] font-bold uppercase tracking-[.2em] text-[#8c5a4e]">
            Pinned note
          </p>
          <p className="m-0 font-serif text-[19px] italic leading-[1.45] text-ink">
            Mood: patient, over-caffeinated, halfway through a sleeve
          </p>
        </div>
      </div>
    </Reveal>
  );
}
