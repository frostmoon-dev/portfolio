"use client";

import { useEffect, useRef } from "react";

export function LensBio() {
  const hostRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const btn = btnRef.current;
    const card = cardRef.current;
    if (!host || !btn || !card) return;

    const noHover = window.matchMedia("(hover: none)").matches;

    function place() {
      const GAP = window.innerWidth <= 560 ? 3 : 10;
      card!.style.left = "0px";
      const hostR = host!.getBoundingClientRect();
      const btnR = btn!.getBoundingClientRect();
      const w = card!.offsetWidth;
      const h = card!.offsetHeight;

      let left = btnR.left + btnR.width / 2 - hostR.left - w / 2;
      let maxLeft = hostR.width - w;
      if (maxLeft < 0) maxLeft = 0;
      if (left > maxLeft) left = maxLeft;
      if (left < 0) left = 0;
      card!.style.left = left + "px";

      if (btnR.top - GAP - h >= 8) {
        card!.classList.remove("is-below");
        card!.style.top = "auto";
        card!.style.bottom = hostR.bottom - btnR.top + GAP + "px";
      } else {
        card!.classList.add("is-below");
        card!.style.bottom = "auto";
        card!.style.top = btnR.bottom - hostR.top + GAP + "px";
      }
    }

    let closeTimer: ReturnType<typeof setTimeout> | null = null;
    function open() {
      if (closeTimer) clearTimeout(closeTimer);
      place();
      card!.classList.add("is-open");
      btn!.setAttribute("aria-expanded", "true");
    }
    function close() {
      card!.classList.remove("is-open");
      btn!.setAttribute("aria-expanded", "false");
    }
    function lazyClose() {
      if (closeTimer) clearTimeout(closeTimer);
      closeTimer = setTimeout(close, 140);
    }

    function onResize() {
      if (card!.classList.contains("is-open")) place();
    }
    window.addEventListener("resize", onResize);

    function onDocClick(e: MouseEvent) {
      if (!card!.contains(e.target as Node)) close();
    }
    function onBtnClickTouch(e: MouseEvent) {
      e.stopPropagation();
      if (card!.classList.contains("is-open")) close();
      else open();
    }
    function onBtnClickHover(e: MouseEvent) {
      e.preventDefault();
    }
    function onCardEnter() {
      if (closeTimer) clearTimeout(closeTimer);
    }

    if (noHover) {
      btn.addEventListener("click", onBtnClickTouch);
      document.addEventListener("click", onDocClick);
    } else {
      btn.addEventListener("mouseenter", open);
      btn.addEventListener("mouseleave", lazyClose);
      card.addEventListener("mouseenter", onCardEnter);
      card.addEventListener("mouseleave", lazyClose);
      btn.addEventListener("click", onBtnClickHover);
    }
    btn.addEventListener("focus", open);
    btn.addEventListener("blur", lazyClose);

    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeydown);
      btn.removeEventListener("click", onBtnClickTouch);
      btn.removeEventListener("click", onBtnClickHover);
      btn.removeEventListener("mouseenter", open);
      btn.removeEventListener("mouseleave", lazyClose);
      btn.removeEventListener("focus", open);
      btn.removeEventListener("blur", lazyClose);
      card.removeEventListener("mouseenter", onCardEnter);
      card.removeEventListener("mouseleave", lazyClose);
      if (closeTimer) clearTimeout(closeTimer);
    };
  }, []);

  return (
    <div className="bio">
      <p>
        I like the gap between a screen that technically works and one that doesn&rsquo;t make
        anyone sigh. That&rsquo;s where I sketch flows, argue about field order, and turn a process
        nobody enjoys into something that runs quietly in the background.
      </p>
      <div className="lens-host" ref={hostRef}>
        <p>
          My path runs through{" "}
          <button
            type="button"
            className="lens"
            ref={btnRef}
            aria-expanded="false"
            aria-controls="lensCard"
          >
            <span className="highlight">ERP systems, interface design, and costume making</span>
          </button>{" "}
          — not separate jobs, just one habit: build the thing, make it easier to use, then make
          it yours.
        </p>
        <div className="lens-card" id="lensCard" role="group" aria-label="Background" ref={cardRef}>
          <p className="lens-tag">Day work</p>
          <div className="lens-items">
            <p>ERP Developer — purchase orders, stock, month-end close</p>
          </div>
          <p className="lens-tag">Practice</p>
          <div className="lens-items">
            <p>UI/UX design — flows, form layouts, small usability repairs</p>
          </div>
          <p className="lens-tag">Off the clock</p>
          <div className="lens-items">
            <p>Costume making — patterning, foam, paint, late nights before a convention</p>
          </div>
        </div>
      </div>
      <p>
        I&rsquo;m based in Malaysia, where most of my free evenings go to conventions, a sewing
        machine, and finishing &ldquo;just one more episode.&rdquo;
      </p>
    </div>
  );
}
