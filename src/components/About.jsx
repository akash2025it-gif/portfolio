import { aboutContent, personalInfo } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const CppIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#00599C" d="M117.656 36.852l-50.418-29.1a6.47 6.47 0 00-6.476 0l-50.418 29.1a6.473 6.473 0 00-3.238 5.606v58.204a6.473 6.473 0 003.238 5.606l50.418 29.1a6.47 6.47 0 006.476 0l50.418-29.1a6.473 6.473 0 003.238-5.606V42.458a6.473 6.473 0 00-3.238-5.606z"/>
      <path fill="#004482" d="M64 7.752L13.582 36.852a6.473 6.473 0 00-3.238 5.606v58.204a6.473 6.473 0 003.238 5.606L64 120.248V7.752z"/>
      <path fill="#FFFFFF" d="M64 36.5a27.5 27.5 0 00-27.5 27.5c0 15.19 12.31 27.5 27.5 27.5a27.35 27.35 0 0019.45-8.05l-8.5-8.5a15.42 15.42 0 01-10.95 4.55 15.5 15.5 0 1115.5-15.5h-15.5v-12H64a27.37 27.37 0 00-19.45 8.05l8.5 8.5A15.42 15.42 0 0164 48.5c8.56 0 15.5 6.94 15.5 15.5h12A27.5 27.5 0 0064 36.5z"/>
      <path fill="#00599C" stroke="#FFFFFF" strokeWidth="2" d="M85 59h6v-6h4v6h6v4h-6v6h-4v-6h-6zm18 0h6v-6h4v6h6v4h-6v6h-4v-6h-6z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">C++</span>
  </div>
);

const DatabaseIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#336791" d="M64 16C37.49 16 16 23.16 16 32v64c0 8.84 21.49 16 48 16s48-7.16 48-16V32c0-8.84-21.49-16-48-16zm0 8c22.09 0 40 5.37 40 12s-17.91 12-40 12-40-5.37-40-12 17.91-12 40-12zm-40 26.28c9.57 4.13 24.12 6.72 40 6.72s30.43-2.59 40-6.72V64c0 6.63-17.91 12-40 12s-40-5.37-40-12V50.28zm0 28c9.57 4.13 24.12 6.72 40 6.72s30.43-2.59 40-6.72V92c0 6.63-17.91 12-40 12s-40-5.37-40-12V78.28z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Databases & SQL</span>
  </div>
);

const WebDevIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <rect width="112" height="88" x="8" y="20" fill="#1e293b" rx="10" />
      <circle cx="22" cy="34" r="4" fill="#ef4444" />
      <circle cx="34" cy="34" r="4" fill="#eab308" />
      <circle cx="46" cy="34" r="4" fill="#22c55e" />
      <path fill="none" stroke="#60a5fa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" d="M42 56L28 70l14 14m44-28l14 14-14 14m-20-34l-8 40" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Web Development</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Profile Frame */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image / Monogram Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-white/10 flex flex-col justify-center items-center text-center p-6">
                <div className="w-20 h-20 rounded-full bg-[#ff2a2a]/20 border-2 border-[#ff2a2a]/40 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,42,42,0.3)]">
                  <span className="text-white text-3xl font-black tracking-wider">AG</span>
                </div>
                <h4 className="text-white font-bold text-base tracking-tight mb-1">{personalInfo.name}</h4>
                <p className="text-red-300 text-xs font-semibold tracking-wider uppercase">B.Tech IT · SKCET</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex flex-wrap items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <CppIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <DatabaseIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <WebDevIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;

