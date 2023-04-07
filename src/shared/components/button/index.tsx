import styles from './button.module.scss'

interface IButtonProps {
  type?: 'button' | 'submit'
  children: React.ReactNode
  clickHandler?: () => void
}

const Button = ({ type = 'button', children, clickHandler }: IButtonProps) => (
  <button type={type} className={styles.button} onClick={clickHandler}>
    {children}
  </button>
)

export default Button
