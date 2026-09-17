import type { Metadata } from "next";
import { DM_Serif_Text, DM_Sans, Pinyon_Script } from "next/font/google";
import "./globals.css";

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nurfatihah",
  description:
    "ERP developer by day, interface designer by conviction. Enterprise software, UI/UX, cosplay, and film photography.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifText.variable} ${dmSans.variable} ${pinyonScript.variable}`}
    >
      <body className="font-sans antialiased bg-cream text-ink">{children}</body>
    </html>
  );
}
