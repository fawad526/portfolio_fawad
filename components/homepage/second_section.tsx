import styles from './second_section.module.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: 'M3 12h18M3 6h18M3 18h18',
    skills: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Material UI', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: 'M4 7h16M4 12h16M4 17h10',
    skills: ['Node.js', 'Express', '.NET', 'REST APIs', 'GraphQL', 'Socket.io', 'JWT Auth'],
  },
  {
    title: 'Database',
    icon: 'M12 3C6 3 4 6 4 8s2 5 8 5 8-3 8-5-2-5-8-5zM4 8v8c0 2 2 5 8 5s8-3 8-5V8',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'M6 19a5 5 0 010-10 7 7 0 0113-2 5 5 0 01-2 9.5',
    skills: ['AWS (EC2 · RDS · S3)', 'Vercel', 'Docker', 'CI/CD', 'Linux', 'Nginx'],
  },
];

export default function SecondSection() {
  return (
    <section className={`profile-section ${styles['about']}`} id="section-2">
      <div className={styles['container']}>
        <div className={styles['header']}>
          <span className={styles['section-tag']}>
            <span className={styles['tag-num']}>01.</span> About
          </span>
          <h2 className={styles['section-title']}>
            Engineering software that <span className={styles['gradient-text']}>scales</span>.
          </h2>
        </div>

        <div className={styles['grid']}>
          <div className={styles['bio-card']}>
            <div className={styles['bio-text']}>
              <p>
                I&apos;m a <strong>Full Stack Developer</strong> based in Islamabad with a strong
                foundation in software engineering and a focus on building production-grade web
                applications end-to-end.
              </p>
              <p>
                I&apos;m currently leading development at <strong>Digistromer (UAE)</strong>, where I
                architect and ship a multi-tenant real-estate platform using{' '}
                <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>PostgreSQL</strong> —
                deployed on AWS (EC2, RDS, S3) with hands-on ownership of the entire stack.
              </p>
              <p>
                Before that, I worked at <strong>Liam Crest USA</strong> on medical applications,
                and completed back-to-back MERN internships at Texinity &amp; Daxno. I hold a{' '}
                <strong>BS in Software Engineering</strong> from Air University Islamabad.
              </p>
              <p className={styles['quote']}>
                &ldquo;Building scalable solutions, one commit at a time.&rdquo;
              </p>
            </div>

            <div className={styles['stats-grid']}>
              <div className={styles['stat-box']}>
                <div className={styles['stat-num']}>3+</div>
                <div className={styles['stat-text']}>Years of professional experience</div>
              </div>
              <div className={styles['stat-box']}>
                <div className={styles['stat-num']}>10+</div>
                <div className={styles['stat-text']}>Production projects shipped</div>
              </div>
              <div className={styles['stat-box']}>
                <div className={styles['stat-num']}>3</div>
                <div className={styles['stat-text']}>Countries (PK · UAE · USA)</div>
              </div>
              <div className={styles['stat-box']}>
                <div className={styles['stat-num']}>∞</div>
                <div className={styles['stat-text']}>Cups of coffee ☕</div>
              </div>
            </div>
          </div>

          <div className={styles['skills-wrap']}>
            {skillCategories.map((cat) => (
              <div key={cat.title} className={styles['skill-card']}>
                <div className={styles['skill-card-header']}>
                  <span className={styles['skill-icon']}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={cat.icon} />
                    </svg>
                  </span>
                  <h3 className={styles['skill-title']}>{cat.title}</h3>
                </div>
                <ul className={styles['skill-tags']}>
                  {cat.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
