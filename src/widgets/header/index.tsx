import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

import Logo from '@/shared/components/logo'
import SearchBar from '@/shared/components/searchBar'

import Navigation from './navigation'
import ThemeSwitcher from './themeSwitcher'

import styles from './header.module.scss'

interface IHeaderProps {
  isThemeSwitched: boolean
  themeSwitchHandler: () => void
  withSearchBar?: boolean
}

const Header = ({
  isThemeSwitched,
  themeSwitchHandler,
  withSearchBar,
}: IHeaderProps) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <div className={styles.headerActions}>
        <Navigation />
        <div className={styles.headerElements}>
          <AnimatePresence>
            {withSearchBar && (
              <motion.div
                initial={{ width: 0, marginRight: 0, opacity: 0 }}
                animate={{ width: '200px', marginRight: '40px', opacity: 1 }}
                exit={{ width: 0, marginRight: 0, opacity: 0 }}
                className={styles.searchBarWrapper}
              >
                <SearchBar value="" />
              </motion.div>
            )}
          </AnimatePresence>
          <ThemeSwitcher
            isSwitched={isThemeSwitched}
            switchHandler={themeSwitchHandler}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
