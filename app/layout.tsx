import type { Metadata } from "next";
import { Noto_Sans, Courier_Prime } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name — Product Designer",
  description:
    "I think, then I build. Product Designer with hands-on experience shipping B2B and B2C products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${notoSans.variable} ${courierPrime.variable}`}>
      <body className="font-sans antialiased bg-[#F7F1E8] text-stone-700">
        {children}
      </body>
    </html>
  );
}
