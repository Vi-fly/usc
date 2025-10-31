import { Button } from "@/components/ui/button";
import { Mountain, Flame, Compass, TreePine, ArrowRight } from "lucide-react";

const experiences = [
  {
    icon: Mountain,
    title: "Mountain Expeditions",
    description: "Scale peaks and master high-altitude survival techniques in challenging terrain",
    duration: "5-7 Days",
    level: "Advanced"
  },
  {
    icon: Flame,
    title: "Bushcraft Mastery",
    description: "Learn essential fire-making, shelter building, and wilderness cooking skills",
    duration: "3-4 Days",
    level: "Beginner"
  },
  {
    icon: Compass,
    title: "Navigation & Tracking",
    description: "Develop expert land navigation and wildlife tracking abilities",
    duration: "2-3 Days",
    level: "Intermediate"
  },
  {
    icon: TreePine,
    title: "Forest Immersion",
    description: "Connect deeply with nature through extended wilderness living experiences",
    duration: "7-10 Days",
    level: "All Levels"
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Mountain className="text-primary" size={18} />
            <span className="text-sm font-semibold text-primary">Our Programs</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Choose Your <span className="text-primary">Adventure</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From beginner bushcraft to advanced expeditions, find the perfect survival experience for your journey
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <exp.icon className="text-primary" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-sm">
                    <div className="px-3 py-1 rounded-full bg-secondary/80 border border-border/30">
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <span className="font-medium text-primary">{exp.level}</span>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="text-primary" size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <Button
            size="lg"
            className="rounded-full px-10 shadow-lg hover:shadow-xl transition-all group"
          >
            View All Programs
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
