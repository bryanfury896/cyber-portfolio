import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      className="h-screen flex items-center justify-center bg-black text-white text-center"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div>
      <h1 className="glitch" data-text="Your Name | Red Teamer & Pentester">
            Soumya R.Biswal
      </h1>

        <p className="mt-4 text-lg text-gray-400">Red Teaming • Pentesting • Social Engineering</p>
      </div>
    </motion.section>
  );
};

export default Hero;