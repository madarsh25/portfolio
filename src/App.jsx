import React, { useState, useEffect } from 'react';
import Hero from './components/sections/Hero';
import Quote from './components/sections/Quote';
import Projects from './components/sections/Projects';
import Skillset from './components/sections/Skillset';
import AboutMe from './components/sections/AboutMe';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

import GooeyNav from './components/ui/GooeyNav/GooeyNav';
import GlassSurface from './components/ui/GlassSurface/GlassSurface';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      
      const sections = ['home', 'quote', 'projects', 'skills', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getActiveIndex = () => {
    switch (activeSection) {
      case 'home': return 0;
      case 'about':
      case 'quote':
      case 'skills':
        return 1;
      case 'projects': return 2;
      case 'contact': return 3;
      default: return 0;
    }
  };

  const navItems = [
    { label: 'Home', onClick: () => handleNavClick('home') },
    { label: 'About', onClick: () => handleNavClick('about') },
    { label: 'Projects', onClick: () => handleNavClick('projects') },
    { label: 'Contact', onClick: () => handleNavClick('contact') }
  ];

  return (
    <div className="bg-black text-white relative min-h-screen">
      {/* Header Logo Badge (Top-Left) */}
      <div className="fixed top-6 left-6 flex items-center gap-3 text-xs z-50 select-none max-sm:hidden">
        <span className="font-bold bg-gradient-to-r from-blue-400 via-cyan-200 to-blue-500 text-transparent bg-clip-text tracking-wide font-syne text-sm">
          AY
        </span>
        <span className="text-gray-600 font-light">|</span>
        <div className="flex flex-col gap-[1px] text-gray-500">
          <span className="uppercase tracking-[0.2em] text-[8px] font-semibold">Creative Developer</span>
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 bg-blue-500 rounded-full animate-ping"></span>
            <span className="text-blue-500 text-[8px] uppercase tracking-[0.1em] font-medium">Building the future</span>
          </div>
        </div>
      </div>

      {/* Floating Pill Nav Bar (Top-Right) encased in GlassSurface with GooeyNav */}
      <div className="fixed top-4 right-4 z-50 max-sm:right-auto max-sm:left-1/2 max-sm:-translate-x-1/2 w-max">
        <GlassSurface width="auto" height="auto" borderRadius={30} blur={20} backgroundOpacity={0.15}>
          <GooeyNav 
            items={navItems} 
            activeIndex={getActiveIndex()} 
            setActiveIndex={(index) => {
              const targets = ['home', 'about', 'projects', 'contact'];
              handleNavClick(targets[index]);
            }}
          />
        </GlassSurface>
      </div>

      {/* Vertical Page Content */}
      <main className="relative">
        <Hero />
        <Quote />
        <Projects />
        <Skillset />
        <AboutMe />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
