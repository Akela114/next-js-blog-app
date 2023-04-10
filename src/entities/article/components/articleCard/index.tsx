import BigArticleCard from './bigArticleCard'
import SmallArticleCard from './smallArticleCard'

export interface IArticleCardProps {
  variant?: 'big' | 'default'
  className?: string
  article: {
    link: string
    title: string
    date: string
    tag: string
    image: string
  }
  author?: {
    name: string
    avatar: string
  }
}

const ArticleCard = ({
  variant = 'default',
  ...otherProps
}: IArticleCardProps) => {
  if (variant === 'big') return <BigArticleCard {...otherProps} />

  return <SmallArticleCard {...otherProps} />
}

export default ArticleCard
