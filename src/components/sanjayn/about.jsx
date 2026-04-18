import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import SanjayImage from '../../assert/image/SanjayN2.jpg';
import { FaPhone } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { SiLeetcode, SiGithub, SiLinkedin } from 'react-icons/si';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
      <Helmet>
        <title>About Sanjay N | Full Stack Developer & AI Engineer</title>
        <meta
          name="description"
          content="Learn about Sanjay N, a Full Stack Developer and AI Engineer passionate about building intelligent solutions and modern web applications."
        />
        <meta property="og:title" content="About Sanjay N | Full Stack Developer & AI Engineer" />
        <meta property="og:description" content="Learn about Sanjay N, a Full Stack Developer and AI Engineer passionate about building intelligent solutions and modern web applications." />
        <meta property="og:url" content="https://sanjayn.me/#about" />
        <meta property="og:type" content="profile" />
      </Helmet>
    <section id="about" ref={sectionRef} className="relative pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
        {/* Section Header */}
        <div className={`text-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-3">
            About <span className="font-hangout text-glow-cyan">Sanjay N</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Content Layout - Reduced gaps */}
        <div className={`grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Left: Image - Reduced margins */}
          <div className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group w-full max-w-sm">
              {/* Glow effect - Smaller */}
              <div className="absolute -inset-2 bg-gradient-to-r from-glow-cyan/10 to-purple-500/10 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-xl border-3 border-glow-cyan/20 shadow-xl">
                <img
                  src={SanjayImage}
                  alt="Sanjay N - Full Stack Developer, AI Engineer, and Freelancer"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              {/* Decorative corners - Smaller */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-glow-cyan/40 rounded-tl-md"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-glow-cyan/40 rounded-br-md"></div>
            </div>
          </div>

          {/* Right: Content - Compact spacing */}
          <div className="space-y-6 text-left order-1 lg:order-2 flex flex-col justify-center">
            {/* Introduction Text - Tighter spacing */}
            <div className="space-y-4">
              <p className="text-silver-secondary text-base md:text-lg leading-relaxed">
I am passionate about solving real-world problems through practical software and intelligent solutions, always learning and applying new ideas to make a meaningful impact.              </p>
              <p className="text-silver-secondary text-base md:text-lg leading-relaxed">
Currently pursuing B.Tech in Artificial Intelligence & Machine Learning at Kongu Engineering College, Erode.
                <span className="text-glow-cyan font-medium"> Let's connect and collaborate!</span>
              </p>
            </div>

            {/* Contact Info - Compact spacing */}
            <div className="space-y-3 pt-4 border-t border-border/30">
              <div className="flex items-center gap-3 text-silver-secondary text-lg md:text-base group hover:bg-space-card/30 p-2.5 rounded-lg transition-all duration-300 cursor-pointer">
                <div className="p-2 rounded-md bg-glow-cyan/10 group-hover:bg-glow-cyan/20 transition-colors">
                  <FaPhone className="text-glow-cyan text-lg" />
                </div>
                <span className="group-hover:text-glow-cyan transition-colors">+91 90805 81688</span>
              </div>
              
              <div className="flex items-center gap-3 text-silver-secondary text-lg md:text-base group hover:bg-space-card/30 p-2.5 rounded-lg transition-all duration-300 cursor-pointer">
                <div className="p-2 rounded-md bg-glow-cyan/10 group-hover:bg-glow-cyan/20 transition-colors">
                  <MdEmail className="text-glow-cyan text-lg" />
                </div>
                <span className="group-hover:text-glow-cyan transition-colors text-sm break-words">sanjayn29.aiml@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3 text-silver-secondary text-lg md:text-base group hover:bg-space-card/30 p-2.5 rounded-lg transition-all duration-300 cursor-pointer">
                <div className="p-2 rounded-md bg-glow-cyan/10 group-hover:bg-glow-cyan/20 transition-colors">
                  <MdLocationOn className="text-glow-cyan text-lg" />
                </div>
                <span className="group-hover:text-glow-cyan transition-colors">Vellore, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Social Icons - Compact */}
            <div className="pt-4">
              <h3 className="text-silver-primary text-base font-medium mb-3">Connect with me:</h3>
              <div className="flex items-center gap-3">
                {[
                  { 
                    icon: SiLinkedin, 
                    href: "https://www.linkedin.com/in/sanjayn29", 
                    label: "LinkedIn",
                    color: "hover:border-blue-400 hover:bg-blue-500/10"
                  },
                  { 
                    icon: SiGithub, 
                    href: "https://github.com/sanjayn29", 
                    label: "GitHub",
                    color: "hover:border-gray-400 hover:bg-gray-500/10"
                  },
                  { 
                    icon: SiLeetcode, 
                    href: "https://leetcode.com/sanjayn29/", 
                    label: "LeetCode",
                    color: "hover:border-yellow-400 hover:bg-yellow-500/10"
                  },
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-lg bg-space-card/50 border border-border/30 ${social.color} transition-all duration-300 hover:scale-105 hover:shadow-md`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-silver-secondary group-hover:text-glow-cyan transition-colors" />
                    <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="text-xs text-glow-cyan bg-space-card px-2 py-1 rounded whitespace-nowrap shadow-md">
                        {social.label}
                      </span>
                    </div>
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