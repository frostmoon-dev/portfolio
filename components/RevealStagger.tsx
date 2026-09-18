"use client";

import { Children, CSSProperties, ElementType, ReactNode, isValidElement } from "react";
import { useInView } from "@/hooks/useInView";

/** Reveals its direct children one after another; wrapper divs stay transparent to grid/flex layout. */
export function RevealStagger({
  children,
  as: Tag = "div",
  className = "",
  style,
  stepMs = 55,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  stepMs?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag ref={ref} className={className} style={style}>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        return (
          <div className={`reveal ${inView ? "is-visible" : ""}`} style={{ transitionDelay: `${i * stepMs}ms` }}>
            {child}
          </div>
        );
      })}
    </Tag>
  );
}
