import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com/'),
  title: "Raj Gajjar ✌️",
  description: "Engineering high-fidelity digital systems. Focused on AI architecture and precise technical interfaces.",
  keywords: "Portfolio By Raj, B.Tech student, AI, C programming, web development",
  authors: [{ name: "Raj Gajjar" }],
  creator: "Raj Gajjar",
  publisher: "Raj Gajjar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Raj Gajjar - Portfolio",
    description: "Engineering high-fidelity digital systems. Focused on AI architecture and precise technical interfaces.",
    siteName: "Raj Gajjar's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Gajjar - Portfolio",
    description: "Engineering high-fidelity digital systems. Focused on AI architecture and precise technical interfaces.",
  },
  verification: {
    google: "",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''}/>
    </html>
  );
}
