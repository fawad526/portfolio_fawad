import styles from './footer_section.module.css';

export default function FooterSection() {
  return (
    <section className={ "profile-section" + " " + styles["contact"]}>
      <div>
        <h2 className={styles["contact-overline"]}>What's Next?</h2>
        <h2 className={styles["title"]}>Get In Touch <span></span></h2>
        <p>
          I&apos;m always open to exciting opportunities, collaborations, or just a friendly chat.
          Whether you have a question, a project idea, or want to discuss tech, feel free to reach out.
        </p>
        <a
          title="email"
          href="mailto:fawadiqbal274@gmail.com"
          className={styles["email-link"]}>
            Say Hello
        </a>
      </div>
    </section>
  )
}
