import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './navigation.module.scss'

const Navigation = () => {
  const path = usePathname()

  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <Link
            href="/"
            className={classNames(styles.link, {
              [styles.active]: path === '/',
            })}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={classNames(styles.link, {
              [styles.active]: path === '/blog',
            })}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
