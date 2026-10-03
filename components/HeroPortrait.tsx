import { MOTH_VIEWBOX, MothPaths } from "@/components/MothShape";

/**
 * The hero's focal image: the avatar in an arched specimen frame, with a moth
 * pinned to its shoulder. Without it the hero was text in a box — nothing for
 * the eye to land on first. Decorative, so it stays out of the a11y tree; the
 * name beside it already says who this is.
 */
export function HeroPortrait() {
  return (
    <figure className="hero-portrait" aria-hidden="true">
      <div className="portrait-arch">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/avatar.png" alt="" width={736} height={736} />
      </div>
      <svg className="portrait-pin" viewBox={MOTH_VIEWBOX} fill="currentColor">
        <MothPaths antennae />
      </svg>
      <figcaption className="portrait-tag">Specimen · No. 01</figcaption>
    </figure>
  );
}
