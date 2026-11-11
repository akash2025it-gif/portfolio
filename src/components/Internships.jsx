import { internshipExperience } from '../data/portfolioData';

const Internships = () => {
  return (
    <section id="experience" className="bg-[#0f0f0f] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="mb-14 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs md:text-sm text-white/70 font-bold mb-4 shadow-sm bg-white/5 backdrop-blur-sm tracking-wider uppercase">
            Work Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Internship Experience
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Hands-on software development experience gained during onsite industrial training.
          </p>
        </div>

        {/* Experience Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="relative rounded-3xl p-[1px] bg-gradient-to-br from-red-500/40 via-white/10 to-red-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
        >
          <div className="bg-[#141414]/95 rounded-3xl p-8 md:p-12 backdrop-blur-md">
            {/* Top Row: Role, Company, Duration, Mode */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    {internshipExperience.role}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30 uppercase tracking-wider">
                    {internshipExperience.mode}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-red-400 font-semibold text-base md:text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>{internshipExperience.company}</span>
                </div>
              </div>

              {/* Duration Tag */}
              <div className="flex items-center gap-2 text-white/70 text-xs md:text-sm font-mono bg-white/5 border border-white/10 px-4 py-2 rounded-full self-start md:self-auto">
                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{internshipExperience.duration}</span>
              </div>
            </div>

            {/* Responsibilities List */}
            <div>
              <h4 className="text-white text-xs md:text-sm font-bold uppercase tracking-wider mb-5 text-white/50">
                Key Contributions & Responsibilities
              </h4>
              <ul className="space-y-4">
                {internshipExperience.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="w-2 h-2 rounded-full bg-[#ff2a2a] mt-2 shrink-0 shadow-[0_0_8px_#ff2a2a]" />
                    <span className="text-white/85 text-sm md:text-base leading-relaxed font-medium">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
