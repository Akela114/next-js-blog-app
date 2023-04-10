import api from '@/shared/config/api'

import type { IArticle } from '../types'

export const getArticles = async (limit?: number, page?: number) => {
  const articlesRes = await api.get(
    `/articles${limit && page ? `?_limit=${limit}&_page=${page}` : ''}`
  )
  const articles: IArticle[] = articlesRes.data

  return articles
}
