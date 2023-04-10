export interface IArticleAuthor {
  id: number
  name: string
  avatar: string
}

export interface IArticleAuthors {
  items: IArticleAuthor[]
  findById: (id: number) => IArticleAuthor | undefined
}
