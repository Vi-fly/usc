// Images from assets root
import article1 from "@/assets/article-1.webp";
import article2 from "@/assets/article-2.webp";
import article3 from "@/assets/article-3.webp";
import heroSurvival from "@/assets/hero-survival.webp";
import mission from "@/assets/mission.webp";
import story1 from "@/assets/story-1.webp";
import story2 from "@/assets/story-2.webp";
import story3 from "@/assets/story-3.webp";
import story4 from "@/assets/story-4.webp";
import storyMain from "@/assets/story-main.webp";
import visit from "@/assets/visit.webp";

// Images from assets/images/
import buddha from "@/assets/images/buddha.webp";
import buddha1 from "@/assets/images/buddha_1.webp";
import buddha2 from "@/assets/images/buddha_2.webp";
import cabinet from "@/assets/images/cabinet.webp";
import clay from "@/assets/images/clay.webp";
import cottage from "@/assets/images/Cottage.webp";
import elephant from "@/assets/images/elephant.webp";
import firewood from "@/assets/images/firewood.webp";
import hens from "@/assets/images/hens.webp";
import house from "@/assets/images/house.webp";
import hut from "@/assets/images/hut.webp";
import lamp from "@/assets/images/lamp.webp";
import lunch from "@/assets/images/lunch.webp";
import luxuryroom from "@/assets/images/luxuryroom.webp";
import pit from "@/assets/images/pit.webp";
import plants from "@/assets/images/plants.webp";
import pond from "@/assets/images/pond.webp";
import room from "@/assets/images/room.webp";
import sitting from "@/assets/images/sitting.webp";
import sitting2 from "@/assets/images/sitting_2.webp";
import stairs from "@/assets/images/stairs.webp";
import statue from "@/assets/images/statue.webp";
import surrounding from "@/assets/images/surrounding.webp";
import tap from "@/assets/images/tap.webp";
import tent from "@/assets/images/tent.webp";
import tent1 from "@/assets/images/tent1.webp";
import tent2 from "@/assets/images/tent_2.webp";
import tent3 from "@/assets/images/tent3.webp";
import walking from "@/assets/images/walking.webp";
import wash from "@/assets/images/wash.webp";
import wash1 from "@/assets/images/wash_1.webp";
// Accommodation images
import at from "@/assets/images/at.webp";
import at1 from "@/assets/images/at_1.webp";
import lt from "@/assets/images/lt.webp";
import lt1 from "@/assets/images/lt_1.webp";
import lt2 from "@/assets/images/lt_2.webp";
import ch from "@/assets/images/ch.webp";
import ch1 from "@/assets/images/ch_1.webp";
import ch2 from "@/assets/images/ch_2.webp";
import ch3 from "@/assets/images/ch_3.webp";
import cht from "@/assets/images/ch_t.webp";
import mt from "@/assets/images/mt.webp";
import mt1 from "@/assets/images/mt_1.webp";
import mt2 from "@/assets/images/mt_2.webp";
import militaryTent from "@/assets/images/Military_tent.webp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Grid3x3, Loader2, Sparkles, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState, memo } from "react";

interface GalleryImage {
  id: string;
  src: string;
  title?: string;
  category?: string;
}

// Helper to get proper image URL from Vite import
const getImageSrc = (img: string | { default?: string }): string => {
  // Handle direct string imports (Vite should return strings)
  if (typeof img === 'string') {
    // If it's a path starting with /src, try to convert it
    if (img.startsWith('/src/assets')) {
      // In Vite dev, assets are served from /src/assets, but we need the actual processed URL
      // Try to get the actual import value
      return img;
    }
    // If it's already a proper URL, return it
    return img;
  }
  // Handle module imports with default export
  if (img && typeof img === 'object' && 'default' in img) {
    return getImageSrc(img.default as string);
  }
  return String(img || '');
};

