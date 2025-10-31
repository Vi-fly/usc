import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import storyMain from "@/assets/story-main.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";

const StoriesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Where every moment tells <span className="text-primary">stories</span>
            </h2>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 group"
            >
              <Camera className="mr-2 group-hover:rotate-12 transition-transform" />
              See all adventures
            </Button>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore the transformative experiences at Ultimate Survival Camp, crafted to challenge,
              inspire, and connect you with nature. From fire-making to shelter building, every skill
              learned becomes a story of growth and resilience.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Large Image */}
          <div className="md:col-span-2 md:row-span-2 group overflow-hidden rounded-3xl animate-scale-in">
            <div className="relative h-full min-h-[500px] overflow-hidden">
              <img
                src={storyMain}
                alt="Main survival story"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Small Images Grid */}
          {[story1, story2, story3, story4].map((img, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-3xl animate-scale-in"
              style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={img}
                  alt={`Survival story ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}

          {/* View All Photos Badge */}
          <div className="relative group animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="secondary"
                className="rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Camera className="mr-2" size={18} />
                See all photos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
