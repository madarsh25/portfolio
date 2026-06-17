import React from 'react';
import Orb from '../ui/Orb/Orb';

const skills = [
  { name: 'React.js', icon: '⚛', color: '#61dafb' },
  { name: 'Next.js', icon: '▲', color: '#ffffff' },
  { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
  { name: 'Tailwind CSS', icon: '◈', color: '#38bdf8' },
  { name: 'Node.js', icon: '⬡', color: '#339933' },
  { name: 'MongoDB', icon: '🍃', color: '#47a248' },
  { name: 'Java', icon: '☕', color: '#f89820' },
  { name: 'JavaScript', icon: 'JS', color: '#f7df1e' },
  { name: 'Vite', icon: '⚡', color: '#646cff' },
  { name: 'Git', icon: '⎇', color: '#f05032' },
  { name: 'VS Code', icon: '⚙', color: '#007acc' },
  { name: 'Express', icon: 'ex', color: '#ffffff' }
];

const Skillset = () => {
  return (
    <section id="skills" className="relative py-28 bg-[#020204] overflow-hidden rounded-[2rem] border-y border-white/5 my-10">
      {/* Background Visual Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000000,#040714,#000000)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_50%_58%,rgba(0,102,255,0.06)_0%,transparent_68%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Section Header */}
        <div className="mb-6">
          <p className="font-dm-sans text-[11px] font-semibold tracking-[0.38em] uppercase text-white/30 mb-3">
            My Skillset
          </p>
          <h2 className="font-syne text-5xl md:text-7xl font-black tracking-tight leading-none text-white select-none">
            The Magic <span className="skill-gradient-text">Behind</span>
          </h2>
        </div>

        {/* 3D Orb/Canvas Area */}
        <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] my-4 z-10 flex items-center justify-center">
          <div className="w-full h-full relative overflow-hidden rounded-full">
            <Orb hoverIntensity={0.8} rotateOnHover={true} hue={215} forceHoverState={true} />
          </div>
          {/* Blue Shadow Glow below the orb */}
          <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[180px] h-[30px] bg-[radial-gradient(ellipse,rgba(0,85,255,0.3)_0%,transparent_72%)] filter blur-[12px] pointer-events-none"></div>
        </div>

        {/* Skill Badges Container */}
        <div className="w-full max-w-2xl mt-4">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3),_inset_0_1px_0_rgba(255,255,255,0.03)] hover:border-blue-500/30 hover:bg-white/[0.04] hover:shadow-[0_4px_30px_rgba(59,130,246,0.1)] transition-all duration-300 group cursor-default select-none"
              >
                <span 
                  className="text-xs font-mono w-5 h-5 flex items-center justify-center rounded-full bg-white/5 text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </span>
                <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors duration-300 font-dm-sans tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillset;
