import styles from './first_section.module.css';
import { useEffect, useRef, useState } from 'react';

const techStack = [
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Redux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Prisma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
];

export default function FirstSection() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const scene = sceneRef.current;
      if (!scene) return;
      const rect = scene.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      setTilt({ x: dx * 16, y: dy * 16 });
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <section id="section-1" className={`profile-section ${styles['hero']}`}>
      <div className={styles['bg-glow']} aria-hidden="true" />
      <div className={styles['bg-glow-2']} aria-hidden="true" />

      <div className={styles['hero-grid']}>
        <div className={styles['hero-content']}>
          <span className={styles['eyebrow']}>
            <span className={styles['eyebrow-dot']} />
            Available for new opportunities
          </span>

          <h1 className={styles['hero-title']}>
            <span className={styles['greeting']}>Hi, I&apos;m</span>
            <span className={styles['name-gradient']}>Fawad Iqbal.</span>
            <span className={styles['tagline']}>I build <span className={styles['accent-word']}>scalable</span> products for the web.</span>
          </h1>

          <p className={styles['hero-desc']}>
            Full Stack Developer crafting multi-tenant SaaS platforms with{' '}
            <span className={styles['highlight']}>Next.js</span>,{' '}
            <span className={styles['highlight']}>Node.js</span>, and{' '}
            <span className={styles['highlight']}>AWS</span>. Currently leading real-estate
            engineering at <span className={styles['highlight']}>Digistromer (UAE)</span>.
          </p>

          <div className={styles['cta-row']}>
            <a href="#section-3" className={styles['cta-primary']}>
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#section-5" className={styles['cta-secondary']}>
              Get in touch
            </a>
          </div>

          <div className={styles['stats-row']}>
            <div className={styles['stat']}>
              <span className={styles['stat-number']}>3+</span>
              <span className={styles['stat-label']}>Years Exp.</span>
            </div>
            <div className={styles['stat-divider']} />
            <div className={styles['stat']}>
              <span className={styles['stat-number']}>10+</span>
              <span className={styles['stat-label']}>Projects</span>
            </div>
            <div className={styles['stat-divider']} />
            <div className={styles['stat']}>
              <span className={styles['stat-number']}>4</span>
              <span className={styles['stat-label']}>Companies</span>
            </div>
          </div>
        </div>

        <div
          ref={sceneRef}
          className={styles['hero-scene']}
          style={{
            transform: `perspective(1200px) rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)`,
          }}
        >
          <div className={styles['orbit-ring']} />
          <div className={styles['orbit-ring-2']} />
          <div className={styles['orbit-ring-3']} />

          <div className={styles['core']}>
            <div className={styles['core-inner']}>
              <span className={styles['core-text']}>{'<'}/{'>'}</span>
            </div>
            <div className={styles['core-glow']} />
          </div>

          {techStack.map((tech, i) => {
            const total = techStack.length;
            const angle = (360 / total) * i;
            return (
              <div
                key={tech.name}
                className={styles['tech-orb']}
                style={{
                  transform: `rotate(${angle}deg) translate(180px) rotate(-${angle}deg)`,
                  animationDelay: `${i * 0.15}s`,
                }}
                title={tech.name}
              >
                <img src={tech.src} alt={tech.name} loading="lazy" />
              </div>
            );
          })}
        </div>
      </div>

      <a href="#section-2" className={styles['scroll-cue']} aria-label="Scroll down">
        <span className={styles['scroll-mouse']}>
          <span className={styles['scroll-wheel']} />
        </span>
        <span className={styles['scroll-text']}>Scroll</span>
      </a>
    </section>
  );
}
