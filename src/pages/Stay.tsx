import tent1 from "@/assets/images/tent_1.JPG";
import tent2 from "@/assets/images/tent_2.JPG";
import tent from "@/assets/images/tent.JPG";
import cottage from "@/assets/images/cottage.JPG";
import heroSurvival from "@/assets/hero-survival.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, Calendar, CheckCircle, Home, Sparkles, Users, Leaf, Mountain, TreePine, Waves } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Accommodation {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  singlePrice: string;
  twinPrice: string;
  additionalPersonPrice: string | null;
  facilities: string[];
  features: string[];
  natureIcon: typeof Leaf;
  natureElement: string; // For decorative elements
}

const accommodations: Accommodation[] = [
  {
    id: "luxury-tent",
    name: "Luxury Tent",
    type: "Premium Glamping",
    description: "Experience the ultimate in outdoor luxury with our spacious, well-appointed luxury tents. Perfect for those who want comfort without compromising the authentic camping experience.",
    image: tent1,
    singlePrice: "₹8,000",
    twinPrice: "₹11,000",
    additionalPersonPrice: "₹3,500",
    facilities: [
      "Premium bedding and linens",
      "Private attached bathroom",
      "Hot water supply",
      "Electricity and charging points",
      "Comfortable seating area",
      "Private deck/veranda",
      "Room service available",
      "Climate control options"
    ],
    features: ["Luxury comfort", "Private facilities", "Premium amenities", "Spacious design"],
    natureIcon: TreePine,
    natureElement: "forest"
  },
  {
    id: "alpine-tent",
    name: "Alpine Tent",
    type: "Mountain Comfort",
    description: "Designed for mountain enthusiasts, our Alpine Tents offer a perfect blend of rugged durability and comfort. Ideal for those seeking adventure with essential comforts.",
    image: tent2,
    singlePrice: "₹5,000",
    twinPrice: "₹8,000",
    additionalPersonPrice: "₹3,500",
    facilities: [
      "Comfortable bedding",
      "Shared bathroom facilities",
      "Hot water access",
      "Basic electricity",
      "Storage space",
      "Mountain views",
      "Heating options",
      "Common area access"
    ],
    features: ["Mountain views", "Adventure ready", "Comfortable", "Scenic location"],
    natureIcon: Mountain,
    natureElement: "mountain"
  },
  {
    id: "safari-tent",
    name: "Safari Tent",
    type: "Group Adventure",
    description: "Perfect for groups and adventure seekers. Our Safari Tents provide a communal yet comfortable camping experience, ideal for families and groups traveling together.",
    image: tent,
    singlePrice: "₹3,500",
    twinPrice: "Group Only",
    additionalPersonPrice: "Group Only",
    facilities: [
      "Group accommodation setup",
      "Shared bathroom facilities",
      "Common dining area",
      "Group activity space",
      "Basic amenities",
      "Campfire area",
      "Group meal options",
      "Adventure activities included"
    ],
    features: ["Group friendly", "Adventure focus", "Communal experience", "Budget friendly"],
    natureIcon: TreePine,
    natureElement: "community"
  },
  {
    id: "military-tent",
    name: "Military Tent",
    type: "Survival Experience",
    description: "Authentic military-style accommodation for those seeking a true survival experience. Basic, functional, and perfect for adventure training and survival camps.",
    image: tent,
    singlePrice: "₹2,500",
    twinPrice: "Group Only",
    additionalPersonPrice: "Group Only",
    facilities: [
      "Basic bedding",
      "Shared facilities",
      "Survival training area",
      "Group activities",
      "Campfire cooking",
      "Outdoor showers",
      "Training equipment",
      "Survival workshops"
    ],
    features: ["Authentic experience", "Survival training", "Group activities", "Adventure focus"],
    natureIcon: Mountain,
    natureElement: "wilderness"
  },
  {
    id: "colonel-hut",
    name: "Colonel Hut",
    type: "Premium Cabin",
    description: "Our most premium accommodation option. The Colonel Hut offers luxury cabin living with all modern amenities, perfect for those who want the best of both worlds.",
    image: cottage,
    singlePrice: "₹8,000",
    twinPrice: "₹12,000",
    additionalPersonPrice: "₹4,500",
    facilities: [
      "Luxury bedding and furnishings",
      "Private bathroom with hot water",
      "Full electricity and Wi-Fi",
      "Private kitchenette",
      "Living area",
      "Private balcony/patio",
      "Room service",
      "Premium amenities",
      "Climate control",
      "Entertainment options"
    ],
    features: ["Premium luxury", "Full facilities", "Private space", "Modern amenities"],
    natureIcon: TreePine,
    natureElement: "cabin"
  },
  {
    id: "pup-tent",
    name: "Pup Tent",
    type: "Minimalist Camping",
    description: "For the minimalist camper who wants the authentic outdoor experience. Simple, compact, and perfect for solo travelers or couples seeking a true camping adventure.",
    image: tent,
    singlePrice: "₹2,500",
    twinPrice: "₹4,000",
    additionalPersonPrice: null,
    facilities: [
      "Basic bedding",
      "Shared bathroom facilities",
      "Common area access",
      "Campfire area",
      "Basic storage",
      "Outdoor experience",
      "Nature immersion",
      "Minimal amenities"
    ],
    features: ["Authentic camping", "Minimalist", "Budget friendly", "Nature connection"],
    natureIcon: Leaf,
    natureElement: "minimal"
  }
];

