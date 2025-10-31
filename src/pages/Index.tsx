import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ExperienceSection from "@/components/ExperienceSection";
import StoriesSection from "@/components/StoriesSection";
import MissionSection from "@/components/MissionSection";
import CommitmentSection from "@/components/CommitmentSection";
import VisitSection from "@/components/VisitSection";
import ExploreSection from "@/components/ExploreSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <GallerySection />
        <ExperienceSection />
        <StoriesSection />
        <MissionSection />
        <CommitmentSection />
        <VisitSection />
        <ExploreSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
