import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './bigArticleCard.module.scss'

interface IBigArticleCardProps {
  className?: string
  withCard?: boolean
  article: {
    link: string
    title: string
    date: string
    tag: string
    image: string
  }
  author?: {
    link: string
    name: string
    avatar: string
  }
}

const BigArticleCard = ({
  article,
  author,
  className,
  withCard,
}: IBigArticleCardProps) => {
  if (withCard) {
    return (
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
                <Link className={styles.authorName} href={author.link}>
                  {author.name}
                </Link>
              </div>
            )}
            <p className={styles.cardDate}>{article.date}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={classNames(styles.cardWrapper, styles.withoutCard, [
        className,
      ])}
    >
      <Image
        src={article.image}
        alt="Article Image"
        fill
        style={{ objectFit: 'cover' }}
        sizes="100%"
        priority
      />
      <div className={styles.withoutCardContent}>
        <div className={styles.cardTag}>{article.tag}</div>
        <Link
          className={classNames(styles.cardTitle, styles.withoutCard)}
          href={article.link}
        >
          {article.title}
        </Link>
        <div
          className={classNames(styles.cardBottomSection, styles.withoutCard)}
        >
          {author && (
            <div className={styles.authorSection}>
              <Image
                src={author.avatar}
                alt="Author avatar"
                width={36}
                height={36}
                className={styles.authorAvatar}
              />
              <p className={classNames(styles.authorName, styles.withoutCard)}>
                {author.name}
              </p>
            </div>
          )}
          <p className={classNames(styles.cardDate, styles.withoutCard)}>
            {article.date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BigArticleCard
