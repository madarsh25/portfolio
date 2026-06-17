import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: 'MessMate',
    image: new URL('../../assets/project-messmate-screenshot.png', import.meta.url).href,
    description: 'MessMate is a canteen pre-ordering platform built with React and Supabase, featuring Razorpay payments, secure token-based ordering, and live queue-busting dashboards.',
    link: 'https://messmate-ccrf.onrender.com/',
    tags: ['React', 'Supabase', 'Razorpay', 'Tailwind']
  },
  {
    id: 2,
    name: 'PayGen',
    image: new URL('../../assets/project-paygen-screenshot.png', import.meta.url).href,
    description: 'PayGen is a payroll and payslip management application using React, Node.js, Express, and MongoDB, handling salary processing and secure downloadable payslips.',
    link: 'https://pay-gen.vercel.app/',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js']
  },
  {
    id: 3,
    name: 'SkyScanner',
    image: new URL('../../assets/project-skyscanner-screenshot.png', import.meta.url).href,
    description: 'SkyScanner is a weather app utilizing the OpenWeather API, delivering real-time weather information and global forecast lookups in a clean responsive UI.',
    link: 'https://skyscanner-flax.vercel.app/',
    tags: ['React', 'OpenWeather', 'CSS Grid', 'Vite']
  }
];

const githubLogo = new URL('../../assets/github-logo.png', import.meta.url).href;

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0.15
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'), 10);
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="relative bg-black py-20 px-6">
      {/* Title Header */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.35em] text-gray-400 mb-4 uppercase font-dm-sans">
          CRAFTING MODERN EXPERIENCES
        </p>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white font-syne uppercase">
          VENTURE <span className="font-playfair italic text-gray-400 font-normal lowercase">showcase</span>
        </h2>
      </div>

      {/* Showcase Grid */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto min-h-screen relative">
        
        {/* Left Column - Sticky Description (only visible on large screens) */}
        <div className="hidden lg:block w-[45%] pr-12">
          <div className="sticky top-28 h-[60vh] flex flex-col justify-center text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="space-y-6"
              >
                <h3 className="text-4xl font-bold font-syne text-white tracking-tight">
                  {projects[activeIndex].name}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed font-dm-sans max-w-md">
                  {projects[activeIndex].description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {projects[activeIndex].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-xs text-gray-300 font-medium font-dm-sans hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column - Scrollable project cards */}
        <div className="w-full lg:w-[55%] flex flex-col gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className="flex flex-col items-center justify-center w-full"
            >
              {/* Info block for small screens */}
              <div className="block lg:hidden w-full text-left mb-6 space-y-3">
                <h3 className="text-3xl font-bold font-syne text-white">{project.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-dm-sans">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-widest pt-2 hover:text-blue-300 transition-colors"
                >
                  Visit Website ↗
                </a>
              </div>

              {/* Main Card Wrapper */}
              <div className="relative w-full aspect-[16/10] max-w-[620px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#070709] p-4 group">
                <div className="w-full h-full overflow-hidden rounded-[2rem]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                  />
                </div>

                {/* Rotating Visit Circle (Top-Right) */}
                <div className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 z-20 scale-75 lg:scale-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="relative w-[120px] h-[120px] block cursor-pointer"
                  >
                    <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <defs>
                          <path id={`circlePath-${project.id}`} d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"></path>
                        </defs>
                        <text fill="white" fontSize="13" letterSpacing="2.5" fontWeight="bold">
                          <textPath href={`#circlePath-${project.id}`}>VISIT PROJECT • VISIT PROJECT •</textPath>
                        </text>
                      </svg>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[48px] h-[48px] rounded-full bg-white text-black flex items-center justify-center text-lg font-bold hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl">
                        →
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Outro (Enlarged) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white py-24 mt-20 border-t border-white/5 font-syne tracking-tight select-none">
        <span className="font-semibold text-center leading-tight">For more projects, explore my</span>
        <a 
          href="https://github.com/madarsh25" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center p-2"
        >
          <img src={githubLogo} alt="GitHub" className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain filter invert opacity-90 hover:opacity-100 transition-opacity duration-300" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
