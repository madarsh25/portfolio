import React from 'react';
import SoftAurora from '../ui/SoftAurora/SoftAurora';
import GradientText from '../ui/GradientText/GradientText';

const Quote = () => {
  return (
    <section id="quote" className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden flex items-center justify-center bg-black border-y border-white/5 my-12">
      {/* Background Aurora */}
      <div className="absolute inset-0 z-0">
        <SoftAurora 
          colorStops={["#03001e", "#002244", "#0055ff", "#00d4ff"]}
          blend={0.6}
          amplitude={1.2}
          speed={0.6}
        />
      </div>
      
      {/* Quote Content */}
      <div className="z-10 px-8 max-w-4xl text-center pointer-events-none">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight font-syne uppercase">
          "You don't find your path. <br />You <span className="inline-block mt-2"><GradientText colors={["#00d4ff", "#0055ff", "#9c40ff", "#00d4ff"]} animationSpeed={4} showBorder={false}>build it.</GradientText></span>"
        </h2>
      </div>
    </section>
  );
};

export default Quote;
