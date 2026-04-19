import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import nvidiaImg from '../../assert/image/nvidia.png';
import aiFoundationImg from '../../assert/image/AI-Foundation.png';
import aiGenerativeImg from '../../assert/image/AI-Generative.png';

const rotatingHighlights = [
  'Industry-recognized learning milestones',
  'Strong AI and generative systems foundation',
  'Focused on practical, product-ready implementation',
];

const Certifications = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHighlightIndex((prev) => (prev + 1) % rotatingHighlights.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  const certifications = [
    {
      title: 'Generative AI with Diffusion model',
      issuer: 'NVIDIA',
      date: 'Oct 2025',
      credentialId: 'xs_A4j5iRO-Z55I__r8wkw',
      link: 'https://learn.nvidia.com/certificates?id=xs_A4j5iRO-Z55I__r8wkw',
      image: nvidiaImg,
      skills: 'Diffusion Models, Stable Diffusion, Image Generation',
    },
    {
      title: 'AI Foundations Associate',
      issuer: 'Oracle',
      date: 'Aug 2025',
      credentialId: 'E9F1F7F2999AABDBE901A6E587227E9101B65FBEDF0734E888729382D663269A',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=E9F1F7F2999AABDBE901A6E587227E9101B65FBEDF0734E888729382D663269A',
      image: aiFoundationImg,
      skills: 'AI Basics, Machine Learning Fundamentals, AI Applications',
    },
    {
      title: 'Generative AI',
      issuer: 'Oracle',
      date: 'Aug 2025',
      credentialId: '3AD822F6377BB599ACC430174A2129B30211CE58A13DA79DC787BCAE46FCD5FC',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=3AD822F6377BB599ACC430174A2129B30211CE58A13DA79DC787BCAE46FCD5FC',
      image: aiGenerativeImg,
      skills: 'Generative Models, Prompt Engineering, Text-to-Image',
    },
  ];

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="View Sanjay N's professional certifications from NVIDIA, Oracle, and other institutions in AI, Generative AI, and Machine Learning technologies."
        />
        <meta property="og:title" content="Professional Certifications | Sanjay N" />
        <meta property="og:description" content="View Sanjay N's professional certifications from NVIDIA, Oracle, and other institutions in AI, Generative AI, and Machine Learning technologies." />
        <meta property="og:url" content="https://sanjayn.me/#certifications" />
        <meta property="og:type" content="website" />
      </Helmet>
    <section id="certifications" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-glow-cyan/40 text-glow-cyan bg-glow-cyan/10 mb-4">
            Learning Credentials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
            Professional <span className="text-glow-cyan">Certifications</span>
          </h2>
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
          <div className="section-divider max-w-xs mx-auto" />
          <p className="text-silver-secondary text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Explore my recognized credentials in AI and machine learning from top industry leaders.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center gap-4 p-5 glass-card transition-all duration-700 hover-glow-cyan ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 75}ms` }}
            >
              {/* Certificate Image */}
              <div className="flex-shrink-0 w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center rounded-lg bg-glow-cyan/10 border border-glow-cyan/30 group-hover:bg-glow-cyan/20 transition-colors duration-300 overflow-hidden">
                <img
                  src={cert.image}
                  alt={`${cert.title} badge`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Certificate Details */}
              <div className="flex-1 min-w-0 text-center">
                <h3 className="font-display text-base font-semibold text-silver-primary group-hover:text-glow-cyan transition-colors duration-300 truncate">
                  {cert.title}
                </h3>
                <p className="text-silver-secondary text-sm mt-1">{cert.issuer}</p>
                <p className="text-silver-muted text-xs mt-2 leading-relaxed">
                  Skills: {cert.skills}
                </p>
                <div className="flex items-center justify-center gap-3 mt-3 text-silver-muted text-xs">
                  <span className="rounded-full border border-glow-cyan/40 bg-glow-cyan/12 px-2.5 py-1 font-semibold text-glow-cyan">
                    {cert.date}
                  </span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-glow-blue/35 bg-glow-blue/10 px-2.5 py-1 font-medium text-silver-primary transition-all duration-300 hover:border-glow-cyan/45 hover:bg-glow-cyan/10 hover:text-glow-cyan"
                  >
                    Click to View
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

export default Certifications;
