import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm('service_5pechad', 'template_5tvuozf', form.current, 'C6e_1yn_8n8WbMpnZ')
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch(() => setStatus('error'));
  };

  return (
    <motion.section 
      className="py-16 px-4 bg-black text-white text-center font-mono" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-green-400">Contact</h2>
      
      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4">
        <input type="text" name="from_name" placeholder="Your Name" required className="w-full px-4 py-2 bg-gray-800 text-green-400 rounded" />
        <input type="email" name="from_email" placeholder="Your Email" required className="w-full px-4 py-2 bg-gray-800 text-green-400 rounded" />
        <textarea name="message" placeholder="Your Message" required className="w-full px-4 py-2 bg-gray-800 text-green-400 rounded" rows="4"></textarea>
        <button type="submit" className="bg-green-700 hover:bg-green-600 px-6 py-2 rounded text-white tracking-widest uppercase">Send</button>
      </form>
      <div className="mt-6 h-14 text-green-400 text-sm font-mono">
        {status === 'sending' && <span>Uploading payload<span className="animate-ping ml-1">|</span></span>}
        {status === 'success' && (
          <div className="text-green-500 space-y-1">
            <p>[+] Payload delivered successfully.</p>
            <p>[+] Awaiting target interaction...</p>
          </div>
        )}
        {status === 'error' && (
          <div className="text-red-500 space-y-1">
            <p>[-] Transmission error detected.</p>
            <p>[-] Possible firewall interference.</p>
          </div>
        )}
      </div>
      {status === 'success' && setTimeout(() => setStatus('idle'), 3000)}
    </motion.section>
  );
};

export default Contact;
