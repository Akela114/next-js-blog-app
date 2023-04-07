import classNames from 'classnames'

import fontStyles from '@/shared/assets/fonts'
import LogoSVG from '@/shared/assets/icons/logo.svg'

import styles from './logo.module.scss'

interface ILogoProps {
  withCopyright?: boolean
}

const Logo = ({ withCopyright }: ILogoProps) => (
  <div className={styles.logo}>
    <LogoSVG className={styles.icon} />
    {withCopyright ? (
      <div className={styles.titleWithCopyright}>
        <p
          className={classNames(
            styles.title,
            styles.smallerFont,
            fontStyles.plusJakartaSans
          )}
        >
          Meta<span className="extra-bold">Blog</span>
        </p>
        <p>&copy; JS Template 2023. All Rights Reserved.</p>
      </div>
    ) : (
      <p className={classNames(styles.title, fontStyles.plusJakartaSans)}>
        Meta<span className="extra-bold">Blog</span>
      </p>
    )}
  </div>
)

export default Logo
