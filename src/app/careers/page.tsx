'use client';

import { ArrowRight, Briefcase, Users, Zap } from 'lucide-react';
import Link from 'next/link';
// Assuming 'motion/react' is aliased to 'framer-motion' or available as a module
// You might need to change 'motion/react' to 'framer-motion' if it's not working.
import { motion } from 'framer-motion';

// Sample Job Data
const jobOpenings = [
  {
    title: 'Senior AI Workflow Engineer',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    link: '#apply-ai-engineer',
  },
  {
    title: 'Full Stack Developer (Next.js/Node)',
    location: 'San Francisco, CA',
    type: 'Full-time',
    link: '#apply-fullstack',
  },
  {
    title: 'Product Marketing Manager',
    location: 'Remote (Global)',
    type: 'Full-time',
    link: '#apply-pmm',
  },
];

const CareersPage = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Hero Section --- */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-8"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Join the team
          </span>
          <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Careers at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Zephvion</span>
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Ready to shape the future of AI automation? We’re looking for passionate, innovative minds to help us build the next generation of intelligent systems.
          </p>
        </motion.header>

        {/* --- Why Join Us Section --- */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <Zap className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation at Core</h3>
              <p className="text-gray-600">
                Work on cutting-edge AI technology and solve real-world problems that drive business transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <Users className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Culture</h3>
              <p className="text-gray-600">
                Enjoy a remote-first, inclusive culture that prioritizes work-life balance and autonomous work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <Briefcase className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                Continuous learning, mentorship programs, and a clear path for professional and personal growth.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* --- Open Positions Section --- */}
        <div className="py-16" id="open-positions">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Current Openings</h2>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                  <div className="flex gap-4 mt-1 text-sm text-gray-500">
                    <span>{job.location}</span>
                    <span className="font-medium text-blue-600">{job.type}</span>
                  </div>
                </div>
                <Link
                  href={job.link}
                  className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center group"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          {jobOpenings.length === 0 && (
            <div className="text-center py-10 border border-dashed border-gray-300 rounded-lg bg-white mt-10">
              <p className="text-lg text-gray-600">
                We currently don&#39;t have any open positions, but we&#39;re always interested in hearing from talented individuals!
              </p>
              <Link href="/contact" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium">
                Send us your resume
              </Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CareersPage;
