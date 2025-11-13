import visitImage from "@/assets/visit.webp";
import { Button } from "@/components/ui/button";
import { Bus, Car, Compass, MapPin, Plane, Ticket, Train } from "lucide-react";
import { useState } from "react";

const VisitSection = () => {
  const [activeLocation, setActiveLocation] = useState("local");

  const steps = [
    {
      number: "01",
      title: "Find Our Campsite",
      icon: MapPin,
      image: visitImage,
      description: "Located in pristine wilderness areas",
    },
    {
      number: "02",
      title: "Book Your Experience",
      icon: Ticket,
      image: visitImage,
      description: "Reserve your spot in upcoming experiences",
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
            Your journey to wilderness mastery starts with a simple step—planning your visit to our campsite
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-[2rem] p-4 sm:p-6 md:p-16 border border-border/50 shadow-2xl animate-scale-in">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8 md:mb-16">
            <div className="inline-flex w-full sm:w-auto bg-secondary/80 rounded-full p-1 sm:p-2 border border-border/30 shadow-lg">
              <button
                onClick={() => setActiveLocation("local")}
                className={`flex-1 sm:flex-none sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  activeLocation === "local"
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Nearby
              </button>
              <button
                onClick={() => setActiveLocation("remote")}
                className={`flex-1 sm:flex-none sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  activeLocation === "remote"
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Traveling
              </button>
            </div>
          </div>

          <div className={`grid gap-16 items-start ${
            activeLocation === "local" ? "lg:grid-cols-2" : "lg:grid-cols-1"
          }`}>
            {/* Left Content */}
            <div className={`animate-fade-in-up space-y-8 ${
              activeLocation === "remote" ? "max-w-6xl mx-auto w-full" : ""
            }`}>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                  {activeLocation === "local" ? "Located in Mountain Regions" : "Traveling from Delhi & Other Cities"}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  {activeLocation === "local"
                    ? "Our camps are situated in carefully selected wilderness areas that offer diverse terrain for comprehensive survival training. Each location provides unique challenges and learning opportunities in pristine natural environments."
                    : "Multiple convenient travel options available. Choose the mode that works best for you - road, rail, or air."}
                </p>
              </div>

              {activeLocation === "local" ? (
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-secondary/50 border border-border/30 hover:shadow-md transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold mb-1 text-sm sm:text-base">Reach Kangra</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">By any mode of transport (bus, train, or flight)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-secondary/50 border border-border/30 hover:shadow-md transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bus className="text-primary" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold mb-1 text-sm sm:text-base">Take bus to Jwalaji / Jwalamukhi</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Available from Kangra bus stand</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-secondary/50 border border-border/30 hover:shadow-md transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Compass className="text-primary" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold mb-1 text-sm sm:text-base">Take auto to campsite</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">From Jwalaji / Jwalamukhi to the campsite</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Left Side - Travel Options */}
                  <div className="lg:col-span-2 space-y-4">
                    {/* By Road */}
                    <div className="flex flex-col gap-4 p-5 rounded-xl bg-secondary/50 border border-border/30 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Car className="text-primary" size={24} />
                        </div>
                        <p className="font-bold text-lg">By Road</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-primary">Distance: ~440 km from Delhi</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">Route: Delhi → NHI → Karnal → Ambala → Anandpur Sahib → Kiratpur Sahib → Nangal → Una Amb → Ghallour → Jajwar → Campsite</p>
                        <p className="text-sm font-medium text-foreground">⏱️ Travel Time: 8-9 hours by car/volvo bus</p>
                      </div>
                    </div>

                    {/* By Train */}
                    <div className="flex flex-col gap-4 p-5 rounded-xl bg-secondary/50 border border-border/30 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Train className="text-primary" size={24} />
                        </div>
                        <p className="font-bold text-lg">By Train</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-primary">Nearest Station: AMB Andaura (AADR)</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">Route: Direct trains available from Old Delhi Railway Station</p>
                        <p className="text-sm font-medium text-foreground">📍 Station to Campsite: ~34 km (1 hour by cab/taxi)</p>
                      </div>
                    </div>

                    {/* By Air */}
                    <div className="flex flex-col gap-4 p-5 rounded-xl bg-secondary/50 border border-border/30 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Plane className="text-primary" size={24} />
                        </div>
                        <p className="font-bold text-lg">By Air</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-primary">Nearest Airport: Kangra (Dharamshala)</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">Connectivity: Air India & SpiceJet operate daily flights from Delhi</p>
                        <p className="text-sm font-medium text-foreground">📍 Airport to Campsite: ~51 km (1 hour by cab/taxi)</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Other Cities */}
                  <div className="lg:col-span-1 flex flex-col gap-4 p-5 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary" size={24} />
                      </div>
                      <p className="font-bold text-base">For Participants from Other Cities</p>
                    </div>
                    <div className="space-y-3 mt-2">
                      <div className="p-3 rounded-lg bg-background/50 border border-border/20">
                        <p className="font-semibold text-foreground mb-1 text-sm">From Chandigarh</p>
                        <p className="text-xs text-muted-foreground">4.5-5 hours by road (approx. 220 km)</p>
                      </div>
                      <div className="p-3 rounded-lg bg-background/50 border border-border/20">
                        <p className="font-semibold text-foreground mb-1 text-sm">From Amritsar</p>
                        <p className="text-xs text-muted-foreground">4.5-5 hours by road (approx. 220 km)</p>
                      </div>
                      <div className="p-3 rounded-lg bg-background/50 border border-border/20">
                        <p className="font-semibold text-foreground mb-1 text-sm">From Jaipur / Mumbai / Bangalore</p>
                        <p className="text-xs text-muted-foreground">Take a flight to Delhi or Chandigarh, then continue by train/road/flight to Kangra</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <Button size="lg" className="w-full sm:w-auto rounded-full px-8 shadow-lg mt-6">
                Get Directions
              </Button>
            </div>

            {/* Right Steps - Only show when "I'm Nearby" is selected */}
            {activeLocation === "local" && (
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
