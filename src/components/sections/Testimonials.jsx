import React from 'react';

const reviews = [
  {
    name: 'Priya Verma',
    role: 'Senior Software Engineer',
    comment: 'Working with Adarsh has been genuinely positive. He brings strong frontend knowledge and a fresh perspective.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
  },
  {
    name: 'Rohan Sharma',
    role: 'Technical Project Lead',
    comment: 'Adarsh contributed solid improvements with a structured approach and clear, transparent communication.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
  },
  {
    name: 'Ananya Mehta',
    role: 'Full Stack Consultant',
    comment: 'Excellent engineering skills and eye for micro-interactions. Extremely satisfied with the results.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80'
  }
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-24 overflow-hidden border-t border-white/5">
      <div className="text-center mb-16 px-6">
        <p className="text-xs tracking-[0.35em] text-gray-400 mb-4 uppercase">
          WHAT OTHERS SAY
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-syne uppercase">
          THE VOICES <span className="font-playfair italic text-gray-400 font-normal lowercase">behind</span>
        </h2>
      </div>

      {/* Marquee Row */}
      <div className="relative flex overflow-x-hidden w-full mask-gradient select-none">
        {/* Fade overlays on left/right edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="ticker-track flex gap-6 py-4">
          {/* Repeat list to create seamless infinite scroll */}
          {Array.from({ length: 3 }).map((_, idx) => (
            <React.Fragment key={idx}>
              {reviews.map((r, index) => (
                <div 
                  key={`${index}-${idx}`}
                  className="min-w-[320px] sm:min-w-[420px] bg-white/[0.01] border border-white/10 rounded-[2rem] p-6 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3.5 mb-5">
                    <img 
                      src={r.avatar} 
                      alt={r.name} 
                      className="w-10 h-10 rounded-full object-cover border border-white/10"
                    />
                    <div className="text-left">
                      <p className="text-sm font-bold font-syne text-white">{r.name}</p>
                      <p className="text-[10px] text-gray-500 font-medium font-dm-sans">{r.role}</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/40 border border-white/5 rounded-2xl p-4 text-left">
                    <p className="text-xs text-gray-300 font-medium leading-relaxed font-dm-sans">
                      “{r.comment}”
                    </p>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
