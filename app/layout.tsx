import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AceIQ — AI Study Companion for CAPS & IEB",
  description: "AceIQ turns your textbooks into flashcards, tests, mind maps, and a personal AI tutor. Built for South African students Grade 8-12.",
  keywords: "AceIQ, CAPS study app, IEB study help, AI tutor South Africa, Afrikaans study help",
  openGraph: {
    title: "AceIQ — AI Study Companion",
    description: "Your AI Study Companion for CAPS & IEB. Grade 8-12.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/aceiq-icon.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
