// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#ffffff" />
  <meta name="apple-mobile-web-app-title" content="Cyzium Academy" />
</head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full overflow-x-hidden bg-[#0a192f] text-white`}
        style={{ touchAction: "pan-y" }}
      >
        {children}

        {/* === Sitelinks / Navigation Schema === */}
        <Script
          id="sitelinks-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Cyzium Hacker Academy",
              "url": "https://cyziumacademy.com",
              "sameAs": [
                "https://www.instagram.com/cyziumacademy",
                "https://www.linkedin.com/company/cyziumacademy"
              ],
              "potentialAction": [
                { "@type": "ReadAction", "target": "https://cyziumacademy.com/about" },
                { "@type": "ReadAction", "target": "https://cyziumacademy.com/courses" },
                { "@type": "ReadAction", "target": "https://cyziumacademy.com/blogs" },
                { "@type": "ReadAction", "target": "https://cyziumacademy.com/hackathon" },
                { "@type": "ReadAction", "target": "https://cyziumacademy.com/contact" }
              ]
            })
          }}
        />

      </body>
    </html>
  );
}
