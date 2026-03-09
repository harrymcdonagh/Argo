import ArgoNav from "./components/ArgoNav";
import ArgoHero from "./components/ArgoHero";
import ArgoProducts from "./components/ArgoProducts";
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
      <ArgoAbout />
      <ArgoContact />
      <ArgoFAQ />
      <ArgoFooter />
    </>
  );
}
