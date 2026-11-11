import { educationList, achievements } from '../data/portfolioData';

const Leadership = () => {
  return (
    <section id="education" className="bg-[#0a0a0a] pt-28 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Part 1: Education Section */}
        <div data-aos="fade-up" className="mb-14 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs md:text-sm text-white/70 font-bold mb-4 shadow-sm bg-white/5 backdrop-blur-sm tracking-wider uppercase">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Education
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Academic qualifications demonstrating consistent scholastic excellence.
          </p>
        </div>

        {/* Education Cards: 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {educationList.map((edu, idx) => (
            <div
              key={edu.level}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/40 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-[#ff2a2a]/20 text-red-400 text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-red-500/30">
                    {edu.badge}
                  </span>
                  <span className="text-white/50 text-xs font-mono">{edu.period}</span>
                </div>
                <h3 className="text-white text-lg md:text-xl font-black mb-2 tracking-tight">
                  {edu.level}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
                  {edu.institution}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-white/50 text-xs uppercase font-bold tracking-wider">Score</span>
                <span className="text-[#ff2a2a] text-sm md:text-base font-black font-mono bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Achievements Section (Languages Known removed) */}
        <div data-aos="fade-up" className="mb-14 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs md:text-sm text-white/70 font-bold mb-4 shadow-sm bg-white/5 backdrop-blur-sm tracking-wider uppercase">
            Honors & Activities
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Achievements
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Competitive sports, prestigious academic scholarships, and technical hackathons.
          </p>
        </div>

        {/* 3 Column Grid for Chess, Scholarships, and Hackathons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={item.category}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/40 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-white text-lg font-black tracking-tight">{item.category}</h3>
                </div>
                <ul className="space-y-3">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-sm text-white/80 font-medium leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] mt-2 shrink-0 shadow-[0_0_6px_#ff2a2a]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
