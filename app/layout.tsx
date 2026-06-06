import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AceIQ — Your AI Study Companion for CAPS & IEB",
  description: "AceIQ turns your textbooks into flashcards, tests, mind maps, and a personal AI tutor. Built for South African Grade 10-12 students. English & Afrikaans.",
  keywords: "AceIQ, CAPS study app, IEB study help, Afrikaans study, AI tutor South Africa, Grade 10-12, flashcards, practice tests, mind maps",
  authors: [{ name: "Dandelion Seedlings" }],
  openGraph: {
    title: "AceIQ — AI Study Companion for CAPS & IEB",
    description: "Turn your textbooks into flashcards, tests, and AI tutoring. Built for South African students.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