const Stay = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll as EventListener);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.remove("opacity-0", "translate-y-8");
          el.classList.add("opacity-100", "translate-y-0");
          obs.unobserve(el);
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  // Nature decorative elements - minimalist style
  const NatureDecoration = ({ type, position }: { type: string; position: "left" | "right" }) => {
    const baseClasses = `absolute ${position === "left" ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none`;
    
    if (type === "forest") {
      return (
        <div className={baseClasses}>
          <TreePine className="w-96 h-96 text-primary" />
          <div className="absolute top-20 left-20">
            <Leaf className="w-32 h-32 text-primary opacity-50" />
          </div>
        </div>
      );
    }
    if (type === "mountain") {
      return (
        <div className={baseClasses}>
          <Mountain className="w-96 h-96 text-primary" />
          <div className="absolute bottom-20 right-20">
            <Mountain className="w-48 h-48 text-primary opacity-30" />
          </div>
        </div>
      );
    }
    if (type === "minimal") {
      return (
        <div className={baseClasses}>
          <Leaf className="w-64 h-64 text-primary" />
          <div className="absolute top-10 right-10">
            <Leaf className="w-32 h-32 text-primary opacity-40 rotate-45" />
          </div>
        </div>
      );
    }
    if (type === "community") {
      return (
        <div className={baseClasses}>
          <TreePine className="w-80 h-80 text-primary" />
          <div className="absolute bottom-10 left-10">
            <Leaf className="w-40 h-40 text-primary opacity-30" />
          </div>
        </div>
      );
    }
    if (type === "wilderness") {
      return (
        <div className={baseClasses}>
          <Mountain className="w-96 h-96 text-primary" />
          <div className="absolute top-10 right-10">
            <TreePine className="w-56 h-56 text-primary opacity-20" />
          </div>
        </div>
      );
    }
    if (type === "cabin") {
      return (
        <div className={baseClasses}>
          <TreePine className="w-80 h-80 text-primary" />
          <div className="absolute bottom-20 left-20">
            <Leaf className="w-48 h-48 text-primary opacity-30" />
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-3 px-3 pb-12">
        <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-3xl">
          {/* Background Image with Parallax */}
          <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
            <img
              src={heroSurvival}
              alt="Stay at Ultimate Survival Campsite"
              className="w-full h-full object-cover transition-transform duration-300"
              style={{
                transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/90 via-earth-dark/85 to-forest-medium/80" />
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>

          {/* Content */}
          <div className="container relative z-10 px-6 py-32">
            <div className="max-w-5xl mx-auto text-center">
              <div className="animate-fade-in-up mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-primary-foreground/30">
                  <Home className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary-foreground">Your Perfect Stay Awaits</span>
                </div>
              </div>
              
              <div className="animate-fade-in-up mb-8">
                <h1 className="text-5xl md:text-8xl font-bold text-primary-foreground mb-8 leading-tight">
                  Stay in <span className="text-primary">Nature</span>
                  <br />
                  Live the <span className="text-primary">Adventure</span>
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  From luxury glamping to authentic survival tents, choose the accommodation that matches your adventure style. 
                  All rates exclude government taxes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  onClick={() => {
                    document.getElementById("accommodations")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Accommodations
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Accommodation Sections */}
      <section id="accommodations" className="relative z-10">
        {accommodations.map((accommodation, idx) => {
          const Icon = accommodation.natureIcon;
          const isEven = idx % 2 === 0;
          const delay = idx * 0.1;

          return (
            <div
              key={accommodation.id}
              ref={addToRefs}
              className="opacity-0 translate-y-8 relative py-32 overflow-hidden transition-all duration-700"
              style={{ animationDelay: `${delay}s` }}
            >
              {/* Subtle Background Pattern - Minimalist */}
              <div className="absolute inset-0 opacity-[0.01]">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                  backgroundSize: '80px 80px',
                }} />
              </div>

              {/* Organic Shape Decorations */}
              <div className={`absolute ${isEven ? "left-0" : "right-0"} top-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl`} />
              <div className={`absolute ${isEven ? "right-0" : "left-0"} bottom-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl`} />

              {/* Nature Decorative Elements */}
              <NatureDecoration type={accommodation.natureElement} position={isEven ? "left" : "right"} />

              <div className="container mx-auto px-6 relative z-10">
                <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}>
                  {/* Image Side */}
                  <div className={`${isEven ? "md:order-1" : "md:order-2"} relative`}>
                    <div className="relative group">
                      {/* Minimalist corner lines */}
                      <div className="absolute -top-2 -left-2 w-16 h-16 border-t border-l border-primary/10" />
                      <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b border-r border-primary/10" />
                      
                      {/* Organic shape behind image */}
                      <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                      
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/30">
                        <img
                          src={accommodation.image}
                          alt={accommodation.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                      </div>

                      {/* Floating nature icon - minimalist */}
                      <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center border border-border/40 shadow-sm">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`${isEven ? "md:order-2" : "md:order-1"} space-y-8`}>
                    {/* Type Badge - Minimalist */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-2">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">{accommodation.type}</span>
                    </div>

                    {/* Title with subtle underline */}
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
                        {accommodation.name}
                      </h2>
                      <div className="w-24 h-px bg-primary/20 mt-2" />
                    </div>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                      {accommodation.description}
                    </p>

                    {/* Pricing - Minimalist Design */}
                    <div className="space-y-3 py-6 border-y border-border/30">
                      <div className="flex items-baseline gap-3">
                        <span className="text-sm text-muted-foreground font-medium min-w-[80px]">Single</span>
                        <span className="text-3xl font-bold text-primary">{accommodation.singlePrice}</span>
                      </div>
                      {accommodation.twinPrice !== "Group Only" && (
                        <div className="flex items-baseline gap-3">
                          <span className="text-sm text-muted-foreground font-medium min-w-[80px]">Twin</span>
                          <span className="text-3xl font-bold text-primary">{accommodation.twinPrice}</span>
                        </div>
                      )}
                      {accommodation.additionalPersonPrice && (
                        <div className="flex items-baseline gap-3">
                          <span className="text-sm text-muted-foreground font-medium min-w-[80px]">Additional</span>
                          <span className="text-3xl font-bold text-primary">{accommodation.additionalPersonPrice}</span>
                        </div>
                      )}
                    </div>

                    {/* Features - Minimalist tags */}
                    <div className="flex flex-wrap gap-2">
                      {accommodation.features.map((feature, featureIdx) => (
                        <span
                          key={featureIdx}
                          className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm font-medium border border-primary/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Dialog Trigger Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="bg-primary hover:bg-primary/90 text-primary-foreground group/btn mt-4"
                          onClick={() => setSelectedAccommodation(accommodation)}
                        >
                          Check Pricing & Details
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-bold">{accommodation.name}</DialogTitle>
                          <DialogDescription className="text-base">
                            {accommodation.description}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6 mt-4">
                          {/* Pricing Table */}
                          <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                            <h4 className="text-xl font-bold mb-4">
                              Pricing Details
                            </h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center py-2 border-b border-border/50">
                                <span className="font-medium">Single Occupancy</span>
                                <span className="text-lg font-bold text-primary">{accommodation.singlePrice}</span>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-border/50">
                                <span className="font-medium">Twin Occupancy</span>
                                <span className="text-lg font-bold text-primary">{accommodation.twinPrice}</span>
                              </div>
                              {accommodation.additionalPersonPrice && (
                                <div className="flex justify-between items-center py-2">
                                  <span className="font-medium">Additional Person</span>
                                  <span className="text-lg font-bold text-primary">{accommodation.additionalPersonPrice}</span>
                                </div>
                              )}
                              <div className="mt-4 pt-4 border-t border-border">
                                <p className="text-xs text-muted-foreground italic">
                                  * All rates exclude government taxes
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Facilities List */}
                          <div>
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-primary" />
                              Facilities & Amenities
                            </h4>
                            <div className="grid md:grid-cols-2 gap-3">
                              {accommodation.facilities.map((facility, facilityIdx) => (
                                <div key={facilityIdx} className="flex items-start gap-3">
                                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{facility}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Features */}
                          <div>
                            <h4 className="text-xl font-bold mb-4">Key Features</h4>
                            <div className="flex flex-wrap gap-2">
                              {accommodation.features.map((feature, featureIdx) => (
                                <span
                                  key={featureIdx}
                                  className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <Button 
                            size="lg" 
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                          >
                            Book This Accommodation
                            <ArrowRight className="ml-2" />
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>

              {/* Section Divider - Minimalist Nature Element */}
              {idx < accommodations.length - 1 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <div className="w-12 h-px bg-border/30" />
                  <Leaf className="w-4 h-4 text-primary/20" />
                  <div className="w-12 h-px bg-border/30" />
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Note Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} className="opacity-0 translate-y-8 text-center transition-all duration-700">
            <div className="inline-block bg-secondary/30 backdrop-blur-sm rounded-2xl px-8 py-4 border border-border/30 max-w-3xl">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Note:</span> All rates exclude government taxes. 
                Group-only accommodations require minimum booking requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="container mx-auto px-6 relative z-10">
          <div ref={addToRefs} className="opacity-0 translate-y-8 max-w-4xl mx-auto text-center transition-all duration-700">
            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12 md:p-16 border border-primary/10 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Calendar className="text-primary" size={18} />
                <span className="text-sm font-semibold text-primary">Reserve Your Stay</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to <span className="text-primary">Experience</span> Nature?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Book your stay today and create memories that will last a lifetime. 
                From luxury glamping to authentic survival experiences, we have the perfect accommodation for you.
              </p>
              
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
              >
                Book Your Stay Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stay;
