import storyMain from "@/assets/story-main.webp";
// Images from assets/images/
import cottage from "@/assets/images/cottage.webp";
import house from "@/assets/images/house.webp";
import pond from "@/assets/images/pond.webp";
import tent from "@/assets/images/tent.webp";
import { Button } from "@/components/ui/button";
import { Camera, Grid3x3 } from "lucide-react";
import { Link } from "react-router-dom";

const StoriesSection = () => {
  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container pl-2 md:pl-4 pr-4 md:pr-6">
        <div className="mb-4 md:mb-6 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-3 md:gap-5 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 leading-tight text-left">
                Where every corner tells <span className="text-primary">stories</span>
              </h2>
              <Link to="/gallery">
                <Button
                  size="lg"
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90 border-0 group px-5 py-2"
                >
                  <Camera className="mr-2 group-hover:scale-110 transition-transform" size={16} />
                  See more projects
                </Button>
              </Link>
            </div>
            <div className="flex items-start">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-left md:text-right">
                Explore the enchanting spaces of our survival campsite, crafted to inspire your imagination. 
                From awe-inspiring wilderness experiences dream, create, and connect.
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-2 md:gap-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="md:col-span-2 group overflow-hidden rounded-2xl">
            <div className="relative h-full min-h-[280px] md:min-h-[350px] lg:min-h-[450px] overflow-hidden">
              <img
                src={cottage}
                alt="Cottage Stay"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <div className="md:col-span-1 grid grid-cols-2 gap-2 md:gap-3">
            {[house, tent, pond, storyMain].map((img, idx) => (
              <div
                key={idx}
                className={`group relative aspect-square overflow-hidden rounded-xl md:rounded-2xl ${
                  idx === 3 ? "cursor-pointer" : ""
                }`}
              >
                <img
                  src={img}
                  alt={idx === 0 ? "Camp House" : idx === 1 ? "Wilderness Tent" : idx === 2 ? "Natural Pond" : "Adventure story"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {idx === 3 && (
                  <Link to="/gallery" className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm hover:bg-black/60 transition-colors cursor-pointer">
                    <div className="text-center p-2">
                      <Grid3x3 className="w-3.5 h-3.5 text-white mx-auto mb-0.5" />
                      <p className="text-white font-semibold text-xs">See all photos</p>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;

