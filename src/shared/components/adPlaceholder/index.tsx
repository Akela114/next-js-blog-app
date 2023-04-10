import classNames from 'classnames'

import styles from './adPlaceholder.module.scss'

interface IAdPlaceholderProps {
  width: string
  height: string
  className?: string
}

const AdPlaceholder = ({ width, height, className }: IAdPlaceholderProps) => (
  <div
    style={{ maxWidth: width, height }}
    className={classNames(styles.placeholderCard, [className])}
  >
    <p className={styles.advertisementTitle}>Advertisement</p>
    <p className={styles.advertisementDescription}>You can place ads</p>
    <p>
      {Number.parseInt(width)}x{Number.parseInt(height)}
    </p>
  </div>
)

export default AdPlaceholder
