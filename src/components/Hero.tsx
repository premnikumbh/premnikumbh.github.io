import React, { useState, useEffect } from 'react';
import { FileDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'I automate cloud infrastructure',
    'I build CI/CD pipelines',
    'I turn chaos into clarity',
    'I optimize cloud costs'
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20 sm:pt-16 md:pt-0 pb-20">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Prem Nikumbh
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 animate-fade-in-delay">
            DevOps Engineer
          </h2>

          <div className="h-16 flex items-center justify-center">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            <FileDown size={20} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
            View Resume
          </a>
          
          <button
            onClick={() => scrollToSection('projects')}
            className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-500 hover:bg-purple-500 text-purple-400 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Projects
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://github.com/premnikumbh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/premnikumbh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:premnikumbh@gmail.com"
            className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Simple Scroll Text Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="text-gray-400 text-sm font-medium animate-pulse">
          Scroll to explore
        </div>
      </div>
    </section>
  );
};

export default Hero;