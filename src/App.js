import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Tools from './components/Tools';

function App() {
  return (
    <div className="overflow-x-hidden">
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="tools">
          <Tools />
        </section>
      </main>
    </div>
  );
}



export default App;
