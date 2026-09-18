"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kuala_Lumpur",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export function StatusGadget() {
  // Starts empty so server and first client render match; fills in after mount.
  const [time, setTime] = useState("");
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    setTime(fmt.format(new Date()));
    const id = setInterval(() => setTime(fmt.format(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    // The footer also lives bottom-left — step out of its way once it's in view,
    // instead of sitting on top of its text.
    const footer = document.querySelector(".site-footer");
    if (!footer || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setNearFooter(entry.isIntersecting), {
      rootMargin: "0px",
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`status-gadget ${nearFooter ? "is-hidden" : ""}`} aria-hidden="true">
      <span className="status-blink" />
      <span className="status-text">
        MY <span className="status-time">{time || "--:--:--"}</span> · open to work
      </span>
    </div>
  );
}
