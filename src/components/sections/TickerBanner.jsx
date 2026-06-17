import React from 'react';

const words = ['USER-FRIENDLY', 'ADAPTIVE', 'FLUID', 'FUTURE-PROOF', 'SEO-READY', 'IMMERSIVE', 'PROTECTED'];

const TickerBanner = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-black">
      <div className="absolute w-[140%] left-[-20%] rotate-[-5deg] z-20">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-24 bg-purple-500/20 blur-3xl opacity-60"></div>
        </div>
        
        {/* Left-moving Ticker */}
        <div className="overflow-hidden bg-purple-700 py-4 px-8 text-white font-extrabold uppercase tracking-widest shadow-[0_10px_40px_rgba(168,85,247,0.4)]">
          <div className="ticker-track flex gap-12 whitespace-nowrap text-sm sm:text-base md:text-lg">
            {/* Repeat items to make it seamless */}
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="flex gap-12 items-center">
                {words.map((w) => (
                  <span key={w} className="flex items-center gap-4">
                    {w} <span className="text-white/60">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute w-[140%] left-[-20%] rotate-[5deg] z-10 opacity-70">
        <div className="w-full py-6 px-8 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-950 shadow-[0_10px_40px_rgba(168,85,247,0.2)]"></div>
      </div>
    </section>
  );
};

export default TickerBanner;
