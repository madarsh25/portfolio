import React from 'react';
import TiltedCard from '../ui/TiltedCard/TiltedCard';

const profilePhoto = new URL('../../assets/profile-photo.png', import.meta.url).href;

const AboutMe = () => {
  return (
    <section id="about" className="bg-black text-white py-28 px-6 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 overflow-hidden">
      
      {/* Left Column - Biography */}
      <div className="max-w-xl flex flex-col items-start text-left">
        <p className="text-xs tracking-[0.3em] text-white/50 mb-4 uppercase font-dm-sans">
          A QUICK GLANCE
        </p>
        <h2 className="text-4xl md:text-[50px] font-bold leading-[1.1] font-syne text-white tracking-tight">
          Building the bridge between <br />
          ideas and <span className="font-playfair italic text-gray-400 font-normal">experiences</span>
        </h2>
        <p className="mt-8 text-gray-400 leading-relaxed font-dm-sans text-sm sm:text-base">
          I'm Adarsh Yadav, a Computer Science and Engineering (IoT) student at Thakur College of Engineering and Technology (TCET) with a 9.85 CGPA. Currently working as a Web Development Intern at Eastton Energy Solutions, I turn complex technical challenges into high-speed web products.
        </p>
        <p className="mt-4 text-gray-400 leading-relaxed font-dm-sans text-sm sm:text-base">
          I manage the entire stack with a focus on clean, reusable code, database integrity (MongoDB, Supabase), and frontend architectures (React, Next.js, Three.js). I excel at creating digital interfaces that solve real-world problems and enhance user experiences.
        </p>
        
        {/* Social Icons */}
        <div className="flex items-center gap-5 mt-8 text-gray-500">
          <a href="https://www.linkedin.com/in/adarsh-knows-code/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
          <a href="https://github.com/madarsh25" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Right Column - Premium Profile Photo Container with Tilted Card */}
      <div className="relative w-full max-w-[340px] aspect-[4/5] flex items-center justify-center rounded-3xl overflow-hidden bg-white/[0.01] border border-white/5 p-4 group">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <TiltedCard
          imageSrc={profilePhoto}
          captionText="Adarsh Yadav"
          containerHeight="100%"
          containerWidth="100%"
          rotateAmplitude={12}
          scaleOnHover={1.03}
          showMobileWarning={false}
          showTooltip={true}
        />
      </div>

    </section>
  );
};

export default AboutMe;
