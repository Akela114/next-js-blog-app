import type { IArticleAuthor } from '../types'

export const getAuthors = async () => {
  const authorsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/authors`
  )
  const authors: IArticleAuthor[] = await authorsRes.json()

  return authors
}
