import missionImage from "@/assets/mission.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown, Compass } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-secondary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.08),transparent_50%)]" />
      
      <div className="container px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Compass className="text-primary" size={18} />
            <span className="text-sm font-semibold text-primary">Our Foundation</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Our Mission & <span className="text-primary">Vision</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Empowering individuals through wilderness wisdom and transformative experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group animate-scale-in order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-border/50">
              <img
                src={missionImage}
                alt="Our mission - wilderness training and survival skills"
                className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              
              {/* Decorative element */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="backdrop-blur-md bg-background/80 rounded-2xl p-6 border border-border/50 shadow-lg">
                  <p className="text-sm font-semibold text-foreground">Since 2010</p>
                  <p className="text-xs text-muted-foreground mt-1">Building resilient leaders through nature</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
            {/* Mission Card */}
            <div className="group">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Compass className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe in the transformative power of wilderness experiences to build resilience, 
                    self-reliance, and deep connections with nature. Our mission is to create leaders who 
                    can thrive in any environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <ArrowDown className="text-primary rotate-[-45deg]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Through expert mentorship and immersive challenges, we empower individuals to discover 
                    their potential, develop critical survival skills, and foster profound respect for the 
                    natural world.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all group"
              >
                Discover our programs
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
