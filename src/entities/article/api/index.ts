import type { IArticle } from '../types'

interface IGetArticlesOptions {
  cache?: 'force-cache' | 'no-store'
  next?: {
    revalidate: number
  }
}

export const getArticles = async (
  options?: IGetArticlesOptions,
  limit?: number,
  searchValue?: string
) => {
  const articlesRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?_sort=title,tag${
      limit ? `&_limit=${limit}` : ''
    }${searchValue ? `&title_like=${searchValue}` : ''}`,
    options
  )
  const articles: IArticle[] = await articlesRes.json()

  return articles
}

export const getArticleIds = async () => {
  const articlesRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles`
  )
  const articles: IArticle[] = await articlesRes.json()
  const articlesIds = articles.map(article => ({ id: article.id.toString() }))

  return articlesIds
}

export const getArticle = async (id: string, options?: IGetArticlesOptions) => {
  const articleRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles/${id}`,
    options
  )
  const article: IArticle = await articleRes.json()

  return article
}
