import type { Metadata } from "next";
import { Inter, Oswald, Anton } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { MobileNav } from "@/components/MobileNav";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });

export const metadata: Metadata = {
  title: "OctagonOracle | Fight Analytics & Training",
  description: "Advanced fight prediction, fighter comparison, and martial arts training platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${anton.variable} font-sans bg-black text-white antialiased`}>
        <Navbar />
        <main className="pb-16 md:pb-0">
          {children}
        </main>
        <MobileNav />
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
