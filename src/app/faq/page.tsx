'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import  {Disclosure} from '@headlessui/react';
import { ChevronDownIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import ContactUs from '@/components/ContactUs' // Import the ContactUs component

const faqs = [
  {
    question: "How can AI benefit my business?",
    answer: "AI can automate repetitive tasks, enhance decision-making, improve customer experiences, and increase efficiency."
  },
  {
    question: "What kind of support does Zephvion offer post-deployment?",
    answer: "We provide ongoing monitoring, maintenance, and dedicated support to ensure your solution continues to perform."
  },
  {
    question: "Is Zephvion's AI customizable?",
    answer: "Yes, our AI solutions are tailored to each business's unique needs and goals."
  },
  {
    question: "Do I need technical knowledge to use your services?",
    answer: "No, our team handles everything—from integration to support—so you can focus on your business."
  },
  {
    question: "How secure is my data with Zephvion?",
    answer: "We follow industry-leading security protocols and compliance standards to ensure your data is safe and protected."
  },
  {
    question: "How long does it take to deploy your AI solutions?",
    answer: "Deployment time varies based on project scope, but most solutions can be integrated within a few weeks."
  },
  {
    question: "Can Zephvion integrate with existing software platforms?",
    answer: "Yes, our AI tools are built to integrate seamlessly with your existing infrastructure and tools."
  },
  {
    question: "What services does Zephvion offer?",
    answer: "Zephvion provides AI-driven solutions for industries like retail, healthcare, finance, logistics, and real estate."
  }
];

export default function FAQPage() {
  const [showContact, setShowContact] = useState(false); // State to show ContactUs

  return (
    <section id="faq" className="py-20 px-4 relative">
      {/* Back to Home Arrow */}
      <div className="absolute top-6 left-6 z-50">
        <a href="/" className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 cursor-pointer transition-colors">
          <ArrowLeftIcon className="w-5 h-5 text-white" />
        </a>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-neue-haas text-white mb-6 text-4xl md:text-5xl">
            Frequently Asked{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Questions
            </span>
          </h2>
          <div className="w-20 h-1 bg-accent glow-cyan mx-auto mb-8"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Find answers to common questions about our AI solutions and implementation process.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 glow-cyan-hover"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="border border-accent/20 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20">
                    <Disclosure.Button
                      className={`flex justify-between w-full px-4 py-4 font-poppins text-left text-white transition-all duration-200 hover:underline hover:underline-offset-4 hover:text-blue-400`}
                    >
                      {faq.question}
                      <ChevronDownIcon
                        className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-4 text-secondary leading-relaxed text-sm">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </motion.div>

        {/* Contact Our Team Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-secondary mb-4">
            Still have questions? We're here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0px 0px 25px rgba(236,72,153,0.8)' }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowContact(true)}
            className="relative px-8 py-3 text-lg font-semibold text-white rounded-full overflow-hidden 
            bg-gradient-to-r from-purple-600 to-pink-600 shadow-[0_0_25px_rgba(236,72,153,0.6)] 
            transition-all duration-300 ease-in-out inline-block"
          >
            <span className="relative z-10">Contact Our Team</span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500 opacity-0 hover:opacity-30 blur-xl transition-opacity duration-500"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-700 to-purple-800 opacity-0 hover:opacity-20 rounded-full transition-opacity duration-500"></span>
          </motion.button>
        </motion.div>

        {/* Render ContactUs component when showContact is true */}
        {showContact && (
          <div className="mt-12">
            <ContactUs />
          </div>
        )}
      </div>
    </section>
  );
}
