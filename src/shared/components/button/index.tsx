import classNames from 'classnames'
import Link from 'next/link'

import styles from './button.module.scss'

interface IButtonProps {
  type?: 'button' | 'submit'
  className?: string
  variant?: 'default' | 'transparent'
  link?: string
  children: React.ReactNode
  clickHandler?: () => void
}

const Button = ({
  type = 'button',
  variant = 'default',
  className,
  link,
  children,
  clickHandler,
}: IButtonProps) => {
  if (link) {
    return (
      <Link
        type={type}
        className={classNames(styles.button, [className], {
          [styles.transparent]: variant === 'transparent',
        })}
        onClick={clickHandler}
        href={link}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classNames(styles.button, [className], {
        [styles.transparent]: variant === 'transparent',
      })}
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}

export default Button
