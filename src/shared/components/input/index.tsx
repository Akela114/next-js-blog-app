import MailSVG from '@/shared/assets/icons/mail.svg'

import styles from './input.module.scss'

interface IInputProps {
  type?: 'email'
  value: string
  placeholder: string
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SVGComponents = {
  email: <MailSVG className={styles.inputIcon} />,
}

const Input = ({
  type = 'email',
  value,
  placeholder,
  changeHandler,
}: IInputProps) => (
  <div className={styles.inputWrapper}>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={changeHandler}
      className={styles.input}
      readOnly={!changeHandler}
    />
    {SVGComponents[type]}
  </div>
)

export default Input
