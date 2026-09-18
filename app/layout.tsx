import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SideDock } from "@/components/SideDock";
import { StatusGadget } from "@/components/StatusGadget";

export const metadata: Metadata = {
  title: "Teha — Cosplay, Games & Whatever I'm Watching",
  description:
    "Teha's corner for cosplay builds, games, and anime/manga — off the clock from ERP development and UI/UX work.",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
};

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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
      </head>
      <body>
        <SideDock />
        <StatusGadget />
        {children}
      </body>
    </html>
  );
}
