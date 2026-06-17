import React from 'react';
import Orb from '../ui/Orb/Orb';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 overflow-hidden">
      {/* Background WebGL Orb */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Orb hoverIntensity={0.8} rotateOnHover={true} hue={215} forceHoverState={false} />
      </div>

      {/* Glass overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black pointer-events-none z-1"></div>
      
      {/* Main Content Overlay - set pointer-events-none so mouse movement falls through to Orb */}
      <div className="w-full max-w-4xl text-center z-10 pt-20 px-4 pointer-events-none select-none">
        <p className="text-[10px] md:text-sm tracking-[0.35em] text-gray-400 mb-5 uppercase font-dm-sans">
          CREATIVE DEVELOPER
        </p>
        <h1 className="text-[11.5vw] sm:text-[110px] md:text-[140px] font-black tracking-tight leading-none text-center font-syne text-white uppercase">
          ADARSH
        </h1>
        <h2 className="mt-4 text-lg sm:text-3xl md:text-5xl font-semibold tracking-tight text-white/90 leading-tight">
          Crafting digital <span className="font-playfair italic text-gray-400 font-normal">experiences</span> that matter
        </h2>
        <p className="mt-5 text-xs sm:text-base md:text-lg text-gray-400 max-w-lg mx-auto leading-relaxed font-dm-sans">
          I design and develop modern web applications that deliver seamless, impactful user experiences.
        </p>
      </div>

      {/* Bottom Info Panels (Mobile Responsive Stacking & Centering) */}
      <div className="absolute bottom-8 left-6 right-6 z-20 flex flex-col sm:flex-row justify-between items-center gap-3 pointer-events-auto">
        {/* Location */}
        <div className="flex items-center gap-2">
          <span className="text-blue-500 text-lg">📍</span>
          <div className="flex flex-col leading-tight text-left">
            <span className="text-white text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium">Based in Mumbai,</span>
            <span className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.2em]">India</span>
          </div>
        </div>

        {/* Role */}
        <div className="flex flex-col items-center sm:items-end gap-1 text-center sm:text-right">
          <div className="leading-tight flex flex-col items-center sm:items-end">
            <span className="text-white text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium">FULL STACK DEV,</span>
            <span className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.2em]">& DESIGNER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
