import { IArticleAuthor } from '../../types'

export const findAuthorById = (authors: IArticleAuthor[], id: number) =>
  authors.find(author => author.id === id)
