import type { IArticleCardProps } from '@/entities/article'

export type TItem = Omit<IArticleCardProps, 'variant'> & {
  article: {
    id: number
  }
}
