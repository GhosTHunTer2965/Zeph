'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Github, Mail } from 'lucide-react';

// Import images from assets
import team1 from '@/assets/team/team1.png';
import team2 from '@/assets/team/team2.jpg';
import team4 from '@/assets/team/team4.png';
import team6 from '@/assets/team/team6.jpg';
import team7 from '@/assets/team/team7.png';
import team9 from '@/assets/team/team9.png';

const teamMembers = [
  { name: "Dr. Sarah Chen", role: "CEO & AI Strategist", image: team1, bio: "Former Google AI researcher with 15+ years in machine learning and enterprise automation." },
  { name: "Marcus Rodriguez", role: "CTO & Lead Developer", image: team2, bio: "Full-stack architect specializing in scalable AI infrastructure and cloud-native solutions." },
  { name: "Aisha Patel", role: "Head of Product Design", image: team4, bio: "UX visionary focused on creating intuitive interfaces for complex AI systems." },
  { name: "James Thompson", role: "VP of Engineering", image: team6, bio: "Systems architect with expertise in distributed computing and AI model optimization." },
  { name: "Lisa Wang", role: "Data Science Lead", image: team7, bio: "PhD in Statistics, specializing in predictive analytics and machine learning model development." },
  { name: "David Kim", role: "Head of Client Success", image: team9, bio: "Enterprise consultant ensuring seamless AI integration and maximum client ROI." }
];

const SocialButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="p-2 rounded-full bg-gray-800/50 hover:bg-cyan-500/20 transition-all duration-300">
    {children}
  </button>
);

export default function OurTeam() {
  return (
    <section id="team" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Meet Our <span className="text-cyan-400">Team</span>
        </h2>
        <p className="text-gray-400 mb-16 max-w-3xl mx-auto">
          Our diverse team of AI experts, engineers, and visionaries work together 
          to push the boundaries of whats possible with artificial intelligence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-gray-800/70 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg
                hover:shadow-[0_0_25px_5px_rgba(0,191,255,0.5)] transition-all duration-300"
              >
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-md shadow-cyan-500/30">
                  <img
                    src={member.image.src}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  <SocialButton><Linkedin size={16} /></SocialButton>
                  <SocialButton><Github size={16} /></SocialButton>
                  <SocialButton><Mail size={16} /></SocialButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
