import { useState, useEffect, useRef } from 'react';
import resumePDF from '../../assert/pdf/Sanjay N.pdf'; // Import the PDF for download

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const mobileToggleButtonRef = useRef(null);
  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  // Function to trigger PDF download
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Sanjay N.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    // Run once on mount to set the correct active section immediately
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!isMobileMenuOpen) {
        return;
      }

      const clickedInsideMenu = mobileMenuRef.current && mobileMenuRef.current.contains(e.target);
      const clickedToggleButton = mobileToggleButtonRef.current && mobileToggleButtonRef.current.contains(e.target);

      if (!clickedInsideMenu && !clickedToggleButton) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass border-b border-border/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Animated Logo with Character */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group relative lg:mr-10"
          >
            <div className="relative flex items-center">
              <span className="font-signature font-bold text-[2rem] md:text-[2.4rem] leading-[1.2] pb-0.5 whitespace-nowrap bg-gradient-to-r from-glow-cyan via-silver-metallic to-glow-blue bg-[length:200%_auto] bg-clip-text text-transparent tracking-[0.02em] drop-shadow-[0_2px_10px_rgba(34,211,238,0.35)]">
                Sanjay N
              </span>
            </div>
            {/* Glow effect behind entire logo */}
            <span className="absolute inset-0 -z-10 blur-xl bg-gradient-to-r from-glow-cyan/30 via-glow-blue/20 to-glow-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full scale-150" />
          
          </button>

          {/* Spacer for additional space on desktop */}
          <div className="hidden xl:block flex-1" />

          {/* Desktop Navigation with Resume Button */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 px-2 py-1 rounded-xl bg-space-card/25 border border-border/20">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3 xl:px-4 py-2.5 text-sm xl:text-base font-semibold whitespace-nowrap transition-all duration-300 rounded-lg ${
                  activeSection === link.id
                    ? 'text-glow-cyan bg-space-card/60'
                    : 'text-silver-secondary hover:text-silver-primary hover:bg-space-card/40'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-glow-cyan rounded-full glow-cyan" />
                )}
              </button>
            ))}
            {/* Resume Download Button */}
            <button
              onClick={downloadResume}
              className="relative px-3 xl:px-4 py-2.5 text-sm xl:text-base font-semibold whitespace-nowrap transition-all duration-300 rounded-lg text-silver-secondary hover:text-glow-cyan hover:bg-space-card/50"
            >
              <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={mobileToggleButtonRef}
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2.5 text-silver-secondary hover:text-silver-primary transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu with Resume Button */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass border-t border-border/30 px-5 py-5 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`block w-full text-left px-5 py-3.5 rounded-lg text-lg font-bold transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-glow-cyan bg-space-card'
                  : 'text-silver-secondary hover:text-silver-primary hover:bg-space-card/50'
              }`}
            >
              {link.label}
            </button>
          ))}
          {/* Mobile Resume Download Button */}
          <button
            onClick={downloadResume}
            className="block w-full text-left px-5 py-3.5 rounded-lg text-lg font-bold transition-all duration-300 text-silver-secondary hover:text-glow-cyan hover:bg-space-card/50"
          >
            <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;