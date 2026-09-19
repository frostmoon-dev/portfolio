import type { Metadata } from "next";
import { DM_Sans, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SideDock } from "@/components/SideDock";
import { StatusGadget } from "@/components/StatusGadget";

// DM Sans carries all the reading: variable weight (so hierarchy comes from
// real weights again, not just size) and an optical-size axis, which opens
// the letterforms up at caption sizes where a display face closes in.
// Pinyon Script is kept for display only — the name and the big headings.
const bodySans = DM_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-sans",
});

const displayScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Teha — Cosplay, Games & Dreams on Loop",
  description:
    "Teha's corner for cosplay builds, games, and anime/manga — the long way around to morning. Off the clock from ERP development and UI/UX work.",
  icons: {
    icon: "/favicon.svg",
  },
};

const THEME_INIT = `
  try {
    var saved = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", saved || "dark");
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
`;

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Teha",
  jobTitle: "ERP Developer",
  description:
    "Cosplayer, gamer, and anime/manga fan based in Malaysia. ERP developer and UI/UX enthusiast by profession.",
  homeLocation: {
    "@type": "Place",
    name: "Malaysia",
  },
  knowsAbout: ["Cosplay", "Costume Making", "Anime", "Video Games", "ERP Development", "UI/UX Design"],
  sameAs: ["https://github.com/frostmoon-dev"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // THEME_INIT below rewrites data-theme from localStorage before React
    // hydrates, so the server's "dark" won't match the DOM for anyone who
    // picked light. suppressHydrationWarning tells React to keep the DOM's
    // value instead of treating it as an error — without it React recovers
    // by re-rendering this boundary, which throws away the script's work and
    // flashes the wrong theme. It only covers this element's own attributes,
    // not the tree below it.
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${bodySans.variable} ${displayScript.variable}`}
    >
      <head>
        {/* Set before paint so the toggle doesn't flash the wrong theme on load. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
      </head>
      <body>
        <ThemeToggle />
        <SideDock />
        <StatusGadget />
        {children}
      </body>
    </html>
  );
}
