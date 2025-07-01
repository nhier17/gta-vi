import type { Metadata } from "next";
import {  League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GTA VI",
  description: "Rockstar Games Brings you GTA VI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
