import styles from './work_experience_section.module.css';

export default function WorkExperienceSection() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Digistromer (UAE Based)',
      period: 'Mar 2024 - Present',
      description: 'Building multi-tenant real estate platforms using Next.js, Node.js, and PostgreSQL. Managing deployments on AWS (EC2, S3, RDS) and implementing scalable solutions for property management systems.',
    },
    {
      title: 'Associate Full Stack Developer',
      company: 'Liam Crest USA',
      period: 'Mar 2023 - Mar 2024',
      description: 'Developed healthcare and medical applications focusing on component-based architecture, usability, and system scalability. Worked with React.js, Node.js, and MongoDB to build robust healthcare solutions.',
    },
    {
      title: 'MERN Stack Developer Intern',
      company: 'Texinity Technologies',
      period: 'Aug 2022 - Sep 2022',
      description: 'Completed intensive MERN stack training and worked on real-world projects. Gained hands-on experience with React.js, Node.js, Express.js, and MongoDB while contributing to client projects.',
    },
    {
      title: 'MERN Stack Developer Intern',
      company: 'Daxno Technologies',
      period: 'Jul 2022 - Aug 2022',
      description: 'Learned and applied MERN stack technologies in a professional environment. Developed web applications and APIs while collaborating with senior developers on various projects.',
    },
  ];

  return (
    <section className={styles['work-experience'] + ' ' + 'profile-section'} id="section-4">
      <div>
        <h2 className={styles['section-heading']}>Work experience</h2>
        <div className={styles['experience-list']}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles['experience-item']}>
              <div className={styles['experience-header']}>
                <h3 className={styles['experience-title']}>{exp.title}</h3>
                <div className={styles['experience-meta']}>
                  <span className={styles['experience-company']}>{exp.company}</span>
                  <span className={styles['experience-separator']}>•</span>
                  <span className={styles['experience-period']}>{exp.period}</span>
                </div>
              </div>
              <p className={styles['experience-description']}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
