import { useSectionState } from '../context/section_state_provider';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import styles from './navigation_menu.module.css'

export default function NavigationMenu() {
  const { sectionState } = useSectionState();

  return (
    <div className={styles["navigation-menu"]}>
      <ul className={"menu" + " " + (sectionState.section_number % 2 === 0 ? "":"even-menu")}>
        {
          Array.from(Array(sectionState.total_sections).keys()).map(i => {
            return (
              <li key={i} className="menu-item" >
                <a href={`#section-${i + 1}`} title='section-link' className={sectionState.section_number === i ? 'active' : ''} />
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
