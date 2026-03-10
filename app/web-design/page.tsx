import type { Metadata } from "next";
import WebDesignNav from "../components/WebDesignNav";
import ArgoFooter from "../components/ArgoFooter";
import WebDesignContent from "./WebDesignContent";

export const metadata: Metadata = {
  title: "Argo | Web Design — Professional Websites for Local Businesses",
  description:
    "Custom websites for local businesses — designed, built, and launched for you. No templates, no hassle. Tell us about your business, we handle everything.",
  openGraph: {
    title: "Argo | Web Design — Professional Websites for Local Businesses",
    description:
      "Custom websites for local businesses — designed, built, and launched for you. No templates, no hassle.",
    url: "https://argosystems.co.uk/web-design",
    images: [
      {
        url: "/og-web-design.png",
        width: 1200,
        height: 630,
        alt: "Argo Web Design — Professional websites for local businesses",
      },
    ],
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
