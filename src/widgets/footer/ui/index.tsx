import classNames from 'classnames'

import Logo from '@/shared/components/logo'
import fontStyles from '@/shared/assets/fonts'

import AboutSection from './aboutSection'
import LinkGroup from './linkGroup'
import NewsletterCard from './newsletterCard'
import CopyrightDocsList from './copyrightsDocsList'
import { quickLinks, categoryLinks } from '../lib'

import styles from './footer.module.scss'

const Footer = () => (
  <footer className={classNames(styles.footer, fontStyles.plusJakartaSans)}>
    <div className={styles.footerContent}>
      <div className={styles.infoSection}>
        <div className={styles.infoTextSection}>
          <AboutSection />
          <div className={styles.linkGroups}>
            <LinkGroup title={quickLinks.title} links={quickLinks.links} />
            <LinkGroup
              title={categoryLinks.title}
              links={categoryLinks.links}
            />
          </div>
        </div>
        <NewsletterCard />
      </div>
      <div className={styles.copyrightSection}>
        <Logo withCopyright />
        <CopyrightDocsList />
      </div>
    </div>
  </footer>
)

export default Footer
