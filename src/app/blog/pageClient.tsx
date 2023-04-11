'use client'
import classNames from 'classnames'
import { useEffect } from 'react'

import ArticlesList from '@/features/articlesList'
import { authorUtils } from '@/entities/author'
import { ArticleCard } from '@/entities/article'
import { searchModel } from '@/entities/search'
import Button from '@/shared/components/button'
import { ARTICLES_INITIAL_LIMIT } from '@/shared/lib/constants'
import { useAppSelector } from '@/shared/config/store/hooks'

import { useLimitedArticles } from './_lib/hooks'

import type { authorTypes } from '@/entities/author'
import type { articleTypes } from '@/entities/article'

interface IBlogPageClient {
  articles: articleTypes.IArticle[]
  authors: authorTypes.IArticleAuthor[]
}

const BlogPageClient = ({ articles, authors }: IBlogPageClient) => {
  const {
    allArticles,
    articlesLimit,
    handleLoadArticles,
    handleUpdateArticles,
  } = useLimitedArticles(ARTICLES_INITIAL_LIMIT, articles)

  const searchValue = useAppSelector(searchModel.selectors.value)

  useEffect(() => {
    handleUpdateArticles(searchValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  const [firstArticle, ...otherArticles] = allArticles

  if (!firstArticle) return null

  const firstArticleAuthor = authorUtils.findAuthorById(
    authors,
    firstArticle.authorId
  )
  const otherArticlesTransformed = otherArticles.map(article => ({
    article: { ...article, link: `/blog/${article.id}` },
    author: authorUtils.findAuthorById(authors, article.authorId),
  }))

  const isButtonVisible = allArticles.length === articlesLimit

  return (
    <>
      <ArticleCard
        article={{
          ...firstArticle,
          link: `/blog/${firstArticle.id}`,
        }}
        author={firstArticleAuthor}
        variant="big-without-card"
        className="mb-100"
      />
      <ArticlesList
        items={otherArticlesTransformed}
        className={classNames({
          'mb-32': isButtonVisible,
          'mb-80': !isButtonVisible,
        })}
      />
      {isButtonVisible && (
        <Button
          className="mb-80"
          variant="transparent"
          clickHandler={() => handleLoadArticles(searchValue)}
        >
          Load More
        </Button>
      )}
    </>
  )
}

export default BlogPageClient
