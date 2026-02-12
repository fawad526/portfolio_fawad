import styles from './third_section.module.css';

export function ThirdSection() {
  const projects = [
    {
      name: 'SellAnyProperty',
      url: 'https://github.com/fawad526', 
       image: '/sellanyproperty.png',// replace with repo or live link if available
      description:
        'Multi-tenant real estate platform built with Next.js, Node.js, and PostgreSQL, featuring secure authentication, tenant-based data isolation, and dynamic content rendering. Deployed on AWS using EC2, RDS, and S3 for high availability and scalability.',
    },
    {
      name: 'NCRP (National Council of Radiation and Protection)',
      url: 'https://github.com/fawad526',
       image: '/ncrp.png',
      description:
        'Enterprise-grade system with role-based access control, streamlined user management, and efficient role creation and assignment to enhance security and operational workflows.',
    },
    {
      name: 'CICIL',
      url: 'https://github.com/fawad526',
       image: '/cicil.png',
      description:
        'Healthcare platform empowering people with disabilities using advanced analytics, dynamic data visualization, and dashboards built with React.js, Three.js, and styled-components.',
    },
    {
      name: 'Kareer Konnect (MERN Job Portal)',
        image: '/kareerkonnect.png',
      url: 'https://github.com/fawad526',
      description:
        'MERN-based job portal connecting employers, jobseekers, students, and researchers with advanced filtering, profile customization, and matching algorithms. Built as an FYP with 10Pearls Accelerator.',
    },
  ];

  return (
    <section className={styles['projects'] + ' ' + "profile-section"} id="section-3">
      <h2 className={styles['section-heading']}>Some Things I&#8217;ve Built</h2>
      {/* <h2 className={styles["numbered-heading"]} data-sr-id="3" >
        Some Things I&#8217;ve Built
      </h2> */}
      <ul className={styles['styled_projects_grid']}>
        {projects.map((project) => (
          <li key={project.name} className={styles['project'] + ' ' + styles['project_list']}>
            <div className={styles['project-content']}>
              <div>
                <p className={styles['project-overline']}>Featured Project</p>
                <h3 className={styles['project-title']}>
                  <a href={project.url} rel="noopener noreferrer" target="_blank">
                    {project.name}
                  </a>
                </h3>
                <div className={styles['project-description']}>
                  <p>{project.description}</p>
                </div>
                <div className={styles['project-links']}>
                  <a
                    href={project.url}
                    aria-label="GitHub Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles['feather'] + ' ' + styles['feather-github']}
                    >
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles['project-image']}>
              <div
                data-gatsby-image-wrapper=""
                className={
                  styles['gatsby-image-wrapper'] +
                  ' ' +
                  styles['gatsby-image-wrapper-constrained'] +
                  ' ' +
                  styles['img']
                }
              >
                <div>
                  <img
                    alt=""
                    role="presentation"
                    aria-hidden="true"
                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='438' width='700' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                  />
                </div>
                <img
                  aria-hidden="true"
                  data-placeholder-image=""
                  decoding="async"
                  src={project.image}
                  alt={project.name}
                  className={styles['project-image-side-style']}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
