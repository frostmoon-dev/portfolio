// File: app/layout.tsx
// Mission: Update global metadata for personalization.

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // MODIFICATION: Updated title
  title: "Nurfatihah Muhammad - Software Developer",
  // MODIFICATION: Updated description to reflect your dual specialties
  description: "Software Developer specializing in D365, Business Central, React, and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}