import ArticlesList from '@/features/articlesList'
import { authorAPI } from '@/entities/author'
import { ArticleCard, articleAPI } from '@/entities/article'
import AdPlaceholder from '@/shared/components/adPlaceholder'
import Button from '@/shared/components/button'

import styles from './page.module.scss'

const MainPage = async () => {
  const [[firstArticle, ...otherArticles], authors] = await Promise.all([
    articleAPI.getArticles(10, 1),
    authorAPI.getAuthors(),
  ])

  if (!firstArticle) return null

  const firstArticleAuthor = authors.findById(firstArticle.authorId)
  const otherArticlesTransformed = otherArticles.map(article => ({
    article: { ...article, link: `/blog/post-${article.id}` },
    author: authors.findById(article.authorId),
  }))

  return (
    <div className={styles.pageWrapper}>
      <ArticleCard
        article={{
          ...firstArticle,
          link: `/blog/post-${firstArticle.id}`,
        }}
        author={firstArticleAuthor}
        variant="big"
        className="mb-100"
      />
      <AdPlaceholder width="750px" height="100px" className="mb-80" />
      <ArticlesList items={otherArticlesTransformed} className="mb-32" />
      <Button className="mb-80" variant="transparent" link="/blog">
        View All Articles
      </Button>
      <AdPlaceholder width="750px" height="100px" />
    </div>
  )
}

export default MainPage
