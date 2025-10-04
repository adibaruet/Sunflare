import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import "animate.css";
import { NavbarHome } from "@/components/Home/Navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunflare | NASA Space Apps 2025",
  description:
    "Sunflare: Sailing with the Sun – A whimsical adventure exploring solar flares and space weather. Built for NASA Space Apps 2025 by Team iT3rat0r. AI tools used responsibly: OpenAI, DeepSeek, Gemini, and Steve AI for story, PDF, and animations.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "NASA Space Apps",
    "Sunflare",
    "Solar Storm",
    "Space Weather",
    "Educational Story",
    "AI Project",
    "Team iT3rat0r",
  ],
  authors: [{ name: "Team iT3rat0r" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black min-h-screen ${merriweather.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <div className="bg-black sticky top-0 z-50">
            <NavbarHome />
          </div>

          <SmoothCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
