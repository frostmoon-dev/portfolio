"use client";

import { Children, CSSProperties, ElementType, ReactNode, isValidElement } from "react";
import { useInView } from "@/hooks/useInView";

/** Reveals its direct children one after another. Wrapper divs stay transparent to grid/flex layout. */
export function RevealStagger({
  children,
  as: Tag = "div",
  className = "",
  style,
  stepMs = 70,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  stepMs?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });
  return (
    <Tag ref={ref} className={className} style={style}>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        return (
          <div
            className={`transition-all duration-500 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[14px]"}`}
            style={{ transitionDelay: `${i * stepMs}ms` }}
          >
            {child}
          </div>
        );
      })}
    </Tag>
  );
}
