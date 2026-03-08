import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://argosystems.co.uk"),
  icons: {
    icon: "/favicon.svg",
  },
  title: "Argo | Done-for-You Systems for Local Trade Businesses",
  description:
    "Argo builds done-for-you tools for local trade businesses in Essex and South East England. Our first product, CallCatch, recovers missed calls in under 60 seconds.",
  openGraph: {
    title: "Argo | Done-for-You Systems for Local Trade Businesses",
    description:
      "Argo builds done-for-you tools for local trade businesses in Essex and South East England.",
    siteName: "Argo",
    url: "https://argosystems.co.uk",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Argo — Done-for-you tools for local trade businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Argo | Done-for-You Systems for Local Trade Businesses",
    description:
      "Argo builds done-for-you tools for local trade businesses in Essex and South East England. Our first product, CallCatch, recovers missed calls in under 60 seconds.",
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
      <body className={`${dmSans.variable} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-amber-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Argo",
              description:
                "Done-for-you tools for local trade businesses in Essex and South East England. CallCatch — missed call text-back and recovery service.",
              url: "https://argosystems.co.uk",
              telephone: "07939939885",
              email: "harry@argosystems.co.uk",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Essex",
                addressCountry: "GB",
              },
              founder: {
                "@type": "Person",
                name: "Harry McDonagh",
              },
              areaServed: {
                "@type": "Place",
                name: "Essex and South East England",
              },
            }),
          }}
        />
        <main id="main-content">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
