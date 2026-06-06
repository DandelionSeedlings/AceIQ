import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowItWorks from "@/components/HowItWorks";
import ForWho from "@/components/ForWho";
import PricingSection from "@/components/PricingSection";
import AffiliateSection from "@/components/AffiliateSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F1A]">
      <Navigation />
      <HeroSection />
      <ProblemSolution />
      <FeaturesGrid />
      <HowItWorks />
      <ForWho />
      <PricingSection />
      <AffiliateSection />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
}
