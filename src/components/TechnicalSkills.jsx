import { technicalSkills } from '../data/portfolioData';

const SkillCard = ({ category, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-7 hover:border-red-500/40 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] transition-all duration-500 flex flex-col justify-between group"
  >
    <div>
      {/* Category Header with Icon */}
      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </span>
        <h3 className="text-white text-base md:text-lg font-black tracking-tight uppercase">
          {category.title}
        </h3>
      </div>

      {/* Progress-free Skill Badges */}
      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3.5 py-1.5 text-xs md:text-sm font-semibold text-white/90 bg-white/5 rounded-xl border border-white/10 group-hover:border-red-500/30 hover:bg-[#ff2a2a]/20 hover:text-white transition-all duration-300 shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const TechnicalSkills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-xs md:text-sm text-white/70 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm tracking-wider uppercase">
            Technical Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Technical Skills
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Organized categories reflecting verified programming languages, web frameworks, core computer science concepts, and modern developer tools.
          </p>
        </div>

        {/* Skills Grid: 6 Categorized Progress-Free Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
