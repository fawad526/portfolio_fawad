import styles from './third_section.module.css';

const projects = [
  {
    name: 'SellAnyProperty',
    image: '/sellanyproperty.png',
    url: 'https://github.com/fawad526',
    description:
      'Multi-tenant real-estate platform empowering multiple clients with property listings, tenant-based data isolation, and dynamic content rendering. Deployed end-to-end on AWS for high availability.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'AWS'],
    accent: 'cyan',
  },
  {
    name: 'NCRP',
    subtitle: 'Radiation & Protection',
    image: '/ncrp.png',
    url: 'https://github.com/fawad526',
    description:
      'Government-tier platform for the National Council of Radiation & Protection with role-based access control, streamlined user management, and admin dashboards for oversight & compliance.',
    stack: ['React', 'Node.js', 'MongoDB', 'RBAC'],
    accent: 'violet',
  },
  {
    name: 'CICIL',
    subtitle: 'Healthcare Accessibility',
    image: '/cicil.png',
    url: 'https://github.com/fawad526',
    description:
      'Empowering people with disabilities through advanced analytics dashboards, 3D data visualization with Three.js, and accessibility-first interfaces for informed healthcare decisions.',
    stack: ['React', 'Three.js', 'Styled-Components'],
    accent: 'pink',
  },
  {
    name: 'Kareer Konnect',
    subtitle: 'FYP × 10Pearls',
    image: '/kareerkonnect.png',
    url: 'https://github.com/fawad526',
    description:
      'MERN-stack job portal connecting employers, jobseekers, students, and researchers — with advanced filtering and tailored matchmaking algorithms.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    accent: 'cyan',
  },
];

export function ThirdSection() {
  return (
    <section className={`profile-section ${styles['projects-section']}`} id="section-3">
      <div className={styles['container']}>
        <div className={styles['header']}>
          <span className={styles['section-tag']}>
            <span className={styles['tag-num']}>02.</span> Projects
          </span>
          <h2 className={styles['section-title']}>
            Things I&apos;ve <span className={styles['gradient-text']}>built</span>.
          </h2>
          <p className={styles['section-subtitle']}>
            From multi-tenant SaaS to government-tier compliance systems — a selection of work shipped end-to-end.
          </p>
        </div>

        <div className={styles['grid']}>
          {projects.map((project) => (
            <article
              key={project.name}
              className={`${styles['card']} ${styles[`accent-${project.accent}`]}`}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['card-media']}
                aria-label={`${project.name} on GitHub`}
              >
                <img src={project.image} alt={project.name} className={styles['card-image']} />
                <div className={styles['card-media-overlay']} />
                <div className={styles['card-media-corner']}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>
              </a>

              <div className={styles['card-body']}>
                <div className={styles['card-head']}>
                  <div>
                    <h3 className={styles['card-title']}>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.name}
                      </a>
                    </h3>
                    {project.subtitle && (
                      <p className={styles['card-subtitle']}>{project.subtitle}</p>
                    )}
                  </div>
                  <div className={styles['card-links']}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className={styles['icon-btn']}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className={styles['card-desc']}>{project.description}</p>
                <ul className={styles['card-stack']}>
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className={styles['cta-row']}>
          <a
            href="https://github.com/fawad526"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['cta-link']}
          >
            <span>See more on GitHub</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
