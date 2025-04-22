import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;