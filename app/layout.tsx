import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HHB Inc. - AI Copilot for Medical Device Field Representatives",
  description:
    "Revolutionary AI-powered software suite that transforms medical device documentation into intelligent, searchable data for field representatives and trainees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Coda:wght@400;800&display=swap" rel="stylesheet" />

      </head>
      <body className="font-coda antialiased">
        {children}
      </body>
    </html>
  );
}
