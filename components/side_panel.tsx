import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import styles from './side_panel.module.css';
import { useSectionState } from "../context/section_state_provider";
import full_pic from '../public/full_pic.jpg';
import {
  faEnvelope,
  faPhone,
  faNavicon,
  faClose,
  faLocationDot,
  faCircle,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

export default function SidePanel() {
  const { sectionState } = useSectionState();
  const [icon, setIcon] = useState(faNavicon);

  const handleNavIconClick = () => {
    setIcon(icon === faNavicon ? faClose : faNavicon);
  };

  return (
    <>
      <div className={styles["nav-btn"]}>
        <button title="Nav Menu Button" onClick={handleNavIconClick}>
          <FontAwesomeIcon icon={icon} size="2x" />
        </button>
      </div>
      <aside className={`${styles["side-panel"]} ${icon === faNavicon ? styles["hidden"] : ""}`}>
        <div className={styles["glow-orb"]} aria-hidden="true" />
        <div className={styles["glow-orb-2"]} aria-hidden="true" />

        <div className={styles["side-panel__inner"]}>
          <div className={styles["brand"]}>
            <span className={styles["brand-dot"]} />
            <span className={styles["brand-text"]}>FI<span>.</span>dev</span>
          </div>

          <div className={styles["profile-wrap"]}>
            <div className={styles["profile-ring"]}>
              <div className={styles["profile-image-container"]}>
                <Image
                  src={full_pic.src}
                  alt="Muhammad Fawad Iqbal"
                  layout="fill"
                  objectFit="cover"
                  className={styles["profile-image"]}
                  data-testid="profile_image"
                />
              </div>
              <div className={styles["status-badge"]} title="Available for opportunities">
                <FontAwesomeIcon icon={faCircle} className={styles["status-dot"]} />
                <span>Available</span>
              </div>
            </div>

            <h2 className={styles["name"]}>Fawad Iqbal</h2>
            <p className={styles["role"]} data-testid="profession">Full Stack Developer</p>
            <div className={styles["location"]}>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Islamabad, Pakistan</span>
            </div>
          </div>

          <div className={styles["divider"]} />

          <div className={styles["contact-block"]}>
            <a
              href="mailto:fawadiqbal274@gmail.com"
              className={styles["contact-row"]}
              data-testid="email"
            >
              <span className={styles["contact-icon"]}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <div className={styles["contact-text"]}>
                <span className={styles["contact-label"]}>Email</span>
                <span className={styles["contact-value"]}>fawadiqbal274@gmail.com</span>
              </div>
            </a>
            <a
              href="tel:+923709720033"
              className={styles["contact-row"]}
              data-testid="phone"
            >
              <span className={styles["contact-icon"]}>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <div className={styles["contact-text"]}>
                <span className={styles["contact-label"]}>Phone</span>
                <span className={styles["contact-value"]}>+92 370 9720033</span>
              </div>
            </a>
          </div>

          <div className={styles["divider"]} />

          <div className={styles["socials"]}>
            <a
              href="https://github.com/fawad526"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["social-link"]}
              data-testid="social-media-icon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/fawad526"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["social-link"]}
              data-testid="social-media-icon"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://x.com/FawadBravo526"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["social-link"]}
              data-testid="social-media-icon"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles["resume-btn"]}
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Resume</span>
          </a>
        </div>
      </aside>
    </>
  );
}
