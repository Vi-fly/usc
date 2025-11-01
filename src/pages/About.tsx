import missionImage from "@/assets/mission.jpg";
import CommitmentSection from "@/components/CommitmentSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Award, Compass, Heart, Shield, Sparkles, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
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
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
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
    <div className="min-h-screen bg-background relative">
      <Navbar />
      
      {/* Animated Background Layers - More Visible */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Far mountains - slowest */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[50vh] will-change-transform"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,200 L200,120 L400,160 L600,100 L800,140 L1000,110 L1200,150 L1200,400 L0,400 Z"
              fill="hsl(var(--primary))"
              opacity="0.15"
            />
          </svg>
        </div>

        {/* Mid mountains - medium speed */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[40vh] will-change-transform"
          style={{
            transform: `translateY(${scrollY * 0.35}px)`,
          }}
        >
          <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,250 L300,180 L500,220 L700,160 L900,200 L1200,170 L1200,400 L0,400 Z"
              fill="hsl(var(--forest-medium))"
              opacity="0.2"
            />
          </svg>
        </div>

        {/* Near hills - faster */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[30vh] will-change-transform"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,300 Q300,240 600,270 T1200,290 L1200,400 L0,400 Z"
              fill="hsl(var(--accent))"
              opacity="0.25"
            />
          </svg>
        </div>

        {/* Floating sparkles and hearts - more visible */}
        <div className="absolute top-32 left-[8%] animate-float">
          <Sparkles className="w-6 h-6 text-accent opacity-40" />
        </div>
        <div className="absolute top-48 right-[12%] animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="w-7 h-7 text-primary opacity-35" />
        </div>
        <div className="absolute top-64 left-[65%] animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-5 h-5 text-accent opacity-40" />
        </div>
        <div className="absolute top-96 left-[20%] animate-float" style={{ animationDelay: '0.5s' }}>
          <Heart className="w-6 h-6 text-accent opacity-30" />
        </div>
        <div className="absolute top-[30rem] right-[25%] animate-float" style={{ animationDelay: '1.5s' }}>
          <Sparkles className="w-5 h-5 text-primary opacity-35" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-6 animate-float">
            <Compass className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Ultimate Survival Camp
            <span className="block text-primary mt-2">Where Adventure Meets Growth</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Empowering individuals through wilderness skills, outdoor education, and unforgettable experiences since 2015
          </p>
          
          <div className="flex gap-3 justify-center items-center animate-fade-in-up">
            {['🏕️', '🌲', '⛰️', '🔥', '🌟'].map((emoji, idx) => (
              <span key={idx} className="text-3xl animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} className="max-w-4xl mx-auto opacity-0">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="h-px w-16 bg-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Story</span>
              <div className="h-px w-16 bg-primary" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Rooted in Passion, Growing with Purpose
            </h2>
            
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded in 2015 by a group of outdoor enthusiasts and survival experts, Ultimate Survival Camp began with a simple mission: to reconnect people with nature and equip them with essential wilderness skills. What started as weekend workshops has grown into a comprehensive outdoor education center serving thousands of adventurers each year.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that spending time in nature isn't just about survival—it's about discovering your strengths, building confidence, and creating lasting memories. Every experience we offer is designed to challenge, inspire, and transform our participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision - Nuanu Style */}
      <section className="py-24 bg-background relative z-10 overflow-hidden">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} className="max-w-6xl mx-auto opacity-0">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Left Panel - Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square">
                <img
                  src={missionImage}
                  alt="Ultimate Survival Campsite"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Panel - Text Content */}
              <div className="space-y-6">
                {/* Heading with decorative icon */}
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">Our Mission and Vision</h2>
                </div>

                {/* Mission & Vision Text */}
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At Ultimate Survival Campsite, we believe in the power of nature, discipline, and community to transform the way people live and grow. Our mission is to create a self-sustaining ecosystem where people can pause, breathe, and rebuild their inner strength - physically, mentally, and emotionally.
                  </p>
                  <p>
                    We envision a world where people live in rhythm with the earth - grounded in simplicity, guided by resilience, and connected through shared experiences. Through nature-based learning, mindful living, and the wisdom of disciplined living, we strive to help every person rediscover balance, not as an escape from life, but as a way of living it fully.
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90 border-0 group mt-4"
                >
                  Discover our initiatives
                  <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={18} />
                </Button>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-4 gap-6 mt-16">
              {[
                { icon: Shield, label: "Safety First", color: "text-primary" },
                { icon: Users, label: "Community", color: "text-accent" },
                { icon: Award, label: "Excellence", color: "text-primary" },
                { icon: Heart, label: "Respect Nature", color: "text-accent" }
              ].map((value, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-card hover:bg-card/80 transition-colors border border-border">
                  <value.icon className={`w-10 h-10 mb-3 ${value.color}`} />
                  <span className="font-semibold">{value.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-24 relative z-10">
        <div ref={addToRefs} className="opacity-0">
          <CommitmentSection />
        </div>
      </section>

      {/* Our Latest Adventures Section */}
      <section className="py-24 relative z-10">
        <div ref={addToRefs} className="opacity-0">
          <GallerySection />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative z-10 overflow-hidden">        
        <div className="container mx-auto px-6 relative z-10">
          <div ref={addToRefs} className="max-w-4xl mx-auto text-center opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Our Impact in Numbers
            </h2>
            
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 border border-primary/20 backdrop-blur-sm">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { number: "10+", label: "Years Experience", emoji: "🎯" },
                  { number: "5000+", label: "Happy Campers", emoji: "😊" },
                  { number: "50+", label: "Expert Instructors", emoji: "👨‍🏫" },
                  { number: "100+", label: "Experiences Offered", emoji: "⛺" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl mb-3">{stat.emoji}</div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-background to-accent/10 relative z-10">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} className="max-w-4xl mx-auto opacity-0">
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="h-px w-16 bg-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Why Choose Us</span>
              <div className="h-px w-16 bg-primary" />
            </div>
            
            <div className="space-y-6">
              {[
                {
                  title: "Expert Instructors",
                  description: "Learn from certified wilderness survival experts with decades of combined experience in outdoor education, emergency response, and adventure leadership.",
                  emoji: "🎖️"
                },
                {
                  title: "Safe & Supportive Environment",
                  description: "We maintain the highest safety standards while creating a welcoming atmosphere where everyone can learn, grow, and challenge themselves at their own pace.",
                  emoji: "🛡️"
                },
                {
                  title: "Comprehensive Experiences",
                  description: "From beginner-friendly introductions to advanced wilderness skills, we offer experiences for all ages and experience levels throughout the year.",
                  emoji: "📚"
                },
                {
                  title: "Beautiful Locations",
                  description: "Experience the magic of pristine wilderness areas carefully selected for their natural beauty, diverse ecosystems, and ideal learning environments.",
                  emoji: "🌄"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-card rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl flex-shrink-0">{item.emoji}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} className="max-w-3xl mx-auto text-center opacity-0">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Join Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Adventure?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Whether you're a complete beginner or an experienced outdoors enthusiast, we have the perfect experience waiting for you.
            </p>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg group">
              Explore Our Experiences
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex gap-3 justify-center mt-8 animate-float">
              {['😊', '🌸', '✨', '🌿', '💫', '🦋', '🌈'].map((emoji, idx) => (
                <span 
                  key={idx} 
                  className="text-2xl" 
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
