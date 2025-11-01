import article1 from "@/assets/article-1.jpg";
import heroSurvival from "@/assets/hero-survival.jpg";
import mission from "@/assets/mission.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";
import visit from "@/assets/visit.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle, Home, Sparkles, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Accommodation {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  price: string;
  capacity: string;
  amenities: string[];
  features: string[];
}

const accommodations: Accommodation[] = [
  {
    id: "forest-cabin",
    name: "Forest Harmony Cabin",
    type: "Eco Cabin",
    description: "Immerse yourself in nature with our eco-friendly cabins nestled in the forest. Wake up to birdsong and fall asleep under the stars.",
    image: story1,
    price: "₹2,500/night",
    capacity: "2-4 guests",
    amenities: ["Private bathroom", "Outdoor deck", "Kitchenette", "Campfire area"],
    features: ["Sustainable design", "Forest views", "Nature immersion", "Eco-friendly"]
  },
  {
    id: "mountain-lodge",
    name: "Mountain Peak Lodge",
    type: "Luxury Lodge",
    description: "Experience luxury in the wilderness. Our mountain lodges offer stunning views, premium amenities, and the perfect balance of comfort and adventure.",
    image: story2,
    price: "₹5,000/night",
    capacity: "2-6 guests",
    amenities: ["Premium bedding", "Private balcony", "Mountain views", "Gourmet kitchen"],
    features: ["Luxury comfort", "Panoramic views", "Modern amenities", "Adventure ready"]
  },
  {
    id: "riverside-tent",
    name: "Riverside Glamping",
    type: "Glamping",
    description: "Luxury camping by the river. Our spacious tents offer comfort in the wild, with the soothing sounds of flowing water as your soundtrack.",
    image: story3,
    price: "₹3,500/night",
    capacity: "2-4 guests",
    amenities: ["River access", "Outdoor shower", "BBQ facilities", "Stargazing deck"],
    features: ["Riverside location", "Glamping luxury", "Water activities", "Nature connection"]
  },
  {
    id: "treehouse",
    name: "Treetop Sanctuary",
    type: "Treehouse",
    description: "Elevate your stay in our unique treehouses. Experience life among the treetops with modern comforts and breathtaking forest canopy views.",
    image: story4,
    price: "₹4,000/night",
    capacity: "2-3 guests",
    amenities: ["Elevated deck", "Tree-level views", "Natural ventilation", "Wildlife viewing"],
    features: ["Unique experience", "Canopy views", "Eco-conscious", "Adventure seekers"]
  },
  {
    id: "communal-lodge",
    name: "Community Lodge",
    type: "Shared Lodge",
    description: "Perfect for groups and solo travelers seeking connection. Our communal lodges foster friendships and shared experiences in a cozy atmosphere.",
    image: article1,
    price: "₹1,500/night",
    capacity: "4-12 guests",
    amenities: ["Shared spaces", "Community kitchen", "Common areas", "Group activities"],
    features: ["Social atmosphere", "Group friendly", "Budget friendly", "Community building"]
  },
  {
    id: "wilderness-retreat",
    name: "Wilderness Retreat Villa",
    type: "Villa",
    description: "Spacious villas designed for families and groups. Complete privacy with modern facilities, surrounded by pristine wilderness.",
    image: visit,
    price: "₹6,500/night",
    capacity: "6-10 guests",
    amenities: ["Full kitchen", "Private garden", "Multiple bedrooms", "Dining area"],
    features: ["Family friendly", "Complete privacy", "Full facilities", "Group accommodation"]
  }
];

