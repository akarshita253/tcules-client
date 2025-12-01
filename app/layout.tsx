import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { Figtree, Playfair_Display } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });



export const metadata: Metadata = {
  title: "Tcules",
  description: "Tcules Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
