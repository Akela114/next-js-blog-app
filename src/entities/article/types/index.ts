export interface IArticleSection {
  title?: string
  paragraphs: string[]
  comment?: string
  image?: string
}

export interface IArticle {
  id: number
  date: string
  title: string
  tag: string
  image: string
  authorId: number
  content: IArticleSection[]
}
