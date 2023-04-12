'use client'
import classNames from 'classnames'
import { useEffect } from 'react'

import ArticlesList, { ArticlesListWithSorting } from '@/features/articlesList'
import { authorUtils } from '@/entities/author'
import { ArticleCard } from '@/entities/article'
import { searchModel } from '@/entities/search'
import Button from '@/shared/components/button'
import { ARTICLES_INITIAL_LIMIT } from '@/shared/lib/constants'
import { useDebounce } from '@/shared/lib/hooks'
import { useAppSelector } from '@/shared/config/store/hooks'

import { useLimitedArticles } from './_lib/hooks'

import type { authorTypes } from '@/entities/author'
import type { articleTypes } from '@/entities/article'

interface IBlogPageClient {
  articles: articleTypes.IArticle[]
  authors: authorTypes.IArticleAuthor[]
}

const DEBOUNCE_DELAY = 100

const BlogPageClient = ({ articles, authors }: IBlogPageClient) => {
  const {
    allArticles,
    articlesLimit,
    handleIncreaseLimit,
    handleUpdateArticles,
  } = useLimitedArticles(ARTICLES_INITIAL_LIMIT, articles)

  const searchValue = useAppSelector(searchModel.selectors.value)
  const debouncedSearchValue = useDebounce(searchValue, DEBOUNCE_DELAY)

  useEffect(() => {
    handleUpdateArticles(debouncedSearchValue)
  }, [debouncedSearchValue, handleUpdateArticles])

  const [firstArticle, ...otherArticles] = allArticles

  if (!firstArticle) return null

  const firstArticleAuthor = authorUtils.findAuthorById(
    authors,
    firstArticle.authorId
  )

  const otherArticlesTransformed = otherArticles.map(article => {
    const author = authorUtils.findAuthorById(authors, article.authorId)

    return {
      article: { ...article, link: `/blog/${article.id}` },
      author: author && { ...author, link: `/authors/${author.id}` },
    }
  })

  const isButtonVisible = allArticles.length === articlesLimit

  return (
    <>
      <ArticleCard
        article={{
          ...firstArticle,
          link: `/blog/${firstArticle.id}`,
        }}
        author={
          firstArticleAuthor && {
            ...firstArticleAuthor,
            link: `/authors/${firstArticle.authorId}`,
          }
        }
        variant="big-without-card"
        className="mb-100"
      />
      <ArticlesListWithSorting
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
          clickHandler={handleIncreaseLimit}
        >
          Load More
        </Button>
      )}
    </>
  )
}

export default BlogPageClient
