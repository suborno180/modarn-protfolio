import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/navbar/NavBar";
import Footer from "@/components/common/footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dinesh S. Fernando - Industrial Engineering & Project Management Specialist",
  description: "15+ years experienced Industrial Engineering professional specializing in process optimization, lean manufacturing, and operational excellence across global apparel industries in Sri Lanka, Vietnam, and Bangladesh.",
  keywords: [
    "Industrial Engineering",
    "Project Management",
    "Lean Manufacturing",
    "Process Optimization",
    "Six Sigma",
    "TPM Implementation",
    "Operations Management",
    "Sri Lanka Industrial Engineer",
    "Apparel Manufacturing",
    "Cost Reduction",
    "Value Engineering",
    "Global Operations"
  ].join(", "),
  authors: [{ name: "Dinesh S. Fernando" }],
  creator: "Dinesh S. Fernando",
  publisher: "Dinesh S. Fernando",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph Metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dineshfernando.com", // Replace with actual domain
    title: "Dinesh S. Fernando - Industrial Engineering Specialist",
    description: "Expert Industrial Engineering professional with 15+ years of global experience in process optimization and lean manufacturing.",
    siteName: "Dinesh S. Fernando - Professional Portfolio",
    images: [
      {
        url: "/images/og-image.jpg", // Add a professional OG image
        width: 1200,
        height: 630,
        alt: "Dinesh S. Fernando - Industrial Engineering Specialist",
      },
    ],
  },

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "Dinesh S. Fernando - Industrial Engineering Specialist",
    description: "15+ years experienced Industrial Engineering professional | Process Optimization | Lean Manufacturing | Global Operations",
    creator: "@dineshfernando", // Replace with actual handle if available
    images: ["/images/og-image.jpg"],
  },

  // Additional SEO Metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification for search engines
  verification: {
    google: "your-google-verification-code", // Add when you have Google Search Console
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  // Alternate Languages
  alternates: {
    canonical: "https://dineshfernando.com", // Replace with actual domain
    languages: {
      "en-US": "https://dineshfernando.com",
    },
  },

  // Category and Classification
  category: "professional services",
  classification: "Industrial Engineering, Manufacturing, Operations Management",

  // Additional Metadata
  manifest: "/manifest.json", // If you have PWA setup
};


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
        <div data-theme={"light"} className="relative">
          <NavBar />
          {children}
          <div className="bg-[#2A374A]">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
