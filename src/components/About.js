import React from 'react';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

const skills = [
  'Red Teaming',
  'Penetration Testing',
  'Social Engineering',
  'OSINT',
  'Exploit Development'
];

const tools = [
  { name: 'Wireshark', icon: '/icons/wireshark.png' },
  { name: 'Metasploit', icon: '/icons/metasploit.png' },
  { name: 'Nmap', icon: '/icons/nmap.png' },
  { name: 'Burp Suite', icon: '/icons/burp.png' }
];

const About = () => {
  return (
    <motion.section 
      className="py-16 bg-gray-900 text-white text-center" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        I’m a cybersecurity enthusiast specializing in red teaming and penetration testing. I enjoy breaking things to make them better.
      </p>
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-600">
            {skill}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-4">Tools I Use</h3>
      <div className="flex justify-center gap-6 flex-wrap">
        {tools.map((tool, index) => (
          <div key={index} className="w-20 flex flex-col items-center">
            <img src={tool.icon} alt={tool.name} className="w-12 h-12 object-contain mb-2" />
            <span className="text-xs text-gray-300">{tool.name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;