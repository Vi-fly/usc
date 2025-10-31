import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import ExploreSection from "@/components/ExploreSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import StoriesSection from "@/components/StoriesSection";
import VideoSection from "@/components/VideoSection";
import VisitSection from "@/components/VisitSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <VideoSection />
        <GallerySection />
        <ExperienceSection />
        <StoriesSection />
        <VisitSection />
        <ExploreSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
