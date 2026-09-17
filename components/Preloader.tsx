"use client";

export function Preloader({ loading }: { loading: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[70] flex flex-col items-center justify-center gap-5 bg-cream transition-[opacity,visibility] duration-[650ms] ease-in-out"
      style={{
        backgroundImage:
          "linear-gradient(rgba(150,193,197,.38) 1px,transparent 1px),linear-gradient(90deg,rgba(150,193,197,.38) 1px,transparent 1px)",
        backgroundSize: "26px 26px",
        opacity: loading ? 1 : 0,
        visibility: loading ? "visible" : "hidden",
        pointerEvents: loading ? "auto" : "none",
      }}
    >
      <p className="m-0 font-script text-burgundy" style={{ fontSize: "clamp(46px,8vw,76px)", lineHeight: 1 }}>
        Nurfatihah
      </p>
      <div className="h-[10px] w-[min(240px,62vw)] rounded-full border border-teal bg-paper p-[2px]">
        <div className="h-full rounded-full bg-teal animate-fill" />
      </div>
      <p className="m-0 text-[11px] font-medium uppercase tracking-[.24em] text-teal-deep">
        setting out the shelf
      </p>
    </div>
  );
}
