'use client'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { Provider } from 'react-redux'

import Header from '@/widgets/header'
import Footer from '@/widgets/footer'
import fontStyles from '@/shared/assets/fonts'
import store from '@/shared/config/store/store'
import { saveToStorage, getFromStorage } from '@/shared/lib/utilities'

import styles from './layout.module.scss'
import './globals.scss'

interface IMainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  const [isDarkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    setDarkTheme(getFromStorage('theme') === 'dark')
  }, [])

  const path = usePathname()
  const withSearchBar = path === '/blog'

  const handleThemeSwitch = () => {
    saveToStorage({ theme: isDarkTheme ? 'light' : 'dark' })
    setDarkTheme(prev => !prev)
  }

  return (
    <html lang="en">
      <body className={classNames({ ['dark-theme']: isDarkTheme })}>
        <div className={classNames(styles.app, fontStyles.workSans)}>
          <Provider store={store}>
            <div className={styles.appWithNoFooter}>
              <Header
                isThemeSwitched={isDarkTheme}
                themeSwitchHandler={handleThemeSwitch}
                withSearchBar={withSearchBar}
              />
              <main className={styles.mainContent}>{children}</main>
            </div>
            <Footer />
          </Provider>
        </div>
      </body>
    </html>
  )
}

export default MainLayout
