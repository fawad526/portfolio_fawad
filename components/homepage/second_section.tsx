import styles from './second_section.module.css';
import full_pic from '../../public/full_pic.jpg';

export default function SecondSection() {
  return (
    <section className={styles['about'] + ' ' + 'profile-section'} id="section-2">
      <div>
        <h2 className={styles['about-heading']}>About Me</h2>
        <div className={styles['inner-section']}>
          <div className={styles['about-text']}>
            <div>
              <p>
                Hello! I&apos;m <strong>Muhammad Fawad Iqbal</strong>, a Full Stack Developer with a strong
                foundation in software engineering and a focus on building scalable, user-centric web
                applications.
              </p>
              <p className={styles['transition']}>
                I currently work as a Full Stack Developer at <strong>Digistromer (UAE Based)</strong>, where
                I build multi-tenant real estate platforms using <strong>Next.js</strong>,{' '}
                <strong>Node.js</strong>, and <strong>PostgreSQL</strong>, and manage deployments on{' '}
                <strong>AWS</strong> (EC2, S3, RDS).
              </p>
              <p>
                Previously, I worked at <strong>Liam Crest USA</strong> on healthcare and medical applications,
                focusing on component-based architecture, usability, and system scalability. I&apos;ve also
                completed MERN-focused internships at Texinity Technologies and Daxno Technologies.
              </p>
              <p>
                I hold a <strong>Bachelor&apos;s in Software Engineering</strong> from Air University Islamabad
                and enjoy solving real-world problems through clean, maintainable code and thoughtful UI/UX.
              </p>
              <p>Here are a few technologies I&apos;ve been working with recently:</p>
            </div>
            <ul className={styles['skills-list']}>
              <li>React native</li>
              <li>Next.js</li>
              <li>Tailwind css</li>
              <li>Redux</li>
              <li>React.js</li>
              <li>Typescript</li>
              <li>JavaScript</li>
              <li>AG-Grid</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>GitHub</li>
              <li>Django</li>
              <li>Figma</li>
              <li>AWS</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>MySQL</li>
              <li>Native Base</li>
              <li>PostgreSQL</li>
              <li>Shadcn UI</li>
              <li>Socket.io</li>
            </ul>
          </div>
          <div className={styles['about-pic']}>
            <div className={styles['wrapper']}>
              <div className={styles['image-wrapper']}>
                <div className={styles['img-div']}>
                  <img src={full_pic.src} alt="Muhammad Fawad Iqbal" />
                </div>
                <picture>
                  <img src={full_pic.src} alt="Headshot of Muhammad Fawad Iqbal" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
