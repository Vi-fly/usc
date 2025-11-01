// Images from assets root
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";
import heroSurvival from "@/assets/hero-survival.jpg";
import mission from "@/assets/mission.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";
import storyMain from "@/assets/story-main.jpg";
import visit from "@/assets/visit.jpg";

// Images from assets/images/
import bar from "@/assets/images/bar.JPG";
import buddha from "@/assets/images/buddha.JPG";
import buddha1 from "@/assets/images/buddha_1.JPG";
import buddha2 from "@/assets/images/buddha_2.JPG";
import clay from "@/assets/images/clay.JPG";
import cottage from "@/assets/images/cottage.JPG";
import elephant from "@/assets/images/elephant.JPG";
import hens from "@/assets/images/hens.JPG";
import house from "@/assets/images/house.JPG";
import lamp from "@/assets/images/lamp.JPG";
import lunch from "@/assets/images/lunch.JPG";
import pit from "@/assets/images/pit.JPG";
import pond from "@/assets/images/pond.JPG";
import room from "@/assets/images/room.JPG";
import sitting from "@/assets/images/sitting.JPG";
import stairs from "@/assets/images/stairs.JPG";
import tap from "@/assets/images/tap.JPG";
import tent from "@/assets/images/tent.JPG";
import tent1 from "@/assets/images/tent_1.JPG";
import wash from "@/assets/images/wash.JPG";
import wash1 from "@/assets/images/wash_1.JPG";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Grid3x3, Loader2, Sparkles, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface GalleryImage {
  id: string;
  src: string;
  title?: string;
  category?: string;
}

// All unique gallery images - images from assets/images/ directory first
const allGalleryImages: GalleryImage[] = [
  // Images from assets/images/ (shown first)
  { id: "1", src: bar, title: "Camp Bar", category: "Stay" },
  { id: "2", src: buddha1, title: "Buddha Statue", category: "Nature" },
  { id: "3", src: buddha2, title: "Buddha Garden", category: "Nature" },
  { id: "4", src: buddha, title: "Buddha Meditation", category: "Nature" },
  { id: "5", src: clay, title: "Clay Workshop", category: "Training" },
  { id: "6", src: cottage, title: "Cottage Stay", category: "Stay" },
  { id: "7", src: elephant, title: "Elephant", category: "Nature" },
  { id: "8", src: hens, title: "Farm Animals", category: "Stay" },
  { id: "9", src: house, title: "Camp House", category: "Stay" },
  { id: "10", src: lamp, title: "Evening Ambiance", category: "Stay" },
  { id: "11", src: lunch, title: "Camp Lunch", category: "Stay" },
  { id: "12", src: pit, title: "Camp Fire Pit", category: "Training" },
  { id: "13", src: pond, title: "Natural Pond", category: "Nature" },
  { id: "14", src: room, title: "Guest Room", category: "Stay" },
  { id: "15", src: sitting, title: "Meditation Area", category: "Nature" },
  { id: "16", src: stairs, title: "Nature Path", category: "Nature" },
  { id: "17", src: tap, title: "Water Source", category: "Stay" },
  { id: "18", src: tent1, title: "Tent Accommodation", category: "Stay" },
  { id: "19", src: tent, title: "Wilderness Tent", category: "Stay" },
  { id: "20", src: wash1, title: "Wash Area", category: "Stay" },
  { id: "21", src: wash, title: "Cleaning Station", category: "Stay" },
  
  // Images from assets root
  { id: "22", src: storyMain, title: "Adventure Expedition", category: "Adventure" },
  { id: "23", src: story1, title: "Wilderness Training", category: "Training" },
  { id: "24", src: story2, title: "Nature Immersion", category: "Nature" },
  { id: "25", src: story3, title: "Survival Skills", category: "Skills" },
  { id: "26", src: story4, title: "Mountain Challenge", category: "Adventure" },
  { id: "27", src: heroSurvival, title: "Hero Journey", category: "Adventure" },
  { id: "28", src: article1, title: "Training Workshop", category: "Training" },
  { id: "29", src: article2, title: "Summer Challenge", category: "Events" },
  { id: "30", src: article3, title: "Mountain Trek", category: "Adventure" },
  { id: "31", src: mission, title: "Mission & Vision", category: "About" },
  { id: "32", src: visit, title: "Camp Visit", category: "Stay" },
];

const categories = ["All", "Adventure", "Training", "Nature", "Skills", "Events", "Stay", "About"];

