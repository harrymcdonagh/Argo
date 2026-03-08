import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import DemoSMS from "../components/DemoSMS";
import HowItWorks from "../components/HowItWorks";
import WhatYouGet from "../components/WhatYouGet";
import Pricing from "../components/Pricing";
import FinalCTA from "../components/FinalCTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import StickyMobileCTA from "../components/StickyMobileCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Argo | CallCatch — Missed Call Recovery for Local Businesses in Essex",
  description:
    "CallCatch by Argo texts your missed callers back in under 60 seconds, finds out what they need, and sends you the details. Built for trade businesses in Essex and South East England.",
  openGraph: {
    title: "Argo | CallCatch",
    description:
      "CallCatch by Argo texts your missed callers back in under 60 seconds, finds out what they need, and sends you the details. Built for trade businesses in Essex and South East England.",
    siteName: "Argo",
    url: "https://argosystems.co.uk/callcatch",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CallCatch by Argo — Missed call recovery for local businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function CallCatchPage() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <DemoSMS />
      <HowItWorks />
      <WhatYouGet />
      <Pricing />
      <FinalCTA />
      <FAQ />
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
