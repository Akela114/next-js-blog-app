import classNames from 'classnames'
import Image from 'next/image'

import fontStyles from '@/shared/assets/fonts'
import CommentCard from '@/shared/components/commentCard'

import type { articleTypes } from '@/entities/article'

import styles from './articleSection.module.scss'

interface IArticleSectionProps {
  section: articleTypes.IArticleSection
  additionalElement?: React.ReactNode
}

const ArticleSection = ({
  section,
  additionalElement,
}: IArticleSectionProps) => {
  const paragraphs = section.paragraphs.map((paragraph, i) => (
    <p
      key={i}
      className={classNames(fontStyles.sourceSerifPro, styles.paragraph)}
    >
      {paragraph}
    </p>
  ))

  return (
    <div className={styles.outerSectionWrapper}>
      <div className={styles.sectionTitle}>{section.title}</div>
      <div className={styles.innerSectionWrapper}>
        <div className={styles.paragraphsWrapper}>{paragraphs}</div>
        {section.comment && <CommentCard content={section.comment} />}
        {section.image && (
          <div className={styles.imageWrapper}>
            <Image
              src={section.image}
              alt="Article Image"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100%"
              priority
            />
          </div>
        )}
      </div>
      <div className={styles.articleAdditionalElementWrapper}>
        {additionalElement}
      </div>
    </div>
  )
}

export default ArticleSection
