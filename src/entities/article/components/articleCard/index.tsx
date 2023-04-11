import BigArticleCard from './bigArticleCard'
import SmallArticleCard from './smallArticleCard'

export interface IArticleCardProps {
  variant?: 'big' | 'big-without-card' | 'default'
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
  if (variant === 'big' || variant === 'big-without-card')
    return <BigArticleCard withCard={variant === 'big'} {...otherProps} />

  return <SmallArticleCard {...otherProps} />
}

export default ArticleCard
