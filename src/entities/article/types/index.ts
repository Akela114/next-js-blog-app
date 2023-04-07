export interface IArticleSection {
  title: string
  paragraphs: string[]
  comment?: string
  image?: string
}

export interface IArticle {
  title: string
  tag: string
  image: string
  author: {
    name: string
    avatar: string
  }
  content: IArticleSection[]
}
