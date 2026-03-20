import FloatingOrbs from "@/components/FloatingOrbs";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScreenshotShowcase from "@/components/ScreenshotShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import NotifySection from "@/components/NotifySection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen bg-background overflow-x-hidden">
    <FloatingOrbs />
    <Navbar />
    <HeroSection />
    <ScreenshotShowcase />
    <FeaturesSection />
    <NotifySection />
    <Footer />
  </div>
);

export default Index;
