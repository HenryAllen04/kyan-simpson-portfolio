/**
 * =============================================================================
 * KYAN SIMPSON - PORTFOLIO LAYOUT
 * =============================================================================
 * 
 * This file controls the global metadata and layout for the entire website.
 * 
 * TO CUSTOMIZE:
 * - Update the title, description, and social media info below
 * - Change the URL to your deployed website
 * - Update Twitter/X handle if you have one
 * 
 * =============================================================================
 */

import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// =============================================================================
// SITE METADATA - Edit these values to customize your site
// =============================================================================
export const metadata: Metadata = {
  // The title shown in browser tabs and search results
  title: "Kyan Simpson - Finance & Economics",
  
  // Description shown in search results (keep it under 160 characters)
  description: "Mathematics and Economics student at Amherst College. Investment Banking at Broadhaven Capital Partners. Private Equity experience at MiddleGround Capital and Shoals Growth Partners.",
  
  // OpenGraph settings for link previews on social media
  openGraph: {
    title: "Kyan Simpson - Finance & Economics",
    description: "Mathematics and Economics student at Amherst College. Investment Banking at Broadhaven Capital Partners. Private Equity experience at MiddleGround Capital and Shoals Growth Partners.",
    url: "https://kyansimpson.com", // TODO: Update with your actual domain
    siteName: "Kyan Simpson",
    locale: "en_US",
    type: "website",
  },
  
  // Twitter/X card settings (optional - remove if not needed)
  twitter: {
    card: "summary",
    title: "Kyan Simpson - Finance & Economics",
    description: "Mathematics and Economics student at Amherst College. Investment Banking at Broadhaven Capital Partners.",
    // site: "@yourtwitterhandle", // Uncomment and add your handle
    // creator: "@yourtwitterhandle",
  },
  
  // Author information
  authors: [{ name: "Kyan Simpson" }],
  manifest: "/site.webmanifest",
};

// =============================================================================
// VIEWPORT SETTINGS - Usually no need to change these
// =============================================================================
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1c1c" },
  ],
};

// =============================================================================
// ROOT LAYOUT - The wrapper for all pages
// =============================================================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon - uses the KS logo */}
        <link rel="icon" href="/kslogo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/kslogo.svg" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        {children}
        {/* Vercel Analytics - tracks page views (optional, can be removed) */}
        <Analytics />
      </body>
    </html>
  );
}
