import React, { useState } from 'react';
import { SiLinkedin, SiGithub, SiLeetcode, SiInstagram, SiWhatsapp } from 'react-icons/si';

const SocialSidebar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919080581688',
      icon: <SiWhatsapp className="w-6 h-6" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sanjayn29',
      icon: <SiLinkedin className="w-6 h-6" />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sanjayn29',
      icon: <SiGithub className="w-6 h-6" />
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/sanjayn29/',
      icon: <SiLeetcode className="w-6 h-6" />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_sanjay_n_',
      icon: <SiInstagram className="w-6 h-6" />
    },
    
  ];

  const handleSocialClick = (url) => {
    // Universal links (https) will automatically open the app if installed on mobile devices,
    // falling back to the website otherwise. No additional JS needed for fallback.
    window.open(url, '_blank');
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center gap-4 p-3 rounded-full bg-black/20 backdrop-blur-sm border border-glow-cyan/30 shadow-lg">
        {socialLinks.map((social, idx) => (
          <button
            key={idx}
            onClick={() => handleSocialClick(social.url)}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative text-silver-muted hover:text-glow-cyan transition-all duration-300 hover:scale-110 p-0 bg-transparent border-none cursor-pointer"
            aria-label={social.name}
          >
            {social.icon}
            {hoveredIndex === idx && (
              <span 
                className="absolute right-full mr-4 px-3 py-1.5 text-sm font-semibold text-black bg-glow-cyan rounded-md whitespace-nowrap shadow-md"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              >
                {social.name}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialSidebar;