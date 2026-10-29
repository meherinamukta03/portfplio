import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Meherina Mukta | Aspiring Full-Stack Web Developer",
  description:
    "Personal Portfolio of Meherina Mukta — CSE student at Green University of Bangladesh, passionate about building responsive, modern, and performant full-stack web applications with Next.js, React, and Node.js.",
  keywords: [
    "Meherina Mukta",
    "Full-Stack Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Green University of Bangladesh",
    "Portfolio",
    "Dhaka Developer",
  ],
  authors: [{ name: "Meherina Mukta" }],
  creator: "Meherina Mukta",
  openGraph: {
    title: "Meherina Mukta | Aspiring Full-Stack Web Developer",
    description:
      "CSE student at Green University of Bangladesh and Aspiring Full-Stack Web Developer. Explore projects, technical skills, and academic achievements.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
