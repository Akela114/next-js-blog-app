import ArticlesList from '@/features/articlesList'
import { authorAPI, authorUtils } from '@/entities/author'
import { ArticleCard, articleAPI } from '@/entities/article'
import AdPlaceholder from '@/shared/components/adPlaceholder'
import Button from '@/shared/components/button'
import { ARTICLES_INITIAL_LIMIT } from '@/shared/lib/constants'

import type { Metadata } from 'next'

import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Main Page',
  description: 'Application Main Page',
}

const MainPage = async () => {
  const [[firstArticle, ...otherArticles], authors] = await Promise.all([
    articleAPI.getArticles({ cache: 'force-cache' }, ARTICLES_INITIAL_LIMIT),
    authorAPI.getAuthors(),
  ])

  if (!firstArticle) return null

  const firstArticleAuthor = authorUtils.findAuthorById(
    authors,
    firstArticle.authorId
  )
  const otherArticlesTransformed = otherArticles.map(article => ({
    article: { ...article, link: `/blog/${article.id}` },
    author: authorUtils.findAuthorById(authors, article.authorId),
  }))

  return (
    <div className={styles.pageWrapper}>
      <ArticleCard
        article={{
          ...firstArticle,
          link: `/blog/${firstArticle.id}`,
        }}
        author={firstArticleAuthor}
        variant="big"
        className="mb-100"
      />
      <AdPlaceholder width="750px" height="100px" className="mb-80" />
      <ArticlesList items={otherArticlesTransformed} className="mb-32" />
      <Button className="mb-80" variant="transparent" link="/blog">
        View All Post
      </Button>
      <AdPlaceholder width="750px" height="100px" />
    </div>
  )
}

export default MainPage
