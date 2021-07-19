import { IoIosArrowUp } from 'react-icons/io'
import { animateScroll } from 'react-scroll'
import Button from '../../atoms/button'

type Props = {
  className?: string
}

const MoveTopButton = ({ className = '' }: Props) => {
  const scrollToTop = () => animateScroll.scrollToTop()

  return (
    <Button
      className={`inline-flex text-sm shadow-xl ${className}`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp />
      <span className="ml-2 tracking-wide">Top</span>
    </Button>
  )
}

export default MoveTopButton