// Pre-compute all gallery images once (outside component to avoid recalculation)
const allGalleryImages: GalleryImage[] = [
  // Images from assets/images/ (shown first)
  { id: "1", src: getImageSrc(buddha1), title: "Buddha Statue", category: "Nature" },
  { id: "2", src: getImageSrc(buddha2), title: "Buddha Garden", category: "Nature" },
  { id: "4", src: getImageSrc(buddha), title: "Buddha Meditation", category: "Nature" },
  { id: "5", src: getImageSrc(clay), title: "Clay Workshop", category: "Training" },
  { id: "6", src: getImageSrc(cottage), title: "Cottage Stay", category: "Stay" },
  { id: "7", src: getImageSrc(elephant), title: "Elephant", category: "Nature" },
  { id: "8", src: getImageSrc(firewood), title: "Firewood Collection", category: "Training" },
  { id: "9", src: getImageSrc(hens), title: "Farm Animals", category: "Stay" },
  { id: "10", src: getImageSrc(house), title: "Camp House", category: "Stay" },
  { id: "11", src: getImageSrc(hut), title: "Mountain Hut", category: "Stay" },
  { id: "12", src: getImageSrc(lamp), title: "Evening Ambiance", category: "Stay" },
  { id: "13", src: getImageSrc(lunch), title: "Camp Lunch", category: "Stay" },
  { id: "14", src: getImageSrc(luxuryroom), title: "Colonel Hut", category: "Stay" },
  { id: "15", src: getImageSrc(pit), title: "Camp Fire Pit", category: "Training" },
  { id: "16", src: getImageSrc(plants), title: "Garden Plants", category: "Nature" },
  { id: "17", src: getImageSrc(pond), title: "Natural Pond", category: "Nature" },
  { id: "18", src: getImageSrc(room), title: "Guest Room", category: "Stay" },
  { id: "19", src: getImageSrc(sitting), title: "Meditation Area", category: "Nature" },
  { id: "20", src: getImageSrc(sitting2), title: "Outdoor Seating", category: "Nature" },
  { id: "21", src: getImageSrc(stairs), title: "Nature Path", category: "Nature" },
  { id: "22", src: getImageSrc(statue), title: "Decorative Statue", category: "Nature" },
  { id: "23", src: getImageSrc(surrounding), title: "Camp Surroundings", category: "Nature" },
  { id: "24", src: getImageSrc(tap), title: "Water Source", category: "Stay" },
  { id: "25", src: getImageSrc(tent1), title: "Tent Accommodation", category: "Stay" },
  { id: "26", src: getImageSrc(tent), title: "Wilderness Tent", category: "Stay" },
  { id: "27", src: getImageSrc(tent2), title: "Luxury Tent", category: "Stay" },
  { id: "28", src: getImageSrc(tent3), title: "Premium Tent", category: "Stay" },
  { id: "29", src: getImageSrc(walking), title: "Nature Walk", category: "Nature" },
  { id: "30", src: getImageSrc(cabinet), title: "Storage Cabinet", category: "Stay" },
  { id: "31", src: getImageSrc(wash1), title: "Wash Area", category: "Stay" },
  { id: "32", src: getImageSrc(wash), title: "Cleaning Station", category: "Stay" },
  
  // Accommodation images - Alpine Tent
  { id: "44", src: getImageSrc(at), title: "Alpine Tent", category: "Stay" },
  { id: "45", src: getImageSrc(at1), title: "Alpine Tent Interior", category: "Stay" },
  
  // Accommodation images - Luxury Tent
  { id: "46", src: getImageSrc(lt), title: "Luxury Tent", category: "Stay" },
  { id: "47", src: getImageSrc(lt1), title: "Luxury Tent View", category: "Stay" },
  { id: "48", src: getImageSrc(lt2), title: "Luxury Tent Setup", category: "Stay" },
  
  // Accommodation images - Colonel Hut
  { id: "49", src: getImageSrc(ch), title: "Colonel Hut", category: "Stay" },
  { id: "50", src: getImageSrc(ch1), title: "Colonel Hut Interior", category: "Stay" },
  { id: "51", src: getImageSrc(ch2), title: "Colonel Hut Exterior", category: "Stay" },
  { id: "52", src: getImageSrc(ch3), title: "Colonel Hut View", category: "Stay" },
  { id: "53", src: getImageSrc(cht), title: "Colonel Hut Details", category: "Stay" },
  
  // Accommodation images - Military Tent
  { id: "54", src: getImageSrc(militaryTent), title: "Military Tent", category: "Stay" },
  { id: "55", src: getImageSrc(mt), title: "Military Tent Setup", category: "Stay" },
  { id: "56", src: getImageSrc(mt1), title: "Military Tent Interior", category: "Stay" },
  { id: "57", src: getImageSrc(mt2), title: "Military Tent View", category: "Stay" },
  
  // Images from assets root
  { id: "33", src: getImageSrc(storyMain), title: "Adventure Expedition", category: "Adventure" },
  { id: "34", src: getImageSrc(story1), title: "Wilderness Training", category: "Training" },
  { id: "35", src: getImageSrc(story2), title: "Nature Immersion", category: "Nature" },
  { id: "36", src: getImageSrc(story3), title: "Survival Skills", category: "Skills" },
  { id: "37", src: getImageSrc(story4), title: "Mountain Challenge", category: "Adventure" },
  { id: "38", src: getImageSrc(heroSurvival), title: "Hero Journey", category: "Adventure" },
  { id: "39", src: getImageSrc(article1), title: "Training Workshop", category: "Training" },
  { id: "40", src: getImageSrc(article2), title: "Summer Challenge", category: "Events" },
  { id: "41", src: getImageSrc(article3), title: "Mountain Trek", category: "Adventure" },
  { id: "42", src: getImageSrc(mission), title: "Mission & Vision", category: "About" },
  { id: "43", src: getImageSrc(visit), title: "Camp Visit", category: "Stay" },
];

