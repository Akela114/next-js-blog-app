import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './bigArticleCard.module.scss'

interface IBigArticleCardProps {
  className?: string
  article: {
    link: string
    title: string
    date: string
    tag: string
    image: string
  }
  author?: {
    name: string
    avatar: string
  }
}

const BigArticleCard = ({
  article,
  author,
  className,
}: IBigArticleCardProps) => (
  <div className={classNames(styles.cardWrapper, [className])}>
    <div className={styles.cardImageWrapper}>
      <Image
        src={article.image}
        alt="Article Image"
        fill
        style={{ objectFit: 'cover' }}
        sizes="100%"
        priority
      />
    </div>
    <div className={styles.card}>
      <div className={styles.cardTag}>{article.tag}</div>
      <Link className={styles.cardTitle} href={article.link}>
        {article.title}
      </Link>
      <div className={styles.cardBottomSection}>
        {author && (
          <div className={styles.authorSection}>
            <Image
              src={author.avatar}
              alt="Author avatar"
              width={36}
              height={36}
              className={styles.authorAvatar}
            />
            <p className={styles.authorName}>{author.name}</p>
          </div>
        )}
        <p className={styles.cardDate}>{article.date}</p>
      </div>
    </div>
  </div>
)

export default BigArticleCard
