import { Button } from "@/components/ui/button";
import { Bus, Calendar, Clock, Compass, Instagram, Mail, MapPin, MessageCircle, MessageSquare, Phone, Sparkles, Youtube } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"nearby" | "traveling">("nearby");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-primary/10">
        {/* Multiple floating orbs with different speeds */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s", animationDuration: "6s" }} />
        <div className="absolute bottom-20 left-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s", animationDuration: "8s" }} />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s", animationDuration: "7s" }} />
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
          }} />
        </div>

        {/* Decorative sparkles */}
        <div className="absolute top-32 left-1/4 opacity-30">
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
        </div>
        <div className="absolute bottom-40 right-1/3 opacity-30" style={{ animationDelay: "1s" }}>
          <Sparkles className="w-5 h-5 text-accent animate-pulse" />
        </div>
      </div>

      <div className="container px-6 relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
            <Mail className="text-primary" size={20} />
            <span className="text-sm font-semibold text-primary">Connect With Us</span>
            <Sparkles className="text-primary" size={16} />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Ready to Begin Your <span className="text-primary">Adventure</span>?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Have questions about our experiences? Ready to book your wilderness adventure? 
            <br className="hidden md:block" />
            Our team is here to guide you every step of the way.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Contact Info Card */}
            <div className={`lg:col-span-2 backdrop-blur-xl bg-card/80 rounded-3xl p-8 border border-border/50 shadow-2xl transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <MessageCircle className="text-primary" size={24} />
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {/* Location */}
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-primary/5 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1 text-card-foreground">Location</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">Mountain Wilderness Region<br />Northern Territory, USA</p>
                  </div>
                </a>

                {/* Phone/WhatsApp */}
                <a 
                  href="tel:+918265892437"
                  className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-primary/5 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1 text-card-foreground">Phone / WhatsApp</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">+91 82658 92437</p>
                </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:ultimatesurvivalcampsite.info@gmail.com"
                  className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-primary/5 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1 text-card-foreground">Email</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">ultimatesurvivalcampsite.info@gmail.com</p>
                  </div>
                </a>

                {/* Office Hours */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-accent/5 border border-accent/20">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1 text-card-foreground">Office Hours</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">Mon-Fri: 9am-6pm EST<br />Sat: 10am-4pm EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Actions & Social Media */}
            <div className="lg:col-span-1 flex flex-col space-y-6">
              {/* Quick Action Buttons */}
              <div className={`backdrop-blur-xl bg-card/80 rounded-3xl p-6 border border-border/50 shadow-xl transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Quick Actions</h4>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start group hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open("tel:+918265892437")}
                  >
                    <Phone className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start group hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open("mailto:ultimatesurvivalcampsite.info@gmail.com")}
                  >
                    <Mail className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                    Send Email
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start group hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <Calendar className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                    Book Session
                  </Button>
            </div>
          </div>

              {/* Social Media */}
              <div className={`backdrop-blur-xl bg-card/80 rounded-3xl p-6 border border-border/50 shadow-xl transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/usc.dailylife"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all group"
                    aria-label="Instagram"
                  >
                    <Instagram className="group-hover:scale-110 transition-transform" size={20} />
                  </a>
                  <a
                    href="https://wa.me/918265892437"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all group"
                    aria-label="WhatsApp"
                  >
                    <MessageSquare className="group-hover:scale-110 transition-transform" size={20} />
                  </a>
                  <a
                    href="https://youtube.com/@ultimatesurvivalcampsite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all group"
                    aria-label="YouTube"
                  >
                    <Youtube className="group-hover:scale-110 transition-transform" size={20} />
                  </a>
              </div>
              </div>
              </div>
          </div>

          {/* How to Visit Us Section */}
          <div className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="backdrop-blur-xl bg-card/80 rounded-3xl p-6 md:p-8 border border-border/50 shadow-2xl">
              {/* Tabs */}
              <div className="flex gap-2 mb-8 p-1 bg-secondary/30 rounded-full">
                <button
                  onClick={() => setActiveTab("nearby")}
                  className={`flex-1 py-3 px-4 rounded-full font-semibold text-sm transition-all ${
                    activeTab === "nearby"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Nearby
                </button>
                <button
                  onClick={() => setActiveTab("traveling")}
                  className={`flex-1 py-3 px-4 rounded-full font-semibold text-sm transition-all ${
                    activeTab === "traveling"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Traveling
                </button>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Located in Mountain Regions
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our camps are situated in carefully selected wilderness areas that offer diverse terrain for comprehensive survival training. Each location provides unique challenges and learning opportunities in pristine natural environments.
                </p>

                {activeTab === "nearby" ? (
                  <div className="space-y-4 mb-8">
                    {/* Step 1: Reach Kangra */}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/30 hover:shadow-md transition-all">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1 text-foreground">Reach Kangra</p>
                        <p className="text-sm text-muted-foreground">By any mode of transport (bus, train, or flight)</p>
                      </div>
                    </div>

                    {/* Step 2: Take bus to Jwalaji */}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/30 hover:shadow-md transition-all">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bus className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1 text-foreground">Take bus to Jwalaji / Jwalamukhi</p>
                        <p className="text-sm text-muted-foreground">Available from Kangra bus stand</p>
                      </div>
                    </div>

                    {/* Step 3: Take auto to campsite */}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/30 hover:shadow-md transition-all">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Compass className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1 text-foreground">Take auto to campsite</p>
                        <p className="text-sm text-muted-foreground">From Jwalaji / Jwalamukhi to the campsite</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 mb-8">
                    <div className="p-4 rounded-xl bg-secondary/50 border border-border/30">
                      <p className="font-semibold mb-2 text-foreground">From Delhi</p>
                      <p className="text-sm text-muted-foreground mb-3">Distance: ~440 km | Travel Time: 8-9 hours by car/volvo bus</p>
                      <p className="text-sm text-muted-foreground">Route: Delhi → NHI → Karnal → Ambala → Anandpur Sahib → Kiratpur Sahib → Nangal → Una Amb → Ghallour → Jajwar → Campsite</p>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/50 border border-border/30">
                      <p className="font-semibold mb-2 text-foreground">From Other Cities</p>
                      <p className="text-sm text-muted-foreground">Take a flight to Delhi or Chandigarh, then continue by train/road/flight to Kangra</p>
                    </div>
                  </div>
                )}

                <Button 
                  size="lg" 
                  className="w-full md:w-auto rounded-full px-8 shadow-lg"
                  onClick={() => window.open("https://maps.google.com", "_blank")}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Email Section */}
          <div className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="backdrop-blur-xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-3xl p-8 md:p-12 border-2 border-primary/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                  <Mail className="text-primary" size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Send Us an Email
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Have questions or want to learn more? Drop us a line and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:ultimatesurvivalcampsite.info@gmail.com"
                  className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Mail size={20} />
                  <span>ultimatesurvivalcampsite.info@gmail.com</span>
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-2"
                  onClick={() => window.open("mailto:ultimatesurvivalcampsite.info@gmail.com", "_blank")}
                >
                  Open Email Client
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
