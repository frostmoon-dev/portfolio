"use client";

import { usePathname } from "next/navigation";
import { Reveal } from "@/components/Reveal";

const CROSS_LINK: Record<string, { href: string; label: string }> = {
  "/": { href: "/hobbies", label: "Hobbies & likes" },
  "/hobbies": { href: "/", label: "Work" },
};

export function Footer() {
  const pathname = usePathname();
  const crossLink = CROSS_LINK[pathname] ?? CROSS_LINK["/"];

  return (
    <Reveal as="footer" className="site-footer">
      <div className="wrap footer-inner">
        <p className="footer-line">
          Kept by hand · Teha<span className="zh">(テハ)</span> · {new Date().getFullYear()}
        </p>
        <nav className="footer-links" aria-label="More">
          <a href={crossLink.href} className="footer-top">
            {crossLink.label} →
          </a>
          <a href="#top" className="footer-top">
            Back to top ↑
          </a>
        </nav>
      </div>
    </Reveal>
  );
}
