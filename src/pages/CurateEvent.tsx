import videosection from "@/assets/videosection.mp4";
import story1 from "@/assets/story-1.webp";
import story2 from "@/assets/story-2.webp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Building2, Calendar, GraduationCap, Heart, Send, Sparkles, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CurateEventFormData {
  name: string;
  email: string;
  groupType: string;
  duration: string;
  focus: string;
  message: string;
}

const CurateEvent = () => {
  const [formData, setFormData] = useState<CurateEventFormData>({
    name: "",
    email: "",
    groupType: "",
    duration: "",
    focus: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleChange = (field: keyof CurateEventFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          groupType: "",
          duration: "",
          focus: "",
          message: "",
        });
      }, 5000);
    }, 1500);

    // TODO: Replace with actual API call
    // await submitCurateEvent(formData);
  };

  const focusOptions = [
    { value: "adventure", label: "Adventure", icon: "🏔️" },
    { value: "wellness", label: "Wellness", icon: "🧘" },
    { value: "farming", label: "Farming", icon: "🌱" },
    { value: "survival", label: "Survival", icon: "🔥" },
    { value: "team-building", label: "Team Building", icon: "🤝" },
  ];

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
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary-foreground">Custom Experiences</span>
                </div>
              </div>
              
              <div className="animate-fade-in-up mb-8">
                <h1 className="text-5xl md:text-8xl font-bold text-primary-foreground mb-8 leading-tight">
                  Curate Your <span className="text-primary">Own Event</span>
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Whether it's a school camp, corporate retreat, or creator workshop — we help you design it your way. 
                  Choose your focus and let us create a transformative experience tailored to your group.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  onClick={() => {
                    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Started
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} className="opacity-0 translate-y-8 text-center mb-16 transition-all duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="text-primary" size={18} />
              <span className="text-sm font-semibold text-primary">Choose Your Focus</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              What <span className="text-primary">Inspires You</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the focus area that aligns with your group's goals and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {focusOptions.map((option, idx) => (
              <div
                key={option.value}
                ref={addToRefs}
                className="opacity-0 translate-y-8 group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 bg-card/50 backdrop-blur-sm hover:shadow-xl p-6 text-center cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => {
                  handleChange("focus", option.value);
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="text-4xl mb-3">{option.icon}</div>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  {option.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 relative z-10 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div ref={addToRefs} className="opacity-0 translate-y-8 text-center mb-16 transition-all duration-700">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              For <span className="text-primary">Every Group</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We design experiences for schools, corporates, and private groups seeking tailored adventures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Schools */}
            <div
              ref={addToRefs}
              className="opacity-0 translate-y-8 group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 bg-card/50 backdrop-blur-sm hover:shadow-xl p-8"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                Schools
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Educational camps that combine learning with adventure. Build confidence, teamwork, and outdoor skills 
                in a safe, supervised environment.
              </p>
            </div>

            {/* Corporates */}
            <div
              ref={addToRefs}
              className="opacity-0 translate-y-8 group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 bg-card/50 backdrop-blur-sm hover:shadow-xl p-8"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                Corporates
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Team building retreats and corporate wellness programs. Strengthen collaboration, reduce stress, 
                and boost productivity through nature-based experiences.
              </p>
            </div>

            {/* Private Groups */}
            <div
              ref={addToRefs}
              className="opacity-0 translate-y-8 group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 bg-card/50 backdrop-blur-sm hover:shadow-xl p-8"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                Private Groups
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Creator workshops, family gatherings, or friend groups. Design a unique experience that matches 
                your interests and creates lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div ref={addToRefs} className="opacity-0 translate-y-8 text-center mb-12 transition-all duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Calendar className="text-primary" size={18} />
                <span className="text-sm font-semibold text-primary">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Design Your <span className="text-primary">Experience</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our team will work with you to create a personalized experience.
              </p>
            </div>

            {isSubmitted ? (
              <div ref={addToRefs} className="opacity-0 translate-y-8 bg-card rounded-2xl p-12 border border-border shadow-lg text-center transition-all duration-700">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  We've received your request. Our team will contact you within 24-48 hours to discuss your custom event.
                </p>
                <p className="text-sm text-muted-foreground">
                  We're excited to help you create a transformative experience!
                </p>
              </div>
            ) : (
              <div ref={addToRefs} className="opacity-0 translate-y-8 bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg transition-all duration-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="bg-background"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Group Type */}
                    <div className="space-y-2">
                      <Label htmlFor="groupType">Group Type *</Label>
                      <Select
                        value={formData.groupType}
                        onValueChange={(value) => handleChange("groupType", value)}
                        required
                      >
                        <SelectTrigger id="groupType" className="bg-background">
                          <SelectValue placeholder="Select group type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="school">School / Educational</SelectItem>
                          <SelectItem value="corporate">Corporate</SelectItem>
                          <SelectItem value="private">Private Group</SelectItem>
                          <SelectItem value="family">Family</SelectItem>
                          <SelectItem value="friends">Friends</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Duration */}
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration *</Label>
                      <Select
                        value={formData.duration}
                        onValueChange={(value) => handleChange("duration", value)}
                        required
                      >
                        <SelectTrigger id="duration" className="bg-background">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Day</SelectItem>
                          <SelectItem value="2-3">2-3 Days</SelectItem>
                          <SelectItem value="4-5">4-5 Days</SelectItem>
                          <SelectItem value="6-7">6-7 Days</SelectItem>
                          <SelectItem value="8-10">8-10 Days</SelectItem>
                          <SelectItem value="10+">10+ Days</SelectItem>
                          <SelectItem value="custom">Custom Duration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Focus Area */}
                  <div className="space-y-2">
                    <Label htmlFor="focus">Focus Area *</Label>
                    <Select
                      value={formData.focus}
                      onValueChange={(value) => handleChange("focus", value)}
                      required
                    >
                      <SelectTrigger id="focus" className="bg-background">
                        <SelectValue placeholder="Select focus area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="adventure">Adventure</SelectItem>
                        <SelectItem value="wellness">Wellness</SelectItem>
                        <SelectItem value="farming">Farming</SelectItem>
                        <SelectItem value="survival">Survival</SelectItem>
                        <SelectItem value="team-building">Team Building</SelectItem>
                        <SelectItem value="mixed">Mixed Activities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your group, goals, special requirements, preferred dates, or any other details..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={5}
                      required
                      className="bg-background"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Submitting...</span>
                      </>
                    ) : (
                      <>
                        Submit Request
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CurateEvent;



