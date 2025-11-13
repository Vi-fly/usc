import article1 from "@/assets/article-1.webp";
import article2 from "@/assets/article-2.webp";
import article3 from "@/assets/article-3.webp";
import story1 from "@/assets/story-1.webp";
import story2 from "@/assets/story-2.webp";
import story3 from "@/assets/story-3.webp";
import story4 from "@/assets/story-4.webp";
import videosection from "@/assets/videosection.mp4";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, MapPin, Sparkles, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Event {
  id: string;
  title: string;
  category: string;
  date: string;
  month: string;
  duration: string;
  location: string;
  description: string;
  image: string;
  capacity?: string;
  price?: string;
}

// Sample events organized by month
const upcomingEvents: Record<string, Event[]> = {
  "January 2025": [
    {
      id: "winter-survival-1",
      title: "Winter Survival Intensive",
      category: "Survival",
      date: "January 15-20, 2025",
      month: "January 2025",
      duration: "5 Days",
      location: "Mountain Base Camp",
      description: "Master winter survival techniques in challenging conditions. Learn snow shelter construction, cold weather fire-making, and winter navigation.",
      image: story3,
      capacity: "12 participants",
      price: "₹18,000"
    },
    {
      id: "wellness-retreat-1",
      title: "New Year Wellness Retreat",
      category: "Wellness",
      date: "January 25-30, 2025",
      month: "January 2025",
      duration: "5 Days",
      location: "Retreat Center",
      description: "Start the year with intention. Yoga, meditation, hot baths, and nature immersion for complete rejuvenation.",
      image: story1,
      capacity: "20 participants",
      price: "₹12,000"
    }
  ],
  "February 2025": [
    {
      id: "adventure-hike-1",
      title: "Mountain Day Hikes - Kakar Ludi",
      category: "Adventure",
      date: "February 8, 2025",
      month: "February 2025",
      duration: "1 Day",
      location: "Kakar Ludi Trail",
      description: "Scenic day hike to Kakar Ludi with breathtaking mountain views. Perfect for beginners and experienced hikers.",
      image: story2,
      capacity: "15 participants",
      price: "₹2,500"
    },
    {
      id: "kids-camp-1",
      title: "Brave Heart Kids Camp",
      category: "Children's Camping",
      date: "February 15-18, 2025",
      month: "February 2025",
      duration: "3 Days",
      location: "Camp Site",
      description: "Empowering camp for children ages 8-16. Build confidence, teamwork, and outdoor skills in a safe environment.",
      image: story4,
      capacity: "30 participants",
      price: "₹3,500"
    }
  ],
  "March 2025": [
    {
      id: "water-sports-1",
      title: "Water Sports with Karma",
      category: "Adventure",
      date: "March 10-12, 2025",
      month: "March 2025",
      duration: "2-3 Days",
      location: "River Base",
      description: "Thrilling water sports including rafting and kayaking. Experience the rush of white-water adventures.",
      image: article1,
      capacity: "18 participants",
      price: "₹6,500"
    },
    {
      id: "farming-workshop-1",
      title: "Permaculture & Sustainable Farming",
      category: "Homesteading",
      date: "March 20-25, 2025",
      month: "March 2025",
      duration: "5 Days",
      location: "Farm Site",
      description: "Learn sustainable farming techniques and permaculture principles. Hands-on workshops and practical training.",
      image: article2,
      capacity: "15 participants",
      price: "₹10,000"
    }
  ],
  "April 2025": [
    {
      id: "military-survival-1",
      title: "Military Survival Training Camp",
      category: "Survival",
      date: "April 5-15, 2025",
      month: "April 2025",
      duration: "10 Days",
      location: "Training Grounds",
      description: "Intensive survival training led by ex-Army Officers. Advanced wilderness skills and mental toughness development.",
      image: article3,
      capacity: "10 participants",
      price: "₹25,000"
    },
    {
      id: "self-discovery-1",
      title: "Self-Discovery Retreat",
      category: "Children's Camping",
      date: "April 20-25, 2025",
      month: "April 2025",
      duration: "5 Days",
      location: "Retreat Center",
      description: "Transformative experience for ages 14-22. Explore potential, build resilience, and discover inner strength.",
      image: story1,
      capacity: "25 participants",
      price: "₹8,500"
    }
  ]
};

// Past highlights
const pastHighlights: Event[] = [
  {
    id: "past-1",
    title: "Summer Wilderness Challenge",
    category: "Adventure",
    date: "August 2024",
    month: "August 2024",
    duration: "7 Days",
    location: "Wilderness Camp",
    description: "An immersive survival experience that tested participants' skills and resilience.",
    image: story2
  },
  {
    id: "past-2",
    title: "Corporate Team Building",
    category: "Corporate",
    date: "September 2024",
    month: "September 2024",
    duration: "3 Days",
    location: "Corporate Retreat",
    description: "Successful team building program that strengthened collaboration and communication.",
    image: story3
  },
  {
    id: "past-3",
    title: "Farm Detox Retreat",
    category: "Wellness",
    date: "October 2024",
    month: "October 2024",
    duration: "7 Days",
    location: "Farm Site",
    description: "Participants reconnected with nature through hands-on farming and organic living.",
    image: story4
  }
];