const ITEMS_PER_PAGE = 12;

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [displayedImages, setDisplayedImages] = useState<GalleryImage[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Filter images by category and reset pagination
  useEffect(() => {
    const filtered = selectedCategory === "All" 
      ? allGalleryImages 
      : allGalleryImages.filter(img => img.category === selectedCategory);
    
    setDisplayedImages(filtered.slice(0, ITEMS_PER_PAGE));
    setCurrentPage(1);
    setHasMore(filtered.length > ITEMS_PER_PAGE);
  }, [selectedCategory]);

  // Load more images function
  const loadMoreImages = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    
    // Simulate API delay for smooth UX
    setTimeout(() => {
      const filtered = selectedCategory === "All" 
        ? allGalleryImages 
        : allGalleryImages.filter(img => img.category === selectedCategory);
      
      const nextPage = currentPage + 1;
      const startIndex = currentPage * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const newImages = filtered.slice(startIndex, endIndex);

      if (newImages.length > 0) {
        setDisplayedImages(prev => [...prev, ...newImages]);
        setCurrentPage(nextPage);
        setHasMore(endIndex < filtered.length);
      } else {
        setHasMore(false);
      }

      setIsLoading(false);
    }, 300);
  }, [currentPage, isLoading, hasMore, selectedCategory]);

  // Intersection observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.remove("opacity-0");
          el.classList.add("opacity-100", "animate-fade-in");
          obs.unobserve(el);
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [displayedImages]);

  // Intersection observer for infinite scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "100px",
    };

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !isLoading) {
        loadMoreImages();
      }
    }, observerOptions);

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasMore, isLoading, loadMoreImages]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-3 px-3 pb-12">
        <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden rounded-3xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
            <img
              src={storyMain}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/90 via-earth-dark/85 to-forest-medium/80" />
          </div>

          {/* Content */}
          <div className="container relative z-10 px-6 py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-primary-foreground/30">
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary-foreground">Visual Stories</span>
                </div>
              </div>
              
              <div className="animate-fade-in-up mb-8">
                <h1 className="text-5xl md:text-8xl font-bold text-primary-foreground mb-8 leading-tight">
                  Where Every Corner Tells <span className="text-primary">Stories</span>
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Explore the enchanting spaces of our survival camp, crafted to inspire your imagination. 
                  From awe-inspiring wilderness experiences to unforgettable moments captured in time.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="inline-flex items-center gap-2 text-primary-foreground/90">
                  <Grid3x3 className="w-5 h-5" />
                  <span className="text-lg font-medium">{allGalleryImages.length} Photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 relative z-10 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {displayedImages.map((image, idx) => (
              <div
                key={image.id}
                ref={addToRefs}
                className="opacity-0 group relative aspect-square overflow-hidden rounded-2xl cursor-pointer hover:scale-[1.02] transition-all duration-500"
                onClick={() => setSelectedImage(image)}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <img
                  src={image.src}
                  alt={image.title || `Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading={idx < 12 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {image.title && (
                    <h3 className="text-white font-bold mb-1">{image.title}</h3>
                  )}
                  {image.category && (
                    <p className="text-white/80 text-sm">{image.category}</p>
                  )}
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {displayedImages.length === 0 && !isLoading && (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">No images found in this category</p>
            </div>
          )}

          {/* Infinite Scroll Loader */}
          <div ref={loaderRef} className="flex justify-center items-center py-12">
            {isLoading && (
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
                <p className="text-muted-foreground">Loading more images...</p>
              </div>
            )}
            {!hasMore && displayedImages.length > 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">You've reached the end of the gallery</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.title || "Gallery image"}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            {selectedImage.title && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <p className="text-white font-semibold">{selectedImage.title}</p>
                {selectedImage.category && (
                  <p className="text-white/80 text-sm text-center mt-1">{selectedImage.category}</p>
                )}
              </div>
            )}

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = displayedImages.findIndex(img => img.id === selectedImage.id);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : displayedImages.length - 1;
                setSelectedImage(displayedImages[prevIndex]);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all"
            >
              <ArrowRight className="w-6 h-6 text-white rotate-180" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = displayedImages.findIndex(img => img.id === selectedImage.id);
                const nextIndex = currentIndex < displayedImages.length - 1 ? currentIndex + 1 : 0;
                setSelectedImage(displayedImages[nextIndex]);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 relative z-10 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="text-primary" size={18} />
              <span className="text-sm font-semibold text-primary">Join Our Community</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Your Own <span className="text-primary">Stories</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Become part of our visual gallery. Book your experience and add your adventures to our collection.
            </p>
            
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
            >
              Book Your Adventure
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;

