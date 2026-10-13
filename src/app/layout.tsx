import type { Metadata } from "next";
import "./globals.css";
import { SoundProvider } from "../components/audio/SoundContext";
import { Navbar } from "../components/header/Navbar";
import { Footer } from "../components/footer/Footer";
import { Preloader } from "../components/ui/Preloader";

export const metadata: Metadata = {
  title:
    "Work | Award-Winning AI-Powered Digital Experiences & Websites | MAVON",
  description:
    "MAVON is an independent AI-powered digital studio showcasing award-winning websites, immersive digital experiences, branding, WebGL interactions, and creative technology projects crafted through strategy, design, and innovation for ambitious brands worldwide.",
  icons: {
    icon: "/images/favicon.svg",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    title:
      "Work | Award-Winning AI-Powered Digital Experiences & Websites | MAVON",
    description:
      "Discover MAVON’s portfolio of immersive AI-powered websites, creative technology projects, branding, WebGL experiences, and premium digital products.",
    url: "/work",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#040508] text-[#d8d8d8] antialiased selection:bg-white selection:text-black">
        <SoundProvider>
          <Preloader />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SoundProvider>
      </body>
    </html>
  );
}
