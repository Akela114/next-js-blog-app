import type { IArticleAuthor } from '../types'

interface IGetAuthorsOptions {
  cache?: 'force-cache' | 'no-store'
  next?: {
    revalidate: number
  }
}

export const getAuthors = async () => {
  const authorsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/authors`
  )
  const authors: IArticleAuthor[] = await authorsRes.json()

  return authors
}

export const getAuthor = async (id: string, options?: IGetAuthorsOptions) => {
  const authorRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/authors/${id}`,
    options
  )
  const authors: IArticleAuthor = await authorRes.json()

  return authors
}
