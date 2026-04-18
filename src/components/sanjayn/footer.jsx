import { useState } from 'react';
import { SiLeetcode, SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sanjayn29',
      icon: SiLinkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/sanjayn29',
      icon: SiGithub,
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/sanjayn29/',
      icon: SiLeetcode,
    },
  ];

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    // { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 bg-space-deep border-t border-border/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glow-cyan to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
              className="group cursor-pointer transition-all duration-500"
            >
              <div className={`transition-all duration-700 ease-out ${isLogoHovered ? 'rotate-12 scale-110' : ''}`}>
                <div className="relative flex items-end justify-center lg:justify-start text-xl lg:text-2xl xl:text-3xl font-display font-bold">
                  {/* S with Hat */}
                  <span className="relative inline-block mr-1">
                    {/* Top Hat */}
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <svg width="20" height="16" viewBox="0 0 20 16" className="drop-shadow-lg">
                        {/* Hat brim */}
                        <ellipse cx="10" cy="14" rx="10" ry="2" fill="#22D3EE" />
                        {/* Hat top */}
                        <rect x="4" y="4" width="12" height="10" rx="1" fill="#0891B2" />
                        <rect x="4" y="4" width="12" height="3" rx="1" fill="#22D3EE" />
                        {/* Hat band */}
                        <rect x="4" y="10" width="12" height="2" fill="#60A5FA" />
                        {/* Shine */}
                        <rect x="6" y="5" width="2" height="4" rx="1" fill="white" opacity="0.3" />
                      </svg>
                    </span>
                    <span className="text-glow-cyan">S</span>
                  </span>
                  {/* ANJAY */}
                  <span className="bg-gradient-to-r from-glow-cyan via-silver-metallic to-glow-blue bg-[length:200%_auto] bg-clip-text text-transparent uppercase tracking-wide">ANJAY</span>
                  {/* Space */}
                  <span className="w-2" />
                  {/* N Text */}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-glow-cyan via-silver-metallic to-glow-blue bg-[length:200%_auto] bg-clip-text text-transparent uppercase tracking-wide">N</span>
                  </span>
                </div>
              </div>
            </button>
            
            <p className="text-silver-muted text-lg text-center lg:text-left leading-relaxed">
              A Freelancer
              <br className="hidden lg:block" />
              <span className="hidden lg:inline">AI/ML Engineer | Full Stack Developer</span>
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver-muted hover:text-glow-cyan hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-glow-cyan/10"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-silver-muted hover:text-glow-cyan transition-all duration-300 text-base font-semibold relative group py-2"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-glow-cyan to-glow-blue group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-glow-cyan/30 to-transparent mb-8"></div>

        <div className="text-center">
          <p className="text-silver-muted text-sm">
            © {currentYear} <span className="text-glow-cyan font-semibold">Sanjay N</span> | All rights reserved.
          </p>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-glow-cyan rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: 0.2,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;