import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';

interface SectionState {
  section_number: number;
  total_sections: number;
}

const useSectionStateController = () => {
  const [sectionState, setSectionState] = useState<SectionState>( { section_number: 0, total_sections: 0 } );
  const stateRef = useRef(sectionState);
  let main: HTMLElement | null = null;
  let sections: HTMLCollectionOf<HTMLElement>;

  useEffect(() => {
    return () => main?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (main) {
      // get current scroll position
      const scroll_position = main.scrollTop;
      // check if a section is visible
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const half_height = window.innerHeight / 2;
        const section_top = section.offsetTop - half_height;
        const section_bottom = (section_top + section.offsetHeight) - half_height;
        if (scroll_position >= section_top && (scroll_position - half_height) <= section_bottom) {
          stateRef.current = { ...stateRef, section_number: i, total_sections: sections.length };
          setSectionState({ section_number: i, total_sections: sections.length });
          break;
        }
      }
    }
  }

  const initSectionState = () => {
    // get main
    main = document.querySelector('main');
    // get all sections
    sections = document.getElementsByClassName('profile-section') as HTMLCollectionOf<HTMLElement>;

    setSectionState({ ...sectionState, total_sections: sections.length, section_number: 0 });

    main?.addEventListener('scroll', handleScroll);
  }
  return { sectionState, initSectionState };
}

const SectionStateContext = createContext<ReturnType<typeof useSectionStateController>>({ sectionState: { section_number: 0, total_sections: 0 }, initSectionState: () => {} });

export const SectionStateProvider = ({children} : {children: ReactNode}) => {
  const { sectionState, initSectionState } = useSectionStateController();
  return (
    <SectionStateContext.Provider value={{sectionState, initSectionState}}>
      {children}
    </SectionStateContext.Provider>
  );
}

export const useSectionState = () => useContext(SectionStateContext);
