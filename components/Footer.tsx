import { Ticker } from "@/components/Ticker";

export function Footer() {
  return (
    <>
      <Ticker
        text="thank you for reading  ·  come back when the shelf grows  ·  thank you for reading  ·  come back when the shelf grows  ·  "
        reverse
        rotate={1}
        background="#96c1c5"
        border="#7fb0b5"
        color="#31221f"
        durationClassName="animate-ticker-reverse"
      />

      <footer className="border-t border-teal bg-cream-soft py-[26px]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3.5 px-[26px]">
          <p className="m-0 text-[13px] leading-[1.7] text-ink-muted">
            Kept by hand · last tidied 16 September 2026
          </p>
          <p className="m-0 text-[13px] leading-[1.7] text-ink-muted">
            Mood: patient, over-caffeinated, halfway through a sleeve
          </p>
          <p className="m-0 text-[13px] leading-[1.7]">
            <a href="#top">Back to top</a>
          </p>
        </div>
      </footer>
    </>
  );
}
