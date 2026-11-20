import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nirav-mathukiya.vercel.app"),
  title: "Nirav Mathukiya | ASP.NET Core Developer Portfolio",
  description: "Systems Blueprint portfolio of Nirav Mathukiya, an ASP.NET Core Developer specializing in scalable backend systems, caching, concurrency, and cloud infrastructure.",
  keywords: ["ASP.NET Core Developer", ".NET Developer", "C# Developer", "Nirav Mathukiya", "Backend Systems Engineer", "ASP.NET Core Developer Portfolio"],
  authors: [{ name: "Nirav Mathukiya" }],
  openGraph: {
    title: "Nirav Mathukiya | ASP.NET Core Developer Portfolio",
    description: "I design backend systems that stay fast under load — caching layers, payment pipelines, and cloud infrastructure.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Nirav Mathukiya | ASP.NET Core Developer",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-blueprint-bg text-blueprint-text-primary selection:bg-blueprint-amber/20 selection:text-blueprint-text-primary font-body">
        {/* Fixed blueprint grid in background */}
        <div className="blueprint-grid-fixed" />
        
        {/* Top-level Layout structure */}
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
