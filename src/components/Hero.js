import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <motion.section 
      className="hero text-center"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div>
        <motion.h1
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-4xl md:text-6xl font-bold glitch"
          data-text="Soumya R.Biswal | Red Teamer & Pentester"
        >
          Soumya R.Biswal
          <span className="ml-2 text-green-500 text-4xl animate-blink">_</span>
        </motion.h1>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="mt-4 text-xl md:text-2xl font-medium text-[#00ff00] font-mono tracking-wide"
        >
          <TypeAnimation
            sequence={[
              'Red Teamer',
              2000,
              'Pentester',
              2000,
              'Social Engineer',
              2000,
              'OSINT Specialist',
              2000,
              'Exploit Developer',
              2000,
              'CTF Player',
              2000,
              'Threat Hunter',
              2000,
              'Zeroday Researcher',
              2000,
              'Bug Bounty Hunter',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;