import React from 'react';

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#030306] border-t border-white/5 py-16 px-6 md:px-12 mt-16 overflow-hidden">
      {/* Space Blue bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
        
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <h3 className="text-xl font-bold font-syne text-white tracking-wide uppercase">
            Let's build the future <span className="font-playfair italic text-gray-400 font-normal lowercase">together.</span>
          </h3>
          <p className="text-xs text-gray-500 font-dm-sans max-w-xs mt-1">
            Open for freelance projects, internships, and collaborative developer roles.
          </p>
          <p className="text-[10px] text-gray-600 font-mono mt-4">
            © {new Date().getFullYear()} Adarsh Yadav. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-end gap-5">
          <div className="flex gap-6 text-xs font-semibold uppercase tracking-wider text-gray-500 font-dm-sans">
            <a href="https://www.linkedin.com/in/adarsh-knows-code/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">LinkedIn</a>
            <a href="https://github.com/madarsh25" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">GitHub</a>
            <a href="https://instagram.com/adarshlibro" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Instagram</a>
          </div>
          
          <button 
            onClick={handleScrollTop}
            className="flex items-center justify-center w-12 h-12 border border-white/10 hover:border-blue-500/40 hover:text-blue-400 hover:scale-105 active:scale-95 rounded-full text-white/40 transition-all duration-300 bg-white/[0.01]"
            aria-label="Scroll to top"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
