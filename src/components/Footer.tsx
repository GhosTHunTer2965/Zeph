'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-6 md:px-12 border-t border-accent/20 bg-black/90 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* ---------- COMPANY INFO ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 mb-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src="/images/z-symbol.png"
                alt="Zephvion Logo"
                className="w-12 h-12"
                style={{
                  filter:
                    'drop-shadow(0 0 8px rgba(59,130,246,0.5)) drop-shadow(0 0 16px rgba(139,92,246,0.3))',
                }}
              />
              <div
                className="text-2xl font-black tracking-wider"
                style={{
                  background:
                    'linear-gradient(135deg, #1E40AF 0%, #3B82F6 25%, #8B5CF6 50%, #A855F7 75%, #8A2BE2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                ZEPHVION
              </div>
            </button>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Transforming businesses through next-generation AI workflow automation,
              smart assistants, and intelligent system upgrades.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Twitter, href: 'https://twitter.com' },
                { icon: Github, href: 'https://github.com' },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-blue-400 hover:text-purple-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ---------- QUICK LINKS ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-6 text-lg">Quick Links</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-400 hover:text-blue-400 transition-colors text-left w-full"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-gray-400 hover:text-blue-400 transition-colors text-left w-full"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="block text-gray-400 hover:text-blue-400 transition-colors text-left w-full"
              >
                Team
              </button>
              {/* Added Career page link */}
              <Link
                href="/careers"
                className="block text-gray-400 hover:text-blue-400 transition-colors"
              >
                Careers
              </Link>
              {/* Separate FAQ page */}
              <Link
                href="/faq"
                className="block text-gray-400 hover:text-blue-400 transition-colors"
              >
                FAQ
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-400 hover:text-blue-400 transition-colors text-left w-full"
              >
                Contact
              </button>
            </nav>
          </motion.div>

          {/* ---------- CONTACT INFO ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-6 text-lg">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>contact@zephvion.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---------- BOTTOM SECTION ---------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-12 mt-12 border-t border-accent/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Zephvion. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
