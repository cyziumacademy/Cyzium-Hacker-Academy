// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./footer"; // <-- make sure the path is correct
import AppWrapper from "@/app/AppWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyzium Hacker Academy",
  description: "Learn Ethical Hacking & Cybersecurity",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full overflow-x-hidden bg-[#0a192f] text-white`}
        style={{ touchAction: "pan-y" }} // prevents horizontal slide on mobile
      >
        {children} {/* Page content will render here */}
      </body>
    </html>
  );
}


