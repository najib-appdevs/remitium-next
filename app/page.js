import AppDownloadSection from "@/components/home/AppDownloadSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import ImpactSection from "@/components/home/ImpactSection";
import SecuritySection from "@/components/home/SecuritySection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <SecuritySection />
      <AppDownloadSection />
      <ImpactSection />
      <TestimonialSection />
      {/* <CTASection /> */}
    </div>
  );
}
