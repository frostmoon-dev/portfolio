"use client";

import { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

export function Reveal({
  children,
  as: Tag = "div",
  id,
  className = "",
  style,
  delayMs = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  id?: string;
  className?: string;
  style?: CSSProperties;
  delayMs?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.08, rootMargin: "0px 0px -12% 0px" });
  return (
    <Tag
      ref={ref}
      id={id}
      className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"} ${className}`}
      style={{ transitionDelay: `${delayMs}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
