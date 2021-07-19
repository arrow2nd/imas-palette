import { FiBookmark } from 'react-icons/fi'
import { Props } from './props'
import Button from '../../atoms/button'

const KeepButton = ({ className = '', onClick }: Props) => (
  <Button className={`inline-flex text-sm ${className}`} onClick={onClick}>
    <FiBookmark />
    <span className="ml-2 tracking-wide">Keep</span>
  </Button>
)

export default KeepButton
