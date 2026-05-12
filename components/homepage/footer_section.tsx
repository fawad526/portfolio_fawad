import styles from './footer_section.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function FooterSection() {
  return (
    <section className={`profile-section ${styles['contact']}`} id="section-5">
      <div className={styles['container']}>
        <span className={styles['section-tag']}>
          <span className={styles['tag-num']}>04.</span> Contact
        </span>

        <h2 className={styles['title']}>
          Let&apos;s build something <span className={styles['gradient-text']}>great</span> together.
        </h2>

        <p className={styles['desc']}>
          My inbox is always open — whether it&apos;s a freelance project, collaboration,
          or just a chat about scalable web architectures, I&apos;ll get back to you.
        </p>

        <div className={styles['contact-grid']}>
          <a href="mailto:fawadiqbal274@gmail.com" className={styles['contact-card']}>
            <span className={styles['contact-icon']}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <div>
              <span className={styles['contact-label']}>Email</span>
              <span className={styles['contact-value']}>fawadiqbal274@gmail.com</span>
            </div>
          </a>
          <a href="tel:+923709720033" className={styles['contact-card']}>
            <span className={styles['contact-icon']}>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <div>
              <span className={styles['contact-label']}>Phone</span>
              <span className={styles['contact-value']}>+92 370 9720033</span>
            </div>
          </a>
          <div className={styles['contact-card']}>
            <span className={styles['contact-icon']}>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <div>
              <span className={styles['contact-label']}>Location</span>
              <span className={styles['contact-value']}>Islamabad, Pakistan</span>
            </div>
          </div>
        </div>

        <a
          href="mailto:fawadiqbal274@gmail.com"
          className={styles['cta-button']}
        >
          <span>Say Hello</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>

        <div className={styles['footer-bar']}>
          <div className={styles['socials']}>
            <a href="https://github.com/fawad526" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/fawad526" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://x.com/FawadBravo526" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <p className={styles['credit']}>
            Designed &amp; built by <span>Fawad Iqbal</span> &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
