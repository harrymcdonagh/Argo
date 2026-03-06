import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Argo | Done-for-You Automation for Local Trade Businesses",
  description:
    "Argo builds done-for-you automation tools for local trade businesses in Essex and South East England. Our first product, CallCatch, recovers missed calls in under 60 seconds.",
  openGraph: {
    title: "Argo | Automation for Local Trade Businesses",
    description:
      "Argo builds done-for-you automation tools for local trade businesses in Essex and South East England.",
    siteName: "Argo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,400;1,9..144,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
