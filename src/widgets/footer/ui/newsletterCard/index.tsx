import classNames from 'classnames'

import Button from '@/shared/components/button'
import Input from '@/shared/components/input'
import fontStyles from '@/shared/assets/fonts'

import styles from './newsletterCard.module.scss'

const NewsletterCard = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className={classNames(styles.card, fontStyles.workSans)}>
      <div className={styles.cardTopSection}>
        <p className={styles.cardTitle}>Weekly Newsletter</p>
        <p className={styles.cardDescription}>
          Get blog articles and offers via email
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles.cardForm}>
        <Input value="" placeholder="Your Email" />
        <Button>Subscribe</Button>
      </form>
    </div>
  )
}

export default NewsletterCard
