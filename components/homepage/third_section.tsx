import styles from './third_section.module.css';

const projects = [
  {
    name: 'SellAnyProperty',
    image: '/sellanyproperty.png',
    url: 'https://github.com/fawad526',
    description:
      'A multi-tenant real estate platform empowering multiple clients with property listings, tenant-based data isolation, and dynamic content rendering. Deployed end-to-end on AWS (EC2 · RDS · S3) for high availability and scale.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'AWS', 'TailwindCSS'],
    featured: true,
  },
  {
    name: 'NCRP — Radiation & Protection',
    image: '/ncrp.png',
    url: 'https://github.com/fawad526',
    description:
      'Government-tier platform for the National Council of Radiation & Protection with role-based access control, streamlined user management, and admin dashboards for oversight and compliance.',
    stack: ['React', 'Node.js', 'RBAC', 'MongoDB', 'Express'],
    featured: true,
  },
  {
    name: 'CICIL — Healthcare Accessibility',
    image: '/cicil.png',
    url: 'https://github.com/fawad526',
    description:
      'Empowering people with disabilities through advanced analytics dashboards, 3D data visualization with Three.js, and accessibility-first interfaces that help healthcare stakeholders make informed decisions.',
    stack: ['React.js', 'Three.js', 'Styled-Components', 'D3'],
    featured: true,
  },
  {
    name: 'Kareer Konnect',
    image: '/kareerkonnect.png',
    url: 'https://github.com/fawad526',
    description:
      'MERN-stack job portal (FYP × 10Pearls Accelerator) connecting employers, jobseekers, students, and researchers — with advanced filtering and tailored matchmaking algorithms.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    featured: true,
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
            Some things I&apos;ve <span className={styles['gradient-text']}>built</span>.
          </h2>
          <p className={styles['section-subtitle']}>
            From multi-tenant SaaS to government-tier compliance systems — a selection of work I&apos;ve shipped end-to-end.
          </p>
        </div>

        <ul className={styles['projects-list']}>
          {projects.map((project, idx) => (
            <li key={project.name} className={styles['project']}>
              <div className={styles['project-image-wrap']}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['image-link']}
                >
                  <div className={styles['image-frame']}>
                    <img
                      src={project.image}
                      alt={project.name}
                      className={styles['project-image']}
                    />
                    <div className={styles['image-overlay']} />
                  </div>
                </a>
              </div>

              <div className={styles['project-content']}>
                <p className={styles['project-overline']}>
                  <span className={styles['index']}>0{idx + 1}</span> Featured Project
                </p>
                <h3 className={styles['project-title']}>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                </h3>
                <div className={styles['project-description']}>
                  <p>{project.description}</p>
                </div>
                <ul className={styles['project-stack']}>
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className={styles['project-links']}>
                  <a
                    href={project.url}
                    aria-label={`${project.name} GitHub`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['link-icon']}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                  <a
                    href={project.url}
                    aria-label={`${project.name} live`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['link-icon']}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
