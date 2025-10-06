import React from "react";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack/ScrollStack"; // Added import

// --- Data for Service Cards ---
interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  iconPath: string; // SVG path data placeholder
  color: string; // Tailwind color class for gradient start/end
}

const services: Service[] = [
  {
    id: 1,
    title: "AI Workflow Automation",
    description:
      "Streamline complex business processes with intelligent automation that learns and adapts to your organization's unique needs.",
    features: [
      "Process Mining",
      "Intelligent Routing",
      "Predictive Scaling",
      "Real-time Analytics",
    ],
    iconPath:
      "M10 3a1 1 0 0 1 1 1v2h2V4a1 1 0 1 1 2 0v2h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2h-2v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2V4a1 1 0 0 1 1-1z", // Simplified Square/Grid icon
    color: "from-purple-500 to-fuchsia-600",
  },
  {
    id: 2,
    title: "Smart AI Assistants",
    description:
      "Deploy conversational AI that understands context, handles complex queries, and integrates seamlessly with your existing systems.",
    features: [
      "Natural Language Processing",
      "Context Awareness",
      "Multi-platform Integration",
      "Learning Capabilities",
    ],
    iconPath: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", // Simplified Message/Chat icon
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 3,
    title: "AI for Marketing & Insights",
    description:
      "Unlock the power of data-driven decision making with AI that analyzes patterns, predicts trends, and optimizes campaigns.",
    features: [
      "Predictive Analytics",
      "Customer Segmentation",
      "Campaign Optimization",
      "ROI Tracking",
    ],
    iconPath: "M3 3v18h18M18 13l-5 5L9 12l-4 4", // Simplified line chart icon
    color: "from-sky-400 to-blue-500",
  },
  // Add more services here if needed for scrolling demonstration
];

// --- Sub-Components ---

// SVG icon container with gradient background
const ServiceIcon: React.FC<{ iconPath: string; color: string }> = ({
  iconPath,
  color,
}) => (
  <div
    className={`
      w-16 h-16 p-4 
      rounded-xl 
      bg-gradient-to-br ${color} 
      shadow-lg
      flex items-center justify-center
    `}
    style={{
      // Custom shadow for the glowing effect
      boxShadow: `0 0 15px 5px ${
        color.includes("purple")
          ? "rgba(139, 92, 246, 0.4)"
          : "rgba(59, 130, 246, 0.4)"
      }`,
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 text-white"
    >
      <path d={iconPath} />
    </svg>
  </div>
);

// Individual Service Card Component
const ServiceCard: React.FC<Service> = ({
  title,
  description,
  features,
  iconPath,
  color,
}) => (
  <div
    className="
      min-w-[320px] lg:min-w-[400px] 
      p-8 
      rounded-2xl 
      bg-gray-800/60 
      border border-purple-500/10 
      shadow-2xl 
      transition-all duration-300 
      hover:shadow-purple-700/50 
      flex flex-col
      relative
    "
    style={{
      boxShadow: "0 0 15px rgba(139, 92, 246, 0.15)",
    }}
  >
    <ServiceIcon iconPath={iconPath} color={color} />

    <h3 className="text-2xl font-bold text-white mt-6 mb-3">{title}</h3>

    <p className="text-base text-gray-400 mb-6 flex-grow">{description}</p>

    {/* Feature List */}
    <ul className="space-y-2 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-300 text-sm">
          <svg
            className={`w-3 h-3 mr-2 ${
              color.includes("cyan") ? "text-cyan-400" : "text-purple-400"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="3" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>

    {/* Learn More Button */}
    <button
      className="
        mt-auto 
        px-6 py-2 
        text-sm font-medium 
        rounded-full 
        text-cyan-400 
        border-2 border-cyan-400/50
        transition-all duration-300 
        hover:bg-cyan-900/40
      "
      style={{
        boxShadow: "0 0 10px rgba(52, 211, 245, 0.3)",
      }}
    >
      Learn More &rarr;
    </button>
  </div>
);

// --- Main Component ---
const OurServices = () => {
  return (
    <div
      id="services"
      className="
        min-h-screen 
        w-full 
        py-16 
        text-white 
        flex flex-col items-center 
        bg-gray-900 
        overflow-hidden
      "
      style={{
        // Dark background matching the theme
        background: "linear-gradient(180deg, #000000ff 0%, #000000ff 100%)",
      }}
    >
      <div className="max-w-7xl w-full text-center px-4">
        {/* Header Section */}
        <h1
          className="
            text-4xl md:text-5xl font-extrabold mb-4 
            drop-shadow-lg
          "
        >
          <span className="text-white">Our</span>
          <span
            className="
              bg-clip-text text-transparent 
              bg-gradient-to-r from-purple-400 to-fuchsia-400 
              ml-2
            "
            style={{
              textShadow: "0 0 10px rgba(139, 92, 246, 0.6)",
            }}
          >
            Services
          </span>
        </h1>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Discover how our AI-powered solutions can transform your business
          operations and unlock new possibilities for growth and efficiency.
        </p>
      </div>

      {/* ScrollStack replaces the original carousel */}
      <div className="w-full max-w-3xl">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={300}
          // itemScale={0.05}
          itemStackDistance={15}
          // rotationAmount={5}
          blurAmount={5}
          // baseScale={0.8}
          opacityAmount={0.15}
        >
          {services.map((service) => (
            <ScrollStackItem
              key={service.id}
              // Override default card styles to let ServiceCard styling take precedence
              itemClassName="!bg-transparent !shadow-none !p-0 !h-auto !my-4"
            >
              <ServiceCard {...service} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </div>
  );
};

export default OurServices;
