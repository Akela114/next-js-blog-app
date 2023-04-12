import classNames from 'classnames'

import { ArticleCard } from '@/entities/article'

import SortingBlock from './sortingBlock'
import styles from './articlesList.module.scss'

import type { TItem } from '../types'

export interface IArticlesListProps {
  items: TItem[]
  className?: string
  handleTitleSorting?: () => void
  handleTagSorting?: () => void
}

const ArticlesList = ({
  items,
  className,
  handleTitleSorting,
  handleTagSorting,
}: IArticlesListProps) => {
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
    <div className={styles.elementWrapper}>
      {handleTitleSorting && handleTagSorting && (
        <SortingBlock
          handleTagSorting={handleTagSorting}
          handleTitleSorting={handleTitleSorting}
        />
      )}
      <ul className={classNames(styles.listWrapper, [className])}>
        {articleCards}
      </ul>
    </div>
  )
}

export default ArticlesList
