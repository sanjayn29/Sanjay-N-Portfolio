import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';

// Image imports (path: src/assert/image/)
import April2024Img from '../../assert/image/RRC.jpg';
import Sept2024Img from '../../assert/image/AI-Code.jpg';
import Nov2024Img from '../../assert/image/SCD-Code.jpg';
import Mar2025Img from '../../assert/image/KEC-Hack.jpg';
import Apr2025Img from '../../assert/image/BYTS-Hack.jpg';
import Sept2025IbmImg from '../../assert/image/IBM-Hack.jpg';
import Sept2025Img from '../../assert/image/SIH-KEC.jpg';
import Dec2025Img from '../../assert/image/SIH-Final.jpg';

const Achievements = () => {
  const sectionRef = useRef(null);

  const linkedInProfile = 'https://www.linkedin.com/in/sanjayn29';

  const achievements = [
    {
      title: 'Red Ribbon Club – Slogan Writing Competition (2nd Prize)',
      organization: 'Red Ribbon Club (RRC), Kongu Engineering College',
      description: 'Secured Second Prize in Writing Competition to Focused on promoting awareness and social responsibility through impactful messaging.',
      image: April2024Img,
      date: 'Apr 2024',
      fullDate: '2024-04-13', // For sorting
      link: "https://www.linkedin.com/posts/sanjayn29_achievement-sloganwriting-redribbionclub-activity-7210675100243677185-r-7Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk",
    },
    {
      title: 'Coding Quest – NEWELL’S 2024 (2nd Prize)',
      organization: 'Department of Artificial Intelligence, Kongu Engineering College',
      description: 'Secured Second Prize in Codeing Quest a an intra-department symposium. Demonstrated strong problem-solving and logical thinking.',
      image: Sept2024Img,
      date: 'Sep 2024',
      fullDate: '2024-09-11',
      link: "https://www.linkedin.com/posts/sanjayn29_codingchallenge-ai-symposium-activity-7247119094980722688-MEym?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk",
    },
    {
      title: 'Code Clash – SDC Fest 2024 (3rd Prize)',
      organization: 'Self Development Club (SDC), Kongu Engineering College',
      description: 'Secured Third Prize in Code Clash, a technical coding competition during SDC Fest 2024. Demonstrated strong logical thinking.',
      image: Nov2024Img,
      date: 'Nov 2024',
      fullDate: '2024-11-09',
      link: "https://www.linkedin.com/posts/sanjayn29_codingcontest-sdcfest2024-codeclash-activity-7261320712584318976-y9jL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk",
    },
    {
      title: "KEC Hackathon 2025 – Software Edition (Runner up)",
      organization: 'Kongu Engineering College',
      description: 'State-level 30-hour hackathon organized by Innovation & Entrepreneurship Forum. Developed an AgriTech solution with my team.',
      image: Mar2025Img,
      date: 'Mar 2025',
      fullDate: '2025-03-10',
      link: "https://www.linkedin.com/posts/sanjayn29_kec-kechackathon2025-hackathon-activity-7306903277680357377-FCnX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk",
    },
    {
      title: 'BYTS India Hackathon (BIH) – Best Innovation',
      organization: 'BYTS , Kongu Engineering College',
      description: 'Secured the Best Innovation Award in BYTS India Hackathon – Artificial Intelligence Edition. Developed an Fintech AI-based solution .',
      image: Apr2025Img,
      date: 'Apr 2025',
      fullDate: '2025-04-11',
      link: "https://www.linkedin.com/posts/sandeepmareeswaran_hackathon-innovation-mentorship-ugcPost-7318833641831153664-6UnE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk",
    },
    {
      title: 'Cognitive X Gen AI Hackathon – 1st Prize',
      organization: 'Kongu Engineering College',
      description: 'Secured 1st Prize in Gen AI Hackathon collaboration with IBM and SmartBridge . Developed an AI-powered finance application.',
      image: Sept2025IbmImg,
      date: 'Sep 2025',
      fullDate: '2025-09-16', // Slight offset for sorting if same month
      link: "https://www.linkedin.com/posts/sanjayn29_genai-hackathon-ibm-activity-7374820219371982848-25jS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk",
    },
    
    {
      title: 'SIH Internal Hackathon 2025 – 1st Prize',
      organization: 'Kongu Engineering College',
      description: 'Secured 1st Prize in the SIH Internal Hackathon under the Software category. Developed an AI-powered solution for problem ID: SIH25073.',
      image: Sept2025Img,
      date: 'Sep 2025',
      fullDate: '2025-09-20',
      link: "https://www.linkedin.com/posts/sanjayn29_smartindiahackathon-teamwork-innovation-activity-7376306740541177857-KX6R?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk",
    },
    
    {
      title: 'Smart India Hackathon 2025 – Hardware Edition (Grand Finale)',
      organization: 'Ministry of Education, Government of India',
      description: 'Participated in the Smart India Hackathon Grand Finale. Contributed to hardware solution and gaining national-level experience.',
      image: Dec2025Img,
      date: 'Dec 2025',
      fullDate: '2025-12-08', // Specific dates from original
      link: "https://www.linkedin.com/posts/sanjayn29_sih2025-smartindiahackathon-hackathonexperience-activity-7408162536996597760-aPqo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6uCn0BhkN04Y115I8zfMXgfhIum5R1PQk",
    },
  ];

  // Group achievements by year
  const groupByYear = achievements.reduce((groups, achievement) => {
    const year = achievement.fullDate.split('-')[0];
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(achievement);
    return groups;
  }, {});

  // Sort years descending (2025 first, then 2024)
  const sortedYears = Object.keys(groupByYear).sort((a, b) => b - a);

  // Sort achievements within each year by fullDate descending
  sortedYears.forEach(year => {
    groupByYear[year].sort((a, b) => new Date(b.fullDate) - new Date(a.fullDate));
  });

  return (
    <>
      <Helmet>
        <title>Achievements & Awards | Sanjay N</title>
        <meta
          name="description"
          content="View Sanjay N's achievements including hackathon wins, coding competition prizes, and recognition in AI, software development, and innovation."
        />
        <meta property="og:title" content="Achievements & Awards | Sanjay N" />
        <meta property="og:description" content="View Sanjay N's achievements including hackathon wins, coding competition prizes, and recognition in AI, software development, and innovation." />
        <meta property="og:url" content="https://sanjayn.me/#achievements" />
        <meta property="og:type" content="website" />
      </Helmet>
    <section id="achievements" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Section Header */}
<div className="text-center mb-12">
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-glow-cyan/40 text-glow-cyan bg-glow-cyan/10 mb-4">
    Milestone Highlights
  </span>
  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
    Key <span className="text-glow-cyan">Achievements</span>
  </h2>
  <div className="section-divider max-w-xs mx-auto" />
  <p className="text-silver-secondary text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
    Discover my standout accomplishments in hackathons , coding competitions and innovation challenges.
  </p>
</div>

        {/* Achievements by Year - Rows and Columns */}
        <div className="space-y-12">
          {sortedYears.map((year, yearIndex) => (
            <div key={year} className="space-y-6">
              {/* Year Header */}
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-glow-cyan rounded-full"></div>
                <h3 className="font-display text-2xl font-bold text-silver-primary">
                  {year}
                </h3>
              </div>

              {/* Grid for this year */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupByYear[year].map((achievement, index) => (
                  <div
                    key={index}
                    className="group glass-card hover-glow-cyan"
                  >
                    {/* Full Image */}
                    <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                      {achievement.image ? (
                        <img
                          src={achievement.image}
                          alt={`${achievement.title} proof`}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                          <div className="text-6xl opacity-75">🏆</div>
                        </div>
                      )}
                      {/* Semi-transparent overlay for text readability */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      {/* Title */}
                      <h4 className="font-display text-lg font-semibold text-silver-primary mb-2 group-hover:text-glow-cyan transition-colors duration-300 line-clamp-2">
                        {achievement.title}
                      </h4>

                      {/* Organization */}
                      <p className="text-glow-cyan text-sm font-medium mb-2">
                        {achievement.organization}
                      </p>

                      {/* Description */}
                      <p className="text-silver-muted text-sm leading-relaxed mb-3 line-clamp-3">
                        {achievement.description}
                      </p>

                      {/* Footer: Date and Link */}
                      <div className="flex justify-between items-center pt-2 border-t border-gray-600">
                        <span className="text-xs opacity-75">{achievement.date}</span>
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-glow-cyan text-xs hover:text-silver-primary transition-colors duration-300 flex items-center gap-1"
                        >
                          <span>LinkedIn</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.02-1.57.27-2.12a2.89 2.89 0 0 1 2.24-1.08c.78 0 1.62.42 1.62 1.88v4.25h2.79v-5.5c0-2.48-1.4-3.84-3.26-4.08a3.5 3.5 0 0 0-3.57 3.47v4.15h-2.79V9.18c0-.53 0-1.05.07-1.57s.23-1 .5-1.37.56-.7 1-.87.88-.32 1.54-.32c1.25 0 2.08.74 2.08 1.82v5.42h-2.79z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Achievements;
