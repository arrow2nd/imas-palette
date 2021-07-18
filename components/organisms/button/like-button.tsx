import { FiBookmark } from 'react-icons/fi'
import { Props } from './props'
import Button from '../../atoms/button'

const LikeButton = ({ className = '' }: Props) => (
  <Button className={`inline-flex ${className}`}>
    <FiBookmark />
    <span className="ml-2 tracking-wide">Keep</span>
  </Button>
)

export default LikeButton
