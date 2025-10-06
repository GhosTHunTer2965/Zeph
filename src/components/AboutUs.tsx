// AboutUs.tsx
import React from "react";

// Reusing a simplified version of the glowing logo icon for the heading
const ZLogoIcon = () => (
// ... (ZLogoIcon component unchanged)
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className="w-5 h-5 mr-2 text-cyan-400"
    style={{ filter: "drop-shadow(0 0 3px #67e8f9)" }}
  >
    <path
      d="M 20 20 L 80 20 L 80 80 L 20 80 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinejoin="round"
      strokeLinecap="round"
      className="opacity-75"
    />
    <circle cx="50" cy="50" r="4" fill="currentColor" />
  </svg>
);

// Component for the statistic cards at the bottom
interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
// ... (StatCard component unchanged)
  <div
    className="
      p-4 md:p-6 
      w-full 
      bg-gray-900/50 
      rounded-lg 
      border border-purple-500/20 
      shadow-xl 
      transition-all duration-300 
      hover:shadow-purple-700/30 
      flex flex-col items-start
    "
    style={{
      // Subtle edge glow on hover
      boxShadow: "0 0 10px rgba(139, 92, 246, 0.15)",
    }}
  >
    <p
      className="
        text-3xl font-bold mb-1 
        bg-clip-text text-transparent 
        bg-gradient-to-r from-cyan-400 to-purple-400
      "
      style={{
        textShadow: "0 0 8px rgba(103, 232, 249, 0.4)",
      }}
    >
      {value}
    </p>
    <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
      {label}
    </p>
  </div>
);

const AboutUs = () => {
  return (
    <div
      // *** ADDED ID FOR NAVBAR LINKING ***
      id="about"
      className="
        min-h-screen 
        w-full 
        p-8 md:p-16 lg:p-24 
        text-white 
        bg-gray-900 
        flex flex-col items-center
      "
      style={{
        // Dark background with subtle gradient to match the Hero section's depth
        background: "linear-gradient(180deg, #000000ff 0%, #000000ff 100%)",
      }}
    >
      <div className="max-w-7xl w-full">
        {/* Main Content Grid: Image on Left, Text on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: Image/Visual (unchanged) */}
          <div
            className="
              relative 
              rounded-2xl 
              overflow-hidden 
              aspect-video lg:aspect-square 
              flex items-center justify-center 
              p-4
              border border-cyan-400/20
            "
            style={{
              // Frosted glass effect for the frame
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              boxShadow: "0 0 40px rgba(103, 232, 249, 0.25)",
            }}
          >
            {/* Placeholder for the AI/Driver image */}
            <img
              src="https://placehold.co/800x600/1e293b/a5f3fc?text=AI+Vision"
              alt="Digital holographic figure driving a car"
              className="w-full h-full object-cover rounded-xl"
            />
            {/* Small glowing corner dot */}
            <div
              className="absolute top-4 right-4 w-3 h-3 rounded-full bg-cyan-400"
              style={{ filter: "drop-shadow(0 0 5px #67e8f9)" }}
            ></div>
          </div>

          {/* Right Column: Text Content (unchanged) */}
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center">
              <ZLogoIcon />
              <h2 className="text-xl font-medium text-cyan-400 uppercase tracking-widest">
                About Zephvion
              </h2>
            </div>
            <div className="w-16 h-1 bg-purple-500 rounded-full my-4"></div>

            {/* Paragraph 1 */}
            <p className="text-lg text-gray-300 leading-relaxed">
              At Zephvion, we believe the future belongs to organizations that
              can seamlessly blend human creativity with artificial
              intelligence. Founded by visionaries in AI and automation, we
              specialize in transforming complex business processes into
              intelligent, self-optimizing systems.
            </p>

            {/* Paragraph 2 */}
            <p className="text-lg text-gray-300 leading-relaxed">
              Our cutting-edge solutions dont just automate tasks—they learn,
              adapt, and evolve with your business needs. From smart assistants
              that understand context to workflow automation that thinks ahead,
              were building the infrastructure for tomorrows enterprises.
            </p>
          </div>
        </div>

        {/* Statistical Cards Section (unchanged) */}
        <div className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard value="500+" label="Workflows Automated" />
            <StatCard value="98%" label="Client Satisfaction" />
            <StatCard value="24/7" label="AI Support" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
