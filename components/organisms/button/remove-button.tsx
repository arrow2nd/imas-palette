import { MdRemoveCircleOutline } from 'react-icons/md'
import { Props } from './props'
import Button from '../../atoms/button'

const RemoveButton = ({ className = '' }: Props) => (
  <Button className={`inline-flex text-sm ${className}`}>
    <MdRemoveCircleOutline />
    <span className="ml-2 tracking-wide">Remove</span>
  </Button>
)

export default RemoveButton
