
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alphaccl.co.uk"),

  title:
    "Alpha Capital Compliance | Financial Services Compliance Consultancy",

  description:
    "Alpha Capital Compliance provides financial services compliance consultancy, regulatory support, compliance documentation and money laundering prevention advice.",

  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Alpha Capital Compliance",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${cormorant.variable} ${manrope.variable} bg-[#f8f7f2] text-[#10283b] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
