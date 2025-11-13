import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  // YouTube video embed URL with autoplay, loop, no controls, and muted
  // Using enhanced parameters to hide all YouTube UI elements
  const youtubeVideoId = "Nml92cDtF8s";
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&loop=1&playlist=${youtubeVideoId}&controls=0&mute=1&playsinline=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=0&start=0`;

  return (
    <section id="home" className="pt-3 px-3 pb-12">
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden rounded-3xl">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
          {/* YouTube iframe container with cover effect */}
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src={youtubeEmbedUrl}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                width: "100vw",
                height: "56.25vw", // 16:9 aspect ratio
                minHeight: "100vh",
                minWidth: "177.77777778vh", // 16:9 aspect ratio
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                border: "none",
                zIndex: 0,
              }}
              allow="autoplay; encrypted-media"
              allowFullScreen={false}
              title="Hero Background Video"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/90 via-earth-dark/85 to-forest-medium/80 z-10" />
        </div>

        {/* Content */}
        <div className="container relative z-20 px-6 py-32">
          <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Ultimate Survival Campsite: Master the Wilderness
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
          <div className="absolute bottom-12 right-12 hidden lg:block animate-slide-in-right z-20">
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-strong max-w-xs">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">🏕️</span>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-1">
                  Next Campsite Session Starts Soon
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
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-20">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
