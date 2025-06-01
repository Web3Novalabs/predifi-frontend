
import React from "react";
import Navbar from "./Components/navBar";
import HeroSection from "./Components/heroSection";
import Footer from "./Components/footer";
import FeaturesSection from "./Components/feature-section";
import BenefitsSection from "./Components/benefit-section";
import InsightsFAQSection from "./Components/insights-faq-section";

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
