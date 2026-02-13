import Head from 'next/head';
import styles from '@/pages/index.module.css';
import SidePanel from '@/components/side_panel';
import FirstSection from '@/components/homepage/first_section';
import SecondSection from '@/components/homepage/second_section';
import { ThirdSection } from '@/components/homepage/third_section';
import WorkExperienceSection from '@/components/homepage/work_experience_section';
import NavigationMenu from '@/components/navigation_menu';
import FooterSection from '@/components/homepage/footer_section';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Muhammad Fawad Iqbal</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <div className={styles['main-body']}>
        <SidePanel />
        <NavigationMenu />
        <main className={styles.main}>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <WorkExperienceSection />
          <FooterSection />
        </main>
      </div>
    </div>
  );
}
