import type { Metadata } from "next";
import "./globals.css";
import { Figtree, Playfair_Display, Bricolage_Grotesque} from "next/font/google";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-label" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-heading" });



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
        className={`${figtree.variable} ${playfair.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