const Stay = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

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
  }, []);

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
        <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-3xl">
          {/* Background Image with Parallax */}
          <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
            <img
              src={heroSurvival}
              alt="Stay at Ultimate Survival Camp"
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
                  Destination to <span className="text-primary">Discover</span>
                  <br />
                  Journeys to <span className="text-primary">Remember</span>
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Elevate your holiday celebrations at Ultimate Survival Camp, where we transform renowned spaces into 
                  <span className="font-semibold"> decadent celebrations</span>, setting the stage for your 
                  <span className="font-semibold"> cherished memories</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Book Your Stay
                  <ArrowRight className="ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-lg px-10 py-7 rounded-full transition-all"
                >
                  Explore Options
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Harmony Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        
        <div className="container px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div ref={addToRefs} className="opacity-0 text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="text-primary" size={18} />
                <span className="text-sm font-semibold text-primary">Nature-Inspired Living</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Find <span className="text-primary">harmony</span> in our
                <br />
                nature-inspired place
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Elevate your <span className="font-semibold text-foreground">journey experience</span> with our collection 
                of accommodations that reflect the pure essence of <span className="font-semibold text-foreground">harmony living</span>.
              </p>
            </div>

            {/* Image Showcase */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div ref={addToRefs} className="opacity-0 relative group overflow-hidden rounded-3xl aspect-[4/5]">
                <img
                  src={mission}
                  alt="Harmony Living"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Nature Immersion</h3>
                  <p className="text-white/90">Wake up to the sounds of nature</p>
                </div>
              </div>
              <div ref={addToRefs} className="opacity-0 relative group overflow-hidden rounded-3xl aspect-[4/5]" style={{ animationDelay: "0.2s" }}>
                <img
                  src={story1}
                  alt="Comfort in Wilderness"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Comfort & Adventure</h3>
                  <p className="text-white/90">Modern amenities meet wilderness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} className="opacity-0 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="text-primary">Perfect Stay</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From eco-cabins to luxury lodges, find the accommodation that matches your adventure style
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation, idx) => (
              <div
                key={accommodation.id}
                ref={addToRefs}
                className="opacity-0 group relative overflow-hidden rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl bg-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={accommodation.image}
                    alt={accommodation.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-foreground">{accommodation.type}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary/95 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-bold text-primary-foreground">{accommodation.price}</span>
                    </div>
                  </div>

                  {/* Capacity */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-background/95 backdrop-blur-sm px-3 py-2 rounded-full">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{accommodation.capacity}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {accommodation.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {accommodation.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {accommodation.features.slice(0, 2).map((feature, featureIdx) => (
                      <span
                        key={featureIdx}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Amenities */}
                  <div className="space-y-2 mb-6">
                    {accommodation.amenities.slice(0, 3).map((amenity, amenityIdx) => (
                      <div key={amenityIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                    View Details
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Stay Section */}
      <section className="py-32 relative overflow-hidden bg-secondary/30">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div ref={addToRefs} className="opacity-0 relative group overflow-hidden rounded-3xl">
                <img
                  src={story2}
                  alt="Group Stay"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div ref={addToRefs} className="opacity-0" style={{ animationDelay: "0.2s" }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Users className="text-primary" size={18} />
                  <span className="text-sm font-semibold text-primary">Group Accommodations</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Staying with a <span className="text-primary">Group</span>?
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Planning a group stay? Our accommodations are perfectly equipped to accommodate your needs, 
                  whether it's a <span className="font-semibold text-foreground">family gathering</span>, a 
                  <span className="font-semibold text-foreground"> corporate retreat</span>, or a 
                  <span className="font-semibold text-foreground"> celebration with friends</span>.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  With flexible options and personalized service, we ensure a seamless experience for groups of all sizes. 
                  Let us take care of the details so you can focus on enjoying quality time together.
                </p>

                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg group">
                  Plan Your Group Stay
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div ref={addToRefs} className="opacity-0 max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 md:p-16 border border-primary/20 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
                <Calendar className="text-primary" size={18} />
                <span className="text-sm font-semibold text-primary">Reserve Your Stay</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Stay in <span className="text-primary">Ultimate Survival Camp</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Experience the perfect blend of adventure and comfort. Book your stay today and create 
                memories that will last a lifetime.
              </p>
              
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
              >
                Book Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Rooms Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4.9</div>
                  <div className="text-sm text-muted-foreground">Guest Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stay;

