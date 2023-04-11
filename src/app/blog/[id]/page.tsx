import { notFound } from 'next/navigation'
import Image from 'next/image'

import { articleAPI } from '@/entities/article'
import { authorAPI, authorUtils } from '@/entities/author'
import AdPlaceholder from '@/shared/components/adPlaceholder'

import type { Metadata } from 'next'

import ArticlePageHeader from './_ui/pageHeader'
import ArticleSection from './_ui/articleSection'
import styles from './page.module.scss'

interface IArticlePageParams {
  params: {
    id: string
  }
}

const ArticlePage = async ({ params: { id } }: IArticlePageParams) => {
  const [article, authors] = await Promise.all([
    articleAPI.getArticle(id, { cache: 'no-store' }),
    authorAPI.getAuthors(),
  ])

  if (!article.id) {
    notFound()
  }

  const articleAuthor = authorUtils.findAuthorById(authors, article.authorId)

  const articleSections = article.content.map((section, i) => {
    return (
      <ArticleSection
        section={section}
        key={i}
        additionalElement={
          i === 2 && <AdPlaceholder width="750px" height="100px" />
        }
      />
    )
  })

  return (
    <div className={styles.pageWrapper}>
      <ArticlePageHeader article={article} author={articleAuthor} />
      <div className={styles.imageWrapper}>
        <Image
          src={article.image}
          alt="Article Image"
          fill
          style={{ objectFit: 'cover' }}
          sizes="100%"
          priority
        />
      </div>
      <div className={styles.sectionsWrapper}>{articleSections}</div>
    </div>
  )
}

export const generateMetadata = async ({
  params: { id },
}: IArticlePageParams): Promise<Metadata> => {
  const article = await articleAPI.getArticle(id, { cache: 'no-store' })
  return { title: article.title, description: 'Application Article Page' }
}

export default ArticlePage
