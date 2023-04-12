import classNames from 'classnames'
import Link from 'next/link'

import styles from './button.module.scss'

interface IButtonProps {
  type?: 'button' | 'submit'
  className?: string
  variant?: 'default' | 'transparent'
  size?: 'default' | 'small'
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>
  link?: string
  children: React.ReactNode
  clickHandler?: () => void
}

const Button = ({
  type = 'button',
  variant = 'default',
  className,
  size,
  Icon,
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
          [styles.small]: size === 'small',
        })}
        onClick={clickHandler}
        href={link}
      >
        {Icon && <Icon className={styles.buttonIcon} />}
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classNames(styles.button, [className], {
        [styles.transparent]: variant === 'transparent',
        [styles.small]: size === 'small',
      })}
      onClick={clickHandler}
    >
      {Icon && (
        <Icon
          className={classNames(styles.buttonIcon, {
            [styles.transparent]: variant === 'transparent',
          })}
        />
      )}
      {children}
    </button>
  )
}

export default Button
