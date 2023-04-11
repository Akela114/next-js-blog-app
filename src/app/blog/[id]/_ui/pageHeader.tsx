import Image from 'next/image'

import styles from './articlePageHeader.module.scss'

interface IArticlePageHeaderProps {
  article: {
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

const ArticlePageHeader = ({ article, author }: IArticlePageHeaderProps) => (
  <div className={styles.articleHeader}>
    <div className={styles.articleTag}>{article.tag}</div>
    <p className={styles.articleTitle}>{article.title}</p>
    <div className={styles.articleBottomSection}>
      {author && (
        <div className={styles.authorSection}>
          <Image
            src={author.avatar}
            alt="Author avatar"
            width={28}
            height={28}
            className={styles.authorAvatar}
          />
          <p className={styles.authorName}>{author.name}</p>
        </div>
      )}
      <p className={styles.articleDate}>{article.date}</p>
    </div>
  </div>
)

export default ArticlePageHeader
