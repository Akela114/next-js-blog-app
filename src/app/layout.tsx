'use client'
import { useState } from 'react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

import Header from '@/widgets/header'
import Footer from '@/widgets/footer'
import fontStyles from '@/shared/assets/fonts'

import styles from './layout.module.scss'
import './globals.scss'

interface IMainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  const [isDarkTheme, setDarkTheme] = useState(false)

  const path = usePathname()
  const withSearchBar = path === '/blog'

  return (
    <html lang="en">
      <body className={classNames({ ['dark-theme']: isDarkTheme })}>
        <div className={classNames(styles.app, fontStyles.workSans)}>
          <div className={styles.appWithNoFooter}>
            <Header
              isThemeSwitched={isDarkTheme}
              themeSwitchHandler={() => setDarkTheme(prev => !prev)}
              withSearchBar={withSearchBar}
            />
            <main className={styles.mainContent}>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default MainLayout
