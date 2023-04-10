import classNames from 'classnames'

import { ArticleCard } from '@/entities/article'

import type { IArticleCardProps } from '@/entities/article'

import styles from './articlesList.module.scss'

type TItem = Omit<IArticleCardProps, 'variant'> & {
  article: {
    id: number
  }
}

interface IArticlesListProps {
  items: TItem[]
  className?: string
}

const ArticlesList = ({ items, className }: IArticlesListProps) => {
  const articleCards = items.map(({ article, author }) => {
    return (
      <li key={article.id}>
        <ArticleCard
          article={{
            ...article,
            link: article.link,
          }}
          author={author}
        />
      </li>
    )
  })

  return (
    <ul className={classNames(styles.listWrapper, [className])}>
      {articleCards}
    </ul>
  )
}

export default ArticlesList
