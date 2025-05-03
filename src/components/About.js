import React from 'react';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';
import Tools from './Tools';  // Import Tools component
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';

const skills = [
  'Red Teaming',
  'Penetration Testing',
  'Social Engineering',
  'OSINT',
  'Zeroday Research'
];


const About = () => {
  return (
    <motion.section 
      className="py-16 bg-gray-900 text-white text-center" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-green-400">About Me</h2>

<p className="text-gray-400 text-xl max-w-2xl mx-auto mb-4">
  With over six years of hands-on experience in cybersecurity, I have had the privilege of working with clients across various industries, including government sectors. My expertise spans a wide range of domains, from web application penetration testing to comprehensive Red Teaming, Zero-Day Research, and bug bounty programs on platforms such as HackerOne and Bugcrowd. I am deeply engaged in the open-source community, where I contribute to enhancing security practices and share knowledge.
</p>

<p className="text-green-400 text-xl font-semibold animate-pulse max-w-2xl mx-auto mb-8">
  I enjoy breaking things to make them better.
</p>

<div className="flex justify-center gap-4 flex-wrap mb-8">
  {skills && skills.length > 0 ? (
    skills.map((skill, index) => (
      <span
        key={index}
        className="bg-gray-700 px-4 py-2 rounded-lg text-base hover:bg-gray-600 transition"
      >
        {skill}
      </span>
    ))
  ) : (
    <p className="text-gray-500">No skills available</p>
  )}
</div>
    </motion.section>
  );
};

export default About;