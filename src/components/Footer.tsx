import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileDown, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Career' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/premnikumbh',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/premnikumbh',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:premnikumbh@gmail.com',
      label: 'Email',
      color: 'hover:text-green-400'
    },
    {
      icon: <Globe size={20} />,
      href: 'https://premnikumbh.tech',
      label: 'Website',
      color: 'hover:text-purple-400'
    },
    {
      icon: <FileDown size={20} />,
      href: '/resume.pdf',
      label: 'Resume',
      color: 'hover:text-orange-400'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Terminal Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gray-800 rounded-lg p-6 font-mono">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm">Terminal</span>
            </div>
            
            <div className="text-green-400">
              <span className="text-blue-400">prem@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-purple-400">~</span>
              <span className="text-white">$ </span>
              <span className="text-gray-300">
                echo "Let's build something amazing! Available for DevOps consulting."
              </span>
            </div>
            
            <div className="mt-2 text-gray-300">
              Let's build something amazing! Available for DevOps consulting.
            </div>
            
            <div className="mt-4 text-green-400">
              <span className="text-blue-400">prem@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-purple-400">~</span>
              <span className="text-white">$ </span>
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                █
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Prem Nikumbh
            </h3>
            <p className="text-gray-400 leading-relaxed">
              DevOps Engineer with 3+ years of experience automating cloud infrastructure 
              and CI/CD across AWS, GCP, and Azure. Passionate about turning chaos into clarity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`text-gray-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Let's Connect</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 premnikumbh@gmail.com</p>
              <p>🌐 premnikumbh.tech</p>
              <p>📍 Pune, India – 411041</p>
              <p>💼 Available for DevOps consulting</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Prem Nikumbh. Crafted with ❤️ and lots of ☕
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>Built with React & Tailwind</span>
            <span>•</span>
            <span>Deployed on Netlify</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;