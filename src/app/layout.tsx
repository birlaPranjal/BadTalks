import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BAD TALKS by MU_IEEE",
  description: "An inspiring event featuring top entrepreneurs, held in the 2nd week of September at Medicaps Indore. Key speakers include Divyank Sood, Sarthak Mittal, Benjamin (Eisenstein) Miller, and Pratham Sahu. The event is supported by significant contributions towards logistics and speaker accommodations, ensuring a seamless experience.",
  keywords: [
    "Founders Talk", "BAD TALKS", "Medicaps Indore", "Divyank Sood", 
    "Sarthak Mittal", "Benjamin Miller", "Pratham Sahu", 
    "Entrepreneurship", "Innovation", "Youth Leadership", 
    "Business Talks", "Indore Events"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Analytics/>
        {children}
        
        </body>
    </html>
  );
}
