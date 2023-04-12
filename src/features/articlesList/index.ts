'use client'

import ArticlesList from './ui'
import withSorting from './hocs/withSorting'

const ArticlesListWithSorting = withSorting(ArticlesList)

export { ArticlesListWithSorting }
export default ArticlesList
