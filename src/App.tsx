import React from 'react';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;