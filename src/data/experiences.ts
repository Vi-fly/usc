import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";
import heroSurvival from "@/assets/hero-survival.jpg";
import mission from "@/assets/mission.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";
import visit from "@/assets/visit.jpg";
import { Building2, Calendar, GraduationCap, Heart, LucideIcon, Mountain, Sparkles, TreePine, Users, Waves } from "lucide-react";

export interface Experience {
  id: string;
  icon: LucideIcon;
  title: string;
  category: string;
  description: string;
  image: string;
  fullDescription?: string;
  duration?: string;
  price?: string;
  includes?: string[];
  highlights?: string[];
}

// Image array for distribution
const experienceImages = [story1, story2, story3, story4, article1, article2, article3, mission, visit, heroSurvival, story1, story2];

// Generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export const experiences: Experience[] = [
  {
    id: "brave-hearts-kids-camp",
    icon: GraduationCap,
    title: "Brave Hearts Kids Camp (For School)",
    category: "Education",
    description: "An empowering camp designed specifically for school children to build confidence, teamwork, and outdoor skills.",
    image: experienceImages[0],
    fullDescription: "Brave Hearts Kids Camp is a comprehensive outdoor education program designed to empower school children through adventure and learning. Our carefully structured activities combine wilderness skills, team-building exercises, and environmental education to create a transformative experience for young minds.",
    duration: "3-5 Days",
    price: "Starting from ₹3,500",
    includes: [
      "Accommodation in safe, supervised camp setting",
      "All meals (nutritious and balanced)",
      "Certified instructors and safety equipment",
      "Educational activities and workshops",
      "Transportation from designated pickup points"
    ],
    highlights: [
      "Age-appropriate outdoor activities",
      "Leadership and confidence building",
      "Nature exploration and environmental awareness",
      "Safe and supervised environment",
      "Skills certification upon completion"
    ]
  },
  {
    id: "self-discovery-retreat",
    icon: Sparkles,
    title: "Self-Discovery Retreat (Higher secondary + College)",
    category: "Retreat",
    description: "A transformative experience for students to explore their potential, build resilience, and discover their inner strength.",
    image: experienceImages[1],
    fullDescription: "The Self-Discovery Retreat is designed for students transitioning to higher education. Through meditation, reflective exercises, and outdoor challenges, participants gain clarity about their goals, build emotional resilience, and develop essential life skills for personal and academic success.",
    duration: "5-7 Days",
    price: "Starting from ₹8,500",
    includes: [
      "Lodging in comfortable retreat setting",
      "All meals (vegetarian and non-vegetarian options)",
      "Workshops on goal setting and personal development",
      "Meditation and mindfulness sessions",
      "One-on-one counseling sessions"
    ],
    highlights: [
      "Personal growth workshops",
      "Leadership development",
      "Stress management techniques",
      "Career guidance sessions",
      "Lifetime network of like-minded peers"
    ]
  },
  {
    id: "creators-reset-retreat",
    icon: Heart,
    title: "Creator's Reset Retreat",
    category: "Retreat",
    description: "A creative space for artists and creators to recharge, find inspiration, and reconnect with their creative spirit in nature.",
    image: experienceImages[2],
    fullDescription: "Specifically curated for artists, writers, designers, and creative professionals, this retreat offers a sanctuary away from daily distractions. Immerse yourself in nature, engage in creative workshops, and rediscover your artistic voice through guided sessions and unstructured creative time.",
    duration: "4-6 Days",
    price: "Starting from ₹12,000",
    includes: [
      "Artist-friendly accommodations with workspace",
      "Organic farm-to-table meals",
      "Creative workshops and skill sessions",
      "Individual and group critique sessions",
      "Materials and supplies for creative projects"
    ],
    highlights: [
      "Dedicated creative workspaces",
      "Inspirational natural surroundings",
      "Networking with fellow creators",
      "Portfolio development guidance",
      "Yoga and meditation for creative wellness"
    ]
  },
  {
    id: "farm-detox-retreat",
    icon: TreePine,
    title: "Farm Detox Retreat",
    category: "Wellness",
    description: "Experience sustainable farming practices while detoxifying your body and mind through farm-to-table living.",
    image: experienceImages[3],
    fullDescription: "Reconnect with the earth through hands-on farming experience. Learn permaculture principles, participate in organic farming, and enjoy fresh, chemical-free meals prepared from what you harvest. This retreat combines physical activity, healthy eating, and mindfulness practices for complete wellness.",
    duration: "7-10 Days",
    price: "Starting from ₹15,000",
    includes: [
      "Farm stay accommodations",
      "100% organic, farm-to-table meals",
      "Daily farming activities and workshops",
      "Yoga and meditation sessions",
      "Nature walks and farm tours"
    ],
    highlights: [
      "Learn sustainable farming techniques",
      "Hands-on permaculture training",
      "Chemical-free, organic produce",
      "Physical detox through natural activities",
      "Mindful eating practices"
    ]
  },
  {
    id: "military-survival-training",
    icon: Mountain,
    title: "Military Survival Training Camp",
    category: "Training",
    description: "Intensive survival training program designed for those seeking advanced wilderness skills and mental toughness.",
    image: experienceImages[4],
    fullDescription: "Develop elite-level survival skills through rigorous training designed by former military personnel. Learn advanced navigation, emergency shelter construction, fire-making in adverse conditions, water sourcing and purification, and mental resilience techniques used by special forces.",
    duration: "10-14 Days",
    price: "Starting from ₹25,000",
    includes: [
      "Tactical training equipment",
      "Meals and rations",
      "Certified military instructors",
      "Comprehensive survival manual",
      "Certification upon completion"
    ],
    highlights: [
      "Military-grade survival techniques",
      "Stress inoculation training",
      "Advanced navigation and orienteering",
      "Emergency medical procedures",
      "Leadership and team coordination"
    ]
  },
  {
    id: "sustainable-farming-workshop",
    icon: TreePine,
    title: "Sustainable Farming Workshop / Permaculture",
    category: "Workshop",
    description: "Learn sustainable farming techniques and permaculture principles to create self-sustaining ecosystems.",
    image: experienceImages[5],
    fullDescription: "A comprehensive workshop on sustainable agriculture and permaculture design. Learn to create self-sustaining food systems, understand soil health, water management, and integrate permaculture principles into your own farming or gardening practices.",
    duration: "5-7 Days",
    price: "Starting from ₹10,000",
    includes: [
      "Accommodation and meals",
      "Workshop materials and tools",
      "Take-home permaculture design manual",
      "Hands-on practice sessions",
      "Certificate of completion"
    ],
    highlights: [
      "Permaculture design principles",
      "Soil regeneration techniques",
      "Water harvesting and management",
      "Companion planting strategies",
      "Creating food forests"
    ]
  },
  {
    id: "spiritual-himalayan-retreat",
    icon: Mountain,
    title: "Spiritual Himalayan Retreat",
    category: "Retreat",
    description: "A serene journey into the Himalayas for spiritual growth, meditation, and inner peace.",
    image: experienceImages[6],
    fullDescription: "Embark on a spiritual journey in the serene Himalayan mountains. This retreat combines meditation, yoga, spiritual teachings, and nature immersion to help you find inner peace and reconnect with your true self in the majestic beauty of the Himalayas.",
    duration: "7-10 Days",
    price: "Starting from ₹18,000",
    includes: [
      "Mountain lodge accommodations",
      "Vegetarian meals",
      "Daily meditation and yoga sessions",
      "Spiritual guidance and teachings",
      "Guided mountain walks"
    ],
    highlights: [
      "Authentic spiritual practices",
      "Breathtaking Himalayan scenery",
      "Experienced spiritual guides",
      "Silent meditation sessions",
      "Personal transformation journey"
    ]
  },
  {
    id: "temple-tour-camp-stay",
    icon: Calendar,
    title: "Temple Tour + Camp Stay Package (Jwalamukhi, Baglamukhi, Chamunda Devi)",
    category: "Experience",
    description: "Combine spiritual exploration with outdoor adventure through visits to sacred temples and camping experiences.",
    image: experienceImages[7],
    fullDescription: "A unique combination of spiritual exploration and outdoor adventure. Visit ancient temples including Jwalamukhi, Baglamukhi, and Chamunda Devi, followed by camping experiences that allow you to connect with nature while exploring the rich spiritual heritage of the region.",
    duration: "4-6 Days",
    price: "Starting from ₹9,500",
    includes: [
      "Temple visits and guided tours",
      "Camping accommodations",
      "All meals",
      "Transportation between locations",
      "Cultural immersion activities"
    ],
    highlights: [
      "Visit three sacred temples",
      "Camping under the stars",
      "Cultural and spiritual learning",
      "Beautiful temple architecture",
      "Community bonding experiences"
    ]
  },
  {
    id: "river-rafting-adventure",
    icon: Waves,
    title: "River Rafting & Local Adventure",
    category: "Adventure",
    description: "Thrilling water sports and local adventure activities for adrenaline seekers.",
    image: experienceImages[8],
    fullDescription: "Get your adrenaline pumping with white-water rafting, cliff jumping, and other exciting water sports. This adventure package combines thrilling activities with local cultural experiences, making it perfect for adventure enthusiasts looking for both excitement and cultural immersion.",
    duration: "3-4 Days",
    price: "Starting from ₹7,500",
    includes: [
      "All safety equipment and gear",
      "Certified rafting guides",
      "Accommodation",
      "Meals and refreshments",
      "Adventure photography package"
    ],
    highlights: [
      "Grade III-IV rapids",
      "Multiple adventure activities",
      "Professional safety standards",
      "Breathtaking river scenery",
      "Local cultural experiences"
    ]
  },
  {
    id: "corporate-wellness-program",
    icon: Building2,
    title: "Corporate Wellness Program",
    category: "Corporate",
    description: "Customizable wellness programs designed to rejuvenate teams, reduce stress, and boost productivity.",
    image: experienceImages[9],
    fullDescription: "Designed for corporate teams, this wellness program combines outdoor activities, team-building exercises, stress management workshops, and wellness practices. Help your team recharge, improve collaboration, and return to work with renewed energy and stronger bonds.",
    duration: "Customizable (2-5 Days)",
    price: "Custom pricing based on group size",
    includes: [
      "Accommodation and all meals",
      "Team-building activities",
      "Wellness workshops",
      "Recreational facilities",
      "Customized itinerary"
    ],
    highlights: [
      "Stress reduction techniques",
      "Team collaboration exercises",
      "Work-life balance workshops",
      "Outdoor recreational activities",
      "Customizable program structure"
    ]
  },
  {
    id: "corporate-activities-program",
    icon: Users,
    title: "Corporate Activities Program",
    category: "Corporate",
    description: "Team-building activities and corporate retreats tailored to strengthen team bonds and communication.",
    image: experienceImages[10],
    fullDescription: "A comprehensive corporate retreat program focusing on team building, leadership development, and improved communication. Through carefully designed activities, challenges, and workshops, teams will develop trust, improve collaboration, and enhance their working relationships.",
    duration: "Customizable (3-5 Days)",
    price: "Custom pricing based on group size",
    includes: [
      "Team-building activities and challenges",
      "Leadership workshops",
      "Accommodation and meals",
      "Professional facilitators",
      "Team assessment and feedback"
    ],
    highlights: [
      "Leadership development",
      "Enhanced team communication",
      "Trust-building exercises",
      "Problem-solving challenges",
      "Measurable team improvement"
    ]
  },
];

// Helper function to get experience by ID
export const getExperienceById = (id: string): Experience | undefined => {
  return experiences.find(exp => exp.id === id);
};

// Helper function to get experiences by category
export const getExperiencesByCategory = (category: string): Experience[] => {
  return experiences.filter(exp => exp.category === category);
};

