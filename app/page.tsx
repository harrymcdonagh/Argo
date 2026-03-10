import ArgoNav from "./components/ArgoNav";
import ArgoHero from "./components/ArgoHeroB";
import ArgoProducts from "./components/ArgoProducts";
import ArgoServices from "./components/ArgoServices";
import ArgoAbout from "./components/ArgoAbout";
import ArgoFAQ from "./components/ArgoFAQ";
import ArgoContact from "./components/ArgoContact";
import ArgoFooter from "./components/ArgoFooter";

export default function Home() {
  return (
    <>
      <ArgoNav />
      <ArgoHero />
      <ArgoProducts />
      <ArgoServices />
      <ArgoAbout />
      <ArgoFAQ />
      <ArgoContact />
      <ArgoFooter />
    </>
  );
}
