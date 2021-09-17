import { MdRemoveCircleOutline } from 'react-icons/md'
import Button from '../../atoms/button'

type Props = {
  className?: string
  onClick: () => void
}

const RemoveButton = ({ className = '', onClick }: Props) => (
  <Button className={`inline-flex text-sm ${className}`} onClick={onClick}>
    <MdRemoveCircleOutline />
    <span className="ml-2 tracking-wide">Remove</span>
  </Button>
)

export default RemoveButton
