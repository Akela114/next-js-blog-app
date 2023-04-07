import classNames from 'classnames'

import SearchSVG from '@/shared/assets/icons/search.svg'
import fontStyles from '@/shared/assets/fonts'

import styles from './searchBar.module.scss'

interface ISearchBarProps {
  value: string
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({ value, changeHandler }: ISearchBarProps) => (
  <div className={classNames(styles.searchWrapper, fontStyles.workSans)}>
    <input
      type="text"
      className={styles.searchInput}
      placeholder="Search"
      value={value}
      onChange={changeHandler}
      readOnly={!changeHandler}
    />
    <SearchSVG className={styles.inputIcon} />
  </div>
)

export default SearchBar
