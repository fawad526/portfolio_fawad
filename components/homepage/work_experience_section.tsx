import styles from './work_experience_section.module.css';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Digistromer',
    location: 'UAE · Remote',
    period: 'Mar 2024 — Present',
    accent: 'present',
    highlights: [
      'Spearheaded development of a multi-tenant real-estate platform — owning frontend, backend, DB, and deployment.',
      'Architected infrastructure on AWS (EC2, RDS, S3) and managed CI/CD pipelines for production reliability.',
      'Built the stack on Next.js + Node.js + PostgreSQL with a focus on scalability and tenant-based isolation.',
      'Collaborated with the dev team to ship features on schedule with high code quality.',
    ],
  },
  {
    title: 'Associate Full Stack Developer',
    company: 'Liam Crest',
    location: 'USA · Remote',
    period: 'Mar 2023 — Mar 2024',
    accent: 'past',
    highlights: [
      'Contributed to medical applications with component-based architectures and a focus on UX.',
      'Partnered with designers and senior leadership to optimize product flows and interfaces.',
      'Integrated emerging technologies into product architecture, prioritizing scalability and maintainability.',
    ],
  },
  {
    title: 'MERN Stack Developer — Intern',
    company: 'Texinity Technologies',
    location: 'Islamabad, PK',
    period: 'Aug — Sep 2022',
    accent: 'past',
    highlights: [
      'Built backend services with Node.js & Express, implementing RESTful APIs with MongoDB integration.',
      'Designed wireframes and shipped UI components using React, Material UI, and Bootstrap 5.',
      'Collaborated cross-functionally to align deliverables with business objectives and compliance standards.',
    ],
  },
  {
    title: 'MERN Stack Developer — Intern',
    company: 'Daxno Technologies',
    location: 'Islamabad, PK',
    period: 'Jul — Aug 2022',
    accent: 'past',
    highlights: [
      'Built and maintained backend functionality with Node.js, Express, and MongoDB.',
      'Developed responsive UI screens in React with modern CSS frameworks.',
      'Gained early insight into industry workflows and professional problem-solving.',
    ],
  },
];

export default function WorkExperienceSection() {
  return (
    <section className={`profile-section ${styles['experience-section']}`} id="section-4">
      <div className={styles['container']}>
        <div className={styles['header']}>
          <span className={styles['section-tag']}>
            <span className={styles['tag-num']}>03.</span> Experience
          </span>
          <h2 className={styles['section-title']}>
            Where I&apos;ve <span className={styles['gradient-text']}>worked</span>.
          </h2>
        </div>

        <div className={styles['timeline']}>
          <div className={styles['timeline-line']} />
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles['timeline-item']}>
              <div className={`${styles['timeline-dot']} ${exp.accent === 'present' ? styles['dot-active'] : ''}`}>
                <span className={styles['dot-pulse']} />
              </div>
              <div className={styles['timeline-card']}>
                <div className={styles['card-header']}>
                  <div>
                    <h3 className={styles['exp-title']}>
                      {exp.title}{' '}
                      <span className={styles['at']}>@ </span>
                      <span className={styles['company']}>{exp.company}</span>
                    </h3>
                    <span className={styles['location']}>{exp.location}</span>
                  </div>
                  <span className={`${styles['period']} ${exp.accent === 'present' ? styles['period-active'] : ''}`}>
                    {exp.period}
                  </span>
                </div>
                <ul className={styles['highlights']}>
                  {exp.highlights.map((h, hi) => (
                    <li key={hi}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles['education-card']}>
          <div className={styles['edu-icon']}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div>
            <p className={styles['edu-label']}>Education</p>
            <h4 className={styles['edu-title']}>
              BS Software Engineering — Air University Islamabad
            </h4>
            <p className={styles['edu-period']}>2019 — 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
}
