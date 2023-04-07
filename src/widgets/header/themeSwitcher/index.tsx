import styles from './themeSwitcher.module.scss'

interface IThemeSwitcherProps {
  isSwitched: boolean
  switchHandler: () => void
}

const ThemeSwitcher = ({
  isSwitched: isChecked,
  switchHandler: changeHandler,
}: IThemeSwitcherProps) => (
  <label className={styles.label}>
    <input
      type="checkbox"
      className={styles.checkbox}
      checked={isChecked}
      onChange={changeHandler}
    />
    <span className={styles.switcher} />
  </label>
)

export default ThemeSwitcher
