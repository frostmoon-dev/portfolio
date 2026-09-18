import type { Metadata } from "next";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SideDock } from "@/components/SideDock";
import { StatusGadget } from "@/components/StatusGadget";

export const metadata: Metadata = {
  title: "Teha — ERP Developer & UI/UX Enthusiast",
  description:
    "Teha is an ERP developer and UI/UX enthusiast based in Malaysia, turning enterprise software nobody enjoys into interfaces that quietly just work.",
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
    "ERP developer and UI/UX enthusiast turning enterprise software into interfaces that quietly just work.",
  homeLocation: {
    "@type": "Place",
    name: "Malaysia",
  },
  knowsAbout: ["ERP Development", "UI/UX Design", "Interaction Design", "Costume Making"],
  sameAs: ["https://github.com/frostmoon-dev"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
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
