import React from 'react';

const tools = [
  { name: 'Burp Suite', icon: '/icons/burpsuite.svg' },
  { name: 'Kali Linux', icon: '/icons/kalilinux.svg' },
  { name: 'Hackaday',      icon: '/icons/hackaday.svg' },
  { name: 'Metasploit', icon: '/icons/metasploit.svg' },
  { name: 'Testing Library', icon: '/icons/testinglibrary.svg' },
  { name: 'Wireshark', icon: '/icons/wireshark.svg' }

];


const Tools = () => {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <h3 className="text-4xl font-bold mb-6 text-green-400">Tools I Use</h3>
      <div className="flex justify-center gap-6 flex-wrap">
        {tools.map((tool, index) => (
          <div key={index} className="w-24 flex flex-col items-center">
            <img 
              src={tool.icon} 
              alt={tool.name} 
              className="w-16 h-16 object-contain mb-2 transition-transform transform hover:scale-110"
            />
            <span className="text-xs text-gray-300">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
