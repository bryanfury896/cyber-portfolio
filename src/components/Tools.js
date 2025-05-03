import React from 'react';
import burpSuiteIcon from '../assets/burpsuite.svg';
import kaliLinuxIcon from '../assets/kalilinux.svg';
import hackadayIcon from '../assets/hackaday.svg';
import metasploitIcon from '../assets/metasploit.svg';
import testingLibraryIcon from '../assets/testinglibrary.svg';
import wiresharkIcon from '../assets/wireshark.svg';
import '../index.css'; // Ensure this is imported for styles

const tools = [
  { name: 'Burp Suite', icon: burpSuiteIcon },
  { name: 'Kali Linux', icon: kaliLinuxIcon },
  { name: 'Hackaday', icon: hackadayIcon },
  { name: 'Metasploit', icon: metasploitIcon },
  { name: 'Testing Library', icon: testingLibraryIcon },
  { name: 'Wireshark', icon: wiresharkIcon }
];

const Tools = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-black text-white text-center">
      <h3 className="text-4xl font-bold mb-12 text-green-400">Tools I Use</h3>
      <div className="bento-grid">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bento-card"
            style={{ '--card-index': index }} // Set custom CSS property
          >
            <img 
              src={tool.icon} 
              alt={tool.name} 
              className="bento-icon"
            />
            <span className="bento-label">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
