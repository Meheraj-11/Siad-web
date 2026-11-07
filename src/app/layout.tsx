import type { Metadata, Viewport } from "next";
import { Geist, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AmbientBackground from "@/components/AmbientBackground";
import ParticlesBackground from "@/components/ParticlesBackground";
import RainBackground from "@/components/RainBackground";
import LightningBackground from "@/components/LightningBackground";
import CustomCursor from "@/components/CustomCursor";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const jbmono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siad Khan — Cyber Security Enthusiast",
  description:
    "Personal portfolio of Siad Khan, a cyber security enthusiast from Rangpur, Panchagarh, Bangladesh. Exploring cybersecurity, building knowledge, and securing the digital future.",
  applicationName: "Siad Khan — Portfolio",
  keywords: [
    "Siad Khan",
    "cyber security",
    "security enthusiast",
    "digital safety",
    "Bangladesh",
    "portfolio",
  ],
};

export const viewport: Viewport = {
  themeColor: "#08060F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${grotesk.variable} ${jbmono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-screen flex-col bg-night font-sans text-ink">
        {/* Marks the page as JS-capable so scroll-reveal can hide-then-reveal.
            Without JS this class never appears and all content stays visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js');`,
          }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <AmbientBackground />
        <ParticlesBackground />
        <RainBackground />
        <LightningBackground />
        <CustomCursor />
        <Navbar />
        <main id="main" className="relative z-10 flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
