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
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delayMs}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
