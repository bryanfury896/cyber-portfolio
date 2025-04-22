import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then(() => alert("Message sent!"))
      .catch((err) => alert("Error sending message."));
  };

  return (
    <motion.section 
      className="py-16 px-4 bg-black text-white text-center" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 bg-gray-800 text-white rounded" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 bg-gray-800 text-white rounded" />
        <textarea name="message" placeholder="Your Message" required className="w-full px-4 py-2 bg-gray-800 text-white rounded" rows="4"></textarea>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white">Send Message</button>
      </form>
    </motion.section>
  );
};

export default Contact;