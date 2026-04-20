import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink } from 'lucide-react';
import { FiCalendar } from 'react-icons/fi';
import lightsLogo from '../../assert/image/LIGTHS.avif';
import neovateLogo from '../../assert/image/Neovate-LOGO.png';
import outliersLogo from '../../assert/image/OU.avif';
import tbiLogo from '../../assert/image/TBI.avif';
import cubeAiLogo from '../../assert/image/CUBEAI.png';

const rotatingHighlights = [
  '5 roles across startups, agencies & freelance',
  'From internship to full-time product ownership',
  'React · React Native · AI · Firebase — in production',
  'Fast execution, clean delivery, real impact',
  'Building across FinTech, AgriTech & EdTech domains',
];

const Experience = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(null);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHighlightIndex(prev => (prev + 1) % rotatingHighlights.length);
    }, 2200);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveExperience(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = activeExperience ? 'hidden' : 'auto';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [activeExperience]);

  useEffect(() => {
    const updateTimelineProgress = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const totalDistance = rect.height + viewportHeight;
      const travelled = viewportHeight - rect.top;
      const progress = Math.min(1, Math.max(0, travelled / totalDistance));

      setTimelineProgress(progress);
    };

    updateTimelineProgress();
    window.addEventListener('scroll', updateTimelineProgress, { passive: true });
    window.addEventListener('resize', updateTimelineProgress);

    return () => {
      window.removeEventListener('scroll', updateTimelineProgress);
      window.removeEventListener('resize', updateTimelineProgress);
    };
  }, []);

  const experiences = [
    {
      title: 'Software Developer (Mobile)',
      company: 'LIGHTS INC',
      url: 'https://ligths.in',
      logo: lightsLogo,
      period: 'Feb 2026 - Present',
      description: 'Developing a fintech mobile application with modern UI/UX and scalable architecture.',
      technologies: ['React Native', 'Firewbase', 'Expo Go'],
    },
    {
      title: 'Software Developer',
      company: 'TBI@KEC',
      url: 'https://tbi-kec.org/',
      logo: tbiLogo,
      period: 'Jul 2025 - Feb 2026',
      description: 'Redesigned the official website, built the TBI office automation system, and developed a portfolio management platform.',
      technologies: ['React', 'Tailwind', 'Firebase'],
    },
    {
      title: 'AI Agentic Intern',
      company: 'CubeAISolutions Tech Pvt Ltd',
      url: 'https://cubeaisolutions.com/',
      logo: cubeAiLogo,
      period: 'Jul 2025 - Sep 2025',
      description: 'Created AI models for medical prediction and sentiment analysis.',
      technologies: ['Python', 'Lama Mobels', 'Fast API', 'React', 'Tailwind', 'Firebase'],
    },
    {
      title: 'Software Developer & ML Engineer (Freelance)',
      company: 'Neovate',
      url: 'https://neovateai.tech/',
      logo: neovateLogo,
      period: 'May 2025 - Present',
      description: 'Developed business websites with SEO optimization, provided technical support, and designed branding materials, cards, and social media assets.',
      technologies: ['React', 'Tailwind', 'React Native', 'Expo Go', 'Firebase', 'Email.js', 'AI', 'ML Models', 'Fast API', 'Hosting'],
    },
    {
      title: 'Software Developer (Freelance)',
      company: 'Outliers United',
      url: 'https://www.outliersunited.com/',
      logo: outliersLogo,
      period: 'Mar 2025 - Present',
      description: 'Developed business and e-commerce websites with SEO.',
      technologies: ['React', 'Tailwind', 'React Native', 'Expo Go', 'Firebase'],
    },
  ];

  return (
    <>
      <Helmet>        <meta
          name="description"
          content="Discover Sanjay N's professional experience as a Full Stack Developer and AI Engineer with freelance and internship roles in software development."
        />
        <meta property="og:title" content="Professional Experience | Sanjay N" />
        <meta property="og:description" content="Discover Sanjay N's professional experience as a Full Stack Developer and AI Engineer with freelance and internship roles in software development." />
        <meta property="og:url" content="https://sanjayn.me/#experience" />
        <meta property="og:type" content="website" />
      </Helmet>
    <section id="experience" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 bg-glow-cyan/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 bg-glow-blue/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-2 sm:px-3 lg:px-4 relative z-10">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-glow-cyan/40 text-glow-cyan bg-glow-cyan/10 mb-4">
            Career Timeline
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
            Professional <span className="text-glow-cyan">Experience</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
          {/* Rotating highlights */}
          <div className="relative mx-auto mt-5 h-6 max-w-xl overflow-hidden">
            {rotatingHighlights.map((highlight, index) => (
              <p
                key={highlight}
                className={`absolute inset-0 text-sm text-silver-secondary transition-all duration-500 ${
                  index === activeHighlightIndex ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {highlight}
              </p>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-glow-cyan/20 via-glow-cyan/50 to-glow-blue/20" />
          <div className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 bg-gradient-to-b from-glow-cyan via-glow-blue to-transparent transition-transform duration-1000 ${isVisible ? 'scale-y-100' : 'scale-y-0'} origin-top`} />
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-glow-cyan/40 via-glow-blue/40 to-transparent" />

          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 pointer-events-none transition-[top] duration-150 ease-out z-20"
            style={{ top: `calc(${timelineProgress * 100}% - 0.75rem)` }}
          >
            <div className="absolute inset-0 rounded-full bg-glow-cyan/30 blur-md" />
            <div className="relative w-6 h-6 rounded-full border border-glow-cyan bg-space-deep flex items-center justify-center shadow-[0_0_24px_hsl(var(--glow-cyan)/0.6)]">
              <div className="w-2.5 h-2.5 rounded-full bg-glow-cyan animate-pulse" />
            </div>
          </div>

          <div
            className="md:hidden absolute left-4 -translate-x-1/2 w-5 h-5 pointer-events-none transition-[top] duration-150 ease-out z-20"
            style={{ top: `calc(${timelineProgress * 100}% - 0.625rem)` }}
          >
            <div className="absolute inset-0 rounded-full bg-glow-cyan/30 blur-md" />
            <div className="relative w-5 h-5 rounded-full border border-glow-cyan bg-space-deep flex items-center justify-center shadow-[0_0_20px_hsl(var(--glow-cyan)/0.6)]">
              <div className="w-2 h-2 rounded-full bg-glow-cyan animate-pulse" />
            </div>
          </div>

          <div className="space-y-4 md:space-y-5">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const milestoneProgress = (index + 1) / experiences.length;
              const isReached = timelineProgress >= milestoneProgress * 0.9;
              return (
                <div key={index} className="relative">
                  <div className={`hidden md:block absolute top-16 left-1/2 w-10 border-t border-dashed ${isReached ? 'border-glow-cyan/80' : 'border-glow-cyan/40'} ${isLeft ? '-translate-x-10' : 'translate-x-0'}`} />

                  <div className={`absolute top-14 left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2 ${isReached ? 'border-glow-cyan bg-glow-cyan/20 shadow-[0_0_28px_hsl(var(--glow-cyan)/0.7)]' : 'border-glow-cyan/70 bg-space-deep shadow-[0_0_18px_hsl(var(--glow-cyan)/0.3)]'}`} />
                  <div className={`absolute top-[3.85rem] left-[1.125rem] md:left-1/2 md:-translate-x-1/2 w-2 h-2 rounded-full ${isReached ? 'bg-glow-cyan animate-ping' : 'bg-glow-cyan/60 animate-pulse'}`} />

                  <article
                    className={`group relative glass-card p-3 md:p-4 hover-glow-cyan transition-all duration-500 hover:-translate-y-2 hover:rotate-[0.35deg] cursor-pointer ml-7 md:ml-0 md:w-[calc(50%-2.75rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${(index + 1) * 140}ms` }}
                    onClick={() => setActiveExperience({ ...exp, order: index + 1 })}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setActiveExperience({ ...exp, order: index + 1 });
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open ${exp.company} showcase`}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-glow-cyan/5 via-transparent to-glow-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="pointer-events-none absolute top-3 right-3 w-2 h-2 rounded-full bg-glow-cyan/70 animate-ping" />
                    <div className="pointer-events-none absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-glow-blue/70 animate-pulse" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="min-w-0">
                          <p className="text-xs text-silver-muted mb-1 uppercase tracking-wider">Experience</p>
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-glow-cyan font-semibold hover:text-silver-metallic transition-colors duration-300 truncate"
                            onClick={(event) => event.stopPropagation()}
                          >
                            {exp.company}
                          </a>
                        </div>
                        <span className="shrink-0 text-[11px] md:text-xs font-semibold text-glow-cyan px-2 py-1 rounded-full border border-glow-cyan/40 bg-glow-cyan/10">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <div className="relative flex items-center justify-center mb-2">
                        <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-glow-cyan/15 blur-xl group-hover:bg-glow-cyan/25 transition-colors duration-500" />
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl object-contain bg-white/10 border border-border/70 p-3 group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      <h3 className="font-display text-lg md:text-xl font-semibold text-silver-primary mb-2 leading-tight text-center">
                        {exp.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs md:text-sm text-glow-cyan font-medium px-3 py-1 rounded-full bg-glow-cyan/10 border border-glow-cyan/35">
                          <FiCalendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs md:text-sm text-silver-metallic hover:text-glow-cyan transition-colors duration-300 px-3 py-1 rounded-full border border-border/70 hover:border-glow-cyan/40 inline-flex items-center gap-1.5"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <span>Visit Website</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <p className="text-silver-muted text-sm leading-relaxed mb-3">
                        {exp.description}
                      </p>

                      <div className="pt-2 border-t border-border/50">
                        <p className="text-silver-secondary text-sm font-medium mb-2">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((technology, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-space-deep/50 border border-border/60 rounded-full text-silver-secondary text-xs hover:border-glow-cyan/40 hover:text-glow-cyan transition-colors duration-300"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {activeExperience && (
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-space-deep/80 backdrop-blur-md"
            onClick={() => setActiveExperience(null)}
          >
            <div
              className="relative w-full max-w-[30rem] glass-card border border-glow-cyan/40 p-4 md:p-5 animate-fade-in"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveExperience(null)}
                className="absolute right-4 top-4 text-silver-secondary hover:text-glow-cyan transition-colors duration-300"
                aria-label="Close showcase"
              >
                <span className="text-xl leading-none">x</span>
              </button>

              <div className="text-center mb-5">
                <span className="inline-block text-xs font-semibold text-glow-cyan px-2 py-1 rounded-full border border-glow-cyan/40 bg-glow-cyan/10 mb-3">
                  Showcase #{String(activeExperience.order).padStart(2, '0')}
                </span>
                <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-3">
                  <div className="absolute inset-0 rounded-full bg-glow-cyan/20 blur-xl animate-pulse" />
                  <img
                    src={activeExperience.logo}
                    alt={`${activeExperience.company} logo`}
                    className="relative w-full h-full rounded-2xl object-contain bg-white/10 border border-border/70 p-3"
                  />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-glow-cyan leading-tight">
                  {activeExperience.company}
                </h3>
                <p className="text-glow-cyan mt-2 text-sm md:text-base">{activeExperience.title}</p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 text-xs md:text-sm text-glow-cyan font-medium px-3 py-1 rounded-full bg-glow-cyan/10 border border-glow-cyan/35">
                  <FiCalendar className="h-3.5 w-3.5" />
                  {activeExperience.period}
                </span>
                <a
                  href={activeExperience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-silver-metallic hover:text-glow-cyan transition-colors duration-300 px-3 py-1 rounded-full border border-border/70 hover:border-glow-cyan/40 inline-flex items-center gap-1.5"
                >
                  <span>Open Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <p className="text-silver-secondary text-sm md:text-base leading-relaxed mb-5 text-center">
                {activeExperience.description}
              </p>

              <div className="pt-4 border-t border-border/50">
                <p className="text-silver-secondary text-sm font-medium mb-3 text-center">Technologies</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {activeExperience.technologies.map((technology, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-space-deep/50 border border-border/60 rounded-full text-silver-secondary text-xs hover:border-glow-cyan/40 hover:text-glow-cyan transition-colors duration-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default Experience;