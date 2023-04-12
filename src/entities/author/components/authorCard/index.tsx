import classNames from 'classnames'
import Image from 'next/image'

import styles from './authorCard.module.scss'

interface IAuthorCardProps {
  name: string
  avatar: string
  profession: string
  description: string
  className?: string
}

const AuthorCard = ({
  name,
  avatar,
  profession,
  description,
  className,
}: IAuthorCardProps) => (
  <div className={classNames(styles.authorCardWrapper, [className])}>
    <div className={styles.authorCardContent}>
      <div className={styles.authorCarHeader}>
        <div className={styles.authorAvatarWrapper}>
          <Image
            src={avatar}
            alt="Author Avatar"
            fill
            style={{ objectFit: 'cover' }}
            sizes="100%"
          />
        </div>
        <div>
          <div className={styles.authorName}>{name}</div>
          <div className={styles.authorProfession}>{profession}</div>
        </div>
      </div>
      <div className={styles.authorDescription}>{description}</div>
    </div>
  </div>
)

export default AuthorCard
