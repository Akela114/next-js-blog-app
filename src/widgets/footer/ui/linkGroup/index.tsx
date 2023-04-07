import Link from 'next/link'

import styles from './linkGroup.module.scss'

interface ILinkGroupProps {
  title: string
  links: {
    title: string
    to?: string
  }[]
}

const LinkGroup = ({ title, links }: ILinkGroupProps) => {
  const linkItems = links.map((linkItem, i) => (
    <li key={i}>
      {linkItem.to ? (
        <Link href={linkItem.to}>{linkItem.title}</Link>
      ) : (
        linkItem.title
      )}
    </li>
  ))

  return (
    <div className={styles.linkGroup}>
      <p className={styles.groupTitle}>{title}</p>
      <ul className={styles.linkList}>{linkItems}</ul>
    </div>
  )
}

export default LinkGroup
