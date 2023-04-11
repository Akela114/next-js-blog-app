import { authorAPI } from '@/entities/author'
import { articleAPI } from '@/entities/article'
import AdPlaceholder from '@/shared/components/adPlaceholder'
import { ARTICLES_INITIAL_LIMIT } from '@/shared/lib/constants'

import type { Metadata } from 'next'

import BlogPageClient from './pageClient'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Blog Page',
  description: 'Application Blog Page',
}

const BlogPage = async () => {
  const [articles, authors] = await Promise.all([
    articleAPI.getArticles({ cache: 'no-store' }, ARTICLES_INITIAL_LIMIT),
    authorAPI.getAuthors(),
  ])

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Blog</h1>
        <p>List of articles</p>
      </div>
      <BlogPageClient articles={articles} authors={authors} />
      <AdPlaceholder width="750px" height="100px" />
    </div>
  )
}

export default BlogPage
