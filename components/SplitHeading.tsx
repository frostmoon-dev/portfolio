"use client";

import { ElementType, Fragment } from "react";
import { useInView } from "@/hooks/useInView";

export function SplitHeading({
  text,
  as: Tag = "h2",
  className = "",
  immediate = false,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  immediate?: boolean;
}) {
  const { ref, inView } = useInView<HTMLHeadingElement>({ threshold: 0.25 });
  const words = text.split(" ");
  const show = immediate || inView;

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        // The separating space must live outside the overflow:hidden clip span —
        // trailing whitespace inside an inline-block gets collapsed away by the browser.
        <Fragment key={`${word}-${i}`}>
          <span className="split-word-clip">
            <span
              className={`split-word-inner ${show ? "is-visible" : ""}`}
              style={{ transitionDelay: `${(i * 0.048).toFixed(3)}s` }}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Tag>
  );
}
