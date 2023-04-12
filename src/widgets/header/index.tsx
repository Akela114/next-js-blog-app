import classNames from 'classnames'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

import { searchModel } from '@/entities/search'
import Logo from '@/shared/components/logo'
import SearchBar from '@/shared/components/searchBar'
import { useAppSelector, useAppDispatch } from '@/shared/config/store/hooks'

import Navigation from './navigation'
import ThemeSwitcher from './themeSwitcher'

import styles from './header.module.scss'

interface IHeaderProps {
  isThemeSwitched: boolean
  themeSwitchHandler: () => void
  withSearchBar?: boolean
  className?: string
}

const Header = ({
  isThemeSwitched,
  themeSwitchHandler,
  withSearchBar,
  className,
}: IHeaderProps) => {
  const dispatch = useAppDispatch()
  const searchValue = useAppSelector(searchModel.selectors.value)

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchModel.actions.updateSearchValue(e.target.value))
  }

  return (
    <header className={classNames(styles.header, [className])}>
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
                <SearchBar
                  value={searchValue}
                  changeHandler={handleSearchValueChange}
                />
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
