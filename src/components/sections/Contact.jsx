import React, { useState, useEffect } from 'react';

const resumePdf = new URL('../../assets/resume.pdf', import.meta.url).href;

const Contact = () => {
  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Clear old seeded entries once
    const hasCleared = localStorage.getItem('guestbook_cleared_v1');
    if (!hasCleared) {
      localStorage.removeItem('guestbook');
      localStorage.setItem('guestbook_cleared_v1', 'true');
    }

    const saved = localStorage.getItem('guestbook');
    if (saved) {
      try {
        setGuestbookEntries(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry = { id: Date.now(), name, message, date: new Date().toLocaleDateString() };
    const updated = [newEntry, ...guestbookEntries].slice(0, 50);
    setGuestbookEntries(updated);
    localStorage.setItem('guestbook', JSON.stringify(updated));
    setName('');
    setMessage('');
  };

  return (
    <section id="contact" className="bg-black text-white py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5">
      {/* Title */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.35em] text-gray-400 mb-4 uppercase">
          GET IN TOUCH
        </p>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white font-syne uppercase">
          LET'S CRAFT SOMETHING <br />
          <span className="font-playfair italic text-gray-400 font-normal lowercase">special</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column - Contact Details */}
        <div className="space-y-8 text-left">
          <p className="text-gray-400 leading-relaxed font-dm-sans text-sm sm:text-base max-w-lg">
            Got a question, proposal, or project? Feel free to reach out. I'm always open to discussing new opportunities, creative ideas, or partnerships. Let's make something amazing.
          </p>

          {/* Large Email Link */}
          <div className="py-4 border-y border-white/10 max-w-lg">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-medium">Direct Email</p>
            <a 
              href="mailto:adarsh.jy@gmail.com" 
              className="text-2xl sm:text-3xl md:text-4xl font-syne font-bold hover:text-blue-400 transition-colors duration-300"
            >
              adarsh.jy@gmail.com
            </a>
          </div>

          {/* Socials Grid */}
          <div className="flex flex-col gap-4">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Social Profiles & CV</p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider font-dm-sans">
              <a href="https://www.linkedin.com/in/adarsh-knows-code/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white/10 hover:border-blue-500/50 hover:text-blue-300 rounded-full transition-all duration-300 bg-white/[0.01]">
                LinkedIn ↗
              </a>
              <a href="https://github.com/madarsh25" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white/10 hover:border-blue-500/50 hover:text-blue-300 rounded-full transition-all duration-300 bg-white/[0.01]">
                GitHub ↗
              </a>
              <a href="https://instagram.com/adarshlibro" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white/10 hover:border-blue-500/50 hover:text-blue-300 rounded-full transition-all duration-300 bg-white/[0.01]">
                Instagram ↗
              </a>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-blue-500/30 hover:border-blue-500 hover:text-blue-400 rounded-full transition-all duration-300 bg-white/[0.01]">
                Resume PDF 📄
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Guestbook */}
        <div className="bg-white/[0.01] border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl flex flex-col justify-between hover:border-blue-500/20 transition-all duration-300">
          <div>
            <h3 className="text-2xl font-bold font-syne mb-2 text-white">Sign my Guestbook</h3>
            <p className="text-xs text-gray-400 mb-6 font-dm-sans">Leave a public message behind for anyone visiting this site.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3 mb-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.04] transition-all font-dm-sans"
              />
              <textarea 
                placeholder="Your message..." 
                rows="2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.04] transition-all resize-none font-dm-sans"
              />
              <button 
                type="submit" 
                className="bg-white text-black py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-gray-200 active:scale-[0.98] transition-all duration-300 font-dm-sans"
              >
                Sign Entry
              </button>
            </form>
          </div>

          {/* Signed Entries List */}
          <div className="space-y-3 max-h-[160px] overflow-y-auto pr-2 custom-scrollbar border-t border-white/5 pt-4">
            {guestbookEntries.length === 0 ? (
              <p className="text-xs text-gray-600 italic text-center font-dm-sans mt-4">Be the first to sign!</p>
            ) : (
              guestbookEntries.map(entry => (
                <div key={entry.id} className="bg-white/[0.02] border border-white/5 p-3.5 rounded-xl text-xs text-left">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-blue-300 font-syne">{entry.name}</span>
                    <span className="text-[9px] text-gray-600 font-mono">{entry.date}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed font-dm-sans">{entry.message}</p>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
