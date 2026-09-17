import type { Metadata } from "next";
import { Fraunces, Karla, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Your Name — About Me",
  description:
    "Personal corner of the internet: who I am, what I make, and what I'm into.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${karla.variable} ${caveat.variable}`}
    >
      <body className="font-body antialiased bg-bg text-ink">{children}</body>
    </html>
  );
}
