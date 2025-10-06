"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Note: changed 'motion/react' to 'framer-motion'
import { ChevronDown } from "lucide-react";
import Particles from "@/components/Particles/ParticlesWrapper";

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden p-8 text-white"
    >
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(135deg, #4F00BC 0%, #200040 100%)",
        }}
      >
        {/* <PrismaticBurst /> */}
        {/* <LightRays /> */}
        <Particles />
      </div>

      {/* 2. FOREGROUND CONTENT 
        This now has a higher z-index (z-20) to sit clearly over the rays.
      */}
      <div
        className="relative z-20 flex flex-col items-center text-center space-y-8"
        style={{
          opacity: Math.max(0.3, 1 - scrollY * 0.003),
        }}
      >
        {/* // Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-8px md:text-8xl font-extrabold uppercase tracking-widest drop-shadow-lg"
          style={{
            // Set text to pure white
            color: "#e9e9e9ff",
            // Remove background clip/fill to ensure solid color
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
            // Use a soft, white shadow for a glow effect
            textShadow:
              "0 0 10px rgba(18, 18, 18, 0.7), 0 0 20px rgba(28, 27, 27, 0.4)",
          }}
        >
          ZEPHVION
        </motion.h1>
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          // Changed text-gray-200 to a class that implies bright white,
          // though we override with style for strict control
          className="text-base md:text-xl font-light tracking-[0.3em] text-white"
          style={{
            // Set text to pure white
            color: "#FFFFFF",
            // Soft white glow for subtitle
            textShadow: "0 0 8px rgba(255, 255, 255, 0.4)",
          }}
        >
          TRUST TODAY TRANSFORM TOMORROW
        </motion.p>
        

        {/* Divider line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "6rem", opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto shadow-lg"
        ></motion.div>
        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"
          style={{ opacity: Math.max(0.3, 1 - scrollY * 0.004) }}
        >
          <button
            onClick={() => scrollToSection("services")}
            className="px-8 py-3 text-lg font-medium rounded-full border-2 border-purple-500 text-purple-300 hover:bg-purple-700/20 hover:border-purple-400 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(167,139,250,0.5)]"
          >
            Explore Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(236,72,153,0.7)]"
          >
            Get Started
          </button>
        </motion.div>
      </div>

      {/* Downward arrow scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20" // Ensure arrow is also z-20
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="text-white hover:text-pink-400 transition-colors"
        >
          <ChevronDown className="w-8 h-8 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
        </button>
      </motion.div>
    </section>
  );
};

export default LandingPage;
