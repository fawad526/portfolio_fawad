import Image from "next/image";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the brands library to get access to the brands
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import { useState } from "react";
import styles from './side_panel.module.css';
import { useSectionState } from "../context/section_state_provider";
const Flip = require('react-reveal/Flip');
import full_pic from '../public/full_pic.jpg';
import path from 'path';
import { faEnvelope, faPhone, faNavicon, faClose } from "@fortawesome/free-solid-svg-icons";

const Jello = require('react-reveal/Jello');

export default function SidePanel() {
  const { sectionState } = useSectionState();

  const [icon, setIcon] = useState(faNavicon);

  const handleNavIconClick = () => {
    if (icon === faNavicon) {
      setIcon(faClose);
    } else {
      setIcon(faNavicon);
    }
  }
  return (
    <>
      <div className={styles["nav-btn"]}>
        <button title="Nav Menu Button" onClick={handleNavIconClick}>
          <FontAwesomeIcon icon={icon} size="3x"/>
        </button>
      </div>
      <div className={styles["side-panel"] + " " + (icon === faNavicon ? styles["hidden"] : "")}>
        <div className={styles["side-panel__header"]}>
          <div className={styles["side-panel__profile-image"]}>
            {/* <div className={styles["age"]}>
              <div className={styles["years"]}>22</div>
              <Jello><div className={styles["years-string"]}>&nbsp; Years 9 months</div></Jello>
              </div>
            <div className={styles["hiring-status"]}>

              <div className={styles["status-short"]}>
                {seedData?.user?.hireable ? "A" : "O"}
              </div>
              <Jello>
                <div className={styles['status-complete']}>
                  {seedData?.user?.hireable ? "ctively Looking" : "pen For Opportunity"}
                </div>
              </Jello>
            </div> */}
            <Flip left opposite cascade when={sectionState.section_number===0} duration={500} delay={1000}>
              <Image
                src={full_pic.src}
                alt="profile_image_alternate"
                layout="fill"
                objectFit="cover"
                className={styles["side-panel_profile-image"]}
                data-testid="profile_image_alternate"
              />
            </Flip>
            <Flip left opposite cascade when={sectionState.section_number>0} duration={500} delay={1000}>
              <Image
                src={full_pic.src}
                alt="profile_image"
                layout="fill"
                objectFit="cover"
                className={styles["side-panel_profile-image"]}
                data-testid="profile_image"
              />
            </Flip>
          </div>
          <div className={styles["side-panel__header-subtitle"]}>
            <h3 data-testid="profession">Full Stack Developer</h3>
            <h4>Islamabad, Pakistan</h4>
          </div>
          <div className={styles["side-panel__header-social"]}>
            <a href="https://github.com/fawad526" title="GitHub Link" target="_blank" rel="noopener">
              <FontAwesomeIcon
                icon={faGithub}
                data-testid="social-media-icon"
                size="2x"
              />
            </a>
            <a href="https://www.linkedin.com/in/fawad526" title="LinkedIn Link" target="_blank" rel="noopener">
              <FontAwesomeIcon
                icon={faLinkedin}
                data-testid="social-media-icon"
                size="2x"
              />
            </a>
            <a href="https://x.com/FawadBravo526" title="Twitter Link" target="_blank" rel="noopener">
              <FontAwesomeIcon
                icon={faTwitter}
                data-testid="social-media-icon"
                size="2x"
              />
            </a>
          </div>
        </div>
        <div className={styles["side-panel__body"]}>
          <div className={styles['contact-details']}>
            <div className={styles["side-panel__body-item"]}>
              <div className={styles["side-panel__body-item-title"] + " " + styles['icon']}>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </div>
              <div className={styles["side-panel__body-item-content"]}>
                <p>
                  <a href="mailto:fawadiqbal274@gmail.com" data-testid="email">fawadiqbal274@gmail.com</a>
                </p>
              </div>
            </div>
            <div className={styles["side-panel__body-item"]}>
              <div className={styles["side-panel__body-item-title"] + " " + styles['icon']}>
                <FontAwesomeIcon icon={faPhone} size="2x" />
              </div>
              <div className={styles["side-panel__body-item-content"]}>
                <p>
                  <a href="tel:+923709720033" data-testid="phone">+92 3709720033</a>
                </p>
              </div>
            </div>
          </div>
          {/* You can add a static highlight or message here if needed */}
        </div>
        <div className={styles["side-panel__footer"]}>
          <div className={styles["side-panel__footer-item"]}>
            <a href="https://github.com/fawad526" title="GitHub Profile" target="_blank" rel="noopener">
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );

}
