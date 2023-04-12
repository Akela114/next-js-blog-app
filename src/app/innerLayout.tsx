'use client'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

import Header from '@/widgets/header'
import Footer from '@/widgets/footer'
import { themeModel } from '@/entities/theme'
import fontStyles from '@/shared/assets/fonts'
import { useAppSelector, useAppDispatch } from '@/shared/config/store/hooks'

import styles from './innerLayout.module.scss'

interface IInnerLayoutProps {
  children: React.ReactNode
}

const InnerLayout = ({ children }: IInnerLayoutProps) => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(themeModel.selectors.value)

  const path = usePathname()
  const withSearchBar = path === '/blog'

  const handleThemeSwitch = () => {
    dispatch(themeModel.actions.switchThemeValue())
  }

  return (
    <div
      className={classNames(styles.app, fontStyles.workSans, {
        ['dark-theme']: theme === 'dark',
      })}
    >
      <div className={styles.appWithNoFooter}>
        <Header
          isThemeSwitched={theme === 'dark'}
          themeSwitchHandler={handleThemeSwitch}
          withSearchBar={withSearchBar}
          className="p-sticky"
        />
        <main className={styles.mainContent}>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default InnerLayout
