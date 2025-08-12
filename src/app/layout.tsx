import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kanjigrind.netlify.app/"),
  title: "Kanji Grind",
  description: "Kanji Recognition quiz app",
  keywords: [
    "Kanji",
    "Quiz",
    "kanji quiz",
    "jlpt",
    "jlpt kanji",
    "jlpt kanji quiz",
  ],
  authors: [
    {
      name: "Kanji Grind",
      url: "https://bhuvanesh-personal.netlify.app/",
    },
  ],
  openGraph: {
    title: "Kanji Grind",
    description: "Kanji Recognition quiz app",
    url: "https://kanjigrind.netlify.app/",
    siteName: "Kanji Grind",
    images: [
      {
        url: "/logos/logo.ico", // or a full URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/logos/logo.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
