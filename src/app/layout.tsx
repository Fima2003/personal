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
  title: "Yukhym (Fima) Rubin | Engineer, Robotics & AI",
  description: "Personal website of Yukhym (Fima) Rubin - a 22-year-old engineer specializing in software, robotics, CAD, and AI. Curious mind and innovative solution-driven personality.",
  keywords: [
    "Yukhym Rubin", "Fima Rubin", "Fima", "Yukhym",
    "Software Engineer", "Software Developer", "Engineer", "Developer", "Expert",
    "Robotics", "Robotics Engineer", "AI", "Artificial Intelligence", "Machine Learning",
    "CAD", "Mechanical Design", "Automation",
    "Israel", "Israeli Engineer", "Israeli Developer", "Tel Aviv", "Haifa",
    "Full Stack", "Full Stack Developer", "Backend", "Frontend",
    "Python", "TypeScript", "React", "Next.js",
    "Telesens", "Ruby.AI",
    "Portfolio", "Personal Website", "Tech Portfolio"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Yukhym (Fima) Rubin | Engineer & Developer",
    description: "Discover the professional journey, projects, and hobbies of Yukhym (Fima) Rubin.",
    url: "https://yukhym-rubin.com", 
    siteName: "Yukhym Rubin Portfolio",
    images: [
      {
        url: "/images/fima_profile.webp",
        width: 800,
        height: 600,
        alt: "Yukhym (Fima) Rubin",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yukhym (Fima) Rubin | Engineer",
    description: "Personal website of Yukhym (Fima) Rubin - a 22-year-old engineer specializing in software, robotics, CAD, and AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import CustomCursor from "@/components/CustomCursor";

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
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
