import styles from './copyrightDocsList.module.scss'

const CopyrightDocsList = () => (
  <ul className={styles.copyrightDocsList}>
    <li className={styles.copyrightDoc}>Terms of Use</li>
    <li className={styles.copyrightDoc}>Privacy</li>
    <li className={styles.copyrightDoc}>Cookie Policy</li>
  </ul>
)

export default CopyrightDocsList
