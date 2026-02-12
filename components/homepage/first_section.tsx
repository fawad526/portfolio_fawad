import styles from './first_section.module.css';
import full_pic from '../../public/fullpic2.png';

export default function FirstSection() {
  return (
    <section id="section-1">
      <h1 className={styles['heading']}>Muhammad Fawad Iqbal</h1>
      <div className={`profile-section ${styles['first-section']}`}>
        <div className={styles['left-side']}>
          <div className={styles['icons-container']}>
            <div className={styles['icon-container']}>
              <img
                alt="React"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
            </div>
            <div className={styles['icon-container']}>
              <img
                alt="Next.js"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
              />
            </div>
            <div className={styles['icon-container']}>
              <img
                alt="TypeScript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
            </div>
          </div>
          <div className={styles['icons-container']}>
            <div className={styles['icon-container']}>
              <img
                alt="Node.js"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />
            </div>
            <div className={styles['icon-container']}>
              <img
                alt="MongoDB"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
              />
            </div>
            <div className={styles['icon-container']}>
              <img
                alt="PostgreSQL"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              />
            </div>
          </div>
        </div>
        <img
          src={full_pic.src}
          alt="Profile of Muhammad Fawad Iqbal"
          className={styles['full-profile-image']}
          data-testid="full_profile_image"
        />
      </div>
    </section>
  );
}
