import { useEffect, useRef, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

// Local devicon SVG imports (bundled via Vite — no CDN, no tracking blocks)
import icoJava       from 'devicon/icons/java/java-original.svg?url';
import icoPython     from 'devicon/icons/python/python-original.svg?url';
import icoC          from 'devicon/icons/c/c-original.svg?url';
import icoPostgres   from 'devicon/icons/postgresql/postgresql-original.svg?url';
import icoHtml       from 'devicon/icons/html5/html5-original.svg?url';
import icoCss        from 'devicon/icons/css3/css3-original.svg?url';
import icoJs         from 'devicon/icons/javascript/javascript-original.svg?url';
import icoReact      from 'devicon/icons/react/react-original.svg?url';
import icoTailwind   from 'devicon/icons/tailwindcss/tailwindcss-original.svg?url';
import icoNode       from 'devicon/icons/nodejs/nodejs-original.svg?url';
import icoExpress    from 'devicon/icons/express/express-original.svg?url';
import icoFlask      from 'devicon/icons/flask/flask-original.svg?url';
import icoMongo      from 'devicon/icons/mongodb/mongodb-original.svg?url';
import icoFirebase   from 'devicon/icons/firebase/firebase-plain.svg?url';
import icoNumpy      from 'devicon/icons/numpy/numpy-original.svg?url';
import icoPandas     from 'devicon/icons/pandas/pandas-original.svg?url';
import icoSklearn    from 'devicon/icons/scikitlearn/scikitlearn-original.svg?url';
import icoTf         from 'devicon/icons/tensorflow/tensorflow-original.svg?url';
import icoPytorch    from 'devicon/icons/pytorch/pytorch-original.svg?url';
import icoKeras      from 'devicon/icons/keras/keras-original.svg?url';
import icoOpencv     from 'devicon/icons/opencv/opencv-original.svg?url';
import icoPostman    from 'devicon/icons/postman/postman-original.svg?url';
import icoDocker     from 'devicon/icons/docker/docker-original.svg?url';
import icoVscode     from 'devicon/icons/vscode/vscode-original.svg?url';
import icoGithub     from 'devicon/icons/github/github-original.svg?url';
import icoJupyter    from 'devicon/icons/jupyter/jupyter-original.svg?url';
import icoFigma      from 'devicon/icons/figma/figma-original.svg?url';

const Skills = () => {
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

  // Flat list of all skills with categories
  const allSkills = [
    // Programming Languages
    { name: 'Java',        category: 'languages', iconSrc: icoJava },
    { name: 'Python',      category: 'languages', iconSrc: icoPython },
    { name: 'C',           category: 'languages', iconSrc: icoC },
    { name: 'SQL',         category: 'languages', iconSrc: icoPostgres },
    // Frontend Development
    { name: 'HTML',        category: 'frontend',  iconSrc: icoHtml },
    { name: 'CSS',         category: 'frontend',  iconSrc: icoCss },
    { name: 'JavaScript',  category: 'frontend',  iconSrc: icoJs },
    { name: 'React.js',    category: 'frontend',  iconSrc: icoReact },
    { name: 'Tailwind CSS',category: 'frontend',  iconSrc: icoTailwind },
    // Backend Development
    { name: 'Node.js',     category: 'backend',   iconSrc: icoNode },
    { name: 'Express.js',  category: 'backend',   iconSrc: icoExpress },
    { name: 'Flask',       category: 'backend',   iconSrc: icoFlask },
    // Database & APIs
    { name: 'MongoDB',     category: 'database',  iconSrc: icoMongo },
    { name: 'PostgreSQL',  category: 'database',  iconSrc: icoPostgres },
    { name: 'Firebase',    category: 'database',  iconSrc: icoFirebase },
    // Machine Learning & Deep Learning
    { name: 'NumPy',       category: 'ml',        iconSrc: icoNumpy },
    { name: 'Pandas',      category: 'ml',        iconSrc: icoPandas },
    { name: 'Scikit-learn',category: 'ml',        iconSrc: icoSklearn },
    { name: 'TensorFlow',  category: 'ml',        iconSrc: icoTf },
    { name: 'PyTorch',     category: 'ml',        iconSrc: icoPytorch },
    { name: 'Keras',       category: 'ml',        iconSrc: icoKeras },
    { name: 'OpenCV',      category: 'ml',        iconSrc: icoOpencv },
    // Tools
    { name: 'Postman',     category: 'tools',     iconSrc: icoPostman },
    { name: 'Docker',      category: 'tools',     iconSrc: icoDocker },
    { name: 'VS Code',     category: 'tools',     iconSrc: icoVscode },
    { name: 'Git & GitHub',category: 'tools',     iconSrc: icoGithub },
    { name: 'Jupyter',     category: 'tools',     iconSrc: icoJupyter },
    { name: 'Figma',       category: 'tools',     iconSrc: icoFigma },
  ];

  const marqueeSkills = useMemo(() => {
    return [...allSkills, ...allSkills];
  }, [allSkills]);

  return (
    <>
      <Helmet>
        <title>Skills & Technologies | Sanjay N</title>
        <meta
          name="description"
          content="Explore Sanjay N's technical skills in Full Stack Development, AI/ML, databases, and modern technologies like React, Python, Java, and more."
        />
        <meta property="og:title" content="Skills & Technologies | Sanjay N" />
        <meta property="og:description" content="Explore Sanjay N's technical skills in Full Stack Development, AI/ML, databases, and modern technologies like React, Python, Java, and more." />
        <meta property="og:url" content="https://sanjayn.me/#skills" />
        <meta property="og:type" content="website" />
      </Helmet>
    <section id="skills" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-glow-cyan/10 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-glow-cyan/40 text-glow-cyan bg-glow-cyan/10 mb-4">
            Core Toolkit
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
            Skills & <span className="text-glow-cyan">Technologies</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="text-silver-secondary text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            My compact stack of tools, frameworks, and platforms I use to ship fast and smart.
            <span className="text-glow-cyan font-medium"> Icon motion loop</span>
          </p>
        </div>

        <div className={`mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-space-card/35 backdrop-blur-sm py-3 md:py-4">
            <div className="marquee-track">
              {marqueeSkills.map((skill, idx) => (
                <span
                  key={`top-${skill.name}-${idx}`}
                  className="inline-flex flex-col items-center justify-center gap-1.5 px-3 md:px-3.5 py-2.5 mx-2 rounded-xl border border-glow-cyan/35 bg-space-deep/50"
                  title={skill.name}
                  aria-label={skill.name}
                >
                  <img
                    src={skill.iconSrc}
                    alt={skill.name}
                    className="w-7 h-7 md:w-8 md:h-8"
                    loading="eager"
                  />
                  <span className="text-[11px] md:text-xs font-medium text-silver-secondary leading-none whitespace-nowrap">
                    {skill.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-space-card/35 backdrop-blur-sm py-3 md:py-4">
            <div className="marquee-track-reverse">
              {marqueeSkills.map((skill, idx) => (
                <span
                  key={`bottom-${skill.name}-${idx}`}
                  className="inline-flex flex-col items-center justify-center gap-1.5 px-3 md:px-3.5 py-2.5 mx-2 rounded-xl border border-glow-blue/35 bg-space-deep/50"
                  title={skill.name}
                  aria-label={skill.name}
                >
                  <img
                    src={skill.iconSrc}
                    alt={skill.name}
                    className="w-7 h-7 md:w-8 md:h-8"
                    loading="eager"
                  />
                  <span className="text-[11px] md:text-xs font-medium text-silver-secondary leading-none whitespace-nowrap">
                    {skill.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-6 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-space-card/35 backdrop-blur-sm py-3 md:py-4">
            <div className="marquee-track-slow">
              {marqueeSkills.map((skill, idx) => (
                <span
                  key={`third-${skill.name}-${idx}`}
                  className="inline-flex flex-col items-center justify-center gap-1.5 px-3 md:px-3.5 py-2.5 mx-2 rounded-xl border border-glow-cyan/35 bg-space-deep/50"
                  title={skill.name}
                  aria-label={skill.name}
                >
                  <img
                    src={skill.iconSrc}
                    alt={skill.name}
                    className="w-7 h-7 md:w-8 md:h-8"
                    loading="eager"
                  />
                  <span className="text-[11px] md:text-xs font-medium text-silver-secondary leading-none whitespace-nowrap">
                    {skill.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .marquee-track {
          width: max-content;
          display: flex;
          align-items: center;
          animation: marqueeLeft 24s linear infinite;
        }

        .marquee-track-reverse {
          width: max-content;
          display: flex;
          align-items: center;
          animation: marqueeRight 26s linear infinite;
        }

        .marquee-track-slow {
          width: max-content;
          display: flex;
          align-items: center;
          animation: marqueeLeft 30s linear infinite;
        }
      `}</style>
    </section>
    </>
  );
};

export default Skills;
