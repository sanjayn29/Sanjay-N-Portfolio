import { useState, useMemo } from 'react';
import { SiLeetcode, SiGithub, SiLinkedin, SiWhatsapp, SiInstagram } from 'react-icons/si';
import { FiArrowUp, FiMail } from 'react-icons/fi';

const Footer = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const currentYear = new Date().getFullYear();

  // Pre-compute stable positions so Math.random() doesn't run on every re-render
  const dots = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      left: `${(i * 5.5 + Math.sin(i) * 15 + 50) % 100}%`,
      top: `${(i * 7.3 + Math.cos(i) * 20 + 40) % 100}%`,
      delay: `${(i * 0.4 % 3).toFixed(2)}s`,
      duration: `${(2.5 + (i % 4) * 0.6).toFixed(2)}s`,
      size: i % 3 === 0 ? 'w-1.5 h-1.5' : 'w-1 h-1',
    })),
  []);

  const socialLinks = [
    { name: 'WhatsApp',  href: 'https://wa.me/919080581688',                    icon: SiWhatsapp,  color: 'hover:text-[#25D366] hover:border-[#25D366]/60 hover:bg-[#25D366]/10' },
    { name: 'Instagram', href: 'https://www.instagram.com/_sanjay_n_',           icon: SiInstagram, color: 'hover:text-[#E1306C] hover:border-[#E1306C]/60 hover:bg-[#E1306C]/10' },
    { name: 'LinkedIn',  href: 'https://www.linkedin.com/in/sanjayn29',          icon: SiLinkedin,  color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10' },
    { name: 'GitHub',    href: 'https://github.com/sanjayn29',                   icon: SiGithub,    color: 'hover:text-white hover:border-white/40 hover:bg-white/10' },
    { name: 'LeetCode',  href: 'https://leetcode.com/sanjayn29/',                icon: SiLeetcode,  color: 'hover:text-[#FFA116] hover:border-[#FFA116]/60 hover:bg-[#FFA116]/10' },
    { name: 'Email',     href: 'mailto:sanjayn2904@gmail.com',                   icon: FiMail,      color: 'hover:text-glow-cyan hover:border-glow-cyan/60 hover:bg-glow-cyan/10' },
  ];

  const navLinks = [
    { id: 'hero',          label: 'Home' },
    { id: 'about',         label: 'About' },
    { id: 'experience',    label: 'Experience' },
    { id: 'achievements',  label: 'Achievements' },
    { id: 'projects',      label: 'Projects' },
    { id: 'skills',        label: 'Skills' },
    { id: 'certifications',label: 'Certifications' },
    { id: 'contact',       label: 'Contact' },
  ];

  const techStack = ['React', 'React Native', 'Python', 'Firebase', 'Supabase', 'TailwindCSS', 'Flask', 'AI/ML', 'Expo'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-space-deep border-t border-border/30 overflow-hidden">

      {/* ── Top glow border ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glow-cyan to-transparent" />
      <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-glow-cyan/40 to-transparent blur-sm" />

      {/* ── Animated background dots ── */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className={`absolute ${dot.size} rounded-full animate-pulse`}
            style={{
              left: dot.left,
              top: dot.top,
              animationDelay: dot.delay,
              animationDuration: dot.duration,
              background: i % 2 === 0
                ? 'rgba(34,211,238,0.25)'
                : 'rgba(96,165,250,0.20)',
            }}
          />
        ))}
      </div>

      {/* ── Ambient glows ── */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 bg-glow-cyan/6 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 w-56 h-56 bg-glow-blue/6 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">

          {/* ── Column 1: Brand ── */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
              className="group w-fit cursor-pointer transition-all duration-500"
            >
              <div className={`transition-all duration-700 ease-out ${isLogoHovered ? 'scale-105' : ''}`}>
                <div className="relative flex items-end text-2xl font-display font-bold">
                  <span className="relative inline-block mr-0.5">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:-translate-y-1">
                      <svg width="20" height="16" viewBox="0 0 20 16" className="drop-shadow-lg">
                        <ellipse cx="10" cy="14" rx="10" ry="2" fill="#22D3EE" />
                        <rect x="4" y="4" width="12" height="10" rx="1" fill="#0891B2" />
                        <rect x="4" y="4" width="12" height="3" rx="1" fill="#22D3EE" />
                        <rect x="4" y="10" width="12" height="2" fill="#60A5FA" />
                        <rect x="6" y="5" width="2" height="4" rx="1" fill="white" opacity="0.3" />
                      </svg>
                    </span>
                    <span className="text-glow-cyan">S</span>
                  </span>
                  <span className="bg-gradient-to-r from-glow-cyan via-silver-metallic to-glow-blue bg-[length:200%_auto] bg-clip-text text-transparent uppercase tracking-wide">ANJAY N</span>
                </div>
              </div>
            </button>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold text-emerald-400">Available for work</span>
            </div>

            {/* Tagline */}
            <p className="text-silver-muted text-sm leading-relaxed max-w-xs">
              Building intelligent solutions at the intersection of AI and elegant software engineering — from idea to deployment.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={`w-9 h-9 rounded-xl border border-border/50 bg-space-card/40 flex items-center justify-center
                    text-silver-muted transition-all duration-300 ${link.color}`}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Column 2: Navigation ── */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-glow-cyan flex items-center gap-2">
              <span className="h-px flex-1 bg-gradient-to-r from-glow-cyan/40 to-transparent" />
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="group flex items-center gap-2 text-left py-1.5 text-sm text-silver-muted hover:text-glow-cyan transition-all duration-300"
                >
                  <span className="h-px w-3 bg-glow-cyan/0 group-hover:w-4 group-hover:bg-glow-cyan/70 transition-all duration-300" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Column 3: Contact snippet ── */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-glow-cyan flex items-center gap-2">
              <span className="h-px flex-1 bg-gradient-to-r from-glow-cyan/40 to-transparent" />
              Get In Touch
            </h3>

            <div className="rounded-2xl border border-glow-cyan/20 bg-gradient-to-br from-glow-cyan/8 via-space-card/40 to-glow-blue/8 p-5 backdrop-blur-sm">
              <p className="text-silver-secondary text-sm leading-relaxed mb-4">
                Open to freelance projects, collaborations, and full-time roles. Let's build something great together!
              </p>
              <a
                href="mailto:sanjayn2904@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glow-cyan/15 border border-glow-cyan/35 text-glow-cyan text-xs font-semibold
                  hover:bg-glow-cyan/25 hover:border-glow-cyan/60 transition-all duration-300"
              >
                <FiMail className="h-3.5 w-3.5" />
                sanjayn2904@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-glow-cyan/20 to-transparent mb-6" />
        <div className="text-center">
          <p className="text-silver-muted text-xs">
            © {currentYear}{' '}
            <span className="text-glow-cyan font-semibold">Sanjay N</span>
            {' '}· All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;