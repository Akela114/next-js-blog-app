import { useState, useCallback } from 'react'

import { articleAPI } from '@/entities/article'

import type { articleTypes } from '@/entities/article'

export const useLimitedArticles = (
  initialLimit: number,
  initialArticles: articleTypes.IArticle[]
) => {
  const [articlesLimit, setArticlesLimit] = useState(initialLimit)
  const [allArticles, setAllArticles] = useState(initialArticles)

  const handleLoadArticles = useCallback(
    async (searchValue?: string) => {
      const articles = await articleAPI.getArticles(
        undefined,
        articlesLimit + initialLimit,
        searchValue
      )

      setAllArticles(articles)

      if (articles.length >= articlesLimit + initialLimit) {
        setArticlesLimit(prevLimit => prevLimit + initialLimit)
      }
    },
    [articlesLimit, initialLimit]
  )

  const handleUpdateArticles = useCallback(
    async (searchValue?: string) => {
      const articles = await articleAPI.getArticles(
        undefined,
        articlesLimit,
        searchValue
      )

      setAllArticles(articles)
    },
    [articlesLimit]
  )

  return {
    allArticles,
    articlesLimit,
    handleLoadArticles,
    handleUpdateArticles,
  }
}
