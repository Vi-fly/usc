import { useState } from "react";
import { Leaf, Users, Target, Lightbulb, Mountain } from "lucide-react";
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
        icon: "🔥",
        title: "Fire Mastery",
        description:
          "Master multiple fire-starting techniques, from friction methods to modern tools, ensuring you can create fire in any conditions.",
      },
      {
        icon: "🏕️",
        title: "Shelter Building",
        description:
          "Learn to construct weather-resistant shelters using natural materials and modern techniques for survival in diverse environments.",
      },
      {
        icon: "🌍",
        title: "Navigation Excellence",
        description:
          "Develop expert navigation skills using maps, compass, natural indicators, and celestial navigation for confident wilderness travel.",
      },
      {
        icon: "💡",
        title: "Wilderness Medicine",
        description:
          "Gain critical first aid and wilderness medicine skills to handle emergencies and ensure safety in remote locations.",
      },
      {
        icon: "🗻",
        title: "Resource Management",
        description:
          "Master water purification, food foraging, and resource conservation techniques essential for extended wilderness stays.",
      },
    ],
    community: [
      {
        icon: "🤝",
        title: "Team Building",
        description:
          "Develop strong bonds through collaborative survival challenges that require teamwork, communication, and mutual support.",
      },
      {
        icon: "👥",
        title: "Mentorship Network",
        description:
          "Connect with experienced survival instructors and fellow enthusiasts in a supportive community of wilderness learners.",
      },
      {
        icon: "🎯",
        title: "Skill Sharing",
        description:
          "Participate in knowledge exchange sessions where campers share unique skills and learn from diverse experiences.",
      },
      {
        icon: "🌟",
        title: "Alumni Community",
        description:
          "Join our growing network of alumni for ongoing training, events, and lifelong connections with survival enthusiasts.",
      },
      {
        icon: "🏆",
        title: "Leadership Development",
        description:
          "Grow as a leader through progressive challenges that build confidence, decision-making skills, and group management abilities.",
      },
    ],
    sustainability: [
      {
        icon: "🌱",
        title: "Leave No Trace",
        description:
          "Practice and master Leave No Trace principles to minimize environmental impact and preserve wilderness for future generations.",
      },
      {
        icon: "♻️",
        title: "Eco-Friendly Practices",
        description:
          "Learn sustainable outdoor practices including waste management, responsible foraging, and minimal-impact camping techniques.",
      },
      {
        icon: "🦋",
        title: "Wildlife Respect",
        description:
          "Understand wildlife behavior and learn coexistence strategies that protect both humans and animals in shared spaces.",
      },
      {
        icon: "🌳",
        title: "Forest Conservation",
        description:
          "Contribute to conservation efforts through habitat restoration projects and responsible wilderness stewardship practices.",
      },
      {
        icon: "💚",
        title: "Sustainable Living",
        description:
          "Apply survival skills to everyday life, promoting sustainable living practices and reduced environmental footprint.",
      },
    ],
  };

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Commitment</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="inline-flex bg-secondary/50 rounded-full p-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                    activeTab === tab.id
                      ? "bg-foreground text-background shadow-md"
                      : "text-muted-foreground hover:text-foreground"
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
          {content[activeTab as keyof typeof content].map((item, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in group hover:-translate-y-1"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
