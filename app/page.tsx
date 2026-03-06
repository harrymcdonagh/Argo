import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import DemoSMS from "./components/DemoSMS";
import WhatYouGet from "./components/WhatYouGet";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <DemoSMS />
      <WhatYouGet />
      <Pricing />
      <FinalCTA />
      <FAQ />
      <Footer />
    </>
  );
}
