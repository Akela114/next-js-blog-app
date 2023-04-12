import Button from '@/shared/components/button'
import RepeatSVG from '@/shared/assets/icons/repeat.svg'

import styles from './sortingBlock.module.scss'

interface ISortingBlockProps {
  handleTitleSorting: () => void
  handleTagSorting: () => void
}

const SortingBlock = ({
  handleTitleSorting,
  handleTagSorting,
}: ISortingBlockProps) => (
  <div className={styles.actionsWrapper}>
    <Button
      variant="transparent"
      size="small"
      Icon={RepeatSVG}
      clickHandler={handleTitleSorting}
    >
      Sort by Title
    </Button>
    <Button
      variant="transparent"
      size="small"
      Icon={RepeatSVG}
      clickHandler={handleTagSorting}
    >
      Sort by Tag
    </Button>
  </div>
)

export default SortingBlock
