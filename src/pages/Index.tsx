import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyTestSection from "@/components/WhyTestSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyTestSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
