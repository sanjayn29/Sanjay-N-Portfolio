import { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiArrowUpRight, FiAward, FiCalendar, FiTrendingUp } from 'react-icons/fi';
import { SiLinkedin } from 'react-icons/si';

// Image imports (path: src/assert/image/)
import April2024Img from '../../assert/image/RRC.jpg';
import Sept2024Img from '../../assert/image/AI-Code.avif';
import Nov2024Img from '../../assert/image/SCD-Code.jpg';
import Mar2025Img from '../../assert/image/KEC-Hack.avif';
import Apr2025Img from '../../assert/image/BYTS-Hack.avif';
import Sept2025IbmImg from '../../assert/image/IBM-Hack.jpg';
import Sept2025Img from '../../assert/image/SIH-KEC.jpg';
import Dec2025Img from '../../assert/image/SIH-Final.jpg';
import Hacksagon2026Img from '../../assert/image/Hacksagon hackathon.jpeg';
import Electrothon2026Img from '../../assert/image/Electron hackthon.jpeg';

const rotatingHighlights = [
  '10 major achievements across 2024 to 2026',
  'Multiple first-prize wins in competitive hackathons',
  'Strong execution from idea to practical solution',
];

const Achievements = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);

  const linkedInProfile = 'https://www.linkedin.com/in/sanjayn29';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHighlightIndex((prev) => (prev + 1) % rotatingHighlights.length);
    }, 2300);

    return () => window.clearInterval(timer);
  }, []);

  const achievements = [
    {
      title: 'Electrothon (Hackathon)',
      organization: 'EEE Department - KEC',
      description: 'AI-powered E-log analysis platform',
      image: Electrothon2026Img,
      date: '2026',
      fullDate: '2026-02-19',
      displayDate: 'Feb 2026',
      category: '1st Prize',
      link: 'https://www.linkedin.com/posts/sanjayn29_electrothon2k26-firstprize-chargesense-activity-7431196738872492032-W1fH',
    },
    {
      title: 'Hacksagon (Hackathon)',
      organization: 'Freelancers Club - KEC',
      description: 'TravelTech mobile application',
      image: Hacksagon2026Img,
      date: '2026',
      fullDate: '2026-02-20',
      displayDate: 'Feb 2026',
      category: '1st Prize',
      link: 'https://www.linkedin.com/posts/sanjayn29_hackathon-freelancersclub-ai-activity-7431371098090536960-lrMw',
    },

    {
      title: 'Smart India Hackathon - Hardware Edition (Grand Finale)',
      organization: 'Ministry of Education, Government of India',
      description: 'National-level hardware solution',
      image: Dec2025Img,
      date: '2025',
      fullDate: '2025-12-08',
      displayDate: 'Dec 2025',
      category: 'Finalist',
      link: 'https://www.linkedin.com/posts/sanjayn29_sih2025-smartindiahackathon-hackathonexperience-activity-7408162536996597760-aPqo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk',
    },
    {
      title: 'SIH Internal Hackathon - Software Edition',
      organization: 'Kongu Engineering College',
      description: 'AI solution for problem ID: SIH25073',
      image: Sept2025Img,
      date: '2025',
      fullDate: '2025-09-20',
      displayDate: 'Sept 2025',
      category: '1st Prize',
      link: 'https://www.linkedin.com/posts/sanjayn29_smartindiahackathon-teamwork-innovation-activity-7376306740541177857-KX6R?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk',
    },
    {
      title: 'Cognitive X Gen AI Hackathon',
      organization: 'KEC in collaboration with IBM and SmartBridge',
      description: 'GenAI finance application',
      image: Sept2025IbmImg,
      date: '2025',
      fullDate: '2025-09-16',
      displayDate: 'Sept 2025',
      category: '1st Prize',
      link: 'https://www.linkedin.com/posts/sanjayn29_genai-hackathon-ibm-activity-7374820219371982848-25jS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk',
    },
    {
      title: 'BYTS India Hackathon',
      organization: 'BYTS',
      description: 'FinTech AI-based solution',
      image: Apr2025Img,
      date: '2025',
      fullDate: '2025-04-11',
      displayDate: 'Apr 2025',
      category: 'Best Innovation',
      link: 'https://www.linkedin.com/posts/sandeepmareeswaran_hackathon-innovation-mentorship-ugcPost-7318833641831153664-6UnE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk',
    },
    {
      title: 'KEC Hackathon',
      organization: 'Kongu Engineering College',
      description: 'AgriTech team solution',
      image: Mar2025Img,
      date: '2025',
      fullDate: '2025-03-10',
      displayDate: 'Mar 2025',
      category: 'Runner-up',
      link: 'https://www.linkedin.com/posts/sanjayn29_kec-kechackathon2025-hackathon-activity-7306903277680357377-FCnX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk',
    },
    {
      title: 'Code Clash (SDC Fest)',
      organization: 'Self Development Club - KEC',
      description: 'Strong coding and logic skills',
      image: Nov2024Img,
      date: '2024',
      fullDate: '2024-11-09',
      displayDate: 'Nov 2024',
      category: '3rd Prize',
      link: 'https://www.linkedin.com/posts/sanjayn29_codingcontest-sdcfest2024-codeclash-activity-7261320712584318976-y9jL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk',
    },
    {
      title: 'Coding Quest (NEWELLS)',
      organization: 'AI Department - KEC',
      description: 'Problem-solving competition',
      image: Sept2024Img,
      date: '2024',
      fullDate: '2024-09-11',
      displayDate: 'Sept 2024',
      category: '2nd Prize',
      link: 'https://www.linkedin.com/posts/sanjayn29_codingchallenge-ai-symposium-activity-7247119094980722688-MEym?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk',
    },
    {
      title: 'Slogan Writing',
      organization: 'Red Ribbon Club - KEC',
      description: 'Awareness and social message',
      image: April2024Img,
      date: '2024',
      fullDate: '2024-04-13',
      displayDate: 'Apr 2024',
      category: '2nd Prize',
      link: 'https://www.linkedin.com/posts/sanjayn29_achievement-sloganwriting-redribbionclub-activity-7210675100243677185-r-7Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk',
    },
  ];

  const groupedByYear = useMemo(() => {
    const groups = achievements.reduce((acc, achievement) => {
      const year = achievement.fullDate.split('-')[0];
      if (!acc[year]) acc[year] = [];
      acc[year].push(achievement);
      return acc;
    }, {});

    Object.keys(groups).forEach((year) => {
      groups[year].sort((a, b) => new Date(b.fullDate) - new Date(a.fullDate));
    });

    return groups;
  }, [achievements]);

  const sortedYears = useMemo(() => {
    return Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));
  }, [groupedByYear]);

  return (
    <>
      <Helmet>        <meta
        name="description"
        content="View Sanjay N's achievements including hackathon wins, coding competition prizes, and recognition in AI, software development, and innovation."
      />
        <meta property="og:title" content="Achievements & Awards | Sanjay N" />
        <meta property="og:description" content="View Sanjay N's achievements including hackathon wins, coding competition prizes, and recognition in AI, software development, and innovation." />
        <meta property="og:url" content="https://sanjayn.me/#achievements" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section id="achievements" ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-12 top-20 h-72 w-72 rounded-full bg-glow-cyan/10 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-glow-blue/10 blur-3xl" />
          <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_25%,rgba(34,211,238,0.14)_1px,transparent_1.5px),radial-gradient(circle_at_82%_70%,rgba(96,165,250,0.14)_1px,transparent_1.5px)] [background-size:110px_110px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-glow-cyan/40 bg-glow-cyan/10 px-3 py-1 text-xs text-glow-cyan">
              Milestone Highlights
            </span>
            <h2 className="mb-4 font-display text-3xl font-bold text-silver-primary md:text-4xl lg:text-5xl">
              Key <span className="text-glow-cyan">Achievements</span>
            </h2>
            <div className="relative mx-auto h-6 max-w-2xl overflow-hidden">
              {rotatingHighlights.map((line, index) => (
                <p
                  key={line}
                  className={`absolute inset-0 inline-flex items-center justify-center gap-2 text-sm text-silver-secondary transition-all duration-500 md:text-base ${activeHighlightIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                >
                  <FiTrendingUp className="h-4 w-4 text-glow-cyan" />
                  {line}
                </p>
              ))}
            </div>
            <div className="section-divider mx-auto mt-4 max-w-xs" />
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-silver-secondary md:text-xl">
              Discover standout accomplishments across hackathons, coding competitions, and innovation challenges.
            </p>
          </div>

          <div className="space-y-14">
            {sortedYears.map((year, yearIndex) => (
              <div key={year} className={`py-2 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: `${yearIndex * 120}ms` }}>
                <div className="mb-14 mt-2 flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-space-card/55 px-4 py-4 backdrop-blur-md">
                  <div className="inline-flex items-center gap-3">
                    <span className="h-8 w-1 rounded-full bg-glow-cyan" />
                    <h3 className="font-display text-2xl font-bold text-silver-primary">{year}</h3>
                  </div>
                  <span className="rounded-full border border-glow-cyan/30 bg-glow-cyan/10 px-3 py-1 text-xs text-glow-cyan">
                    {groupedByYear[year].length} achievements
                  </span>
                </div>

                <div className="relative">
                  <div className="pointer-events-none absolute bottom-4 left-4 top-4 hidden w-px bg-gradient-to-b from-glow-cyan/70 via-glow-blue/35 to-transparent md:block" />

                  <div className="grid gap-5 md:pl-10 lg:grid-cols-3">
                    {groupedByYear[year].map((achievement, index) => (
                      <article
                        key={achievement.fullDate + achievement.title}
                        className="group relative overflow-hidden rounded-2xl border border-border/60 bg-space-card/70 p-4 backdrop-blur-lg transition-all duration-500 hover:-translate-y-1 hover:border-glow-cyan/50 hover:shadow-[0_0_32px_rgba(34,211,238,0.22)] active:border-glow-cyan/65 active:bg-glow-cyan/10 active:shadow-[0_0_36px_rgba(34,211,238,0.28)] md:p-5"
                        style={{ transitionDelay: `${index * 60}ms` }}
                      >
                        {/* Card radial glow bg effect */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.12) 0%, rgba(96,165,250,0.06) 55%, transparent 75%)' }} />
                        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.05) 0%, transparent 60%, rgba(96,165,250,0.05) 100%)' }} />

                        <div className="pointer-events-none absolute left-[-1.9rem] top-8 hidden h-3 w-3 rounded-full border border-glow-cyan/70 bg-space-deep md:block" />

                        <div className="relative mb-4 flex h-56 items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-space-deep/90 to-space-card/60 p-2">
                          <img
                            src={achievement.image}
                            alt={`${achievement.title} proof`}
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-space-deep/65 via-transparent to-transparent" />
                          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-glow-cyan/30 bg-space-card/80 px-2.5 py-1 text-xs text-glow-cyan">
                            <FiAward className="h-3.5 w-3.5" />
                            {achievement.category}
                          </div>
                        </div>

                        <h4 className="font-display text-lg font-semibold leading-snug text-silver-primary transition-colors duration-300 group-hover:text-glow-cyan">
                          {achievement.title}
                        </h4>
                        <p className="mt-1 text-sm font-medium text-glow-cyan">{achievement.organization}</p>
                        <p className="mt-2 text-sm leading-relaxed text-silver-muted">{achievement.description}</p>

                        <div className="mt-4 flex items-center justify-between border-t border-border/55 pt-3">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-glow-cyan/35 bg-glow-cyan/10 px-3 py-1 text-xs font-medium text-glow-cyan">
                            <FiCalendar className="h-3.5 w-3.5" />
                            {achievement.displayDate}
                          </span>
                          <a
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-[#0A66C2]/40 bg-[#0A66C2]/10 px-3 py-1 text-xs font-medium text-[#0A66C2] transition-all duration-300 hover:border-[#0A66C2]/70 hover:bg-[#0A66C2]/20 hover:text-[#0A66C2]"
                          >
                            <SiLinkedin className="h-3.5 w-3.5" />
                            View Post
                            <FiArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-10 rounded-2xl border border-glow-cyan/25 bg-gradient-to-r from-glow-cyan/10 via-space-card/45 to-glow-blue/10 p-5 text-center backdrop-blur-lg transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <p className="text-silver-secondary">Want to see the complete journey and updates?</p>
            <a
              href={linkedInProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-glow-cyan/35 bg-space-card/70 px-4 py-2 text-sm font-medium text-silver-primary transition-all duration-300 hover:border-glow-cyan/60 hover:text-glow-cyan"
            >
              <SiLinkedin className="h-4 w-4 text-[#0A66C2]" />
              Visit LinkedIn Profile
              <FiArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
