import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolarCalculator from "@/components/SolarCalculator";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <SolarCalculator />
    <div id="benefits">
      <BenefitsSection />
    </div>
    <StatsSection />
    <div id="how-it-works">
      <HowItWorksSection />
    </div>
    <div id="faq">
      <FAQSection />
    </div>
    <CTASection />
    <Footer />
  </div>
);

export default Index;
