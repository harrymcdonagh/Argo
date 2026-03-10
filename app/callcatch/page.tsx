import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import DemoSMS from "../components/DemoSMS";
import VideoDemo from "../components/VideoDemo";
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
    "CallCatch by Argo texts your missed callers back in under 10 seconds, finds out what they need, and sends you the details. Built for local businesses in Essex and South East England.",
  openGraph: {
    title: "Argo | CallCatch — Never Miss a Customer Because You Were Busy",
    description:
      "Texts your missed callers back in under 10 seconds, finds out what they need, and sends you the details. Done for you.",
    siteName: "Argo",
    url: "https://argosystems.co.uk/callcatch",
    images: [
      {
        url: "/og-callcatch.png",
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
      <HowItWorks />
      <DemoSMS />
      <VideoDemo />
      <WhatYouGet />
      <Pricing />
      <FinalCTA />
      <FAQ />
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
