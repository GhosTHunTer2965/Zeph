'use client';

import React from "react";
import Squares from "@/components/Squares/Squares";

// --- Icon Components ---
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2 2A18.01 18.01 0 0 1 3 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-1.15 1.83l-1.3 1.3a14.05 14.05 0 0 0 6.88 6.88l1.3-1.3A2 2 0 0 1 15 14h3a2 2 0 0 1 2 2z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-45 ml-2">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 11 2 7 22 2"/>
  </svg>
);

// --- Contact Info Card ---
interface ContactInfoProps {
  icon: React.FC;
  title: string;
  value: string;
}

const ContactInfoCard: React.FC<ContactInfoProps> = ({ icon: Icon, title, value }) => (
  <div className="p-5 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-start space-x-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/40">
    <div className="text-cyan-400 mt-0.5">
      <Icon />
    </div>
    <div className="text-left">
      <p className="text-sm font-semibold text-gray-400">{title}</p>
      <p className="text-lg font-medium text-white">{value}</p>
    </div>
  </div>
);

// --- Main Component ---
const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    companyName: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full py-16 text-white flex flex-col items-center bg-black relative overflow-hidden"
      style={{ background: "#000000ff" }}
    >
      {/* Squares component added as a background layer */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-20">
        <Squares />
      </div>
      
      {/* New wrapper to place all original content on top of the background */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="max-w-4xl w-full text-center px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            <span className="text-white">Get In</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 ml-2" style={{ textShadow: "0 0 10px rgba(52, 211, 245, 0.6)" }}>
              Touch
            </span>
          </h1>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-400">
            Ready to transform your business with AI? Lets discuss how our solutions can drive efficiency and innovation in your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 max-w-6xl w-full px-4">
          {/* Left: Form */}
          <div className="p-6 md:p-10 rounded-2xl bg-gray-900 relative overflow-hidden
                          transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/40">
            <h2 className="text-xl font-bold mb-6 text-white">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <input
                    type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500
                               focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300
                               hover:ring-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input
                    type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500
                               focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300
                               hover:ring-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/30"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                <input
                  type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500
                             focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300
                             hover:ring-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/30"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message" name="message" rows={4} value={formData.message} onChange={handleChange}
                  placeholder="Tell us about your project and how we can help..."
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500
                             focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300
                             hover:ring-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/30 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl text-white font-semibold flex items-center justify-center
                           bg-gradient-to-r from-purple-600 to-cyan-500 shadow-xl transition-all duration-300
                           hover:scale-105 hover:shadow-cyan-500/50"
              >
                Send Message
                <SendIcon />
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-6 lg:mt-6">
            <h2 className="text-xl font-bold mb-6 text-white text-left">Contact Information</h2>
            <p className="text-gray-400 text-left mb-8">
              Our team is ready to discuss your AI automation needs. Reach out through any of the channels below, and well respond within 24 hours.
            </p>

            <div className="space-y-4">
              <ContactInfoCard icon={MailIcon} title="Email" value="contact@zephvion.com" />
              <ContactInfoCard icon={PhoneIcon} title="Phone" value="+1 (555) 123-4567" />
              <ContactInfoCard icon={MapPinIcon} title="Office" value="San Francisco, CA" />
            </div>

            <div className="pt-4 text-left">
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="w-3 h-3 rounded-full bg-green-500" style={{ boxShadow: "0 0 5px rgba(34, 197, 94, 0.8)" }}></div>
                <span>We are online</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Average response time: <span className="text-cyan-400 font-medium ml-1">2 hours</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