const Events = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollY, setScrollY] = useState(0);

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Video */}
      <section className="relative pt-3 px-3 pb-12">
        <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-3xl">
          {/* Video Background */}
          <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{
                transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
              }}
            >
              <source src={videosection} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/85 via-earth-dark/80 to-forest-medium/75" />
          </div>

          {/* Content */}
          <div className="container relative z-10 px-6 py-32">
            <div className="max-w-5xl mx-auto text-center">
              <div className="animate-fade-in-up mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-primary-foreground/30">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary-foreground">Upcoming Events & Camps</span>
                </div>
              </div>
              
              <div className="animate-fade-in-up mb-8">
                <h1 className="text-5xl md:text-8xl font-bold text-primary-foreground mb-8 leading-tight">
                  Join Our <span className="text-primary">Journey</span>
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Discover transformative experiences throughout the year. From survival training to wellness retreats, 
                  find the perfect camp for your adventure.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  onClick={() => {
                    document.getElementById("upcoming-events")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Upcoming Camps
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events by Month */}
      <section id="upcoming-events" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} className="opacity-0 translate-y-8 text-center mb-16 transition-all duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="text-primary" size={18} />
              <span className="text-sm font-semibold text-primary">Upcoming Camps</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Events by <span className="text-primary">Month</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plan your adventure ahead. Browse our scheduled camps and retreats organized by month.
            </p>
          </div>

          {/* Events by Month */}
          <div className="space-y-20">
            {Object.entries(upcomingEvents).map(([month, events], monthIdx) => (
              <div
                key={month}
                ref={addToRefs}
                className="opacity-0 translate-y-8 transition-all duration-700"
                style={{ animationDelay: `${monthIdx * 0.1}s` }}
              >
                {/* Month Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-16 bg-primary" />
                  <h3 className="text-3xl md:text-4xl font-bold">{month}</h3>
                  <div className="h-px flex-1 bg-primary" />
                </div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.map((event, eventIdx) => (
                    <div
                      key={event.id}
                      className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 bg-card/50 backdrop-blur-sm hover:shadow-xl"
                    >
                      {/* Image */}
                      <div className="relative h-[240px] overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="bg-background/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/50">
                            <span className="text-xs font-semibold text-foreground uppercase tracking-wide">{event.category}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        <div>
                          <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {event.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {event.description}
                          </p>
                        </div>

                        {/* Event Details */}
                        <div className="space-y-2 pt-2 border-t border-border/50">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>{event.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            <span>{event.location}</span>
                          </div>
                          {event.capacity && (
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Users className="w-3 h-3" />
                              <span>{event.capacity}</span>
                            </div>
                          )}
                        </div>

                        {/* Price and Button */}
                        <div className="flex items-center justify-between pt-2">
                          {event.price && (
                            <div className="text-lg font-bold text-primary">
                              {event.price}
                            </div>
                          )}
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            Book Slot
                            <ArrowRight className="ml-2 w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Highlights */}
      <section className="py-24 relative z-10 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} className="opacity-0 translate-y-8 text-center mb-16 transition-all duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="text-primary" size={18} />
              <span className="text-sm font-semibold text-primary">Past Highlights</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Memories from <span className="text-primary">Past Events</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the transformative experiences we've shared together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pastHighlights.map((event, idx) => (
              <div
                key={event.id}
                ref={addToRefs}
                className="opacity-0 translate-y-8 group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 bg-card/50 backdrop-blur-sm hover:shadow-xl"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-background/95 backdrop-blur-md px-3 py-1.5 rounded-full inline-block mb-3 border border-border/50">
                      <span className="text-xs font-semibold text-foreground uppercase">{event.category}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                    <p className="text-sm text-white/90 mb-3">{event.date}</p>
                    <p className="text-sm text-white/80 line-clamp-2">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div ref={addToRefs} className="opacity-0 translate-y-8 max-w-4xl mx-auto text-center transition-all duration-700">
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 md:p-16 border border-primary/20 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
                <Calendar className="text-primary" size={18} />
                <span className="text-sm font-semibold text-primary">Reserve Your Spot</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to <span className="text-primary">Join Us</span>?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Don't miss out on these transformative experiences. Book your slot today and embark on a journey 
                that will change how you see the world.
              </p>
              
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
              >
                Book Your Slot
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

export default Events;



