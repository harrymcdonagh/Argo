import type { Metadata } from "next";
import WebDesignNav from "../components/WebDesignNav";
import ArgoFooter from "../components/ArgoFooter";
import WebDesignContent from "./WebDesignContent";

export const metadata: Metadata = {
  title: "Web Design for Local Businesses | Argo",
  description:
    "Professional websites for local businesses — designed, built, and launched for you. Tell us about your business, we handle everything.",
  openGraph: {
    title: "Web Design for Local Businesses | Argo",
    description:
      "Professional websites for local businesses — designed, built, and launched for you.",
    url: "https://argosystems.co.uk/web-design",
  },
};

export default function WebDesignPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <WebDesignNav />
      <WebDesignContent />
      <ArgoFooter />
    </div>
  );
}
