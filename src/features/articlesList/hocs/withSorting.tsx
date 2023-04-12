import ArticlesList from '../ui'
import { useItemsSorting } from '../lib/hooks'

import type { IArticlesListProps } from '../ui'

export const withSorting = (ComponentToWrap: typeof ArticlesList) => {
  const WrappedComponent = ({ items, className }: IArticlesListProps) => {
    const { sortedItems, handleTitleSorting, handleTagSorting } =
      useItemsSorting(items)

    return (
      <ComponentToWrap
        items={sortedItems}
        className={className}
        handleTitleSorting={handleTitleSorting}
        handleTagSorting={handleTagSorting}
      />
    )
  }
  return WrappedComponent
}

export default withSorting
