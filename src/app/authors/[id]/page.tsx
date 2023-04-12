import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { articleAPI } from '@/entities/article'
import { authorAPI } from '@/entities/author'
import { ARTICLES_INITIAL_LIMIT } from '@/shared/lib/constants'
import { ArticlesListWithSorting } from '@/features/articlesList'
import { AuthorCard } from '@/entities/author'

import styles from './page.module.scss'

interface IAuthorPageParams {
  params: {
    id: string
  }
}

const AuthorPage = async ({ params: { id } }: IAuthorPageParams) => {
  const [articles, author] = await Promise.all([
    articleAPI.getArticlesByAuthorId(
      id,
      { cache: 'no-store' },
      ARTICLES_INITIAL_LIMIT
    ),
    authorAPI.getAuthor(id),
  ])

  if (!author.id) {
    notFound()
  }

  const articlesTransformed = articles.map(article => ({
    article: { ...article, link: `/blog/${article.id}` },
  }))

  return (
    <div className={styles.pageWrapper}>
      <AuthorCard
        name={author.name}
        avatar={author.avatar}
        profession={author.profession}
        description={author.description}
        className="mb-48"
      />
      <ArticlesListWithSorting items={articlesTransformed} />
    </div>
  )
}

export const generateMetadata = async ({
  params: { id },
}: IAuthorPageParams): Promise<Metadata> => {
  const author = await authorAPI.getAuthor(id, { cache: 'no-store' })
  return { title: author.name, description: 'Application Author Page' }
}

export default AuthorPage
