import React from "react";
import Navbar from "./components/layout/navBar";
import HeroSection from "./components/sections/heroSection";
import Footer from "./components/layout/footer";
import FeaturesSection from "./components/sections/feature-section";
import BenefitsSection from "./components/sections/benefit-section";
import InsightsFAQSection from "./components/sections/insights-faq-section";

export default function Home() {
  return (
    <main className="relative bg-[#001112]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <InsightsFAQSection />
      <Footer />
    </main>
  );
}
