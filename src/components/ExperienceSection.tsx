import story1 from "@/assets/story-1.webp";
import story2 from "@/assets/story-2.webp";
import story3 from "@/assets/story-3.webp";
import story4 from "@/assets/story-4.webp";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Flame, Mountain, TreePine } from "lucide-react";
import { Link } from "react-router-dom";

// Home page experiences mapped to actual experience IDs from the data
const experiences = [
  {
    id: "military-survival-training",
    icon: Mountain,
    title: "Mountain Expeditions",
    description: "Scale peaks and master high-altitude survival techniques in challenging terrain",
    duration: "5-7 Days",
    level: "Advanced",
    image: story3
  },
  {
    id: "sustainable-farming-workshop",
    icon: Flame,
    title: "Bushcraft Mastery",
    description: "Learn essential fire-making, shelter building, and wilderness cooking skills",
    duration: "3-4 Days",
    level: "Beginner",
    image: story1
  },
  {
    id: "river-rafting-adventure",
    icon: Compass,
    title: "Navigation & Tracking",
    description: "Develop expert land navigation and wildlife tracking abilities",
    duration: "2-3 Days",
    level: "Intermediate",
    image: story2
  },
  {
    id: "farm-detox-retreat",
    icon: TreePine,
    title: "Forest Immersion",
    description: "Connect deeply with nature through extended wilderness living experiences",
    duration: "7-10 Days",
    level: "All Levels",
    image: story4
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
            <span className="text-sm font-semibold text-primary">Experiences</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Where every moment tells <span className="text-primary">stories</span>
          </h3>
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
            <Link
              key={exp.id}
              to={`/experiences/${exp.id}`}
              className="group block relative animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl cursor-pointer">
                {/* Background Image */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-10">
                  {/* Top section - Icon */}
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                      <exp.icon className="text-white" size={28} />
                    </div>
                    <ArrowRight className="text-white/80 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" size={24} />
                  </div>

                  {/* Bottom section - Text content */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed mb-4 text-sm md:text-base">
                      {exp.description}
                    </p>

                    {/* Meta info */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        <span className="font-medium text-white">{exp.duration}</span>
                      </div>
                      <div className="px-3 py-1.5 rounded-full bg-primary/30 backdrop-blur-sm border border-primary/40">
                        <span className="font-medium text-white">{exp.level}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <Link to="/experiences">
            <Button
              size="lg"
              className="rounded-full px-10 shadow-lg hover:shadow-xl transition-all group"
            >
              View All Experiences
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
