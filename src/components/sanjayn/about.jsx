import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import SanjayImage from '../../assert/image/mine.jpg';
import { FaPhone } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { SiLeetcode, SiGithub, SiLinkedin, SiInstagram, SiWhatsapp } from 'react-icons/si';

const stats = [
  { label: 'Role', value: 'Freelancer' },
  { label: 'Open To', value: 'Collabs & Internships' },
];

const socials = [
  {
    icon: SiWhatsapp,
    href: 'https://wa.me/919080581688',
    label: 'WhatsApp',
    theme:'hover:border-[#25D366]/60 hover:bg-[#25D366]/10 hover:text-[#25D366]',
  },
  {
    icon: SiLinkedin,
    href: 'https://www.linkedin.com/in/sanjayn29',
    label: 'LinkedIn',
    theme:'hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]',
  },
  {
    icon: SiInstagram,
    href: 'https://www.instagram.com/_sanjay_n_',
    label: 'Instagram',
    theme:'hover:border-[#E1306C]/60 hover:bg-[#E1306C]/10 hover:text-[#E1306C]',
  },
  {
    icon: SiGithub,
    href: 'https://github.com/sanjayn29',
    label: 'GitHub',
    theme:'hover:border-white/40 hover:bg-white/10 hover:text-white',
  },
  {
    icon: SiLeetcode,
    href: 'https://leetcode.com/sanjayn29/',
    label: 'LeetCode',
    theme: 'hover:border-[#FFA116]/60 hover:bg-[#FFA116]/10 hover:text-[#FFA116]',
  },
];

const rotatingHighlights = [
  'AI/ML Engineer · Full Stack Developer · Freelancer',
  'B.Tech in AI & ML — Kongu Engineering College',
  'Building intelligent software that solves real problems',
  'Open to collaborations, internships & freelance work',
  'From clean code to bold product thinking',
];

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>        <meta
          name="description"
          content="Learn about Sanjay N, a Full Stack Developer and AI Engineer passionate about building intelligent solutions and modern web applications."
        />
        <meta property="og:title" content="About Sanjay N | Full Stack Developer & AI Engineer" />
        <meta property="og:description" content="Learn about Sanjay N, a Full Stack Developer and AI Engineer passionate about building intelligent solutions and modern web applications." />
        <meta property="og:url" content="https://sanjayn.me/#about" />
        <meta property="og:type" content="profile" />
      </Helmet>

      <section id="about" ref={sectionRef} className="relative overflow-hidden pt-20 md:pt-24 pb-14 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-4rem] top-12 h-52 w-52 rounded-full bg-glow-cyan/15 blur-3xl" />
          <div className="absolute right-[-3rem] top-28 h-56 w-56 rounded-full bg-glow-blue/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
          <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-glow-cyan/40 text-glow-cyan bg-glow-cyan/10 mb-4">
              About Me
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary">
              About <span className="text-glow-cyan">Sanjay N</span>
            </h2>
            <div className="section-divider max-w-sm mx-auto mt-4 mb-5" />
            {/* Rotating highlights */}
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

          <div className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative order-2 lg:order-1">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-3xl border border-glow-cyan/25 bg-glow-cyan/10 backdrop-blur-lg animate-float" />
              <div className="absolute -right-3 bottom-8 h-20 w-20 rounded-full border border-glow-blue/35 bg-glow-blue/15 backdrop-blur-lg animate-pulse" />

              <div className="relative group mx-auto w-full max-w-sm md:max-w-[23rem]">
                <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-glow-cyan/70 via-sky-300/30 to-glow-blue/60 blur-sm opacity-65 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-2 rounded-[2rem] border border-white/10 [transform:rotate(-2deg)]" />
                <div className="absolute -inset-2 rounded-[2rem] border border-glow-cyan/25 [transform:rotate(2deg)]" />

                <div className="relative overflow-hidden rounded-[2rem] border border-glow-cyan/20 bg-space-card/90 backdrop-blur-lg">
                  <img
                    src={SanjayImage}
                    alt="Sanjay N - Full Stack Developer, AI Engineer, and Freelancer"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <p className="text-base md:text-lg leading-relaxed text-silver-secondary">
                  I build practical software and intelligent systems that solve real problems. I like blending clean engineering with bold product thinking so every project feels useful, sharp, and modern.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-silver-secondary">
                  Currently pursuing B.Tech in Artificial Intelligence and Machine Learning at Kongu Engineering College, Erode.
                  <span className="text-glow-cyan font-semibold"> Open to collaborations that create real impact.</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border/60 bg-space-card/70 p-3.5 backdrop-blur-md transition-all duration-300 hover:border-glow-cyan/45 hover:-translate-y-1">
                    <p className="text-xs md:text-sm text-silver-muted">{stat.label}</p>
                    <p className="mt-1 text-sm md:text-base font-medium text-silver-primary">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 pt-2">
                <a
                  href="tel:+919080581688"
                  className="group flex items-center gap-3 rounded-xl border border-glow-cyan/25 bg-gradient-to-r from-glow-cyan/10 via-space-card/65 to-space-card/65 p-3 shadow-[0_0_0_1px_rgba(34,211,238,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-glow-cyan/45 hover:shadow-[0_0_18px_rgba(34,211,238,0.18)] active:translate-y-0"
                >
                  <div className="rounded-lg bg-glow-cyan/20 p-2.5 group-hover:bg-glow-cyan/25 transition-colors">
                    <FaPhone className="text-glow-cyan text-base" />
                  </div>
                  <span className="text-base font-medium text-silver-secondary group-hover:text-silver-primary transition-colors">+91 90805 81688</span>
                </a>

                <a
                  href="mailto:sanjayn29.aiml@gmail.com"
                  className="group flex items-center gap-3 rounded-xl border border-glow-cyan/25 bg-gradient-to-r from-glow-cyan/10 via-space-card/65 to-space-card/65 p-3 shadow-[0_0_0_1px_rgba(34,211,238,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-glow-cyan/45 hover:shadow-[0_0_18px_rgba(34,211,238,0.18)] active:translate-y-0"
                >
                  <div className="rounded-lg bg-glow-cyan/20 p-2.5 group-hover:bg-glow-cyan/25 transition-colors">
                    <MdEmail className="text-glow-cyan text-base" />
                  </div>
                  <span className="text-base text-silver-secondary break-words font-medium group-hover:text-silver-primary transition-colors">sanjayn29.aiml@gmail.com</span>
                </a>
              </div>

              <div className="pt-1">
                <h3 className="mb-3 text-sm md:text-base font-medium text-silver-primary">Connect with me</h3>
                <div className="flex flex-wrap items-center gap-3">
                  {socials.filter(social => social.label !== 'LeetCode').map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group inline-flex items-center gap-2 rounded-full border border-transparent bg-space-card/70 px-4 py-2 text-sm font-medium text-silver-secondary shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:text-silver-primary active:scale-[0.98] focus-visible:outline-none ${social.theme}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
