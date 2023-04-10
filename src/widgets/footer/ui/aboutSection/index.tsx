import styles from './aboutSection.module.scss'

const AboutSection = () => (
  <div>
    <header className={styles.aboutTitle}>About</header>
    <p className={styles.aboutContent}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam
    </p>
    <footer>
      <ul>
        <li className={styles.aboutItem}>
          <span className={styles.aboutItemName}>Email :</span>{' '}
          info@jstemplate.net
        </li>
        <li className={styles.aboutItem}>
          <span className={styles.aboutItemName}>Phone :</span> 880 123 456 789
        </li>
      </ul>
    </footer>
  </div>
)

export default AboutSection
