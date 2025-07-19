import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DarkVeil from "@/Reactbits/DarkVeil/DarkVeil";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: "Khoi Do | Software Engineer",
  description: "Portfolio of Khoi Do, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} antialiased relative bg-gray-900 text-white`}
      >
        {/* DarkVeil Background */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-80">
          <DarkVeil />
        </div>
        
        <Navbar />
        <main className="min-h-screen pt-24 relative z-10">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}