import { useState } from "react";
import { 
  Leaf, Users, Target, Lightbulb, Mountain, 
  Flame, Home, Compass, Heart, Droplet,
  Handshake, GraduationCap, Share2, Star, Trophy,
  Recycle, Bird, TreePine, Sprout
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CommitmentSection = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Core Skills", icon: Target },
    { id: "community", label: "Community", icon: Users },
    { id: "sustainability", label: "Sustainability", icon: Leaf },
  ];

  const content = {
    skills: [
      {
        icon: Flame,
        title: "Fire Mastery",
        description:
          "Master multiple fire-starting techniques, from friction methods to modern tools, ensuring you can create fire in any conditions.",
      },
      {
        icon: Home,
        title: "Shelter Building",
        description:
          "Learn to construct weather-resistant shelters using natural materials and modern techniques for survival in diverse environments.",
      },
      {
        icon: Compass,
        title: "Navigation Excellence",
        description:
          "Develop expert navigation skills using maps, compass, natural indicators, and celestial navigation for confident wilderness travel.",
      },
      {
        icon: Heart,
        title: "Wilderness Medicine",
        description:
          "Gain critical first aid and wilderness medicine skills to handle emergencies and ensure safety in remote locations.",
      },
      {
        icon: Droplet,
        title: "Resource Management",
        description:
          "Master water purification, food foraging, and resource conservation techniques essential for extended wilderness stays.",
      },
    ],
    community: [
      {
        icon: Handshake,
        title: "Team Building",
        description:
          "Develop strong bonds through collaborative survival challenges that require teamwork, communication, and mutual support.",
      },
      {
        icon: GraduationCap,
        title: "Mentorship Network",
        description:
          "Connect with experienced survival instructors and fellow enthusiasts in a supportive community of wilderness learners.",
      },
      {
        icon: Share2,
        title: "Skill Sharing",
        description:
          "Participate in knowledge exchange sessions where campers share unique skills and learn from diverse experiences.",
      },
      {
        icon: Star,
        title: "Alumni Community",
        description:
          "Join our growing network of alumni for ongoing training, events, and lifelong connections with survival enthusiasts.",
      },
      {
        icon: Trophy,
        title: "Leadership Development",
        description:
          "Grow as a leader through progressive challenges that build confidence, decision-making skills, and group management abilities.",
      },
    ],
    sustainability: [
      {
        icon: Leaf,
        title: "Leave No Trace",
        description:
          "Practice and master Leave No Trace principles to minimize environmental impact and preserve wilderness for future generations.",
      },
      {
        icon: Recycle,
        title: "Eco-Friendly Practices",
        description:
          "Learn sustainable outdoor practices including waste management, responsible foraging, and minimal-impact camping techniques.",
      },
      {
        icon: Bird,
        title: "Wildlife Respect",
        description:
          "Understand wildlife behavior and learn coexistence strategies that protect both humans and animals in shared spaces.",
      },
      {
        icon: TreePine,
        title: "Forest Conservation",
        description:
          "Contribute to conservation efforts through habitat restoration projects and responsible wilderness stewardship practices.",
      },
      {
        icon: Sprout,
        title: "Sustainable Living",
        description:
          "Apply survival skills to everyday life, promoting sustainable living practices and reduced environmental footprint.",
      },
    ],
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-accent/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/30 px-6 py-3 rounded-full mb-6 backdrop-blur-sm shadow-lg">
            <Mountain className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Commitment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Commitment</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="inline-flex bg-gradient-to-r from-secondary/60 to-secondary/40 rounded-full p-2 border-2 border-primary/20 shadow-lg">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content[activeTab as keyof typeof content].map((item, idx) => {
            // Alternate colors for visual variety
            const isPrimary = idx % 2 === 0;
            const gradient = isPrimary 
              ? "from-primary/20 via-primary/10 to-accent/10" 
              : "from-accent/20 via-accent/10 to-primary/10";
            const borderColor = isPrimary ? "border-primary/30" : "border-accent/30";
            const iconBg = isPrimary ? "bg-primary/20" : "bg-accent/20";
            
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${gradient} rounded-3xl p-8 shadow-xl border-2 ${borderColor} hover:shadow-2xl transition-all duration-300 group hover:scale-[1.02] relative overflow-hidden`}
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} rounded-bl-full opacity-50`} />
                
                <div className="relative z-10">
                  {/* Icon with colorful background */}
                  <div className={`w-16 h-16 rounded-xl ${iconBg} flex items-center justify-center mb-4 border-2 ${borderColor} shadow-lg group-hover:scale-110 transition-transform`}>
                    {(() => {
                      const IconComponent = item.icon;
                      return <IconComponent className={`w-8 h-8 ${isPrimary ? 'text-primary' : 'text-accent'}`} />;
                    })()}
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 ${isPrimary ? 'text-primary' : 'text-accent'} group-hover:scale-105 transition-transform`}>
                    {item.title}
                  </h3>
                  <p className="text-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
