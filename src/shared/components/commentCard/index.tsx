import classNames from 'classnames'

import fontStyles from '@/shared/assets/fonts'

import styles from './commentCard.module.scss'

interface ICommentCardProps {
  content: string
}

const CommentCard = ({ content }: ICommentCardProps) => (
  <div className={classNames(styles.commentCard, fontStyles.sourceSerifPro)}>
    &ldquo; {content} &rdquo;
  </div>
)

export default CommentCard
