import { useState } from "react";
import { MapPin, Ticket, Bus, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import visitImage from "@/assets/visit.jpg";

const VisitSection = () => {
  const [activeLocation, setActiveLocation] = useState("local");

  const steps = [
    {
      number: "01",
      title: "Find Our Camp",
      icon: MapPin,
      image: visitImage,
      description: "Located in pristine wilderness areas",
    },
    {
      number: "02",
      title: "Book Your Experience",
      icon: Ticket,
      image: visitImage,
      description: "Reserve your spot in upcoming programs",
    },
    {
      number: "03",
      title: "Plan Your Journey",
      icon: Bus,
      image: visitImage,
      description: "Get directions and travel information",
    },
    {
      number: "04",
      title: "Begin Your Adventure",
      icon: Compass,
      image: visitImage,
      description: "Start your transformation in nature",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-secondary/20" />
      <div className="absolute inset-0 opacity-30" style={{ 
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--border)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MapPin className="text-primary" size={18} />
            <span className="text-sm font-semibold text-primary">Plan Your Visit</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            How to <span className="text-primary">Visit Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your journey to wilderness mastery starts with a simple step—planning your visit to our camp
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-[2rem] p-8 md:p-16 border border-border/50 shadow-2xl animate-scale-in">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-secondary/80 rounded-full p-2 border border-border/30 shadow-lg">
              <button
                onClick={() => setActiveLocation("local")}
                className={`px-10 py-4 rounded-full font-semibold transition-all duration-300 ${
                  activeLocation === "local"
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                I'm Nearby
              </button>
              <button
                onClick={() => setActiveLocation("remote")}
                className={`px-10 py-4 rounded-full font-semibold transition-all duration-300 ${
                  activeLocation === "remote"
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                I'm Traveling
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="animate-fade-in-up space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  {activeLocation === "local" ? "Located in Mountain Regions" : "Travel to Our Camps"}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {activeLocation === "local"
                    ? "Our camps are situated in carefully selected wilderness areas that offer diverse terrain for comprehensive survival training. Each location provides unique challenges and learning opportunities in pristine natural environments."
                    : "We offer multiple camp locations across mountain and forest regions. Transportation assistance and detailed travel guides are provided to all registered participants. Choose from weekend intensives or week-long immersion programs."}
                </p>
              </div>

              {activeLocation === "local" ? (
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/30">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold mb-1">30 minutes from nearest town</p>
                      <p className="text-sm text-muted-foreground">Easy access with local transportation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/30">
                    <Bus className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold mb-1">2 hours from major city</p>
                      <p className="text-sm text-muted-foreground">Direct routes available daily</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/30">
                    <Compass className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold mb-1">90 minutes from international airport</p>
                      <p className="text-sm text-muted-foreground">Shuttle service on request</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/30">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold mb-1">Airport pickup available</p>
                      <p className="text-sm text-muted-foreground">Pre-arranged transfers included</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/30">
                    <Bus className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold mb-1">Shuttle service from major cities</p>
                      <p className="text-sm text-muted-foreground">Comfortable group transportation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/30">
                    <Compass className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold mb-1">Detailed GPS coordinates provided</p>
                      <p className="text-sm text-muted-foreground">Complete navigation assistance</p>
                    </div>
                  </div>
                </div>
              )}

              <Button size="lg" className="rounded-full px-8 shadow-lg">
                Get Directions
              </Button>
            </div>

            {/* Right Steps */}
            <div className="space-y-5">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="group relative animate-slide-in-right hover:scale-[1.02] transition-transform duration-300"
                    style={{ animationDelay: `${0.1 * idx}s` }}
                  >
                    <div className="flex items-center gap-6 bg-gradient-to-r from-secondary/60 to-secondary/30 rounded-2xl p-6 border border-border/30 hover:border-primary/30 transition-all">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                        <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60 flex items-center justify-center group-hover:from-primary/90 group-hover:to-primary/70 transition-all">
                          <Icon className="text-primary-foreground" size={28} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                      <div className="text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                        {step.number}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
