import Link from 'next/link'

import styles from './navigation.module.scss'

const Navigation = () => (
  <nav>
    <ul className={styles.navigation}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
