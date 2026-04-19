import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

// Image imports (path: src/assert/image/)
import KongutbiImg      from '../../assert/image/TBI-WS.png';
import ArameyecareImg   from '../../assert/image/ARAM-WS.png';
import CashmanImg       from '../../assert/image/CashMan.webp';
import SmartspendImg    from '../../assert/image/SPEND-WS.png';
import NeovateImg       from '../../assert/image/NEOVATE-WS.png';
import FabspectorImg    from '../../assert/image/Fabspector.jpg';
import ZeonImg          from '../../assert/image/Zeon.jpg';
import SocialMediaImg   from '../../assert/image/Social Media Engagement.png';
import PocketCareImg    from '../../assert/image/PocketCare.jpg';
import MasImg           from '../../assert/image/MAS-WS.png';
import MahimitraImg     from '../../assert/image/MAHAMITRA-WS.png';
import ImageAnimationImg from '../../assert/image/Image-Animation.png';

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const projects = [
    {
      title: 'Kongu TBI Website Redesign',
      description: 'Redesigned College incubator website with modern UI , improved user experience and Handled full deployment pipeline .',
      tech: ['React', 'TailwindCSS', 'Firebase'],
      category: 'Web Development',
      date: 'Sept 2025 - Present',
      link: 'https://antiquewhite-rat-516664.hostingersite.com',
      image: KongutbiImg,
    },
    {
      title: 'Aram Eyecare – E-commerce Platform',
      description: 'Developed full-stack e-commerce site with product catalog , cart , Payment Intergration , and order management .',
      tech: ['React', 'TailwindCSS', 'Payment APIs', 'Firebase'],
      category: 'E-commerce',
      date: 'July 2025 - Aug 2025',
      link: 'https://www.arameyecare.com',
      image: ArameyecareImg,
    },
    {
      title: 'Cashman – AI Powered Finance Assistant',
      description: 'Developed a mobile application for intelligent expense tracking with OCR-based invoice parsing and ML-driven financial risk scoring .',
      tech: ['React Native', 'Flask', 'LangChain', 'Firebase', 'OCR'],
      category: 'FinTech / AI',
      date: 'Apr 2025 - May 2025',
      link: 'https://www.outliersunited.com/',
      image: CashmanImg,
    },
    {
      title: 'SmartSpend – AI-Driven Personal Finance Manager',
      description: 'Developed a web-based finance application with expense tracking, budgeting tools and an integrated AI chatbot for financial assistance .',
      tech: ['React', 'TailwindCSS', 'Firebase', 'AI Integration', 'Vercel'],
      category: 'FinTech / AI',
      date: 'Aug 2025 - Sept 2025',
      link: 'https://smartspend-iota.vercel.app/',
      image: SmartspendImg,
    },
    {
      title: 'Neovate – AI & Digital Solutions Startup',
      description: 'Developed the portfolio website for Neovate, a technology startup focused on web & App development and AI-driven services .',
      tech: ['React', 'TailwindCSS' ,'EmailJS'],
      category: 'Web Development',
      date: 'Oct 2025 - Nov 2025',
      link: 'https://www.neovateai.tech',
      image: NeovateImg,
    },
    {
      title: 'FabSpector – AI-Based Fabric Defect Inspection System',
      description: 'Developed a DL model with accurately detect and classify fabric defects. Integrated with a web interface and PostgreSQL database.',
      tech: ['Computer Vision', 'HTML', 'CSS', 'PostgreSQL'],
      category: 'AI / Computer Vision',
      date: 'Nov 2025 - Dec 2025',
      link: 'https://github.com/sanjayn29/SiH-Fabric-Defect-Detector',
      image: FabspectorImg,
    },
    {
      title: 'EV Log Analyser – AI-Powered E-Log Analysis Platform',
      description: 'AI-powered platform for automated EV charging log analysis, anomaly detection and insight generation using LLM-based reasoning.',
      tech: ['Python', 'AI/LLM', 'React', 'Flask'],
      category: 'AI / Data',
      date: 'Jan 2026 - Feb 2026',
      link: 'https://github.com/sanjayn29',
      image: ZeonImg,
    },
    {
      title: 'Social Media Engagement – Power BI Dashboard',
      description: 'Interactive Power BI dashboard analysing social media engagement metrics, audience trends, and content performance across platforms.',
      tech: ['Power BI', 'Data Analytics', 'DAX'],
      category: 'Data Analytics',
      date: 'Oct 2025 - Nov 2025',
      link: 'https://github.com/sanjayn29',
      image: SocialMediaImg,
    },
    {
      title: 'PocketCare – Personal Health & Finance Tracker',
      description: 'A React Native mobile app for tracking personal health goals, daily tasks, and finances with an integrated AI assistant and push notifications.',
      tech: ['React Native', 'Expo', 'Firebase', 'AI Integration'],
      category: 'Mobile App / AI',
      date: 'Mar 2026 - Present',
      link: 'https://github.com/sanjayn29',
      image: PocketCareImg,
    },
    {
      title: 'Muthu Ambulance Service – Booking Platform',
      description: 'Web platform for ambulance booking with real-time availability tracking, location-based dispatch, and admin management dashboard.',
      tech: ['React', 'TailwindCSS', 'Firebase'],
      category: 'Web Development',
      date: 'Dec 2025 - Jan 2026',
      link: 'https://github.com/sanjayn29',
      image: MasImg,
    },
    {
      title: 'Mahamitra Boutique – E-Commerce Platform',
      description: 'Full-stack e-commerce platform for a boutique with product management, cart, order tracking and payment integration.',
      tech: ['React', 'TailwindCSS', 'Firebase', 'Payment APIs'],
      category: 'E-commerce',
      date: 'Feb 2026 - Mar 2026',
      link: 'https://github.com/sanjayn29',
      image: MahimitraImg,
    },
    {
      title: 'Image Animation Website',
      description: 'Creative website showcasing smooth image-based animations and interactive transitions built with modern CSS and JavaScript techniques.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web Development',
      date: 'Sept 2024 - Oct 2024',
      link: 'https://github.com/sanjayn29',
      image: ImageAnimationImg,
    },
  ];

  const parseEndTimestamp = (dateStr) => {
    const now = new Date().getTime();
    let endPart = dateStr.split(' - ')[1];
    if (endPart === 'Present') {
      return now;
    }
    endPart = endPart.replace('Sept', 'Sep');
    const parts = endPart.split(' ');
    const month = parts[0];
    const year = parts[1];
    // Assume end of month for sorting
    const dateObj = new Date(`${year} ${month} 31`);
    return dateObj.getTime();
  };

  const sortedProjects = [...projects].sort((a, b) => parseEndTimestamp(b.date) - parseEndTimestamp(a.date));

  return (
    <>
      <Helmet>
        <title>Projects Portfolio | Sanjay N</title>
        <meta
          name="description"
          content="View Sanjay N's featured projects including AI-powered applications, web development, and innovative solutions in FinTech and AgriTech."
        />
        <meta property="og:title" content="Projects Portfolio | Sanjay N" />
        <meta property="og:description" content="View Sanjay N's featured projects including AI-powered applications, web development, and innovative solutions in FinTech and AgriTech." />
        <meta property="og:url" content="https://sanjayn.me/#projects" />
        <meta property="og:type" content="website" />
      </Helmet>
    <section id="projects" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-glow-cyan/40 text-glow-cyan bg-glow-cyan/10 mb-4">
            Project Showcase
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
            Featured <span className="text-glow-cyan">Projects</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="text-silver-secondary text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative projects spanning web development, AI, and full-stack solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {sortedProjects.map((project, index) => (
            <div
              key={index}
              className="group glass-card transition-all duration-700 hover-glow-cyan"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Full Image - Fixed height for equal sizing, object-cover to handle mismatches without gaps */}
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-6xl opacity-75">📱</div>
                  </div>
                )}
                {/* Semi-transparent overlay for text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-glow-cyan/10 border border-glow-cyan/30 rounded-full text-glow-cyan text-xs font-medium mb-4">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-silver-primary mb-3 group-hover:text-glow-cyan transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-silver-muted text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-space-deep border border-border/50 rounded text-silver-secondary text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer: Date and Link */}
                <div className="flex justify-between items-center pt-2 border-t border-gray-600">
                  <span className="text-xs opacity-75">{project.date}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-glow-cyan text-xs hover:text-silver-primary transition-colors duration-300 flex items-center gap-1"
                  >
                    <span>View Project</span>
                    <svg
                      className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Projects;
