import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vibiz Inc. - AI-Powered Funnels from Conversations",
  description: "Transform your customer conversations into high-converting landing pages, ads, and leads with our AI-powered funnel builder. No design skills required.",
  keywords: "AI funnel builder, conversation to landing page, automated marketing funnels, lead generation, SaaS",
  authors: [{ name: "Vibiz Inc." }],
  creator: "Vibiz Inc.",
  publisher: "Vibiz Inc.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vibizinc.com",
    title: "Vibiz Inc. - AI-Powered Funnels from Conversations",
    description: "Transform your customer conversations into high-converting landing pages, ads, and leads with our AI-powered funnel builder.",
    siteName: "Vibiz Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibiz Inc. - AI-Powered Funnels from Conversations",
    description: "Transform your customer conversations into high-converting landing pages, ads, and leads with our AI-powered funnel builder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
