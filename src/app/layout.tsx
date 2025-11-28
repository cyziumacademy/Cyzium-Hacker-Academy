// app/layout.tsx
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
  title: "Cyzium Hacker Academy",
  description: "Learn Ethical Hacking & Cybersecurity",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="Cyzium Academy" />

        {/* ✅ Google Structured Data for Logo (This makes your logo appear in Google Search) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cyzium Hacker Academy",
              url: "https://cyziumacademy.com",
              logo: "https://cyziumacademy.com/logo.png", // ← Replace with your logo file path
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 9567190676",
                contactType: "customer support",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full overflow-x-hidden bg-[#0a192f] text-white`}
        style={{ touchAction: "pan-y" }} // prevents horizontal slide on mobile
      >
        {children} {/* Page content will render here */}
      </body>
    </html>
  );
}
