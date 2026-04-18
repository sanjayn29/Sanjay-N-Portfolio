import { Helmet } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import Navbar from '../components/sanjayn/navbar';
import Hero from '../components/sanjayn/hero';
import SpaceBackground from '../components/sanjayn/SpaceBackground';
import StarCursor from '../components/sanjayn/StarCursor';

// Lazy load heavy components
const About = lazy(() => import('../components/sanjayn/about'));
const Experience = lazy(() => import('../components/sanjayn/experience'));
const Achievements = lazy(() => import('../components/sanjayn/achievements'));
const Projects = lazy(() => import('../components/sanjayn/projects'));
const Certifications = lazy(() => import('../components/sanjayn/certifications'));
const Skills = lazy(() => import('../components/sanjayn/skills'));
const Contact = lazy(() => import('../components/sanjayn/contact'));
const Footer = lazy(() => import('../components/sanjayn/footer'));

const SanjayN = () => {
  return (
    <>
      <Helmet>
        <title>Sanjay N</title>
        <meta
          name="description"
          content="Sanjay N – Full Stack Developer, AI Engineer & Freelancer. Explore my projects, skills, achievements, and professional journey."
        />
        <meta property="og:title" content="Sanjay N | Full Stack Developer, AI Engineer & Freelancer" />
        <meta property="og:description" content="Portfolio of Sanjay N – Full Stack Developer, AI Engineer & Freelancer. Explore projects, skills, achievements, and professional journey." />
        <meta property="og:image" content="https://sanjayn.me/preview.png" />
        <meta property="og:url" content="https://sanjayn.me/" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sanjay N | Full Stack Developer, AI Engineer & Freelancer" />
        <meta name="twitter:description" content="Portfolio of Sanjay N – Full Stack Developer, AI Engineer & Freelancer." />
        <meta name="twitter:image" content="https://sanjayn.me/preview.png" />
      </Helmet>
      <div className="min-h-screen bg-space-deep relative">
      <StarCursor />
      <SpaceBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              {/* Animated Text with Hat on S */}
              <div className="text-5xl md:text-6xl font-display font-bold flex items-end justify-center">
                <div className="relative inline-block">
                  {/* Flying Hat on S */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                    <svg width="40" height="32" viewBox="0 0 20 16" className="drop-shadow-2xl">
                      <ellipse cx="10" cy="14" rx="10" ry="2" fill="#22D3EE" />
                      <rect x="4" y="4" width="12" height="10" rx="1" fill="#0891B2" />
                      <rect x="4" y="4" width="12" height="3" rx="1" fill="#22D3EE" />
                      <rect x="4" y="10" width="12" height="2" fill="#60A5FA" />
                      <rect x="6" y="5" width="2" height="4" rx="1" fill="white" opacity="0.3" />
                    </svg>
                  </div>
                  <span className="bg-gradient-to-r from-glow-cyan via-silver-metallic to-glow-blue bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">S</span>
                </div>
                <span className="bg-gradient-to-r from-glow-cyan via-silver-metallic to-glow-blue bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">ANJAY</span>
                <span className="w-3" />
                <span className="bg-gradient-to-r from-glow-cyan via-silver-metallic to-glow-blue bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">N</span>
              </div>
            </div>
          </div>
        }>
          <About />
          <Experience />
          <Achievements />
          <Certifications />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
    </>
  );
};

export default SanjayN;
