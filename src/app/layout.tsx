import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Celebrity Plumber | Professional Plumbing & Tiling Services",
  description:
    "Celebrity Plumber delivers expert plumbing and tiling services for homes, offices, and commercial properties. Quality workmanship, fast response, and guaranteed customer satisfaction.",
  keywords: [
    "plumber",
    "tiling",
    "plumbing services",
    "bathroom tiling",
    "pipe installation",
    "leak repair",
    "celebrity plumber",
  ],
  openGraph: {
    title: "Celebrity Plumber | Professional Plumbing & Tiling Services",
    description:
      "Quality plumbing and tiling solutions you can trust. Serving homes, offices, and commercial properties.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
