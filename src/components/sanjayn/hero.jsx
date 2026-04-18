import { useState, useEffect, useRef } from 'react';
import SanjayImage from '../../assert/image/SanjayN.png';

const skills = [
  { name: 'React js', color: 'from-blue-500 to-cyan-500' },
  { name: 'Git & Github', color: 'from-gray-500 to-blue-500' },
  { name: 'PostgreSql', color: 'from-indigo-500 to-blue-500' },
  { name: 'Python', color: 'from-yellow-500 to-orange-500' },
  { name: 'Java', color: 'from-green-500 to-emerald-500' },
  { name: 'Power BI', color: 'from-purple-500 to-pink-500' },
  { name: 'Tailwind CSS', color: 'from-teal-500 to-green-500' },
  { name: 'JavaScript', color: 'from-red-500 to-orange-500' },
  { name: 'ML & DL', color: 'from-pink-500 to-rose-500' },
  { name: 'Firebase', color: 'from-purple-500 to-indigo-500' },
];

const Hero = () => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState(520);
  const [positions, setPositions] = useState({});

  // Update container size and recalculate positions on resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const size = Math.min(rect.width, rect.height);
        setContainerSize(size);

        const center = size / 2;
        const itemsPerLayer = 5;
        const newPositions = {};

        skills.forEach((skill, index) => {
          const layer = index < itemsPerLayer ? 1 : 2;
          const layerIndex = layer === 1 ? index : index - itemsPerLayer;
          const segment = 360 / itemsPerLayer;
          const stagger = layer === 2 ? segment / 2 : 0;
          const angleDeg = layerIndex * segment + stagger;
          const angle = (angleDeg * Math.PI) / 180;

          const baseRadius1 = 150;
          const baseRadius2 = 240;
          const scale = size / 520;
          const radius = layer === 1 ? baseRadius1 * scale : baseRadius2 * scale;

          const minRadius1 = 80;
          const minRadius2 = 140;
          const adjustedRadius = Math.max(layer === 1 ? minRadius1 : minRadius2, radius);

          const x = center + adjustedRadius * Math.cos(angle);
          const y = center + adjustedRadius * Math.sin(angle);

          newPositions[skill.name] = {
            left: `${x}px`,
            top: `${y}px`,
          };
        });

        setPositions(newPositions);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Calculate line positions for SVG
  const [svgViewBox, setSvgViewBox] = useState('0 0 520 520');
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const center = containerSize / 2;
    const itemsPerLayer = 5;
    const baseRadius1 = 150;
    const baseRadius2 = 240;
    const scale = containerSize / 520;
    const minRadius1 = 80;
    const minRadius2 = 140;

    setSvgViewBox(`0 0 ${containerSize} ${containerSize}`);

    const newLines = [];
    skills.forEach((_, index) => {
      const layer = index < itemsPerLayer ? 1 : 2;
      const layerIndex = layer === 1 ? index : index - itemsPerLayer;
      const segment = 360 / itemsPerLayer;
      const stagger = layer === 2 ? segment / 2 : 0;
      const angle = ((layerIndex * segment + stagger) * Math.PI) / 180;
      const radius = Math.max(layer === 1 ? minRadius1 : minRadius2, (layer === 1 ? baseRadius1 : baseRadius2) * scale);
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);

      newLines.push(
        <line
          key={`line-${index}`}
          x1={center}
          y1={center}
          x2={x}
          y2={y}
          stroke="url(#lineGradient)"
          strokeWidth={1.5}
          strokeDasharray="3 3"
          className="opacity-70"
        />
      );
    });

    setLines(newLines);
  }, [containerSize]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center galaxy-bg stars-bg overflow-hidden"
    >
      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-cyan/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-blue/5 rounded-full blur-3xl" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
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
          {/* Subtitle */}
          <p className="animate-fade-up animate-delay-200 text-silver-secondary text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-4">
            A Freelancer
          </p>

          {/* Subtitle */}
          <p className="animate-fade-up animate-delay-250 text-silver-secondary text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-4">
            AI/ML Engineer & Full Stack Developer
          </p>

          {/* Description */}
          <p className="animate-fade-up animate-delay-300 text-silver-muted text-base md:text-lg max-w-xl mx-auto mb-6 leading-relaxed">
            Crafting intelligent solutions at the intersection of artificial intelligence and elegant software engineering
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up animate-delay-400 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-center mt-2">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-space-card border border-glow-cyan/30 rounded-xl text-silver-primary font-medium transition-all duration-500 hover-glow-cyan hover:border-glow-cyan/60 flex items-center gap-2"
            >
              <span className="relative z-10">View My Work</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-space-card border border-glow-cyan/30 rounded-xl text-silver-primary font-medium transition-all duration-500 hover-glow-cyan hover:border-glow-cyan/60 flex items-center gap-2"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* RIGHT: Visual hub */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div ref={containerRef} className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px]">
            {/* Center main circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 max-w-full max-h-full">
                <div className="relative w-full h-full bg-gradient-to-br from-glow-cyan to-glow-blue rounded-full flex items-center justify-center shadow-2xl border-2 border-glow-cyan/50 transform transition-transform duration-500 group-hover:scale-105">
                  <div className="w-52 h-52 sm:w-56 sm:h-56 bg-blue-900/95 rounded-2xl flex items-center justify-center shadow-inner max-w-full max-h-full">
                    <img 
                      src={SanjayImage}
                      alt="Sanjay N - Full Stack Developer and AI Engineer" 
                      className="w-48 h-48 sm:w-52 sm:h-52 object-cover rounded-lg animate-float max-w-full max-h-full" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Surrounding skill circles (dynamic positions) */}
            {skills.map((skill) => {
              const pos = positions[skill.name];
              if (!pos) return null;

              return (
                <div
                  key={skill.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: pos.left, top: pos.top }}
                >
                  <div className="relative flex items-center justify-center" title={skill.name} tabIndex={0} role="button" aria-pressed="false">
                    {/* circle — responsive size */}
                    <div className={`relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${skill.color} rounded-full flex flex-col items-center justify-center p-2 shadow-md border border-white/20 transform transition-all duration-400 hover:scale-110 focus:scale-110 max-w-full max-h-full`}>
                      <span className="text-[10px] sm:text-xs font-semibold text-white text-center leading-tight mt-1 max-w-[64px] truncate">{skill.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Connecting lines — dynamic SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={svgViewBox} preserveAspectRatio="xMidYMid meet" aria-hidden>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.35" />
                </linearGradient>
              </defs>
              {lines}
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-up { 0% { opacity: 0; transform: translateY(28px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-8px) rotate(1.5deg); } }
        .animate-fade-up { animation: fade-up 0.9s ease-out forwards; opacity: 0; }
        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-250 { animation-delay: 0.25s; }
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-delay-400 { animation-delay: 0.4s; }
        .animate-delay-500 { animation-delay: 0.5s; }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;