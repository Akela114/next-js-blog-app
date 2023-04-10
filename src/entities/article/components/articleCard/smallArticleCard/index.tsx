import Image from 'next/image'
import Link from 'next/link'

import styles from './smallArticleCard.module.scss'

interface ISmallArticleCardProps {
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

const SmallArticleCard = ({ article, author }: ISmallArticleCardProps) => (
  <div className={styles.card}>
    <div className={styles.cardImageWrapper}>
      <Image
        src={article.image}
        alt="Article Image"
        fill
        sizes="100%"
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
    <div className={styles.cardContent}>
      <div className={styles.cardTopSection}>
        <div className={styles.cardTag}>{article.tag}</div>
        <Link className={styles.cardTitle} href={article.link}>
          {article.title}
        </Link>
      </div>
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

export default SmallArticleCard
