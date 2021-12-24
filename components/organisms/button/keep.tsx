import { FiBookmark } from 'react-icons/fi'

import Button from 'components/atoms/button'

type Props = {
  className?: string
  onClick: () => void
}

const KeepButton = ({ className = '', onClick }: Props) => (
  <Button className={`inline-flex text-sm ${className}`} onClick={onClick}>
    <FiBookmark />
    <span className="ml-2 tracking-wide">Keep</span>
  </Button>
)

export default KeepButton
