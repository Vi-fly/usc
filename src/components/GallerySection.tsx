import ImageGallery from "@/components/ui/image-gallery";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";
import storyMain from "@/assets/story-main.jpg";
import heroSurvival from "@/assets/hero-survival.jpg";

const GallerySection = () => {
  const galleryImages = [
    story1,
    story2,
    story3,
    story4,
    storyMain,
    heroSurvival,
  ];

  return (
    <section className="w-full flex flex-col items-center justify-start py-16 bg-background">
      <div className="max-w-3xl text-center px-4 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-foreground">Our Latest Adventures</h2>
        <p className="text-muted-foreground mt-4 text-lg">
          A visual collection of our most recent expeditions – each moment captured
          with intensity, courage, and the spirit of survival.
        </p>
      </div>

      <div className="w-full max-w-6xl mt-12 px-4">
        <ImageGallery images={galleryImages} />
      </div>

      <Button 
        variant="outline" 
        size="lg"
        className="mt-8 gap-2"
      >
        <Camera className="h-5 w-5" />
        See All Photos
      </Button>
    </section>
  );
};

export default GallerySection;
