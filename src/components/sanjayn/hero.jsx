import { useEffect, useState } from 'react';
import AboutImage from '../../assert/image/mine.jpg';

const roles = [
  'A Freelancer',
  'AI/ML Engineer',
  'Software Developer',
];

const quickHighlights = [
  'Problem-Solving Builder',
  'Practical AI + Product Thinking',
  'Open to Real-World Collaborations',
];

const Hero = () => {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveRoleIndex(prev => (prev + 1) % roles.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHighlightIndex(prev => (prev + 1) % quickHighlights.length);
    }, 2300);

    return () => window.clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center galaxy-bg stars-bg overflow-hidden pt-20"
    >
      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-cyan/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-blue/5 rounded-full blur-3xl" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 px-4 sm:px-6 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 py-8">
        {/* LEFT: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Greeting */}
          <p className="animate-fade-up text-glow-cyan text-lg md:text-base tracking-widest uppercase mb-6">
            Welcome to my universe
          </p>

          {/* Main Heading */}
          <h1 className="animate-fade-up animate-delay-100 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="block text-white drop-shadow-md bg-gradient-silver bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
              Sanjay N
            </span>
          </h1>
          {/* Rotating role highlight */}
          <div className="animate-fade-up animate-delay-200 relative h-9 overflow-hidden mb-4">
            {roles.map((role, index) => (
              <p
                key={role}
                className={`absolute inset-0 flex items-center lg:justify-start justify-center text-lg md:text-xl lg:text-2xl font-semibold transition-all duration-500
                  ${index === activeRoleIndex
                    ? 'translate-y-0 opacity-100 text-glow-cyan'
                    : 'translate-y-6 opacity-0 text-silver-secondary'
                  }`}
              >
                {role}
              </p>
            ))}
          </div>

          {/* Description */}
          <p className="animate-fade-up animate-delay-300 text-silver-muted text-base md:text-lg max-w-xl mx-auto mb-3 leading-relaxed">
            I am passionate about solving real-world problems through practical software and intelligent solutions, and always learning and applying new ideas to make a meaningful impact.
          </p>
          <p className="animate-fade-up animate-delay-300 text-silver-secondary text-sm md:text-base max-w-xl mx-auto mb-6 leading-relaxed">
            Currently pursuing B.Tech in{' '}
            <span className="text-glow-cyan font-semibold">Artificial Intelligence and Machine Learning</span>.
            {' '}at Kongu Engineering College.
          </p>

          <div className="animate-fade-up animate-delay-400 relative h-6 overflow-hidden mb-6">
            {quickHighlights.map((line, index) => (
              <p
                key={line}
                className={`absolute inset-0 text-sm md:text-base font-medium transition-all duration-500 ${
                  index === activeHighlightIndex
                    ? 'translate-y-0 opacity-100 text-glow-cyan'
                    : 'translate-y-4 opacity-0 text-silver-muted'
                }`}
              >
                {line}
              </p>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-up animate-delay-500 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-stretch sm:items-center mt-2">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-3.5 bg-space-card border border-glow-cyan/30 rounded-xl text-silver-primary font-medium transition-all duration-500 hover-glow-cyan hover:border-glow-cyan/60 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span className="relative z-10">View My Work</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-3.5 bg-space-card border border-glow-cyan/30 rounded-xl text-silver-primary font-medium transition-all duration-500 hover-glow-cyan hover:border-glow-cyan/60 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* RIGHT: Dynamic portrait */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-[280px] h-[360px] sm:w-[340px] sm:h-[430px] md:w-[390px] md:h-[500px]">
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-glow-cyan/45 via-transparent to-glow-blue/35 blur-lg animate-pulse" />

            <div className="relative h-full w-full rounded-[2rem] border border-glow-cyan/30 bg-space-card/65 backdrop-blur-xl p-3 md:p-4">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] border border-border/60 bg-space-deep">
                <img
                  src={AboutImage}
                  alt="Sanjay N portrait"
                  className="h-full w-full object-cover animate-float"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-deep/55 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 rounded-full border border-glow-cyan/45 bg-space-card/80 px-3 py-1.5 text-xs font-semibold text-glow-cyan">
                  Freelancer
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-border/60 bg-space-card/80 p-3 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-wider text-silver-muted">Now Building</p>
                  <p className="mt-1 text-sm font-semibold text-silver-primary">Software Solutions, ML Models, and AI Integrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-up { 0% { opacity: 0; transform: translateY(28px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-8px) rotate(1.5deg); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;