const categories = ["All", "Adventure", "Training", "Nature", "Skills", "Events", "Stay", "About"];

const ITEMS_PER_PAGE = 6; // Further reduced for faster initial load

// Memoized Gallery Image Item Component - Highly Optimized
const GalleryImageItem = memo(({ 
  image, 
  idx, 
  onImageClick 
}: { 
  image: GalleryImage; 
  idx: number; 
  onImageClick: (image: GalleryImage) => void;
}) => {
  const isBuddhaMeditation = image.id === "4" || image.title === "Buddha Meditation";
  const itemRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(idx < ITEMS_PER_PAGE);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Skip observer for first page images (already visible)
    if (idx < ITEMS_PER_PAGE) return;

    // Use a single shared observer pattern - simpler and faster
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "300px" }
    );

    const currentRef = itemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [idx]);

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleClick = useCallback(() => {
    onImageClick(image);
  }, [image, onImageClick]);

  if (!shouldLoad) {
    return (
      <div
        ref={itemRef}
        className="aspect-square bg-secondary/20 rounded-2xl"
        style={{ contentVisibility: 'auto' }}
      />
    );
  }

  return (
    <div
      ref={itemRef}
      className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-secondary/10"
      onClick={handleClick}
      style={{ 
        contain: 'layout style paint',
        contentVisibility: idx > ITEMS_PER_PAGE * 3 ? 'auto' : undefined
      }}
    >
      <img
        src={image.src}
        alt={image.title || `Gallery image ${idx + 1}`}
        className={`w-full h-full object-cover ${
          isBuddhaMeditation ? 'rotate-[-90deg]' : ''
        } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading={idx < ITEMS_PER_PAGE ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={idx < 4 ? "high" : "low"}
        onLoad={handleImageLoad}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
      {isLoaded && image.title && (
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
          <h3 className="text-white font-semibold text-xs truncate">{image.title}</h3>
        </div>
      )}
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.image.id === nextProps.image.id && 
         prevProps.idx === nextProps.idx;
});

GalleryImageItem.displayName = 'GalleryImageItem';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [displayedImages, setDisplayedImages] = useState<GalleryImage[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Memoize filtered images with stable reference
  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") {
      return allGalleryImages;
    }
    return allGalleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  // Filter images by category and reset pagination
  useEffect(() => {
    setDisplayedImages(filteredImages.slice(0, ITEMS_PER_PAGE));
    setCurrentPage(1);
    setHasMore(filteredImages.length > ITEMS_PER_PAGE);
  }, [filteredImages]);

  // Load more images function - optimized with debouncing
  const loadMoreImages = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    
    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(() => {
      const nextPage = currentPage + 1;
      const startIndex = currentPage * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const newImages = filteredImages.slice(startIndex, endIndex);

      if (newImages.length > 0) {
        setDisplayedImages(prev => {
          const existingIds = new Set(prev.map(img => img.id));
          const uniqueNew = newImages.filter(img => !existingIds.has(img.id));
          return [...prev, ...uniqueNew];
        });
        setCurrentPage(nextPage);
        setHasMore(endIndex < filteredImages.length);
      } else {
        setHasMore(false);
      }

      setIsLoading(false);
    });
  }, [currentPage, isLoading, hasMore, filteredImages]);

  // Optimized intersection observer for infinite scroll
  useEffect(() => {
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    if (!hasMore || isLoading) return;

    const     observerOptions = {
      threshold: 0.01,
      rootMargin: "500px", // Load earlier for smoother experience
    };

    observerRef.current = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !isLoading) {
        // Debounce rapid calls
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
        loadMoreImages();
      }
    }, observerOptions);

    const currentLoader = loaderRef.current;
    if (currentLoader && observerRef.current) {
      observerRef.current.observe(currentLoader);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [hasMore, isLoading, loadMoreImages]);

  // Memoize image click handler
  const handleImageClick = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-3 px-3 pb-12">
        <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden rounded-3xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
            <img
              src={getImageSrc(storyMain)}
              alt="Gallery"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/90 via-earth-dark/85 to-forest-medium/80" />
          </div>

          {/* Content */}
          <div className="container relative z-10 px-4 sm:px-6 py-16 sm:py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up mb-4 sm:mb-6 md:mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 md:mb-8 border border-primary-foreground/30">
                  <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-xs sm:text-sm font-medium text-primary-foreground">Visual Stories</span>
                </div>
              </div>
              
              <div className="animate-fade-in-up mb-4 sm:mb-6 md:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
                  Where Every Corner Tells <span className="text-primary">Stories</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                  Explore the enchanting spaces of our survival campsite, crafted to inspire your imagination. 
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

      {/* Category Filter - Optimized */}
      <section className="py-12 relative z-10 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-colors duration-150 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Optimized */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            style={{ contain: 'layout style' }}
          >
            {displayedImages.map((image, idx) => (
              <GalleryImageItem
                key={image.id}
                image={image}
                idx={idx}
                onImageClick={handleImageClick}
              />
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

      {/* Image Modal - Optimized */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          style={{ 
            willChange: 'opacity',
            contain: 'layout style paint'
          }}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.title || "Gallery image"}
              className="max-w-full max-h-full object-contain rounded-lg"
              style={(selectedImage.id === "4" || selectedImage.title === "Buddha Meditation") ? { transform: 'rotate(-90deg)' } : {}}
              onClick={(e) => e.stopPropagation()}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            
            {selectedImage.title && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 rounded-full px-6 py-3">
                <p className="text-white font-semibold text-sm">{selectedImage.title}</p>
                {selectedImage.category && (
                  <p className="text-white/80 text-xs text-center mt-1">{selectedImage.category}</p>
                )}
              </div>
            )}

            {/* Navigation Arrows - Memoized handlers */}
            {displayedImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = displayedImages.findIndex(img => img.id === selectedImage.id);
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : displayedImages.length - 1;
                    setSelectedImage(displayedImages[prevIndex]);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-4 transition-colors"
                  aria-label="Previous image"
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
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-4 transition-colors"
                  aria-label="Next image"
                >
                  <ArrowRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}
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

