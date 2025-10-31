import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-survival.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-3 px-3 pb-12">
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden rounded-3xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
          <img
            src={heroImage}
            alt="Survival Camp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/90 via-earth-dark/85 to-forest-medium/80" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-6 py-32">
          <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Ultimate Survival Camp: Master the Wilderness
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
              Transform yourself through immersive survival training. Learn essential wilderness skills,
              build resilience, and discover your true potential in nature's ultimate classroom.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-lg px-8 py-6 rounded-full transition-all"
            >
              <Play className="mr-2" size={20} />
              Watch Video
            </Button>
          </div>
          </div>

          {/* Floating Info Card */}
          <div className="absolute bottom-12 right-12 hidden lg:block animate-slide-in-right">
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-strong max-w-xs">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">🏕️</span>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-1">
                  Next Camp Starts Soon
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Join our wilderness survival intensive
                </p>
                <Button size="sm" variant="link" className="p-0 h-auto text-primary">
                  Learn more →
                </Button>
              </div>
            </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
