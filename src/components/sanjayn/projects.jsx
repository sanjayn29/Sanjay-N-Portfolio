import { useEffect, useRef, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

// Image imports
import KongutbiImg       from '../../assert/image/TBI-WS.png';
import ArameyecareImg    from '../../assert/image/ARAM-WS.png';
import CashmanImg        from '../../assert/image/CashMan.webp';
import SmartspendImg     from '../../assert/image/SPEND-WS.png';
import NeovateImg        from '../../assert/image/NEOVATE-WS.png';
import FabspectorImg     from '../../assert/image/Fabspector.jpg';
import ZeonImg           from '../../assert/image/Zeon.jpg';
import SocialMediaImg    from '../../assert/image/Social Media Engagement.png';
import PocketCareImg     from '../../assert/image/PocketCare.jpg';
import MasImg            from '../../assert/image/MAS-WS.png';
import MahimitraImg      from '../../assert/image/MAHAMITRA-WS.png';
import ImageAnimationImg from '../../assert/image/Image-Animation.png';

// Category colour mapping — used for badge accent colours
const CATEGORY_COLORS = {
  'Web Development':      { text: 'text-glow-cyan',   bg: 'bg-glow-cyan/10',   border: 'border-glow-cyan/30'   },
  'E-commerce':           { text: 'text-purple-400',  bg: 'bg-purple-400/10',  border: 'border-purple-400/30'  },
  'FinTech / AI':         { text: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/30' },
  'AI / Computer Vision': { text: 'text-orange-400',  bg: 'bg-orange-400/10',  border: 'border-orange-400/30'  },
  'AI / Data':            { text: 'text-yellow-400',  bg: 'bg-yellow-400/10',  border: 'border-yellow-400/30'  },
  'Data Analytics':       { text: 'text-pink-400',    bg: 'bg-pink-400/10',    border: 'border-pink-400/30'    },
  'Mobile App / AI':      { text: 'text-glow-blue',   bg: 'bg-glow-blue/10',   border: 'border-glow-blue/30'   },
};

const FILTERS = ['All', 'Web Development', 'E-commerce', 'FinTech / AI', 'AI / Computer Vision', 'AI / Data', 'Data Analytics', 'Mobile App / AI'];

const rotatingHighlights = [
  'Full-stack web, mobile & AI solutions',
  'Built with React, Python, Firebase & more',
  'From idea to deployment — end to end',
  'Real clients · live products · measurable impact',
  'Spanning FinTech, HealthTech, EdTech & beyond',
];

const projects = [
  {
    title: 'Kongu TBI Website Redesign',
    description: 'Redesigned College incubator website with modern UI, improved user experience and handled full deployment pipeline.',
    tech: ['React', 'TailwindCSS', 'Firebase'],
    category: 'Web Development',
    date: 'Sept 2025 - Present',
    link: 'https://antiquewhite-rat-516664.hostingersite.com',
    image: KongutbiImg,
  },
  {
    title: 'Aram Eyecare – E-commerce Platform',
    description: 'Developed full-stack e-commerce site with product catalog, cart, Payment Integration, and order management.',
    tech: ['React', 'TailwindCSS', 'Payment APIs', 'Firebase'],
    category: 'E-commerce',
    date: 'July 2025 - Aug 2025',
    link: 'https://www.arameyecare.com',
    image: ArameyecareImg,
  },
  {
    title: 'Cashman – AI Powered Finance Assistant',
    description: 'Mobile application for intelligent expense tracking with OCR-based invoice parsing and ML-driven financial risk scoring.',
    tech: ['React Native', 'Flask', 'LangChain', 'Firebase', 'OCR'],
    category: 'FinTech / AI',
    date: 'Apr 2025 - May 2025',
    link: 'https://www.outliersunited.com/',
    image: CashmanImg,
  },
  {
    title: 'SmartSpend – AI-Driven Finance Manager',
    description: 'Web-based finance application with expense tracking, budgeting tools and an integrated AI chatbot for financial assistance.',
    tech: ['React', 'TailwindCSS', 'Firebase', 'AI Integration', 'Vercel'],
    category: 'FinTech / AI',
    date: 'Aug 2025 - Sept 2025',
    link: 'https://smartspend-iota.vercel.app/',
    image: SmartspendImg,
  },
  {
    title: 'Neovate – AI & Digital Solutions Startup',
    description: 'Portfolio website for Neovate, a technology startup focused on web & App development and AI-driven services.',
    tech: ['React', 'TailwindCSS', 'EmailJS'],
    category: 'Web Development',
    date: 'Oct 2025 - Nov 2025',
    link: 'https://www.neovateai.tech',
    image: NeovateImg,
  },
  {
    title: 'FabSpector – AI Fabric Defect Inspector',
    description: 'Deep learning model to detect and classify fabric defects. Integrated with a web interface and PostgreSQL database.',
    tech: ['Computer Vision', 'HTML', 'CSS', 'PostgreSQL'],
    category: 'AI / Computer Vision',
    date: 'Nov 2025 - Dec 2025',
    link: 'https://github.com/sanjayn29/SiH-Fabric-Defect-Detector',
    image: FabspectorImg,
  },
  {
    title: 'EV Log Analyser – AI E-Log Platform',
    description: 'AI-powered platform for automated EV charging log analysis, anomaly detection and insight generation using LLM-based reasoning.',
    tech: ['Python', 'AI/LLM', 'React', 'Flask'],
    category: 'AI / Data',
    date: 'Jan 2026 - Feb 2026',
    link: 'https://github.com/sanjayn29',
    image: ZeonImg,
  },
  {
    title: 'Social Media Engagement – Power BI',
    description: 'Interactive Power BI dashboard analysing social media engagement metrics, audience trends, and content performance.',
    tech: ['Power BI', 'Data Analytics', 'DAX'],
    category: 'Data Analytics',
    date: 'Oct 2025 - Nov 2025',
    link: 'https://github.com/sanjayn29',
    image: SocialMediaImg,
  },
  {
    title: 'PocketCare – Health & Finance Tracker',
    description: 'React Native app for tracking health goals, daily tasks, and finances with an integrated AI assistant and push notifications.',
    tech: ['React Native', 'Expo', 'Firebase', 'AI Integration'],
    category: 'Mobile App / AI',
    date: 'Mar 2026 - Present',
    link: 'https://github.com/sanjayn29',
    image: PocketCareImg,
  },
  {
    title: 'Muthu Ambulance Service – Booking',
    description: 'Web platform for ambulance booking with real-time availability tracking, location-based dispatch, and admin dashboard.',
    tech: ['React', 'TailwindCSS', 'Firebase'],
    category: 'Web Development',
    date: 'Dec 2025 - Jan 2026',
    link: 'https://github.com/sanjayn29',
    image: MasImg,
  },
  {
    title: 'Mahamitra Boutique – E-Commerce',
    description: 'Full-stack e-commerce platform for a boutique with product management, cart, order tracking and payment integration.',
    tech: ['React', 'TailwindCSS', 'Firebase', 'Payment APIs'],
    category: 'E-commerce',
    date: 'Feb 2026 - Mar 2026',
    link: 'https://github.com/sanjayn29',
    image: MahimitraImg,
  },
  {
    title: 'Image Animation Website',
    description: 'Creative website showcasing smooth image-based animations and interactive transitions built with modern CSS and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    date: 'Sept 2024 - Oct 2024',
    link: 'https://github.com/sanjayn29',
    image: ImageAnimationImg,
  },
];

const parseEndTimestamp = (dateStr) => {
  const now = Date.now();
  const endPart = dateStr.split(' - ')[1];
  if (endPart === 'Present') return now;
  const normalized = endPart.replace('Sept', 'Sep');
  return new Date(`${normalized} 28`).getTime();
};

// ─── Project Card ──────────────────────────────────────────────────────────
const ProjectCard = ({ project, index, isVisible }) => {
  const colors = CATEGORY_COLORS[project.category] || CATEGORY_COLORS['Web Development'];

  return (
    <div
      className={`group relative flex flex-col glass-card overflow-hidden transition-all duration-700 hover-glow-cyan
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image container */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Dark gradient overlay so content on top is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-space-card via-space-card/40 to-transparent" />

        {/* Cyan shimmer line on hover */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-glow-cyan to-transparent
          scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Category badge – floated over image */}
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold
          ${colors.bg} ${colors.border} ${colors.text} border backdrop-blur-sm`}>
          {project.category}
        </span>

        {/* External link icon — appears on hover */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-space-deep/80 border border-glow-cyan/40
            flex items-center justify-center opacity-0 group-hover:opacity-100
            transition-all duration-300 hover:bg-glow-cyan/20"
          aria-label={`Open ${project.title}`}
        >
          <svg className="w-4 h-4 text-glow-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Title */}
        <h3 className="font-display text-base font-bold text-silver-primary group-hover:text-glow-cyan
          transition-colors duration-300 line-clamp-2 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-silver-muted text-sm leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech stack chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech, i) => (
            <span key={i}
              className="px-2 py-0.5 bg-space-deep border border-border/50 rounded text-silver-secondary text-[11px] font-medium">
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 bg-space-deep border border-border/50 rounded text-silver-muted text-[11px]">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border/30 mt-auto">
          <span className="text-[11px] text-silver-muted flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {project.date}
          </span>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-semibold flex items-center gap-1 transition-all duration-300
              ${colors.text} hover:opacity-80`}
          >
            View Project
            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Subtle corner glow on hover */}
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500
        ring-1 ring-inset ring-glow-cyan/20" />
    </div>
  );
};

// ─── Main Component ─────────────────────────────────────────────────────────
const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);

  // Rotate the highlight text every 2.2 s
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHighlightIndex(prev => (prev + 1) % rotatingHighlights.length);
    }, 2200);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const sortedProjects = useMemo(() =>
    [...projects].sort((a, b) => parseEndTimestamp(b.date) - parseEndTimestamp(a.date)),
  []);

  const filteredProjects = useMemo(() =>
    activeFilter === 'All'
      ? sortedProjects
      : sortedProjects.filter(p => p.category === activeFilter),
  [activeFilter, sortedProjects]);

  // Category counts for filter pills
  const categoryCounts = useMemo(() => {
    const counts = { All: projects.length };
    projects.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
    return counts;
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="View Sanjay N's featured projects including AI-powered applications, web development, and innovative solutions in FinTech and AgriTech."
        />
        <meta property="og:title" content="Projects Portfolio | Sanjay N" />
        <meta property="og:description" content="View Sanjay N's featured projects including AI-powered applications, web development, and innovative solutions in FinTech and AgriTech." />
        <meta property="og:url" content="https://sanjayn.me/#projects" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section id="projects" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-80 h-80 bg-glow-cyan/4 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-glow-blue/4 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section Header ── */}
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
              border border-glow-cyan/40 text-glow-cyan bg-glow-cyan/10 mb-5 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-glow-cyan animate-pulse" />
              Project Showcase
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-silver-primary mb-4">
              Featured <span className="text-glow-cyan">Projects</span>
            </h2>
            <div className="section-divider max-w-xs mx-auto mb-5" />

            {/* Rotating highlights — same pattern as certifications */}
            <div className="relative mx-auto h-6 max-w-xl overflow-hidden">
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


          {/* ── Filter Tabs ── */}
          <div className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-150
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {FILTERS.filter(f => f === 'All' || categoryCounts[f]).map(filter => {
              const colors = filter === 'All' ? null : CATEGORY_COLORS[filter];
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300
                    ${isActive
                      ? filter === 'All'
                        ? 'bg-glow-cyan text-space-deep border-glow-cyan shadow-glow-cyan'
                        : `${colors.bg} ${colors.text} ${colors.border}`
                      : 'border-border/40 text-silver-muted hover:border-glow-cyan/40 hover:text-silver-secondary bg-space-card/30'
                    }`}
                >
                  {filter}
                  <span className={`ml-1.5 text-[10px] opacity-70`}>
                    {categoryCounts[filter] || 0}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Projects Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* Empty state when filter has no results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-silver-muted">
              <div className="text-5xl mb-4 opacity-30">🔭</div>
              <p>No projects in this category yet.</p>
            </div>
          )}

          {/* ── Bottom CTA ── */}
          <div className={`text-center mt-14 transition-all duration-700 delay-300
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <a
              href="https://github.com/sanjayn29"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-glow-cyan/40
                rounded-xl text-glow-cyan text-sm font-semibold
                hover:bg-glow-cyan/10 hover:border-glow-cyan/60
                transition-all duration-300 hover-glow-cyan"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View All on GitHub
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;
