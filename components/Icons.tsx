type IconProps = { className?: string };

/** Original simple line-doodle icon set — hand-drawn feel via slightly irregular
 * strokes, not traced from any reference art. */

export function StarDoodle({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2.5c.6 3.1 1.4 5.7 2.6 6.9 1.2 1.2 3.8 2 6.9 2.6-3.1.6-5.7 1.4-6.9 2.6-1.2 1.2-2 3.8-2.6 6.9-.6-3.1-1.4-5.7-2.6-6.9-1.2-1.2-3.8-2-6.9-2.6 3.1-.6 5.7-1.4 6.9-2.6 1.2-1.2 2-3.8 2.6-6.9z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeartDoodle({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 20.2S3.6 15.3 3.6 9.4c0-3 2.3-5 4.9-5 1.7 0 3.1.9 3.5 2.3.4-1.4 1.8-2.3 3.5-2.3 2.6 0 4.9 2 4.9 5 0 5.9-8.4 10.8-8.4 10.8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MusicNoteDoodle({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M9 18c0 1.4-1.3 2.5-3 2.5S3 19.4 3 18s1.3-2.5 3-2.5 3 1.1 3 2.5zm0 0V5.8L19 4v11.3M19 15.3c0 1.4-1.3 2.5-3 2.5s-3-1.1-3-2.5 1.3-2.5 3-2.5 3 1.1 3 2.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CameraDoodle({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 8.5h2.2l1-2h9.6l1 2H20a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="14" r="3.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function BookDoodle({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 5.2c2.4-1 5.3-1 8 .3 2.7-1.3 5.6-1.3 8-.3v14c-2.4-1-5.3-1-8 .3-2.7-1.3-5.6-1.3-8-.3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 5.5V19" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ControllerDoodle({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6.5 9h11l2 6.3a2 2 0 0 1-2 2.6c-.8 0-1.5-.4-1.8-1.1l-.7-1.4H9l-.7 1.4c-.4.7-1 1.1-1.8 1.1a2 2 0 0 1-2-2.6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M8.5 11.5v2.4M7.3 12.7h2.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="16" cy="12" r="0.9" fill="currentColor" />
      <circle cx="16" cy="14.4" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function PaintbrushDoodle({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M18.8 3.6c1 .9 1 2.3 0 3.4l-6.7 6.7-3-3 6.7-6.7c1-1 2.5-1 3 .6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 10.8 6 14c-1.2 1.2-1.4 2.9-2.2 4.4 1.6-.6 3.3-1 4.5-2.1l3-3.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkleTriple({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 40 20" fill="none" className={className}>
      <path d="M6 2v6M3 5h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M20 6v8M16 10h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M33 3v5M30.5 5.5h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function SquiggleUnderline({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 100 12" fill="none" className={className} preserveAspectRatio="none">
      <path
        d="M2 8c8-6 16-6 24 0s16 6 24 0 16-6 24 0 16 6 22 0"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PawDoodle({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="15" rx="5.2" ry="4.2" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="6.5" cy="9" rx="1.8" ry="2.2" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="10.3" cy="6.3" rx="1.8" ry="2.2" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="13.7" cy="6.3" rx="1.8" ry="2.2" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="17.5" cy="9" rx="1.8" ry="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const socialPaths: Record<string, string> = {
  X: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  Github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  LinkedIn:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  Mail: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1.4 1.8 7.2 6 7.2-6",
};

export function SocialIcon({ name }: { name: keyof typeof socialPaths }) {
  return (
    <svg
      className="w-[16px] h-[16px]"
      viewBox="0 0 24 24"
      fill={name === "Mail" ? "none" : "currentColor"}
      stroke={name === "Mail" ? "currentColor" : "none"}
      strokeWidth={name === "Mail" ? 1.6 : 0}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={socialPaths[name]} />
    </svg>
  );
}
