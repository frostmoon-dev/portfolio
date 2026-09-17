"use client";

import { useRef } from "react";

/** Drag-to-scroll behavior for a horizontal strip, with click-suppression after a real drag. */
export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const state = useRef({ down: false, startX: 0, startLeft: 0, moved: false });

  function onPointerDown(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    state.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
    el.style.cursor = "grabbing";
    el.style.scrollSnapType = "none";
  }

  function onPointerMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el || !state.current.down) return;
    const dx = e.clientX - state.current.startX;
    if (Math.abs(dx) > 3) state.current.moved = true;
    el.scrollLeft = state.current.startLeft - dx;
  }

  function endDrag() {
    const el = ref.current;
    if (!el) return;
    state.current.down = false;
    el.style.cursor = "grab";
    el.style.scrollSnapType = "x mandatory";
  }

  function onClickCapture(e: React.MouseEvent) {
    if (state.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  return { ref, onPointerDown, onPointerMove, onPointerUp: endDrag, onPointerLeave: endDrag, onClickCapture };
}
