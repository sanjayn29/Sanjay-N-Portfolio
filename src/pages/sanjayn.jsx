import { Helmet } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import Navbar from '../components/sanjayn/navbar';
import Hero from '../components/sanjayn/hero';
import SpaceBackground from '../components/sanjayn/SpaceBackground';
import StarCursor from '../components/sanjayn/StarCursor';

// Lazy load heavy sections — each in its own Suspense boundary
const Experience     = lazy(() => import('../components/sanjayn/experience'));
const Achievements   = lazy(() => import('../components/sanjayn/achievements'));
const Certifications = lazy(() => import('../components/sanjayn/certifications'));
const Projects       = lazy(() => import('../components/sanjayn/projects'));
const Skills         = lazy(() => import('../components/sanjayn/skills'));
const Contact        = lazy(() => import('../components/sanjayn/contact'));
const Footer         = lazy(() => import('../components/sanjayn/footer'));

// Minimal per-section loading skeleton
const SectionSkeleton = ({ height = 'h-64' }) => (
  <div className={`${height} w-full flex items-center justify-center`}>
    <div className="flex items-center gap-2 opacity-30">
      <svg className="h-5 w-5 animate-spin text-glow-cyan" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
      <span className="text-sm text-silver-muted">Loading…</span>
    </div>
  </div>
);

const SanjayN = () => {
  return (
    <>
      {/*
        Single canonical <title> lives here ONLY.
        All section components (about, achievements, etc.) must NOT have their own <title>
        in their Helmet — only <meta> tags for SEO are allowed there.
        Having multiple <title> tags across lazy-loaded sections causes the title to flash
        and change on every chunk load.
      */}
      <Helmet>
        <title>Sanjay N | AI ML Engineer | Software Developer</title>
        <meta
          name="description"
          content="Sanjay N AI ML Engineer Portfolio featuring AI and ML projects, React full stack development, mobile apps, and intelligent software solutions."
        />
        <meta
          name="keywords"
          content="Sanjay N AI ML Engineer Portfolio, Sanjay N AI Engineer, Sanjay N Full Stack Developer, AI ML Engineer Portfolio India, React AI Developer India, AI Engineer Kongu Engineering College"
        />
        <meta property="og:title" content="Sanjay N | AI ML Engineer | Software Developer" />
        <meta property="og:description" content="Sanjay N AI ML Engineer Portfolio with full stack React projects, AI products, and practical machine learning solutions." />
        <meta property="og:image" content="https://sanjayn.me/preview.png" />
        <meta property="og:url" content="https://sanjayn.me/" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sanjay N | AI ML Engineer | Software Developer" />
        <meta name="twitter:description" content="Sanjay N AI ML Engineer Portfolio with AI applications, React development, and end-to-end software projects." />
        <meta name="twitter:image" content="https://sanjayn.me/preview.png" />
      </Helmet>

      <div className="min-h-screen bg-space-deep relative">
        <StarCursor />
        <SpaceBackground />
        <Navbar />

        <main className="relative z-10">
          {/* Hero is eagerly loaded — appears immediately with no delay */}
          <Hero />

          {/*
            Each section has its OWN Suspense boundary.
            This means each section loads and renders INDEPENDENTLY.
            Previously all 7 sections shared ONE boundary — if any one was
            still downloading, ALL of them showed the fallback (blank area between
            navbar and footer).
          */}
          <Suspense fallback={<SectionSkeleton height="h-96" />}>
            <Experience />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="h-96" />}>
            <Achievements />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="h-96" />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="h-64" />}>
            <Skills />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="h-64" />}>
            <Certifications />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="h-96" />}>
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
